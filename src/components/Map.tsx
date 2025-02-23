import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import airports from '../assets/airports.json'
import parks from '../assets/parks.json'
import africa from '../assets/AF.json'
import asia from '../assets/AS.json'
import europe from '../assets/EU.json'
import northAmerica from '../assets/NA.json'
import southAmerica from '../assets/SA.json'
// import { bbox, buffer, center, points } from "@turf/turf";

const pointLayers = {
  'airports': {
    data: airports,
    icon: 'airport',
    color: '#0377dd'
  },
  'parks': {
    data: parks,
    icon: 'park-alt1',
    color: '#16983f'
  },
};

const icons = {
  'airports': {
    data: airports,
    icon: 'airport',
    color: '#0377dd'
  },
  'parks': {
    data: parks,
    icon: 'park-alt1',
    color: '#16983f'
  },
  'places': {
    icon: 'marker',
    color: '#ea4336'
  }
}

const regionLayers = {
  'northAmerica': {
    data: northAmerica,
  },
  'southAmerica': {
    data: southAmerica,
  },
  'africa': {
    data: africa,
  },
  'asia': {
    data: asia,
  },
  'europe': {
    data: europe,
  }
};

export default function Mapbox() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>(null);

  const allLayers = {
    ...pointLayers,
    ...regionLayers
  };
  const allLayerIds = Object.keys(allLayers)
  // const [activeLayerIds, setActiveLayerIds] = useState(allLayerIds)
  // const [activeLayer, setActiveLayer] = useState()
  // const [centerCoords, setCenterCoords] = useState([-74.5, 40])
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3BlbmNlcmZwb3BlIiwiYSI6ImNtMWR4dmt1MzFmbWQyaXE2c2RvNGtpcnIifQ.9_db0P-UlnXY3SWX-w-fLg";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: "mapbox://styles/spencerfpope/cm7hsdin000nz01qvevhbf89b",
      config: {
        basemap: {
          lightPreset: "night",
          font: "Inter",
          showTransitLabels: false,
          showPointOfInterestLabels: false,
          showRoadsAndTransit: false,
          showRoadLabels: false,
          showPlaceLabels: true
        },
      },
      center: [-74.5, 40],
      zoom: 2,
      attributionControl: false,
      logoPosition: "top-right"
    });

    mapRef.current?.on('load', () => {
      setMapLoaded(true)

      Object.entries(regionLayers).forEach(([layerId, layerConfig]) => {
        mapRef.current?.addSource(layerId, {
          type: "geojson",
          // @ts-expect-error
          data: layerConfig.data
        });

        mapRef.current?.addLayer({
          id: layerId,
          type: 'symbol',
          source: layerId,
          layout: {
            visibility: 'visible',
            "icon-image": [
              "image",
              [
                'match',
                ['get', 'type'],
                'airport', 'airport',
                'park', 'park-alt1',
                'marker'
              ],
              {
                "params": {
                  "color-1": [
                    'match',
                    ['get', 'type'],
                    'airport', '#0377dd',
                    'park', '#16983f',
                    '#ea4336'
                  ]
                }
              }
            ]
          }
        });
      });
    });
  }, []);

  // useEffect(() => {
  //   if (!mapLoaded) return

  //   allLayerIds.forEach((layerId) => {
  //     if (activeLayerIds.includes(layerId)) {
  //       mapRef.current?.setLayoutProperty(layerId, 'visibility', 'visible')
  //     } else {
  //       mapRef.current?.setLayoutProperty(layerId, 'visibility', 'none')
  //     }
  //   })
  // }, [mapLoaded, activeLayerIds])

  // useEffect(() => {
  //   if (!mapLoaded) return
  //   if (!activeLayer) return

  //   allLayerIds.forEach(layerId => {
  //     if (layerId === activeLayer) {
  //       mapRef.current?.setLayoutProperty(layerId, 'visibility', 'visible')
  //     } else {
  //       mapRef.current?.setLayoutProperty(layerId, 'visibility', 'none')
  //     }
  //   })
  //   const bufferedCoords = buffer(allLayers[activeLayer].data, 100)
  //   const bounds = bbox(bufferedCoords)
  //   mapRef.current?.fitBounds(bounds)
  // }, [mapLoaded, activeLayer])

  // const handleClick = (e) => {
  // const layerId = e.target.id;

  // setActiveLayer(layerId)

  // if (activeLayerIds.includes(layerId)) {
  //   setActiveLayerIds(activeLayerIds.filter((d) => d !== layerId));
  // } else {
  //   setActiveLayerIds([...activeLayerIds, layerId]);
  // }
  // };

  return (
    <div>
      <div style={{ width: 800, height: 450 }} ref={mapContainerRef} className="map-container" />
      {/* <div style={{ display: 'flex', flexDirection: "row", gap: 16 }}>
        <button id="airports" onClick={handleClick}>airports</button>
        <button id="parks" onClick={handleClick}>parks</button>
        <button id="northAmerica" onClick={handleClick}>north america</button>
        <button id="southAmerica" onClick={handleClick}>south america</button>
        <button id="africa" onClick={handleClick}>africa</button>
        <button id="asia" onClick={handleClick}>asia</button>
        <button id="europe" onClick={handleClick}>europe</button>
      </div> */}
    </div>
  )
}

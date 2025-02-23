import fs from 'node:fs'
import all from './assets/everywhere.json'

const airports = all.features.filter(f => f.properties.name.toLowerCase().includes('airport'))
const parks = all.features.filter(f => f.properties.name.toLowerCase().includes('national park'))

const countries = [...new Set(all.features.map(f => f.properties.countryCode))]
const continents = [...new Set(all.features.map(f => f.properties.continent))]

for (const continent of continents) {
  const byContinent = all.features.filter(f => f.properties.continent === continent)
  fs.writeFileSync(`./assets/${continent}.geojson`, JSON.stringify({
    type: "FeatureCollection",
    features: byContinent
  }, null, 2))
}

fs.writeFileSync('./assets/airports.geojson', JSON.stringify({
  type: "FeatureCollection",
  features: airports
}, null, 2))
fs.writeFileSync('./assets/parks.geojson', JSON.stringify({
  type: "FeatureCollection",
  features: parks
}, null, 2))

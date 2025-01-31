import type {
    NavBarLink,
    SocialLink,
    Identity,
    AboutPageContent,
    BlogPageContent,
    HomePageContent,
} from "./types/config";

export const identity: Identity = {
    name: "spence pope",
    logo: "/logo.png",
    avatar: "/avatar.png",
    email: "spencer@begaydocrime.tech",
};

export const navBarLinks: NavBarLink[] = [
    {
        title: "home",
        url: "/",
    },
    {
        title: "blog",
        url: "/blog",
    },
    {
        title: "about",
        url: "/about",
    },
    {
        title: "travel",
        url: "/travel"
    }
];

export const socialLinks: SocialLink[] = [
    {
        title: "github",
        url: "https://github.com/vineyardbovines",
        icon: "mdi:github",
        external: true,
    },
    {
        title: "email",
        url: "mailto:spencerfpope@gmail.com",
        icon: "mdi:email",
    },
];

// home (/)
export const homePageContent: HomePageContent = {
    seo: {
        title: "spence pope",
        description:
            "Mobile technologist",
        image: identity.logo,
    },
    role: "software engineer",
    description: "",
    socialLinks: socialLinks,
    links: [
        {
            title: "about me",
            url: "/about",
        },
    ],
};

// about (/about)
export const aboutPageContent: AboutPageContent = {
    seo: {
        title: "about | spence pope",
        description:
            "mobile technologist",
        image: identity.logo,
    },
    subtitle: "things you may want to know (or not)",
    about: {
        description: `
📱 mobile / iot developer since 2016<br/>
✌️ 2e autistic since 1992<br/>
🌲 working remotely from vacationland (maine, usa)<br/>
💩 crohn's disease have-r<br/>
🛩️ <a href='/travel'>frequent flyer</a><br/>
🐕 3x dog parent to diesel, moose, and hoagie roll<br/>
🦻 hearing aids wearer<br/>
🏕️ outdoors enthusiast<br/>
🏎️ vroom vroom watcher
        `,
        image_l: {
            url: "/about-horz.jpeg",
            alt: "spencer with moose and diesel in northern maine, usa",
        },
        image_r: {
            url: "/about-vert.jpeg",
            alt: "spencer and a hermit crab in saint thomas, us virgin islands",
        },
    },
    work: {
        description: "i do not have a linkedin, but here's an overview of where i've spent my career.",
        items: [
            {
                title: "Staff Software Engineer",
                company: {
                    name: "Going (fka Scott's Cheap Flights)",
                    image: "/going.png",
                    url: "https://going.com",
                },
                date: "2021 - Present",
            },
            {
                title: "Senior Software Engineer",
                company: {
                    name: "Very",
                    image: "/very.png",
                    url: "https://www.verytechnology.com/",
                },
                date: "2020 - 2021",
            },
            {
                title: "Senior Software Engineer",
                company: {
                    name: "MedRhythms",
                    image: "/mr.png",
                    url: "https://www.medrhythms.com/",
                },
                date: "2018 - 2020",
            },
            {
                title: "Lead Software Engineer",
                company: {
                    name: "Freight Farms",
                    image: "/ff.png",
                    url: "https://www.freightfarms.com/",
                },
                date: "2017 - 2028",
            },
            {
                title: "Software Developer",
                company: {
                    name: "Ideometry",
                    image: "/ideo.png",
                    url: "https://www.ideometry.com/",
                },
                date: "2016 - 2017",
            },
        ],
    },
    connect: {
        description: `feel free to connect with me on any of the following platforms.`,
        links: socialLinks,
    },
};

export const travelPageContent = {
    seo: {
        title: "travel | spence pope",
        description: "my travel profile",
    },
    subtitle: "where i've been"
}

// blog (/blog)
export const blogPageContent: BlogPageContent = {
    seo: {
        title: "blog | spence pope",
        description: "unsolicited thoughts and opinions",
    },
    subtitle: "unsolicited thoughts and opinions",
};

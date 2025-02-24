import { aboutDescription, work } from "./content/about";
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
    url: "mailto:spencer@begaydocrime.tech",
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
    description: aboutDescription,
    image_l: {
      url: "/about-horz.jpeg",
      alt: "spencer with moose and diesel in northern maine, usa",
    },
    image_r: {
      url: "/about-vert.jpeg",
      alt: "spencer and a hermit crab in saint thomas, us virgin islands",
    },
  },
  work,
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

import { SOCIAL_LINKS } from "@/constants";
import { ROUTES } from "@/constants/routes";

export const SITE_URL = "https://ahmerdock.com";
export const SITE_NAME = "Ahmer Dock";
export const SITE_ROLE = "Full Stack Developer";

// The one-line bio, worded the same wherever it is quoted (metadata,
// structured data, llms.txt) so every source agrees.
export const SITE_BIO = `${SITE_NAME}, ${SITE_ROLE}`;

export const SITE_SUMMARY =
  "Full stack developer helping founders turn ideas into fast, reliable web and mobile products. A Next.js developer for the web and a React Native developer for iOS and Android, with Node.js behind both. 4+ years shipping products, from the first commit to the app stores.";

// Where the work is based and who it serves. The projects on the site are for
// clients in Germany, the UK and the UAE.
export const SITE_LOCATION = {
  country: "Pakistan",
  remoteNote: "Works remotely with founders and teams worldwide.",
} as const;

// External profiles that carry the same bio, linked from the structured data.
// WhatsApp is a chat link, not a profile.
export const SITE_PROFILE_URLS = SOCIAL_LINKS.filter(
  ({ label }) => label !== "Whatsapp",
).map(({ href }) => href);

// The technologies behind the work, listed in the structured data next to the
// services.
export const SITE_SKILLS = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "NestJS",
] as const;

// The four services, as the Expert Solutions section lists them.
export const SITE_SERVICES = [
  {
    name: "Frontend engineering",
    description:
      "Next.js developer for fast React interfaces, with TypeScript, state management, performance, SEO and animation.",
  },
  {
    name: "Backend and APIs",
    description:
      "Node.js and NestJS APIs with REST or GraphQL, PostgreSQL or MongoDB, JWT auth with roles, and real-time features over WebSockets.",
  },
  {
    name: "Mobile apps",
    description:
      "React Native developer for iOS and Android apps, or React with Capacitor, from the first screen to the App Store and Play Store release.",
  },
  {
    name: "Launch and leadership",
    description:
      "Deployment on AWS, Docker or a VPS, plus team leadership, code reviews, handover docs and post-launch fixes.",
  },
] as const;

interface IPageSeo {
  title: string;
  description: string;
}

// Titles and descriptions for the fixed pages. Claims here are limited to
// what the site itself shows.
export const PAGE_SEO = {
  home: {
    title: "Ahmer Dock | Full Stack, Next.js & React Native Developer",
    description:
      "Full stack developer turning ideas into fast, reliable products: a Next.js developer for the web and a React Native developer for iOS and Android.",
  },
  about: {
    title: "About Ahmer Dock | Full Stack Developer Who Leads",
    description:
      "4+ years taking products from the first commit to launch across the frontend, the backend and the app stores, and leading frontend teams along the way.",
  },
  services: {
    title: "Next.js & React Native Development Services | Ahmer Dock",
    description:
      "Full stack Next.js developer and React Native developer: frontend, backend, mobile apps and team leadership, from the first commit to launch.",
  },
  works: {
    title: "Works: Web & Mobile Products Built End to End | Ahmer Dock",
    description:
      "Web and mobile products I built end to end, from an AI CRM platform to a crypto payments app, with the stack and my role behind each.",
  },
  contact: {
    title: "Contact Ahmer Dock | Hire a Next.js & React Native Developer",
    description:
      "Need a Next.js developer or a React Native developer? Get in touch about a web, backend or mobile project, or ask for a quote.",
  },
  appsPrivacy: {
    title: "App Privacy Policies | Ahmer Dock",
    description:
      "Privacy policies for the apps I publish: Pay Slice, Couch Beam and Simpli Noti.",
  },
} satisfies Record<string, IPageSeo>;

// Project page headings lead with the project and name what kind of product it
// is, following "[Project]: [Keyword] Case Study".
const WORK_SEO_HEADINGS: Record<string, string> = {
  "armored-mma-cage-calls": "Armored MMA (AMMA): Fan Mobile App Case Study",
  "agentic-creed": "Agentic Creed: AI CRM Platform Case Study",
  "the-coaching-app": "The Coaching App: Coaching Platform Case Study",
  "atx-pay": "ATX Pay: Crypto Payments App Case Study",
  "pay-slice": "Pay Slice: Android Budget Planner Case Study",
};

// Meta descriptions for the project pages, kept under 160 characters so search
// results show them whole. The longer description stays on the page itself.
const WORK_SEO_DESCRIPTIONS: Record<string, string> = {
  "armored-mma-cage-calls":
    "AMMA is the Armored MMA fan hub: free fight predictions, digital Relics and events. I built the mobile app, admin portal and cloud behind it.",
  "agentic-creed":
    "Agentic Creed, formerly Air Apple Cart, is an AI CRM platform. I led the Next.js frontend team behind its Services, Operations and Loyalty modules.",
  "the-coaching-app":
    "The Coaching App lets gym coaches track client progress. I built its Next.js sales site, coach dashboard, admin panel and API, with Stripe payments.",
  "atx-pay":
    "ATX Pay is a crypto payments platform for UAE merchants. I am building its iOS and Android app in React Native, on my own, in English and Arabic.",
  "pay-slice":
    "Pay Slice is a free Android budget planner that splits monthly income into percentage-based categories. Built and published by me in React Native.",
};

export function getWorkSeoDescription(slug: string, fallback: string) {
  return WORK_SEO_DESCRIPTIONS[slug] ?? fallback;
}

export function getWorkSeoHeading(slug: string, fallbackTitle: string) {
  return WORK_SEO_HEADINGS[slug] ?? `${fallbackTitle} Case Study`;
}

export function getWorkSeoTitle(slug: string, fallbackTitle: string) {
  return `${getWorkSeoHeading(slug, fallbackTitle)} | ${SITE_NAME}`;
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

// Tag pages are left out of the sitemap on purpose: they only re-list projects
// that have their own pages, and are marked noindex.
export const SITEMAP_STATIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.SERVICES,
  ROUTES.WORKS,
  ROUTES.CONTACT,
  ROUTES.APPS_PRIVACY,
] as const;

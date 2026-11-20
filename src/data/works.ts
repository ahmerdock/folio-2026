import {
  AgenticFeaturedImg,
  AgenticListImg,
  AmmaFeaturedImg,
  AmmaListImg,
  AtxFeaturedImg,
  AtxListImg,
  CoachingFeaturedImg,
  CoachingListImg,
  PaySliceFeaturedImg,
  PaySliceListImg,
} from "@/assets/works";
import { ROUTES } from "@/constants/routes";
import { IFeaturedWork, IWork } from "@/interfaces";

export const MAX_FEATURED_WORK = 5;

// Every project, in the order they were added. The works page shows them in a
// random order on each visit; the home page's stack shows the featured ones in
// this order.
export const WORKS: IWork[] = [
  {
    slug: "armored-mma-cage-calls",
    title: "Armored MMA - Cage Calls",
    description:
      "AMMA is the official Armored MMA fan hub: follow events and fighters, make free fight predictions, and collect digital Relics. I built the mobile app, the admin portal, and the cloud behind them.",
    tags: ["Mobile", "Full Stack", "DevOps"],
    listImage: AmmaListImg,
    featured: true,
    featuredImage: AmmaFeaturedImg,
    paneColor: "#4a1c1e",
    imagePaneColor: "#8f2a30",
  },
  {
    slug: "agentic-creed",
    title: "Agentic Creed",
    description:
      "Agentic Creed, formerly Air Apple Cart, is an all-in-one AI CRM platform for sales, marketing, services and operations. I led the frontend team that built its Services, Operations and Loyalty modules, including the live chat.",
    tags: ["Frontend", "Leadership", "Web"],
    listImage: AgenticListImg,
    featured: true,
    featuredImage: AgenticFeaturedImg,
    paneColor: "#10343a",
    imagePaneColor: "#1a5560",
  },
  {
    slug: "the-coaching-app",
    title: "The Coaching App",
    description:
      "The Coaching App is a gym platform where coaches track their clients' progress. I built the sales site, the coach dashboard, the admin panel and the API behind them, with Stripe payments.",
    tags: ["Full Stack", "Web", "Backend"],
    listImage: CoachingListImg,
    featured: true,
    featuredImage: CoachingFeaturedImg,
    paneColor: "#2a1659",
    imagePaneColor: "#4a1fa0",
  },
  {
    slug: "atx-pay",
    title: "ATX Pay",
    description:
      "ATX Pay is a crypto payments platform for UAE merchants, who accept crypto in store and online and settle in AED. I am building and shipping its mobile app for iOS and Android, in English and Arabic.",
    tags: ["Mobile", "Frontend", "DevOps"],
    listImage: AtxListImg,
    featured: true,
    featuredImage: AtxFeaturedImg,
    paneColor: "#14284f",
    imagePaneColor: "#1f4a9a",
  },
  {
    slug: "pay-slice",
    title: "Pay Slice",
    description:
      "Pay Slice is a budget planner for Android that splits your monthly income into percentage-based categories. I designed, built and published it, and your budget stays on your phone.",
    tags: ["Mobile", "Frontend", "Product"],
    listImage: PaySliceListImg,
    featured: true,
    featuredImage: PaySliceFeaturedImg,
    paneColor: "#0f3a2b",
    imagePaneColor: "#1b7556",
  },
];

export function getWorkHref(slug: string) {
  return `${ROUTES.WORKS}/${slug}`;
}

export function getWorkBySlug(slug: string) {
  return WORKS.find((work) => work.slug === slug);
}

// The home page's stacked cards. A project without a page yet sends its
// visitors on to the works list.
export const FEATURED_WORKS: IFeaturedWork[] = WORKS.flatMap((work) =>
  work.featured
    ? [
        {
          title: work.title,
          description: work.description,
          image: work.featuredImage,
          href: getWorkHref(work.slug),
          paneColor: work.paneColor,
          imagePaneColor: work.imagePaneColor,
        },
      ]
    : [],
);

// These run when the module loads, so a mistake in the list above fails the
// build and the dev server instead of showing up as a broken page.
if (FEATURED_WORKS.length > MAX_FEATURED_WORK) {
  throw new Error(
    `At most ${MAX_FEATURED_WORK} projects can be featured, found ${FEATURED_WORKS.length}.`,
  );
}
if (new Set(WORKS.map((work) => work.slug)).size !== WORKS.length) {
  throw new Error("Every work needs its own slug.");
}

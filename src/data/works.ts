import {
  FeaturedWork3Img,
  FeaturedWork4Img,
} from "@/assets/images";
import {
  AmmaFeaturedImg,
  AmmaListImg,
  CoachingFeaturedImg,
  CoachingListImg,
  Work3ListImg,
  Work4ListImg,
  Work5ListImg,
  Work6ListImg,
} from "@/assets/works";
import { ROUTES } from "@/constants/routes";
import { IFeaturedWork, IWork } from "@/interfaces";

export const MAX_FEATURED_WORK = 5;

// Every project, in the order they were added. The works page shows them in a
// random order on each visit; the home page's stack shows the featured ones in
// this order.
// PLACEHOLDER copy, tags and images, to be replaced with real content.
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
    slug: "packaging-design-on-demand-experts",
    title: "Packaging Design with On-Demand Experts",
    description:
      "Packaging Design with On-Demand Experts delivers tailored, high-quality packaging solutions created by skilled specialists who craft standout visuals, smart layouts",
    tags: ["Backend", "APIs", "Leadership"],
    listImage: Work3ListImg,
    featured: true,
    featuredImage: FeaturedWork3Img,
    paneColor: "#10343a",
    imagePaneColor: "#1a5560",
  },
  {
    slug: "plenova-web-design-development",
    title: "Plenova Web Design & Development",
    description:
      "Plenova Web Design & Development builds modern, high-performing websites with clean UX, custom features, responsive layouts, and seamless functionality crafted to elevate brands",
    tags: ["Frontend", "Web", "Mobile"],
    listImage: Work4ListImg,
    featured: true,
    featuredImage: FeaturedWork4Img,
    paneColor: "#2f3410",
    imagePaneColor: "#55601a",
  },
  {
    slug: "placeholder-project-five",
    title: "Placeholder Project Five",
    description:
      "A placeholder project that appears on the works page only, to show how the list grows and staggers.",
    tags: ["Backend", "APIs"],
    listImage: Work5ListImg,
    featured: false,
  },
  {
    slug: "placeholder-project-six",
    title: "Placeholder Project Six",
    description:
      "A second placeholder project that appears on the works page only, to show how the list grows and staggers.",
    tags: ["Mobile", "Leadership"],
    listImage: Work6ListImg,
    featured: false,
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

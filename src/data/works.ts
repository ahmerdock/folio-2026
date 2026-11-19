import {
  FeaturedWork1Img,
  FeaturedWork2Img,
  FeaturedWork3Img,
  FeaturedWork4Img,
} from "@/assets/images";
import {
  Work1ListImg,
  Work2ListImg,
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
    slug: "drink-different-web-design",
    title: "Drink Different Web Design WITH WP",
    description:
      "Drink Different Web Design with WP delivers bold, refreshing WordPress sites featuring custom layouts, vibrant visuals, smooth interactions, and a playful brand style experience.",
    tags: ["Frontend", "Backend", "Web"],
    listImage: Work1ListImg,
    featured: true,
    featuredImage: FeaturedWork1Img,
    paneColor: "#ab9bff",
    imagePaneColor: "#8673ee",
  },
  {
    slug: "push-past-pack-design",
    title: "Push Past Pack Design in New Style",
    description:
      "Push Past Pack Design in New Style delivers bold, modern packaging concepts that redefine visuals, elevate branding, and introduce fresh creative energy.",
    tags: ["Frontend", "Mobile", "Leadership"],
    listImage: Work2ListImg,
    featured: true,
    featuredImage: FeaturedWork2Img,
    paneColor: "#ff905f",
    imagePaneColor: "#ff7d44",
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
    paneColor: "#ff767a",
    imagePaneColor: "#ff5b60",
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
    paneColor: "#b8c56f",
    imagePaneColor: "#9fae4b",
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

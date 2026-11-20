import { ROUTES } from "@/constants/routes";
import { IWork } from "@/interfaces";
import {
  PAGE_SEO,
  SITE_BIO,
  SITE_LOCATION,
  SITE_NAME,
  SITE_PROFILE_URLS,
  SITE_ROLE,
  SITE_SERVICES,
  SITE_SKILLS,
  SITE_SUMMARY,
  SITE_URL,
  getAbsoluteUrl,
  getWorkSeoDescription,
  getWorkSeoHeading,
} from "./site";
import { WORK_DETAIL_SLUGS } from "./work-details";
import { WORKS, getWorkHref } from "./works";

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#service`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const OG_IMAGE_URL = getAbsoluteUrl("/og-image.jpg");
const HOME_PAGE_ID = `${SITE_URL}/#webpage`;

// Launch date, and the last time the page copy changed. Bump SITE_MODIFIED
// when the content changes: it is a recency signal for search engines and AI
// answers, so it should not drift from the truth.
const SITE_PUBLISHED = "2026-11-20";
export const SITE_MODIFIED = "2026-11-20";

// The same person as on the home page, restated with a name so a project page
// still reads on its own.
const CREATOR = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_NAME,
  jobTitle: SITE_ROLE,
  url: SITE_URL,
  image: OG_IMAGE_URL,
  sameAs: SITE_PROFILE_URLS,
};

// WebSite, WebPage, Person and ProfessionalService for the home page, linked by @id so
// a crawler reads them as one entity. No ratings or reviews are marked up:
// the site's own testimonials and rating would be self-serving.
export function getHomeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_BIO,
        publisher: { "@id": PERSON_ID },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": HOME_PAGE_ID,
        url: SITE_URL,
        name: PAGE_SEO.home.title,
        description: PAGE_SEO.home.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE_URL },
        datePublished: SITE_PUBLISHED,
        dateModified: SITE_MODIFIED,
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        jobTitle: SITE_ROLE,
        description: SITE_SUMMARY,
        url: SITE_URL,
        image: OG_IMAGE_URL,
        sameAs: SITE_PROFILE_URLS,
        address: {
          "@type": "PostalAddress",
          addressCountry: SITE_LOCATION.country,
        },
        knowsAbout: [
          ...SITE_SERVICES.map((service) => service.name),
          ...SITE_SKILLS,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: `${SITE_NAME} - ${SITE_ROLE}`,
        description: SITE_SUMMARY,
        url: SITE_URL,
        image: OG_IMAGE_URL,
        founder: { "@id": PERSON_ID },
        areaServed: "Worldwide",
        address: {
          "@type": "PostalAddress",
          addressCountry: SITE_LOCATION.country,
        },
        sameAs: SITE_PROFILE_URLS,
        makesOffer: SITE_SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
          },
        })),
      },
    ],
  };
}

export function getWorkStructuredData(work: IWork) {
  const url = getAbsoluteUrl(getWorkHref(work.slug));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Works",
            item: getAbsoluteUrl(ROUTES.WORKS),
          },
          { "@type": "ListItem", position: 3, name: work.title, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        name: getWorkSeoHeading(work.slug, work.title),
        headline: work.title,
        description: getWorkSeoDescription(work.slug, work.description),
        url,
        keywords: work.tags.join(", "),
        author: CREATOR,
        publisher: CREATOR,
        datePublished: SITE_PUBLISHED,
        dateModified: SITE_MODIFIED,
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
      },
    ],
  };
}

const FIXED_PAGES = {
  about: {
    type: "AboutPage",
    path: ROUTES.ABOUT,
    crumb: "About",
    about: { "@id": PERSON_ID },
  },
  services: {
    type: "WebPage",
    path: ROUTES.SERVICES,
    crumb: "Services",
    about: { "@id": SERVICE_ID },
  },
  works: {
    type: "CollectionPage",
    path: ROUTES.WORKS,
    crumb: "Works",
    about: { "@id": PERSON_ID },
  },
  contact: {
    type: "ContactPage",
    path: ROUTES.CONTACT,
    crumb: "Contact",
    about: { "@id": PERSON_ID },
  },
} as const;

// Page type plus breadcrumb for About, Services, Works and Contact, tied to
// the same Person and service entities as the home page. The author is
// restated in full (with sameAs) so each page reads on its own.
export function getPageStructuredData(page: keyof typeof FIXED_PAGES) {
  const { type, path, crumb, about } = FIXED_PAGES[page];
  const url = getAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        url,
        name: PAGE_SEO[page].title,
        description: PAGE_SEO[page].description,
        about,
        author: CREATOR,
        datePublished: SITE_PUBLISHED,
        dateModified: SITE_MODIFIED,
        ...(page === "works" && { mainEntity: getWorkItemList() }),
        ...(page === "services" && { mainEntity: getServiceItemList() }),
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: crumb, item: url },
        ],
      },
    ],
  };
}

// The projects that have a page of their own.
function getWorkItemList() {
  const published = WORKS.filter((work) =>
    WORK_DETAIL_SLUGS.includes(work.slug),
  );

  return {
    "@type": "ItemList",
    name: "Works by Ahmer Dock",
    numberOfItems: published.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: published.map((work, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: work.title,
      url: getAbsoluteUrl(getWorkHref(work.slug)),
    })),
  };
}

function getServiceItemList() {
  return {
    "@type": "ItemList",
    name: "Services by Ahmer Dock",
    numberOfItems: SITE_SERVICES.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: SITE_SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": SERVICE_ID },
      },
    })),
  };
}

import type { MetadataRoute } from "next";
import { ROUTES } from "@/constants/routes";
import { SITEMAP_STATIC_ROUTES, getAbsoluteUrl } from "@/data/site";
import { APP_POLICIES } from "@/data/privacy-policies";
import { WORK_DETAIL_SLUGS } from "@/data/work-details";
import { getWorkHref } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = WORK_DETAIL_SLUGS.map((slug) => ({
    url: getAbsoluteUrl(getWorkHref(slug)),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const pages = SITEMAP_STATIC_ROUTES.map((path) => ({
    url: getAbsoluteUrl(path),
    changeFrequency:
      path === ROUTES.HOME ? ("monthly" as const) : ("yearly" as const),
    priority:
      path === ROUTES.HOME ? 1 : path === ROUTES.APPS_PRIVACY ? 0.3 : 0.8,
  }));

  // The store listings link to these, so they are public; low priority.
  const policies = APP_POLICIES.map(({ slug }) => ({
    url: getAbsoluteUrl(`${ROUTES.APPS_PRIVACY}/${slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...pages, ...projects, ...policies];
}

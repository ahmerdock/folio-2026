import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { PAGE_SEO } from "@/data/site";
import { AppsPrivacy } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  ...PAGE_SEO.appsPrivacy,
  path: ROUTES.APPS_PRIVACY,
});

export default function Page() {
  return <AppsPrivacy />;
}

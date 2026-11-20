import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { ROUTES } from "@/constants/routes";
import { PAGE_SEO } from "@/data/site";
import { getPageStructuredData } from "@/data/structured-data";
import { About } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  ...PAGE_SEO.about,
  path: ROUTES.ABOUT,
});

export default function Page() {
  return (
    <>
      <JsonLd data={getPageStructuredData("about")} />
      <About />
    </>
  );
}

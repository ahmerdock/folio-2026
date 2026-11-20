import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { ROUTES } from "@/constants/routes";
import { PAGE_SEO } from "@/data/site";
import { getPageStructuredData } from "@/data/structured-data";
import { Works } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  ...PAGE_SEO.works,
  path: ROUTES.WORKS,
});

export default function Page() {
  return (
    <>
      <JsonLd data={getPageStructuredData("works")} />
      <Works />
    </>
  );
}

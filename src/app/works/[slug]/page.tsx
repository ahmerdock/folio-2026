import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { JsonLd } from "@/components";
import { ROUTES } from "@/constants/routes";
import { getWorkSeoDescription, getWorkSeoTitle } from "@/data/site";
import { getWorkStructuredData } from "@/data/structured-data";
import { getWorkBySlug, getWorkHref } from "@/data/works";
import { WORK_DETAIL_SLUGS, getWorkDetails } from "@/data/work-details";
import { WorkDetails } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

interface IPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return WORK_DETAIL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: IPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const work = getWorkBySlug(slug);
  const details = getWorkDetails(slug);
  if (!work || !details) return {};

  // The project's own banner is its share image.
  const { src, width, height } = details.bannerImage;
  return buildPageMetadata({
    title: getWorkSeoTitle(slug, work.title),
    description: getWorkSeoDescription(slug, work.description),
    path: getWorkHref(slug),
    image: { url: src, width, height },
  });
}

export default async function Page(props: IPageProps) {
  const { slug } = await props.params;
  const work = getWorkBySlug(slug);
  const details = getWorkDetails(slug);
  // A project whose page isn't written yet (or a mistyped link) lands on the
  // full list of works.
  if (!work || !details) redirect(ROUTES.WORKS);

  return (
    <>
      <JsonLd data={getWorkStructuredData(work)} />
      <WorkDetails work={work} details={details} />
    </>
  );
}

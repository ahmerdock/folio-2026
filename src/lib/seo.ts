import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";

const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
};

interface IPageMetadataInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  // A page's own share image; the site-wide one is used otherwise.
  image?: { url: string; width: number; height: number };
}

// A page's metadata. Next replaces openGraph and twitter as a whole when a
// page sets them, so each page restates its own title, description and image
// here instead of inheriting the home page's.
export function buildPageMetadata(input: IPageMetadataInput): Metadata {
  const { title, description, path, noIndex, image = DEFAULT_OG_IMAGE } = input;

  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ ...image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: title }],
    },
  };
}

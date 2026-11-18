import { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";

export interface ISocialLink {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface INavLink {
  label: string;
  href: string;
}

export interface IFeaturedWork {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  // Text pane and image pane are two shades of the same hue.
  paneColor: string;
  imagePaneColor: string;
}

export interface IPolicySection {
  title: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: string[];
  closing?: string[];
}

export interface IPrivacyPolicy {
  captionPrefix: string;
  captionEmphasis: string;
  captionSuffix: string;
  lastUpdated: string;
  intro: string;
  summary: string[];
  sections: IPolicySection[];
  contactText: string;
  contactEmail: string;
}

export interface IAppPolicyLink {
  slug: string;
  name: string;
  description: string;
  lastUpdated: string;
}

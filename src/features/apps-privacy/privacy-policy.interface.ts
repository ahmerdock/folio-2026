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

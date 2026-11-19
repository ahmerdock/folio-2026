import {
  WorkBannerImg,
  WorkDescImg,
  WorkLeftImg,
  WorkResult1Img,
  WorkResult2Img,
  WorkResult3Img,
  WorkRightImg,
} from "@/assets/works";
import { IWorkDetails } from "@/interfaces";

// PLACEHOLDER copy and images, to be replaced with real content.
export const PROJECT_2_DETAILS: IWorkDetails = {
  slug: "push-past-pack-design",
  meta: [
    { label: "Client", value: "Client Name" },
    { label: "Country", value: "Country" },
    { label: "Expertise", value: "Mobile & Leadership" },
    { label: "Duration", value: "5 Months, 2025" },
  ],
  links: [{ label: "Visit Site", href: "https://example.com" }],
  bannerImage: WorkBannerImg,
  challenge: {
    title: "The Challenge",
    lead: "A placeholder for what the client needed solved: the problem, who it affected, and why it could not wait.",
    text: "A placeholder for how I approached it: the first decisions, the constraints, and what I owned from the first commit to launch.",
  },
  showcaseImages: [WorkLeftImg, WorkRightImg],
  overview: {
    title: "Work Overview",
    text: "A placeholder overview of what was built and how, across the frontend, the backend and the release.",
    stats: [
      { value: "100+", label: "Placeholder stat one" },
      { value: "05", label: "Placeholder stat two" },
      { value: "03", label: "Placeholder stat three" },
      { value: "98%", label: "Placeholder stat four" },
    ],
  },
  descImage: WorkDescImg,
  quote: ["ONE PERSON,", "THE WHOLE", "PRODUCT"],
  result: {
    title: "The Results",
    text: "A placeholder for what changed after launch: the numbers, the feedback and what the client does differently now.",
    images: [WorkResult1Img, WorkResult2Img, WorkResult3Img],
    bgColor: "#2b2b2b",
  },
};

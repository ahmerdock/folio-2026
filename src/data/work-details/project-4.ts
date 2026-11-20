import {
  AtxBannerImg,
  AtxDescImg,
  AtxLeftImg,
  AtxResult1Img,
  AtxResult2Img,
  AtxResult3Img,
  AtxRightImg,
} from "@/assets/works";
import { IWorkDetails } from "@/interfaces";

export const PROJECT_4_DETAILS: IWorkDetails = {
  slug: "atx-pay",
  meta: [
    { label: "Client", value: "Mahmoud Atatreh" },
    { label: "Country", value: "UAE" },
    { label: "Expertise", value: "Mobile Development" },
    { label: "Duration", value: "Oct 2026 to Present" },
  ],
  stack: [
    "React Native",
    "Expo",
    "TypeScript",
    "TanStack Query",
    "Zustand",
    "i18next",
  ],
  status: "In progress",
  bannerImage: AtxBannerImg,
  challenge: {
    title: "The Challenge",
    lead: "Merchants in the UAE want to accept crypto from their customers, but most tools are built for traders. A shop owner needs something simple that creates a payment, shows the customer how to pay, and settles in dirhams.",
    text: "My job is to build the merchant mobile app on my own, from the first screen to the store release, with English and Arabic from day one and a layout that works right-to-left.",
  },
  showcaseImages: [AtxLeftImg, AtxRightImg],
  overview: {
    title: "Work Overview",
    text: "ATX Pay lets merchants run their crypto payments from their phone. I am building the iOS and Android app in React Native with Expo: sign up and onboarding, a home dashboard with balances and assets, payment links with a QR code to share, notifications, settings, and full English and Arabic support with right-to-left layout. It is built first for merchants, with individuals and admins planned next, and I handle the deployment myself.",
    stats: [
      { value: "02", label: "Languages, English and Arabic" },
      { value: "02", label: "Platforms, iOS and Android" },
      { value: "01", label: "Developer, start to finish" },
      { value: "2026", label: "Launching in November" },
    ],
  },
  descImage: AtxDescImg,
  quote: ["ONE DEVELOPER,", "ONE APP,", "TWO PLATFORMS"],
  result: {
    title: "The Results",
    text: "The app is still in progress and set to launch at the end of November 2026. The core merchant flows are built: onboarding, the dashboard, payment links and QR sharing, and notifications, in both English and Arabic. Store links will be added here once it is live.",
    images: [AtxResult1Img, AtxResult2Img, AtxResult3Img],
    bgColor: "#1f4a9a",
  },
};

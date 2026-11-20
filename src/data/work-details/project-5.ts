import {
  PaySliceBannerImg,
  PaySliceDescImg,
  PaySliceLeftImg,
  PaySliceResult1Img,
  PaySliceResult2Img,
  PaySliceResult3Img,
  PaySliceRightImg,
} from "@/assets/works";
import { IWorkDetails } from "@/interfaces";

export const PROJECT_5_DETAILS: IWorkDetails = {
  slug: "pay-slice",
  meta: [
    { label: "Client", value: "Personal project" },
    { label: "Country", value: "Pakistan" },
    { label: "Expertise", value: "Mobile Development" },
    { label: "Duration", value: "Oct 2026 to Present" },
  ],
  stack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Unistyles",
    "MMKV",
    "Expo IAP",
  ],
  links: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.ahmerdock.payslice",
    },
  ],
  bannerImage: PaySliceBannerImg,
  challenge: {
    title: "The Challenge",
    lead: "Most budgeting apps ask for an account, a bank link or a subscription before they show you anything, when many people only want to know how much of their pay each category gets.",
    text: "I set out to build the simplest version: type in your income, add categories with a percentage, and see the split straight away, with nothing sent anywhere.",
  },
  showcaseImages: [PaySliceLeftImg, PaySliceRightImg],
  overview: {
    title: "Work Overview",
    text: "I designed, built and published Pay Slice end to end. You enter a monthly income, add categories with a percentage, and the app shows each amount and a colored split bar. Past months are saved to a history, and there are light, dark and system themes. Everything is stored on the device, one-time tips go through Google Play, and updates ship over the air. It is built with React Native and Expo.",
    stats: [
      { value: "01", label: "Store, Google Play" },
      { value: "03", label: "Theme modes, light, dark and system" },
      { value: "49", label: "Commits so far" },
      { value: "1.1", label: "Version live on Google Play" },
    ],
  },
  descImage: PaySliceDescImg,
  quote: ["ONE IDEA,", "ONE DEVELOPER,", "ONE LIVE APP"],
  result: {
    title: "The Results",
    text: "Pay Slice went live on Google Play on November 13, 2026 and reached version 1.1.0 with an update on November 18. It is free to use, works fully offline, and keeps your budget on your phone. I keep shipping updates over the air.",
    images: [PaySliceResult1Img, PaySliceResult2Img, PaySliceResult3Img],
    bgColor: "#1b7556",
  },
};

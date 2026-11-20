import {
  AmmaBannerImg,
  AmmaDescImg,
  AmmaLeftImg,
  AmmaResult1Img,
  AmmaResult2Img,
  AmmaResult3Img,
  AmmaRightImg,
} from "@/assets/works";
import { IWorkDetails } from "@/interfaces";

export const PROJECT_1_DETAILS: IWorkDetails = {
  slug: "armored-mma-cage-calls",
  meta: [
    { label: "Client", value: "Patrik, Medieval Tech Inc." },
    { label: "Country", value: "Germany" },
    { label: "Expertise", value: "Full Stack & Mobile" },
    { label: "Duration", value: "Jan 2026 to Oct 2026" },
  ],
  stack: [
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Ionic",
    "Capacitor",
    "PostgreSQL",
    "AWS CDK",
    "Docker",
  ],
  links: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=xyz.medievaltech.amma",
    },
    {
      label: "App Store",
      href: "https://apps.apple.com/app/armored-mma/id6759716701",
    },
  ],
  bannerImage: AmmaBannerImg,
  challenge: {
    title: "The Challenge",
    lead: "Armored MMA fans had no single place to follow the league, call the winner of every fight, and keep a piece of fight night. The league also needed its own tools to run events without writing code.",
    text: "My job was to build both sides: a fan app simple enough to open at the arena, an admin portal and live events board the league's team runs on their own, and the cloud setup that keeps all of it up when an event goes live.",
  },
  showcaseImages: [AmmaLeftImg, AmmaRightImg],
  overview: {
    title: "Work Overview",
    text: "I built the AMMA mobile app for iOS and Android, the admin portal where the team manages events, fighters, free-prediction markets and Relics, the live events board, and the AWS infrastructure behind it all. I also built a large part of the backend API, and integrated the blockchain work from a teammate's SDK and contracts.",
    stats: [
      { value: "3000+", label: "Downloads across both stores" },
      { value: "05", label: "Systems I built or ran" },
      { value: "800+", label: "Commits in the mobile app" },
      { value: "02", label: "Stores, Google Play and App Store" },
    ],
  },
  descImage: AmmaDescImg,
  quote: ["FROM FIRST", "COMMIT TO", "FIGHT NIGHT"],
  result: {
    title: "The Results",
    text: "AMMA went live on Google Play on February 23, 2026 and on the App Store on March 9, 2026, and has passed 3000 downloads. The admin portal and live board support the league's events, and the app has shipped steady updates since launch, now on version 2.8.",
    images: [AmmaResult1Img, AmmaResult2Img, AmmaResult3Img],
    bgColor: "#8f2a30",
  },
};

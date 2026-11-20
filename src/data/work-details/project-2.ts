import {
  CoachingBannerImg,
  CoachingDescImg,
  CoachingLeftImg,
  CoachingResult1Img,
  CoachingResult2Img,
  CoachingResult3Img,
  CoachingRightImg,
} from "@/assets/works";
import { IWorkDetails } from "@/interfaces";

export const PROJECT_2_DETAILS: IWorkDetails = {
  slug: "the-coaching-app",
  meta: [
    { label: "Client", value: "Muhammad Umer" },
    { label: "Country", value: "Germany" },
    { label: "Expertise", value: "Full Stack" },
    { label: "Duration", value: "Jun 2024 to Sep 2024" },
  ],
  stack: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "RTK Query",
    "Material UI",
    "JWT",
    "Stripe",
    "Hostinger VPS",
  ],
  links: [{ label: "Visit Site", href: "https://thecoachingapp.fit" }],
  bannerImage: CoachingBannerImg,
  challenge: {
    title: "The Challenge",
    lead: "Gym coaches had no single place to follow their clients' progress, and the gym owner had no way to manage coaches, handle their questions and take payments in the same system.",
    text: "My job was to build all of it alone: a sales site that brings coaches in, a dashboard where they track every client, an admin panel for the owner, and the API and server that hold it together.",
  },
  showcaseImages: [CoachingLeftImg, CoachingRightImg],
  overview: {
    title: "Work Overview",
    text: "I built the sales site, the coach dashboard and the admin panel as one Next.js app, with RTK Query and Material UI on the frontend. Behind it is a Node.js and Express API with MongoDB and Mongoose, JWT sign-in with role-based access for coaches and admins, and Stripe for payments. I also set up and deployed the production server on a Hostinger VPS.",
    stats: [
      { value: "500+", label: "Users a day" },
      { value: "03", label: "Apps in one codebase" },
      { value: "02", label: "Roles, coach and admin" },
      { value: "04", label: "Months, start to finish" },
    ],
  },
  descImage: CoachingDescImg,
  quote: ["ONE APP,", "THREE SIDES,", "ONE BUILDER"],
  result: {
    title: "The Results",
    text: "The Coaching App went live at thecoachingapp.fit and now serves 500+ users a day. Coaches follow each client's measurements and photos from one dashboard, the admin team manages coaches and answers queries in the same place, and payments run through Stripe.",
    images: [CoachingResult1Img, CoachingResult2Img, CoachingResult3Img],
    bgColor: "#4a1fa0",
  },
};

import {
  AgenticBannerImg,
  AgenticDescImg,
  AgenticLeftImg,
  AgenticResult1Img,
  AgenticResult2Img,
  AgenticResult3Img,
  AgenticRightImg,
} from "@/assets/works";
import { IWorkDetails } from "@/interfaces";

export const PROJECT_3_DETAILS: IWorkDetails = {
  slug: "agentic-creed",
  meta: [
    { label: "Client", value: "Umer Saeed" },
    { label: "Country", value: "United Kingdom" },
    { label: "Expertise", value: "Frontend Lead" },
    { label: "Duration", value: "Oct 2024 to Jun 2025" },
  ],
  stack: [
    "Next.js",
    "React",
    "Material UI",
    "Redux",
    "RTK Query",
    "Socket.io",
  ],
  links: [{ label: "Visit Site", href: "https://agenticcreed.ai/home" }],
  bannerImage: AgenticBannerImg,
  challenge: {
    title: "The Challenge",
    lead: "Businesses were running sales, marketing, support and operations in separate tools, with customer data scattered across all of them and no single place to see the whole picture.",
    text: "My job was to lead the frontend team behind three of the platform's modules, Services, Operations and Loyalty, so they felt like one product and stayed fast as the app grew.",
  },
  showcaseImages: [AgenticLeftImg, AgenticRightImg],
  overview: {
    title: "Work Overview",
    text: "Agentic Creed began as Air Apple Cart, a CRM that brings marketing, sales, service and operations into one place. I led a team of 12 frontend developers on the Services, Operations and Loyalty modules, then called Air Services, Air Operations and Air Loyalty. We built them in Next.js with Material UI, Redux and RTK Query, including the support inbox with real-time chat over Socket.io.",
    stats: [
      { value: "50k+", label: "Active users on the platform" },
      { value: "08", label: "Modules in the platform" },
      { value: "03", label: "Modules my team built" },
      { value: "12", label: "Frontend developers I led" },
    ],
  },
  descImage: AgenticDescImg,
  quote: ["LEADING THE", "FRONTEND OF", "ONE PLATFORM"],
  result: {
    title: "The Results",
    text: "Agentic Creed is live at agenticcreed.ai, and the company reports more than 50,000 active users across 60+ countries. The Services, Operations and Loyalty modules my team built are part of the product today, which has since been renamed from Air Apple Cart.",
    images: [AgenticResult1Img, AgenticResult2Img, AgenticResult3Img],
    bgColor: "#1a5560",
  },
};

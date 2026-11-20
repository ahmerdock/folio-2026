import { StaticImageData } from "next/image";

export interface ITestimonial {
  quote: string;
  name: string;
  role: string;
  // Dark cards swap to the primary fill, white text and lime stars.
  dark: boolean;
  image: StaticImageData;
}

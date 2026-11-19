import {
  StatsVisualFourIcon,
  StatsVisualOneIcon,
  StatsVisualThreeIcon,
  StatsVisualTwoIcon,
} from "@/assets/icons";
import { IStat } from "./stats-grid.interface";

// PLACEHOLDER labels, to be replaced with real content.
export const STATS: IStat[] = [
  {
    value: "04+",
    label: "Years building and shipping real products",
    boxClassName: "bg-primary text-white",
    Visual: StatsVisualOneIcon,
    visualClassName: "text-white right-0 bottom-0 max-lg:h-auto max-lg:w-22.25",
  },
  {
    value: "100+",
    label: "Projects delivered for founders and teams",
    boxClassName: "bg-ash text-white",
    Visual: StatsVisualTwoIcon,
    visualClassName: "text-white right-0 bottom-0 max-lg:h-auto max-lg:w-36",
  },
  {
    value: "12",
    label: "Developers I led across concurrent projects",
    boxClassName: "bg-mist text-white-secondary",
    Visual: StatsVisualThreeIcon,
    visualClassName: "text-white/10 top-0 right-0 max-lg:h-auto max-lg:w-14.75",
  },
  {
    value: "4.9",
    label: "Average rating from my clients across globe",
    boxClassName: "bg-lime text-black-secondary",
    Visual: StatsVisualFourIcon,
    visualClassName:
      "text-black-secondary right-0 bottom-0 max-lg:h-auto max-lg:w-22.5",
  },
];

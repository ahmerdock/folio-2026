import {
  Feedback1Img,
  Feedback2Img,
  Feedback3Img,
  Feedback4Img,
} from "@/assets/images";
import { ITestimonial } from "./clients-feedback.interface";

export const FEEDBACK_TITLE = "Clients Feedback";
export const FEEDBACK_BADGE = "5 STAR SERVICES";
export const FEEDBACK_STAR_COUNT = 5;

// The portraits are neutral stand-ins, not photos of the clients.
export const TESTIMONIALS: ITestimonial[] = [
  {
    quote:
      "Ahmer built our mobile app, the admin portal and the live events board, and took over our cloud setup along the way. He owned everything he touched, explained every trade-off clearly, and got us into both app stores.",
    name: "Patrik",
    role: "Founder & CEO, Medieval Tech Inc.",
    dark: false,
    image: Feedback1Img,
  },
  {
    quote:
      "Ahmer is building our merchant app on his own, from sign-up to payment links, with Arabic and right-to-left support from the first build. He handles the releases too, so we never have to chase anything.",
    name: "Mahmoud",
    role: "Client, ATX Pay",
    dark: true,
    image: Feedback3Img,
  },
  {
    quote:
      "Ahmer built our whole coaching platform: the sales site, the coach dashboard, the admin panel and the API, with Stripe payments. He set up the server too, and it all felt like one product.",
    name: "Muhammad Umer",
    role: "Client, The Coaching App",
    dark: false,
    image: Feedback4Img,
  },
  {
    quote:
      "Ahmer owned the whole stack on our app and led the team around him. Having one person think through the product and the code made every release smoother.",
    name: "Qudisa",
    role: "Product Lead, Company Name",
    dark: true,
    image: Feedback2Img,
  },
];

// Fly-in, same as the reference's [data-slide-cards] timeline: once the cards
// reach the middle of the screen they slide in from 100vw to the right,
// rotated 40deg about their bottom-right corner, staggered over 0.4s. Desktop
// only; below 1024px the cards sit in a static grid.
export const FEEDBACK_SCROLL_QUERY =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
export const FEEDBACK_CARDS_SCROLL_START = "top center";
export const FEEDBACK_CARD_FROM_X = "100vw";
export const FEEDBACK_CARD_FROM_ROTATION_DEG = 40;
export const FEEDBACK_CARD_ORIGIN = "100% 100%";
export const FEEDBACK_CARD_DURATION_S = 1;
export const FEEDBACK_CARD_STAGGER_AMOUNT_S = 0.4;
export const FEEDBACK_CARD_EASE = "back.out";

// Resting tilt per card (the reference tilts cards 1, 3 and 4 by -3deg and
// card 2 by +5deg).
export const FEEDBACK_TILT_DEG = [-3, 5, -3, -3];

// Hover, same as the reference's card hover timelines (desktop only): the
// hovered card straightens, scales up and comes forward while its neighbours
// slide apart. Row = the hovered card, column = how far each card moves
// sideways, in vw (positive is right).
export const FEEDBACK_HOVER_SHIFT_VW = [
  [0, 7, 5, 5],
  [0, 0, 8, 8],
  [0, -8, 0, 10],
  [0, -8, -10, 0],
];
export const FEEDBACK_HOVER_QUERY =
  "(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)";
// Marks the hover tweens so cleanup can kill them without touching the fly-in.
export const FEEDBACK_HOVER_TWEEN_TAG = "hover";
export const FEEDBACK_HOVER_SCALE = 1.1;
export const FEEDBACK_HOVER_IN_S = 0.8;
export const FEEDBACK_HOVER_OUT_S = 0.6;
export const FEEDBACK_HOVER_EASE = "back.out";

// Title reveal, shared timing with Expert Solutions.
export const FEEDBACK_REVEAL_SCROLL_START = "top 90%";
export const FEEDBACK_TITLE_REVEAL_DURATION_S = 1;
export const FEEDBACK_TITLE_REVEAL_STAGGER_AMOUNT_S = 0.5;
export const FEEDBACK_TITLE_REVEAL_EASE = "back.inOut";
export const FEEDBACK_BADGE_REVEAL_START_S = 1;
export const FEEDBACK_BADGE_REVEAL_DURATION_S = 0.6;
export const FEEDBACK_BADGE_REVEAL_FROM_SCALE = 0.5;
export const FEEDBACK_BADGE_REVEAL_EASE = "back.out";

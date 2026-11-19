import { IQuote } from "./quotes.interface";

export const QUOTES_MARQUEE_TEXT = "The Numbers Behind The Work";
export const QUOTES_LABEL = "The numbers behind the work";

// Order is the reference's logo order: entry N fills tile slot N of the grid
// (see the quotes-slot rules in globals.css), which is also the DOM and tab
// order. The first entry is active on load. A "person" caption shows a name
// over a role and wraps the quote in quotation marks; a "label" caption shows
// two uppercase lines and no quotation marks.
export const QUOTES: IQuote[] = [
  {
    stat: "01 ONLY",
    quote:
      "Ideas are easy to start and hard to finish. I'm the one who finishes: you get one person who understands the whole product, from the screen you tap to the server behind it.",
    title: "Ahmer Dock",
    subtitle: "Full Stack Developer",
    variant: "person",
  },
  {
    stat: "4+",
    quote:
      "Four plus years of shipping client work taught me to scope tightly, build in milestones, and keep every release small enough to trust.",
    title: "Experience",
    subtitle: "Years shipping products",
    variant: "label",
  },
  {
    stat: "3000+",
    quote:
      "A mobile app taken from first commit to both stores, now with three thousand plus downloads and real users depending on it.",
    title: "Downloads",
    subtitle: "App Store & Play Store",
    variant: "label",
  },
  {
    stat: "12",
    quote:
      "Twelve developers whose work I lead, review, and unblock, while still writing code every day instead of only managing it.",
    title: "Leading",
    subtitle: "Developers on the team",
    variant: "label",
  },
  {
    stat: "2",
    quote:
      "Frontend and backend handled by one person, which means fewer handoffs, faster decisions, and nothing lost between the two.",
    title: "One developer",
    subtitle: "Frontend and backend",
    variant: "label",
  },
  {
    stat: "100+",
    quote:
      "A hundred plus projects delivered end to end, from the first requirements call to deployment and handover docs.",
    title: "Delivered",
    subtitle: "Projects shipped",
    variant: "label",
  },
];

// Layout key per stat (same order as QUOTES): which set of cells the quote box
// and the two movable tiles occupy, set in the `data-quotes-layout` rules in
// globals.css. "01 ONLY" and "200+" share the reference's default layout.
export const QUOTES_LAYOUT_KEYS = ["base", "620", "base", "2", "3", "15"];

// The tiles that change cells (slots 3 and 5 are "200+" and "3+"); the quote
// box moves too. Everything else stays put.
export const QUOTES_MOVING_SLOTS = [3, 5];

// Cells only change from 1024px up (the tablet and phone layouts stay put).
// Must equal the `min-width: 1024px` query around the layout rules in
// globals.css: matchMedia can't read it from there.
export const QUOTES_MOVE_QUERY = "(min-width: 1024px)";

// Placement change. The box and any tile that doesn't cross it glide to their
// new cells together; a tile whose move would cross the box fades out where it
// was and fades back in at its new cell instead.
export const QUOTES_MOVE_DURATION_S = 0.9;
export const QUOTES_MOVE_EASE = "power3.inOut";
export const QUOTES_TILE_FADE_OUT_S = 0.3;
export const QUOTES_TILE_FADE_IN_S = 0.45;
export const QUOTES_TILE_FADE_IN_DELAY_S = 0.3;
export const QUOTES_TILE_FADE_EASE = "power2.out";
// Points sampled along a tile's straight path to test whether it crosses the box.
export const QUOTES_PATH_SAMPLES = 24;

// The background grid of square cells: 22 columns by 11 rows on desktop (11
// by 22 below 1024px, hidden below 768px). One cell near the end is
// hidden at tablet widths, as in the reference.
const BG_CELL_COUNT = 242;
export const QUOTES_BG_CELLS = Array.from({ length: BG_CELL_COUNT });
export const QUOTES_TABLET_HIDDEN_CELL = 227;

// The strip repeats its phrase and the track tweens 50% of its own width, so
// one loop is half the copies and lands on a frame identical to the start. Four
// copies keep that half wider than the strip box at any width.
const MARQUEE_COPY_COUNT = 4;
export const QUOTES_MARQUEE_COPIES = Array.from({
  length: MARQUEE_COPY_COUNT,
});

// A literal px/second speed (not a fixed duration): duration is derived from
// the measured width in use-quotes.ts, so the speed holds across widths.
export const QUOTES_MARQUEE_SPEED_PX_PER_S = 70;
export const QUOTES_MARQUEE_EASE = "none";

// Quote swap. The old lines lift out through their masks, then the new quote's
// lines rise in from below, staggered; the author fades with the last of them.
export const QUOTES_OUT_DURATION_S = 0.5;
export const QUOTES_OUT_STAGGER_S = 0.08;
export const QUOTES_OUT_EASE = "power3.in";
export const QUOTES_IN_DURATION_S = 0.8;
export const QUOTES_IN_STAGGER_S = 0.1;
export const QUOTES_IN_EASE = "power3.out";
export const QUOTES_AUTHOR_FADE_DURATION_S = 0.5;
export const QUOTES_AUTHOR_FADE_DELAY_S = 0.3;

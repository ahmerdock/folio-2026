export const WORKS_TITLE = "FEATURED WORKS";
export const WORKS_BADGE = "DIGITAL SCREENS";
export const WORKS_CTA_LABEL = "Learn More";

// The pinned stack only exists at 768px and up with motion allowed — the
// reference drops it at 767px. Must equal the `md:` classes in
// featured-works/index.tsx and work-card/index.tsx: matchMedia can't read the
// breakpoint from them.
export const WORKS_PINNED_QUERY =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

// Pinned track geometry, all from the reference: a track holding a wrapper
// that sticks 10% from the top, with the wrapper's CSS perspective giving the
// peeling cards their depth. The reference's four cards sit in a 300vh track,
// one 100vh of scrolling per card that peels away, so the track grows with
// the number of featured works.
export const WORKS_TRACK_VH_PER_PEEL = 100;
export const WORKS_PIN_TOP = "10%";
export const WORKS_PERSPECTIVE_PX = 1500;

export function getWorksTrackHeightVh(cardCount: number) {
  return WORKS_TRACK_VH_PER_PEEL * Math.max(cardCount - 1, 1);
}

// One ScrollTrigger on the track (reference interaction data): runs from the
// track's top meeting the viewport top to its bottom meeting the viewport
// bottom, with a 0.8s scrub lag.
export const WORKS_SCROLL_START = "top top";
export const WORKS_SCROLL_END = "bottom bottom";
export const WORKS_SCRUB_S = 0.8;

// Every step in the reference timeline lasts 0.5s on a linear ease; the
// timeline's own length is just the scrub's yardstick.
export const WORKS_STEP_DURATION_S = 0.5;
export const WORKS_STEP_EASE = "none";

// Cards behind the front one rest pre-offset and shrunk, so a ~20px strip of
// each shows beneath the front card. A card's slot is its distance from the
// front (0 = front): each slot steps down 40px and shrinks by 6%. The
// reference's four cards give 0/1, 40/0.94, 80/0.88 and 120/0.82.
const WORKS_SLOT_OFFSET_Y = 40;
const WORKS_SLOT_SHRINK = 0.06;
// Each peeled card pushes the cards behind it a further 20px down their slot.
const WORKS_PEEL_SHIFT_Y = 20;

const round = (value: number) => Math.round(value * 100) / 100;

export function getStackInitial(slot: number) {
  return {
    y: WORKS_SLOT_OFFSET_Y * slot,
    scale: round(1 - WORKS_SLOT_SHRINK * slot),
  };
}

// The front card lifts out and tilts away.
export const WORKS_PEEL_Y_PERCENT = -120;
export const WORKS_PEEL_ROTATE_X_DEG = 45;

// Timeline steps, in order: one per card that peels away. At `at`, card
// `peel` lifts away while each card in `forward` steps to its next resting
// offset/scale. The reference's three steps start at 0.1s, 0.61s and 1.12s.
const WORKS_FIRST_STEP_AT_S = 0.1;
const WORKS_STEP_GAP_S = 0.51;

export function getTimelineSteps(cardCount: number) {
  return Array.from({ length: Math.max(cardCount - 1, 0) }, (_, i) => {
    const peeled = i + 1;
    return {
      at: round(WORKS_FIRST_STEP_AT_S + WORKS_STEP_GAP_S * i),
      peel: i,
      forward: Array.from({ length: cardCount - peeled }, (_, n) => {
        const slot = n;
        return {
          card: peeled + n,
          y:
            slot === 0
              ? 0
              : WORKS_SLOT_OFFSET_Y * slot + WORKS_PEEL_SHIFT_Y * peeled,
          scale: round(1 - WORKS_SLOT_SHRINK * slot),
        };
      }),
    };
  });
}

// Header reveal — heading char by char through SplitText masks, played once
// when the heading's top reaches 90% of the viewport (same values as the
// Steps header, kept local so each section can be tuned on its own), then the
// sticker pops in: opacity and scale 0.5 -> 1 at 1s, back.out.
export const WORKS_REVEAL_SCROLL_START = "top 90%";
export const WORKS_TITLE_REVEAL_DURATION_S = 1;
export const WORKS_TITLE_REVEAL_STAGGER_AMOUNT_S = 0.5;
export const WORKS_TITLE_REVEAL_EASE = "back.inOut";
export const WORKS_BADGE_REVEAL_START_S = 1;
export const WORKS_BADGE_REVEAL_DURATION_S = 0.6;
export const WORKS_BADGE_REVEAL_FROM_SCALE = 0.5;
export const WORKS_BADGE_REVEAL_EASE = "back.out";

import { ROUTES } from "@/constants/routes";
import { IPolicySection } from "./privacy-policy.interface";

export const PRIVACY_CAPTION_PREFIX = "Pay Slice ";
export const PRIVACY_CAPTION_EMPHASIS = "(Android)";
export const PRIVACY_CAPTION_SUFFIX = " App";

export const PRIVACY_TITLE = "Privacy Policy";
export const PRIVACY_LAST_UPDATED = "October 29, 2026";

export const PRIVACY_CONTACT_EMAIL = "contact.ahmerdock@gmail.com";

export const PRIVACY_INTRO =
  'Pay Slice ("the app") is an expense planning app for Android, developed by Ahmer Dock ("I", "me"). This policy explains what information the app handles.';

export const PRIVACY_SUMMARY_LABEL = "In short";
export const PRIVACY_SUMMARY =
  "Pay Slice does not collect your personal information. Each time you open it, it sends one anonymous launch event, described below.";

export const PRIVACY_SECTIONS: IPolicySection[] = [
  {
    title: "Information the app handles",
    paragraphs: [
      "You enter a monthly income and a list of categories with percentages. This data is saved only on your device, in the app's private storage. It is never sent to me or to any server, and I cannot see it.",
    ],
  },
  {
    title: "Information I do not collect",
    listIntro: "Pay Slice does not:",
    list: [
      "require an account or login",
      "collect your name, email address, location, contacts, photos, or hardware or advertising identifiers",
      "use advertising or crash-reporting services",
      "show ads",
      "track you across apps or websites",
      "sell your data or share it with third parties, other than the anonymous launch event described below",
    ],
  },
  {
    title: "In-app purchases (tips)",
    paragraphs: [
      "The Help Me tab lets you leave an optional one-time tip. Purchases are processed entirely by Google Play. I do not receive or store your payment details. Google's handling of that information is covered by the Google Play Terms of Service and the Google Privacy Policy. Tips do not unlock any features.",
    ],
  },
  {
    title: "Internet access",
    paragraphs: [
      "The app requests internet permission only so that Google Play can process tips, so that the links in Settings (my GitHub, LinkedIn and website) can open, and so that it can send the anonymous launch event described below. Tapping a link opens it in your browser, and that site's own privacy policy applies from then on.",
    ],
  },
  {
    title: "Anonymous usage analytics",
    paragraphs: [
      "Each time you open the app, it sends a small event to Expo's analytics service (Expo Application Services). The event contains a randomly generated installation identifier, the app version, the Android version and the app's project ID. It contains no name, email, income, categories or location, and it is not used to identify you or for advertising. I use it only to count app launches and see which versions are in use. Expo processes it on my behalf under [Expo's privacy policy](https://expo.dev/privacy).",
    ],
  },
  {
    title: "Data deletion",
    paragraphs: [
      "Because your data exists only on your device, you control it fully. Uninstalling the app, or clearing its storage in Android settings, permanently deletes everything the app has saved. The anonymous launch events already sent contain no personal information and are not linked to you. The app also disables Android's cloud backup of its data, so nothing is copied to your Google account.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "Pay Slice is not directed at children under 13, and I do not knowingly collect personal information from anyone.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "If this policy changes, I will update the date at the top of this page. Continued use of the app after a change means you accept the updated policy.",
    ],
  },
];

export const PRIVACY_CONTACT_TITLE = "Contact";
export const PRIVACY_CONTACT_TEXT =
  "If you have questions about this policy, contact me at";

export const PRIVACY_CTA_LABEL = "Back to Home";
export const PRIVACY_CTA_HREF = ROUTES.HOME;

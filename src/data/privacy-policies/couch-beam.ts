import { CONTACT_EMAIL } from "@/constants";
import { IPrivacyPolicy } from "@/interfaces";

export const COUCH_BEAM_POLICY: IPrivacyPolicy = {
  captionPrefix: "Couch Beam ",
  captionEmphasis: "(Android)",
  captionSuffix: " App",
  lastUpdated: "November 13, 2026",
  intro:
    'Couch Beam ("the app") is a remote control app for Android TV and Google TV devices. It is developed by Ahmer Dock ("we", "us"). This policy explains what information the app handles and why.',
  summary: [
    "Couch Beam has no accounts, no advertising and no social features.",
    "We don't sell your data and we don't share it for advertising.",
    "Your TV pairing details stay on your phone.",
    "The app sends a small amount of anonymous usage and diagnostic data to Expo's analytics service, described below.",
  ],
  sections: [
    {
      title: "Information the app handles",
      listIntro: "Stored only on your device:",
      list: [
        "TV pairing credentials. When you pair with a TV, the app stores the security certificate and keys needed to reconnect. They are kept in your device's secure storage and are never sent to us or to any third party.",
        "Saved TVs and app preferences. The names and network addresses of TVs you've paired, and your settings, are stored locally on your device.",
      ],
      closing: [
        "You can remove this data at any time by removing a TV in the app, clearing the app's storage, or uninstalling the app.",
      ],
    },
    {
      title: "Local network communication",
      paragraphs: [
        "The app discovers and talks to your TV over your local network (Wi-Fi). This traffic goes directly between your phone and your TV. We don't receive it, and it doesn't pass through our servers. The app uses local network access only for this purpose, and uses the internet only for the anonymous usage data and purchases described below. It does not access your location, contacts, camera, microphone, photos or files.",
      ],
    },
    {
      title: "Anonymous usage and diagnostic data",
      paragraphs: [
        "The app uses Expo Insights, a service provided by Expo (650 Industries, Inc.), to understand how the app is used and how stable it is.",
      ],
      listIntro: "This may include:",
      list: [
        "App launch events",
        "App version, operating system and version, and device type",
        "A randomly generated identifier for the app installation",
      ],
      closing: [
        "This data is not linked to your name, email address or any account, and we don't use it to identify you. It is processed by Expo under [Expo's privacy policy](https://expo.dev/privacy).",
      ],
    },
    {
      title: "Purchases",
      paragraphs: [
        "The app offers optional in-app purchases to support the developer. Payments are processed entirely by Google Play. We never receive or store your payment details, such as your card number. We may receive confirmation that a purchase was completed.",
      ],
    },
    {
      title: "How we use information",
      paragraphs: [
        "We use the anonymous data above only to maintain, fix and improve the app. We don't use it for advertising, profiling or selling to anyone.",
      ],
    },
    {
      title: "Sharing",
      listIntro:
        "We don't sell or rent your information. The only third parties involved are:",
      list: [
        "Expo, which receives the anonymous usage data described above.",
        "Google Play, which processes purchases and distributes the app, under Google's own privacy policy.",
      ],
      closing: [
        "We may also disclose information if required to do so by law.",
      ],
    },
    {
      title: "Data retention and deletion",
      paragraphs: [
        "Data stored on your device remains until you delete it or uninstall the app. Anonymous usage data held by Expo is retained according to Expo's policies. Because this data isn't tied to your identity, we can't look up or delete it for an individual user. You can limit it by uninstalling the app.",
      ],
    },
    {
      title: "Children's privacy",
      paragraphs: [
        "Couch Beam is not directed at children under 13, and we don't knowingly collect personal information from children.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "Pairing credentials are kept in your device's secure storage, and communication with your TV is encrypted. No method of storage or transmission is completely secure, but we take reasonable steps to protect the information the app handles.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Depending on where you live (for example under the GDPR or CCPA), you may have rights to access, correct or delete personal information. We don't hold personal information that identifies you, but if you have a question or request, contact us using the details below.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        'We may update this policy from time to time. The "Last updated" date at the top shows when it last changed. Continued use of the app after a change means you accept the updated policy.',
      ],
    },
  ],
  contactText: "If you have questions about this policy, contact us at",
  contactEmail: CONTACT_EMAIL,
};

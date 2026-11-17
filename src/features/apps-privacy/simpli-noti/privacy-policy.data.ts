import { IPrivacyPolicy } from "../privacy-policy.interface";

export const SIMPLI_NOTI_POLICY: IPrivacyPolicy = {
  captionPrefix: "Simpli Noti ",
  captionEmphasis: "(Android)",
  captionSuffix: " App",
  lastUpdated: "November 17, 2026",
  intro:
    'Simpli Noti ("the app", "we", "us") is a reminder app for Android, developed by Ahmer Dock. This policy explains what information the app handles, and what it does not.',
  summary: [
    "Your reminders are stored only on your device. We never receive them.",
    "The app has no accounts, no ads and no tracking for advertising.",
    "The app collects limited, anonymous usage analytics to help us understand how it is used.",
  ],
  sections: [
    {
      title: "Information stored on your device",
      paragraphs: [
        "The app saves your reminders (title, date, time and repeat setting) and your preferences, such as your theme choice and which tips you have seen. This information stays on your device. We cannot see it, and it is not uploaded to any server. Android may include app data in device backups, but this app turns that off, so your reminders are not backed up to the cloud. If you uninstall the app, this data is deleted.",
      ],
    },
    {
      title: "Information we collect",
      listIntro:
        'The app collects limited data through the Expo analytics service ("Expo Insights"), which is used for analytics:',
      list: [
        "App interactions: basic usage events, such as when the app is opened.",
        "Device or other identifiers: an anonymous identifier generated for the app installation.",
      ],
      closing: [
        "We use this data only for analytics, to understand how the app is used and to improve it. It is not linked to your name, email address or any account, because the app has none. We do not use it for advertising and we do not sell it.",
      ],
    },
    {
      title: "Software updates",
      paragraphs: [
        "The app checks for updates to its code through Expo's update service (EAS Update). To deliver the right update, the app sends technical information such as the app version, runtime version and platform to Expo. No personal information is included.",
      ],
    },
    {
      title: "Permissions",
      list: [
        "Notifications: needed to show your reminders. On Android 13 and later, the app asks for your permission before it sends any notification.",
        "Run at startup (boot completed): needed to re-schedule your reminders after your device restarts, since Android clears scheduled alarms on restart. It also re-schedules them after an app update or when the device clock or time zone changes.",
        "Internet access: needed for the analytics and update checks above, and for the in-app purchases below.",
        "Vibrate: used when a reminder notification fires.",
      ],
      closing: [
        "The app does not access your location, contacts, camera, microphone, photos or files.",
      ],
    },
    {
      title: "In-app purchases",
      paragraphs: [
        "The Help Me section lets you optionally support the app with a one-time tip. Purchases are processed entirely by Google Play. We do not receive or store your payment details. We only receive confirmation from Google Play that a purchase was completed. Google's handling of your payment information is governed by the Google Play Terms of Service and Google Privacy Policy.",
      ],
    },
    {
      title: "Third-party services",
      listIntro:
        "The app uses the following third-party services, each with its own privacy policy:",
      list: [
        "Expo (analytics and updates): [https://expo.dev/privacy](https://expo.dev/privacy)",
        "Google Play Services / Google Play Billing (purchases and app distribution): [https://policies.google.com/privacy](https://policies.google.com/privacy)",
      ],
    },
    {
      title: "Links to other sites",
      paragraphs: [
        "The app contains links to external pages, such as a feedback form (Google Forms), the Google Play store listing and the developer's website and social profiles. These sites have their own privacy practices, and we are not responsible for them. If you submit the feedback form, the information you enter there is handled under Google's policies, and we will use it only to respond to you and improve the app.",
      ],
    },
    {
      title: "Data sharing",
      paragraphs: [
        "We do not sell your data and we do not share it for advertising. The only parties that handle data are the service providers listed above, acting on our behalf.",
      ],
    },
    {
      title: "Data security",
      paragraphs: [
        "Analytics and update traffic is sent over encrypted (HTTPS) connections. Your reminders never leave your device.",
      ],
    },
    {
      title: "Your choices and data deletion",
      list: [
        "You can disable notifications at any time in your Android system settings.",
        "You can delete all locally stored reminders and preferences by uninstalling the app or clearing its storage in Android settings.",
        "Because analytics data is anonymous and not linked to an account or identity, we cannot look up or delete data for a specific person. If you have questions about it, contact us at the address below.",
      ],
    },
    {
      title: "Children's privacy",
      paragraphs: [
        "The app is not directed at children under 13, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        'We may update this policy from time to time. When we do, we will change the "Last updated" date above. Material changes will be reflected in this page. Continuing to use the app after a change means you accept the updated policy.',
      ],
    },
  ],
  contactText:
    "If you have any questions about this privacy policy, contact Ahmer Dock at",
  contactEmail: "contact.ahmerdock@gmail.com",
};

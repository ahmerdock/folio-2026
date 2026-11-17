import type { Metadata } from "next";
import { SimpliNotiPrivacy } from "@/features";

export const metadata: Metadata = {
  title: "Simpli Noti Privacy Policy | Ahmer Dock",
  description:
    "Simpli Noti stores your reminders only on your device. Read how the app handles your data, including limited anonymous usage analytics.",
  alternates: { canonical: "/apps-privacy/simpli-noti" },
};

export default function Page() {
  return <SimpliNotiPrivacy />;
}

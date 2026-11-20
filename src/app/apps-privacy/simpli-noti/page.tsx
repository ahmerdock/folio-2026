import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { SIMPLI_NOTI_POLICY } from "@/data/privacy-policies";
import { PrivacyPolicyPage } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Simpli Noti Privacy Policy | Ahmer Dock",
  description:
    "Simpli Noti stores your reminders only on your device. Read how the app handles your data, including limited anonymous usage analytics.",
  path: `${ROUTES.APPS_PRIVACY}/simpli-noti`,
});

export default function Page() {
  return <PrivacyPolicyPage policy={SIMPLI_NOTI_POLICY} />;
}

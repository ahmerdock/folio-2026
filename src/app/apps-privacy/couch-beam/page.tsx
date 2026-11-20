import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { COUCH_BEAM_POLICY } from "@/data/privacy-policies";
import { PrivacyPolicyPage } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Couch Beam Privacy Policy | Ahmer Dock",
  description:
    "Couch Beam has no accounts, no advertising and no social features. Read how the app handles your data, including anonymous usage and diagnostic data.",
  path: `${ROUTES.APPS_PRIVACY}/couch-beam`,
});

export default function Page() {
  return <PrivacyPolicyPage policy={COUCH_BEAM_POLICY} />;
}

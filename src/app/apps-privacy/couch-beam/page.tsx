import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { COUCH_BEAM_POLICY } from "@/data/privacy-policies";
import { PrivacyPolicyPage } from "@/features";

export const metadata: Metadata = {
  title: "Couch Beam Privacy Policy | Ahmer Dock",
  description:
    "Couch Beam has no accounts, no advertising and no social features. Read how the app handles your data, including anonymous usage and diagnostic data.",
  alternates: { canonical: `${ROUTES.APPS_PRIVACY}/couch-beam` },
};

export default function Page() {
  return <PrivacyPolicyPage policy={COUCH_BEAM_POLICY} />;
}

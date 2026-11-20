import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { PAY_SLICE_POLICY } from "@/data/privacy-policies";
import { PrivacyPolicyPage } from "@/features";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pay Slice Privacy Policy | Ahmer Dock",
  description:
    "Pay Slice does not collect your personal information. Read how the app handles your data, including an anonymous launch event.",
  path: `${ROUTES.APPS_PRIVACY}/pay-slice`,
});

export default function Page() {
  return <PrivacyPolicyPage policy={PAY_SLICE_POLICY} />;
}

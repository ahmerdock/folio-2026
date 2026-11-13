import type { Metadata } from "next";
import { CouchBeamPrivacy } from "@/features";

export const metadata: Metadata = {
  title: "Couch Beam Privacy Policy | Ahmer Dock",
  description:
    "Couch Beam has no accounts, no advertising and no social features. Read how the app handles your data, including anonymous usage and diagnostic data.",
  alternates: { canonical: "/apps-privacy/couch-beam" },
};

export default function Page() {
  return <CouchBeamPrivacy />;
}

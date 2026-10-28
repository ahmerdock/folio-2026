import type { Metadata } from "next";
import { PaySlicePrivacy } from "@/features";

export const metadata: Metadata = {
  title: "Pay Slice Privacy Policy | Ahmer Dock",
  description:
    "Pay Slice does not collect, store on a server, or share your personal data. Read how the app handles your information.",
  alternates: { canonical: "/apps-privacy/pay-slice" },
};

export default function Page() {
  return <PaySlicePrivacy />;
}

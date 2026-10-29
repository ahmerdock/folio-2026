import type { Metadata } from "next";
import { PaySlicePrivacy } from "@/features";

export const metadata: Metadata = {
  title: "Pay Slice Privacy Policy | Ahmer Dock",
  description:
    "Pay Slice does not collect your personal information. Read how the app handles your data, including an anonymous launch event.",
  alternates: { canonical: "/apps-privacy/pay-slice" },
};

export default function Page() {
  return <PaySlicePrivacy />;
}

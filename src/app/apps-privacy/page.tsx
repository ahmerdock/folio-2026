import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { AppsPrivacy } from "@/features";

export const metadata: Metadata = {
  title: "App Privacy Policies | Ahmer Dock",
  description:
    "Privacy policies for the apps I publish: Pay Slice, Couch Beam and Simpli Noti.",
  alternates: { canonical: ROUTES.APPS_PRIVACY },
};

export default function Page() {
  return <AppsPrivacy />;
}

import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { Works } from "@/features";

export const metadata: Metadata = {
  title: "Works | Ahmer Dock",
  description:
    "Products shipped end to end across the frontend, the backend, and the app stores.",
  alternates: { canonical: ROUTES.WORKS },
};

export default function Page() {
  return <Works />;
}

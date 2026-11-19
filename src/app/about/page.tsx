import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { About } from "@/features";

export const metadata: Metadata = {
  title: "About | Ahmer Dock",
  description:
    "Full stack developer taking products from idea to launch across the frontend, the backend, and the app stores.",
  alternates: { canonical: ROUTES.ABOUT },
};

export default function Page() {
  return <About />;
}

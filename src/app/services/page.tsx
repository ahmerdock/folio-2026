import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { Services } from "@/features";

export const metadata: Metadata = {
  title: "Services | Ahmer Dock",
  description:
    "Frontend, backend, mobile and team leadership: full stack development from the first commit to launch.",
  alternates: { canonical: ROUTES.SERVICES },
};

export default function Page() {
  return <Services />;
}

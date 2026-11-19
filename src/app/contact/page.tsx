import type { Metadata } from "next";
import { ROUTES } from "@/constants/routes";
import { Contact } from "@/features";

export const metadata: Metadata = {
  title: "Contact | Ahmer Dock",
  description:
    "Get in touch about a frontend, backend or mobile project, or ask for a quote.",
  alternates: { canonical: ROUTES.CONTACT },
};

export default function Page() {
  return <Contact />;
}

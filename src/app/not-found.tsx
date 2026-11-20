import type { Metadata } from "next";
import { NotFound } from "@/features";

export const metadata: Metadata = {
  title: "Page Not Found | Ahmer Dock",
  description: "This page does not exist. Head back to the home page to see the work.",
  robots: { index: false },
};

export default function NotFoundPage() {
  return <NotFound />;
}

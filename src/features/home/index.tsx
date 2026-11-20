import {
  ClientsFeedback,
  ExpertSolutions,
  Quotes,
  TrustedFounders,
} from "@/features/components";
import {
  AboutMe,
  FeaturedWorks,
  Hero,
  PlayReel,
  Progress,
  Steps,
} from "./components";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutMe />
      <Progress />
      <Steps />
      <FeaturedWorks />
      <Quotes />
      <ExpertSolutions />
      <PlayReel />
      <TrustedFounders />
      <ClientsFeedback />
    </main>
  );
}

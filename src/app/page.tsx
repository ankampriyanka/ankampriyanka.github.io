import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ResearchHighlights from "@/components/sections/ResearchHighlights";
import ExperienceTimeline from "@/components/sections/ExperienceTimelines";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedProjects />

        <ResearchHighlights />

        <ExperienceTimeline />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceTimeline from "@/components/sections/ExperienceTimelines";
import ResearchHighlights from "@/components/sections/ResearchHighlights";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedProjects />

        <ExperienceTimeline />

        <ResearchHighlights />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
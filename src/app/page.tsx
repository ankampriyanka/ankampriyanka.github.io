import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedProjects />
      </main>
    </>
  );
}
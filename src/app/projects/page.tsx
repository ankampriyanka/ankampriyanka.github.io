import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/project/ProjectCard";
import AcademicPortfolio from "@/components/portfolio/AcademicPortfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import PageNavigation from "@/components/layout/PageNavigation";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <><Navbar />
      <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-white dark:text-[#4E537D]">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Selected professional projects, followed by academic AI/ML work and doctoral research."
        />

        <section aria-labelledby="selected-projects">
          <h2 id="selected-projects" className="mb-8 text-3xl font-bold">
            Selected Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <AcademicPortfolio />
      </Container>
    </main>
      <Footer /></>
  );
}

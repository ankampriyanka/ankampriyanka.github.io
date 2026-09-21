import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/project/ProjectCard";
import AcademicPortfolio from "@/components/portfolio/AcademicPortfolio";
import PageNavigation from "@/components/layout/PageNavigation";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] py-24 text-[#F5F1EA]">
        <Container>
          <header className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F39A3F]">Projects</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Applied AI & Engineering Work</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A9A39A]">
              Selected implementations and prototypes demonstrating how AI governance, safety, assurance and applied ML concepts are translated into working artifacts.
            </p>
          </header>

          <section className="mt-16" aria-labelledby="applied-projects">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A3F]">Implementation Portfolio</p>
              <h2 id="applied-projects" className="mt-2 text-3xl font-bold">Applied projects</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#77736D]">Working tools, prototypes and applied research implementations.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>

          <section className="mt-20" aria-labelledby="academic-work">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F39A3F]">Academic Portfolio</p>
              <h2 id="academic-work" className="mt-2 text-3xl font-bold">Academic & doctoral work</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#77736D]">Coursework, learning artifacts and doctoral research context are kept separate from the implementation portfolio.</p>
            </div>
            <AcademicPortfolio />
          </section>

          <PageNavigation current="/projects" />
        </Container>
      </main>
      <Footer />
    </>
  );
}

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Selected projects across Responsible AI, AI Safety, governance and applied AI."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
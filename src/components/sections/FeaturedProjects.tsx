import Container from "@/components/layout/Container";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/lib/helpers";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="bg-slate-950 py-24">
      <Container>
        <SectionHeading
          title="Selected Projects"
          subtitle="Applied systems and research prototypes focused on Responsible AI, AI Safety, governance and technical innovation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
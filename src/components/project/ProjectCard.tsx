import Link from "next/link";
import Card from "@/components/ui/Card";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex h-full flex-col">
        <h3 className="text-xl font-semibold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-3 flex-grow text-gray-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={project.github}
          className="mt-6 font-medium text-cyan-600 hover:underline"
        >
          View Project →
        </Link>
      </div>
    </Card>
  );
}
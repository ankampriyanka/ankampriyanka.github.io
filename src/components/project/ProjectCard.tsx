import Card from "@/components/ui/Card";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
            {project.category}
          </span>

          <span className="text-sm text-gray-500">
            {project.status}
          </span>

        </div>

        <h3 className="text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="text-gray-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-gray-100 px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </Card>
  );
}
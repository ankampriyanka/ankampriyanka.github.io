import Card from "@/components/ui/Card";
import { Project } from "@/types/project";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#C0CAD6] bg-[#EBEEF3] px-3 py-1 text-xs font-medium text-[#4E537D]">{project.category}</span>
          <span className="text-xs font-medium text-slate-500">{project.status}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#4E537D]">{project.title}</h3>
        <p className="mt-3 flex-grow text-sm leading-7 text-slate-600">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-lg bg-[#EBEEF3] px-2.5 py-1 text-xs text-slate-700">{tech}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}
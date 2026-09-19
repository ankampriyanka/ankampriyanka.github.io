import Card from "@/components/ui/Card";
import { Project } from "@/types/project";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#3A3A3A] bg-[#181818] px-3 py-1 text-xs font-medium text-[#F39A3F]">{project.category}</span>
          <span className="text-xs font-medium text-[#77736D]">{project.status}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#F5F1EA]">{project.title}</h3>
        <p className="mt-3 flex-grow text-sm leading-7 text-[#A9A39A]">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-lg bg-[#181818] px-2.5 py-1 text-xs text-[#A9A39A]">{tech}</span>)}</div>
      </div>
    </Card>
  );
}
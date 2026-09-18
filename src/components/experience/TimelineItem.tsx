import { Experience } from "@/types/experience";

type TimelineItemProps = { experience: Experience };

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-[#A7E4E9] pl-8 pb-10">
      <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-white bg-[#4E537D]" />
      <h3 className="text-xl font-semibold text-[#4E537D]">{experience.role}</h3>
      <p className="font-medium text-[#4E537D]">{experience.company}</p>
      <p className="text-sm text-slate-500">{experience.duration} • {experience.location}</p>
      <p className="mt-4 leading-7 text-slate-600">{experience.description}</p>
      <div className="mt-6">
        <h4 className="mb-3 text-lg font-semibold text-[#4E537D]">Key Contributions</h4>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">{experience.achievements.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
      {experience.technologies && <div className="mt-4 flex flex-wrap gap-2">{experience.technologies.map((tech) => <span key={tech} className="rounded-full bg-[#A7E4E9] px-3 py-1 text-sm text-[#4E537D]">{tech}</span>)}</div>}
    </div>
  );
}
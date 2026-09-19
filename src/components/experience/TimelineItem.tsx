import { Experience } from "@/types/experience";

type TimelineItemProps = { experience: Experience };

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-[#F39A3F] pl-8 pb-10">
      <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-[#0B0B0B] bg-[#F39A3F]" />
      <h3 className="text-xl font-semibold text-[#F5F1EA]">{experience.role}</h3>
      <p className="font-medium text-[#F39A3F]">{experience.company}</p>
      <p className="text-sm text-[#77736D]">{experience.duration} • {experience.location}</p>
      <p className="mt-4 leading-7 text-[#A9A39A]">{experience.description}</p>
      <div className="mt-6">
        <h4 className="mb-3 text-lg font-semibold text-[#F5F1EA]">Key Contributions</h4>
        <ul className="list-disc space-y-2 pl-6 text-[#A9A39A]">{experience.achievements.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
      {experience.technologies && <div className="mt-4 flex flex-wrap gap-2">{experience.technologies.map((tech) => <span key={tech} className="rounded-full border border-[#3A3A3A] bg-[#111111] px-3 py-1 text-sm text-[#A9A39A]">{tech}</span>)}</div>}
    </div>
  );
}
import { Experience } from "@/types/experience";

type TimelineItemProps = {
  experience: Experience;
};

export default function TimelineItem({
  experience,
}: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-cyan-500 pl-8 pb-10">
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-cyan-500" />

      <h3 className="text-xl font-semibold">
        {experience.role}
      </h3>

      <p className="text-cyan-600 font-medium">
        {experience.company}
      </p>

      <p className="text-sm text-gray-500">
        {experience.duration} • {experience.location}
      </p>

      <p className="mt-4 text-gray-600">
        {experience.description}
      </p>

    <div className="mt-6">
    <h4 className="font-semibold text-lg mb-3">
        Key Contributions
    </h4>

    <ul className="list-disc pl-6 space-y-2 text-gray-600">
        {experience.achievements.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    </div>
      {experience.technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
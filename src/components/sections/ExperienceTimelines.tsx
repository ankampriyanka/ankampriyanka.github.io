import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/experience/TimelineItem";
import { experiences } from "@/data/experienceTimeline";

export default function ExperienceTimeline() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Professional Journey"
          subtitle="A snapshot of my career in engineering, program management, and Responsible AI."
        />

        <div className="mt-12">
          {experiences.map((experience) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
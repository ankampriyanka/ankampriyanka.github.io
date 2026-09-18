import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/experience/TimelineItem";
import { experiences } from "@/data/experienceTimeline";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-white py-20">
      <Container>
        <SectionHeading title="Professional Journey" subtitle="14+ years across engineering, program management, product operations and Responsible AI." />
        <div className="mt-10">
          {experiences.map((experience) => <TimelineItem key={experience.id} experience={experience} />)}
        </div>
      </Container>
    </section>
  );
}
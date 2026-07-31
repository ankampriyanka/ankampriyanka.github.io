import Container from "@/components/layout/Container";
import ResearchCard from "@/components/research/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { research } from "@/data/research";

export default function ResearchHighlights() {
  // Display only featured research items
  const featuredResearch = research.filter(
    (item) => item.featured
  );

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Research Highlights"
          subtitle="Current research focused on Responsible AI, AI Safety, governance, and trustworthy AI systems."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredResearch.map((item) => (
            <ResearchCard
              key={item.id}
              research={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/layout/Container";
import ResearchCard from "@/components/research/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { research } from "@/data/research";
import { getFeaturedResearch } from "@/lib/helpers";

export default function ResearchHighlights() {
  const featuredResearch = getFeaturedResearch();

  return (
    <section
      id="research"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeading
          title="Research Highlights"
          subtitle="Exploring Responsible AI, AI Safety, governance frameworks, and trustworthy AI systems through applied research and practical engineering."
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
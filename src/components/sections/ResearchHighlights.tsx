import Container from "@/components/layout/Container";
import ResearchCard from "@/components/research/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedResearch } from "@/lib/helpers";

export default function ResearchHighlights() {
  const featuredResearch = getFeaturedResearch();
  return (
    <section id="research" className="bg-[#0B0B0B] py-24">
      <Container>
        <SectionHeading title="Featured Research" subtitle="Research on Responsible AI, AI Safety, governance frameworks and trustworthy AI systems." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featuredResearch.map((item) => <ResearchCard key={item.id} research={item} />)}</div>
      </Container>
    </section>
  );
}
import Container from "@/components/layout/Container";
import ResearchCard from "@/components/research/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Container>
        <SectionHeading
          title="Research"
          subtitle="Research and exploration in Responsible AI, AI Safety, governance and trustworthy AI systems."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {research.map((item) => (
            <ResearchCard
              key={item.id}
              research={item}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
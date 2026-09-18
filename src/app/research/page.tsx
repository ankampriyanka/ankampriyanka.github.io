import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ResearchCard from "@/components/research/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PageNavigation from "@/components/layout/PageNavigation";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (
    <><Navbar />
      <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-white dark:text-[#4E537D]">
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
        <PageNavigation current="/research" />
      </Container>
    </main>
      <Footer /></>
  );
}
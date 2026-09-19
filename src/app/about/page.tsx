import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageNavigation from "@/components/layout/PageNavigation";

export default function AboutPage() {
  return (<><Navbar /><main className="min-h-screen bg-[#050505] py-24 text-[#F5F1EA]"><Container>
    <SectionHeading title="About Me" subtitle="AI Governance, Responsible AI, AI Assurance and enterprise transformation." />
    <div className="mt-12 max-w-4xl space-y-6 text-lg leading-8 text-[#A9A39A]">
      <p>AI Governance professional with 14+ years of experience across Responsible AI, AI governance, program management, transformation and enterprise delivery. Experienced in translating AI risk principles into governance frameworks, lifecycle controls and evaluation methodologies, with a focus on trustworthy and compliant AI adoption.</p>
      <p>Spearheaded Responsible AI initiatives and conceptualized AI Trust Score methodologies integrating safety, fairness, robustness, explainability, privacy and governance metrics. Proven program management experience across global engineering organizations, driving cross-functional delivery, Agile governance, process improvement and executive reporting, including 25% improvement in delivery predictability and €200K in savings.</p>
      <p>Pursuing a Doctorate in Artificial Intelligence &amp; Machine Learning, with research focused on Responsible AI, AI Governance and trustworthy AI systems.</p>
    </div>
    <PageNavigation current="/about" />
  </Container></main><Footer /></>);
}
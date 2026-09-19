import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import ResearchCard from "@/components/research/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PageNavigation from "@/components/layout/PageNavigation";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (<><Navbar /><main className="min-h-screen bg-[#050505] py-24 text-[#F5F1EA]"><Container>
    <SectionHeading title="Research" subtitle="A portfolio of frameworks, methodologies and applied research exploring how AI risks can be identified, measured, governed and evidenced." />
    <div className="mt-12 grid gap-8 md:grid-cols-2">{research.map((item) => <ResearchCard key={item.id} research={item} />)}</div>
    <section className="mt-16 overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
      <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F39A3F]">Featured Research Framework</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#F5F1EA] md:text-4xl">AI Trust &amp; Risk Taxonomy (AITRT)</h2>
          <p className="mt-5 text-lg leading-8 text-[#A9A39A]">An open, machine-readable knowledge layer connecting AI risks, trust characteristics, lifecycle stages, risk scenarios, controls, metrics, evidence and external AI governance and security frameworks.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[[9,"Trust dimensions"],[7,"AI lifecycle stages"],[21,"Canonical risks"],[15,"Starter controls"]].map(([n,l]) => <div key={l} className="rounded-2xl border border-[#2A2A2A] bg-[#181818] p-5"><p className="text-2xl font-bold text-[#F39A3F]">{n}</p><p className="mt-1 text-sm text-[#A9A39A]">{l}</p></div>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/ankampriyanka/Responsible-AI-RAI-AI-Trust-Risk-Taxonomy" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl bg-[#F39A3F] px-5 py-3 font-semibold text-[#050505] transition hover:bg-[#F6B65B]">Explore AITRT on GitHub →</a>
            <a href="https://github.com/ankampriyanka/Responsible-AI-RAI-AI-Trust-Risk-Taxonomy/blob/main/README.md" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl border border-[#3A3A3A] bg-[#181818] px-5 py-3 font-semibold text-[#F5F1EA] transition hover:border-[#F39A3F] hover:text-[#F39A3F]">Read methodology</a>
          </div>
        </div>
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#181818] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F39A3F]">Relationship-first model</p>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-[#F39A3F] p-4 font-semibold text-[#050505]">Risk</div>
            {["Trust Dimension","Lifecycle Stage","Risk Scenario","Metric","Control","Evidence","External Framework"].map((label) => <div key={label} className="rounded-xl border border-[#2A2A2A] bg-[#111111] px-4 py-3 text-sm font-medium text-[#A9A39A]">Risk → {label}</div>)}
          </div>
          <p className="mt-5 text-sm leading-6 text-[#77736D]">The taxonomy is designed as a relationship and knowledge layer, not as a replacement for NIST AI RMF, MITRE ATLAS, OWASP, ISO/IEC standards or applicable regulation.</p>
        </div>
      </div>
    </section>
    <PageNavigation current="/research" />
  </Container></main><Footer /></>);
}
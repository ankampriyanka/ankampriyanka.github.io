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
      <main className="min-h-screen bg-white py-24 text-slate-900">
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

        <section className="mt-16 overflow-hidden rounded-3xl border border-[#C0CAD6] bg-[#EBEEF3] shadow-[0_18px_45px_rgba(78,83,125,0.10)]">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4E537D]">
                Featured Research Framework
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#4E537D] md:text-4xl">
                AI Trust &amp; Risk Taxonomy (AITRT)
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                An open, machine-readable knowledge layer connecting AI risks,
                trust characteristics, lifecycle stages, risk scenarios,
                controls, metrics, evidence and external AI governance and
                security frameworks.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#C0CAD6] bg-white p-5">
                  <p className="text-2xl font-bold text-[#4E537D]">9</p>
                  <p className="mt-1 text-sm text-slate-600">Trust dimensions</p>
                </div>
                <div className="rounded-2xl border border-[#C0CAD6] bg-white p-5">
                  <p className="text-2xl font-bold text-[#4E537D]">7</p>
                  <p className="mt-1 text-sm text-slate-600">AI lifecycle stages</p>
                </div>
                <div className="rounded-2xl border border-[#C0CAD6] bg-white p-5">
                  <p className="text-2xl font-bold text-[#4E537D]">21</p>
                  <p className="mt-1 text-sm text-slate-600">Canonical risks</p>
                </div>
                <div className="rounded-2xl border border-[#C0CAD6] bg-white p-5">
                  <p className="text-2xl font-bold text-[#4E537D]">15</p>
                  <p className="mt-1 text-sm text-slate-600">Starter controls</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/ankampriyanka/Responsible-AI-RAI-AI-Trust-Risk-Taxonomy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-[#4E537D] px-5 py-3 font-semibold text-white transition hover:bg-[#3f4468]"
                >
                  Explore AITRT on GitHub →
                </a>
                <a
                  href="https://github.com/ankampriyanka/Responsible-AI-RAI-AI-Trust-Risk-Taxonomy/blob/main/README.md"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-[#C0CAD6] bg-white px-5 py-3 font-semibold text-[#4E537D] transition hover:border-[#4E537D]"
                >
                  Read methodology
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C0CAD6] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4E537D]">
                Relationship-first model
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-[#EBEEF3] p-4 font-semibold text-[#4E537D]">
                  Risk
                </div>
                {[
                  "Trust Dimension",
                  "Lifecycle Stage",
                  "Risk Scenario",
                  "Metric",
                  "Control",
                  "Evidence",
                  "External Framework",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#C0CAD6] bg-white px-4 py-3 text-sm font-medium text-slate-600"
                  >
                    Risk → {label}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">
                The taxonomy is designed as a relationship and knowledge layer,
                not as a replacement for NIST AI RMF, MITRE ATLAS, OWASP, ISO/IEC
                standards or applicable regulation.
              </p>
            </div>
          </div>
        </section>
        <PageNavigation current="/research" />
      </Container>
    </main>
      <Footer /></>
  );
}
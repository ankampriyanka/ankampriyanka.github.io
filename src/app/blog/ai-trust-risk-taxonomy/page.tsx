import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageNavigation from "@/components/layout/PageNavigation";

export const metadata = {
  title: "From AI Risks to Evidence: Introducing the AI Trust & Risk Taxonomy (AITRT) | Ankam Priyanka",
  description:
    "A detailed exploration of the AI Trust & Risk Taxonomy, its relationship-first model, and potential applications across AI governance, assurance, trust assessment and automotive AI.",
};

const dimensions = [
  ["01", "Trust dimensions", "Nine trust dimensions spanning safety, security and resilience, reliability, fairness, privacy, transparency, explainability, accountability and human oversight."],
  ["02", "Lifecycle stages", "Seven AI lifecycle stages connecting risks to where they can emerge and where governance decisions and evidence can be created."],
  ["03", "Risk domains", "Seven risk domains providing the initial structure for organizing the canonical risk set."],
  ["04", "Controls, metrics & evidence", "Fifteen starter controls, twelve starter metrics, six scenarios and nine evidence types provide the initial operational vocabulary."],
];

const useCases = [
  ["AI Governance Assessment", "F39A3F", "An AI use case can be mapped to applicable risks, lifecycle stages and trust dimensions, followed by identification of relevant controls, metrics and evidence. This can provide a structured starting point for a governance assessment.", "AI use case → Risks → Controls → Metrics → Evidence"],
  ["Shift-Left AI Assurance", "8F1D14", "The relationship model can help move assurance activities earlier in the lifecycle by connecting requirements and risks to engineering controls, evaluation activities and evidence before deployment.", "Requirement → Risk → Control → Engineering check → Evidence"],
  ["AI Trust Assessment", "F6B65B", "AITRT can provide a structured vocabulary for connecting trust dimensions to measurable metrics and supporting evidence. This complements, rather than replaces, a separate scoring methodology such as an AI Trust Score.", "Trust dimension → Risk → Metric → Evidence → Assessment"],
  ["Automotive / DMS AI", "F5F1EA", "For an automotive Driver Monitoring System, risks can be related to safety, robustness, fairness, privacy or explainability and then connected to evaluation metrics and evidence. This creates a bridge between a taxonomy and an applied trust assessment.", "DMS → Risk → Trust dimension → Metric → Evidence"],
];

export default function AitrtBlogPage() {
  const relationshipModel = [
    "Risk",
    " ├── affects ───────► Trust Dimension",
    " ├── occurs_at ─────► Lifecycle Stage",
    " ├── manifests_as ──► Risk Scenario",
    " ├── measured_by ───► Metric",
    " ├── mitigated_by ──► Control",
    " ├── evidenced_by ─► Evidence Type",
    " └── mapped_to ─────► External Framework",
  ].join("\n");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] py-16 text-[#F5F1EA] sm:py-20">
        <Container>
          <article className="mx-auto max-w-4xl">
            <header className="border-b border-[#2A2A2A] pb-10">
              <Link href="/blog" className="text-sm font-semibold text-[#F39A3F] hover:text-[#F6B65B]">
                ← Research & Perspectives
              </Link>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#F39A3F]">
                AI Governance · Responsible AI · Research Framework
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                From AI Risks to Evidence: Introducing the AI Trust & Risk Taxonomy
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A9A39A]">
                How a relationship-first, machine-readable taxonomy can connect AI risks,
                trust characteristics, lifecycle stages, scenarios, controls, metrics,
                evidence and external governance and security frameworks.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-[#77736D]">
                <span className="rounded-full border border-[#2A2A2A] bg-[#111111] px-3 py-1.5">September 2026</span>
                <span className="rounded-full border border-[#2A2A2A] bg-[#111111] px-3 py-1.5">Research & Perspectives</span>
                <span className="rounded-full border border-[#2A2A2A] bg-[#111111] px-3 py-1.5">10–12 min read</span>
              </div>
            </header>

            <div className="mt-10 space-y-12 text-[17px] leading-8 text-[#A9A39A]">
              <p className="border-l-4 border-[#F39A3F] pl-5 text-xl font-semibold leading-8 text-[#F5F1EA]">
                The question is not only <em>“What risks does this AI system have?”</em>
                It is also: <span className="text-[#F39A3F]">What does each risk affect, where does it occur, how is it measured, what control addresses it, and what evidence demonstrates that it was considered?</span>
              </p>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">1. Why I started with a taxonomy</h2>
                <p className="mt-4">
                  AI governance resources solve different parts of the problem. NIST AI RMF
                  provides a risk-management framework. MITRE ATLAS catalogs adversarial AI/ML
                  tactics and techniques. The OWASP GenAI Security Project addresses application
                  and security risks for generative AI. ISO/IEC standards provide management-system
                  and risk-management requirements and guidance, while regulation establishes legal
                  obligations in applicable jurisdictions.
                </p>
                <p className="mt-4">
                  These resources are valuable precisely because they serve different purposes.
                  The challenge I am exploring is what happens when an organization needs to
                  connect them to a specific AI system, a lifecycle decision, a control,
                  an evaluation metric and evidence.
                </p>
                <p className="mt-4">
                  This led to the idea behind the <strong className="text-[#F5F1EA]">AI Trust & Risk Taxonomy (AITRT)</strong>:
                  not another framework that competes with existing ones, but a relationship
                  and knowledge layer that makes these connections explicit and machine-readable.
                </p>
              </section>

              <section className="rounded-3xl border border-[#2A2A2A] bg-[#111111] p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A3F]">
                  The core idea
                </p>
                <pre className="mt-6 overflow-x-auto rounded-2xl border border-[#2A2A2A] bg-[#050505] p-6 font-mono text-sm leading-7 text-[#F5F1EA]">{relationshipModel}</pre>
                <p className="mt-5 text-sm leading-7 text-[#77736D]">
                  The design principle is relationship-first: the connections are part of the
                  machine-readable model rather than metadata added after the taxonomy is created.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">2. What is inside AITRT v0.1</h2>
                <p className="mt-4">
                  The initial release establishes a conceptual and machine-readable foundation.
                  It currently contains:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {dimensions.map(([number, title, text]) => (
                    <div key={number} className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F39A3F] text-xs font-bold text-[#050505]">{number}</span>
                        <h3 className="font-semibold text-[#F5F1EA]">{title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#A9A39A]">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[#2A2A2A] bg-[#181818] p-6">
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                    {[
                      ["9", "Trust dimensions"], ["7", "Lifecycle stages"], ["21", "Canonical risks"], ["15", "Starter controls"],
                      ["12", "Starter metrics"], ["6", "Risk scenarios"], ["9", "Evidence types"], ["v0.1", "Foundation"],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <p className="text-2xl font-bold text-[#F39A3F]">{value}</p>
                        <p className="mt-1 text-xs leading-5 text-[#77736D]">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">3. Why relationships matter more than a flat list</h2>
                <p className="mt-4">
                  A flat risk list can tell us that data quality, calibration, unsafe failure,
                  adversarial manipulation or documentation deficiency exist. It tells us much less
                  about how those risks travel through the AI lifecycle.
                </p>
                <p className="mt-4">
                  Consider calibration as an example. A calibration-related risk can be associated
                  with reliability and safety, linked to validation and monitoring stages, evaluated
                  through metrics such as Expected Calibration Error or Brier Score, addressed through
                  appropriate controls, and supported by a calibration report or validation evidence.
                </p>
                <p className="mt-4">That creates a traceable chain:</p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#F5F1EA]">
                  {["Risk", "Decision", "Control", "Metric", "Evidence"].map((item, index) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="rounded-full border border-[#3A3A3A] bg-[#181818] px-4 py-2">{item}</span>
                      {index < 4 && <span className="text-[#F39A3F]">→</span>}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">4. How the taxonomy can be used</h2>
                <p className="mt-4">
                  The repository is a foundation, not a finished governance product. The following
                  are application scenarios I am exploring based on the relationships represented in
                  the taxonomy.
                </p>
                <div className="mt-7 grid gap-5">
                  {useCases.map(([title, accent, text, flow]) => (
                    <div key={title} className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">
                      <div className="flex items-start gap-4">
                        <span className="mt-1 h-10 w-1 shrink-0 rounded-full" style={{ backgroundColor: "#" + accent }} />
                        <div>
                          <h3 className="text-xl font-bold text-[#F5F1EA]">{title}</h3>
                          <p className="mt-3 text-[#A9A39A]">{text}</p>
                          <div className="mt-5 rounded-xl border border-[#2A2A2A] bg-[#050505] px-4 py-3 text-sm font-semibold text-[#F6B65B]">{flow}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">5. From taxonomy to governance workflow</h2>
                <p className="mt-4">
                  A machine-readable taxonomy creates an opportunity to move beyond documentation.
                  The same relationships can potentially support assessment workflows, governance
                  tooling, engineering checks, portfolio analytics or graph-based representations.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-5">
                  {["Identify", "Map", "Control", "Measure", "Evidence"].map((item, index) => (
                    <div key={item} className="rounded-xl border border-[#2A2A2A] bg-[#181818] p-4 text-center">
                      <p className="text-xs font-bold text-[#F39A3F]">0{index + 1}</p>
                      <p className="mt-2 text-sm font-semibold text-[#F5F1EA]">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">6. How this connects to my AI Trust Score research</h2>
                <p className="mt-4">
                  AITRT and an AI Trust Score address different layers of the problem. The taxonomy
                  provides a structured vocabulary and relationship model; a trust-scoring methodology
                  can then define how selected metrics and evidence are evaluated and combined for a
                  particular use case.
                </p>
                <p className="mt-4">
                  In my Driver Monitoring System research, for example, trust dimensions such as
                  safety, fairness, robustness, explainability and privacy can be evaluated using
                  application-specific data and metrics. AITRT provides a complementary structure for
                  connecting those risks and measurements to lifecycle context, controls and evidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">7. Framework mapping without replacing the frameworks</h2>
                <p className="mt-4">
                  AITRT is deliberately framework-neutral. NIST AI RMF, MITRE ATLAS, OWASP resources,
                  ISO/IEC standards and applicable regulation remain authoritative sources for their
                  respective purposes.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {["NIST AI RMF", "MITRE ATLAS", "OWASP", "ISO/IEC & Regulation"].map((item) => (
                    <div key={item} className="rounded-xl border border-[#2A2A2A] bg-[#111111] p-4 text-center text-sm font-semibold text-[#F5F1EA]">{item}</div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#77736D]">
                  The current repository describes its initial cross-framework mapping structures as
                  requiring verification, with detailed mappings intended to be expanded and independently
                  verified against authoritative sources.
                </p>
              </section>

              <section className="rounded-3xl border border-[#F39A3F]/25 bg-[#18110B] p-7 sm:p-9">
                <h2 className="text-2xl font-bold text-[#F5F1EA]">8. What AITRT is — and is not</h2>
                <p className="mt-4">
                  AITRT is an open, machine-readable knowledge layer. It is designed to be reusable
                  across AI governance tooling, assessments, engineering workflows and research.
                </p>
                <p className="mt-4">
                  It is <strong className="text-[#F5F1EA]">not</strong> a replacement for NIST AI RMF,
                  MITRE ATLAS, OWASP resources or ISO/IEC standards; it is not a substitute for
                  applicable law or regulation; and it is not a normative certification scheme.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#F5F1EA]">9. What I want to explore next</h2>
                <p className="mt-4">
                  The current release is intentionally a foundation. Future work can explore how the
                  taxonomy performs when applied to concrete AI systems and governance workflows:
                  risk-to-control mapping, evidence management, assurance workflows, AI Trust Score
                  assessments, engineering integrations, graph representations and governance analytics.
                </p>
                <p className="mt-4">
                  The important distinction is between what the repository currently implements and
                  what these relationships could enable. AITRT v0.1 establishes the model; the next
                  research question is how useful that model becomes when it is applied.
                </p>
              </section>

              <section className="border-t border-[#2A2A2A] pt-8">
                <h2 className="text-2xl font-bold text-[#F5F1EA]">Explore the implementation</h2>
                <p className="mt-4">
                  The repository contains the YAML taxonomy, schemas, methodology and architecture
                  documentation, framework mapping structures, examples, validation tooling and tests.
                </p>
                <a
                  href="https://github.com/ankampriyanka/Responsible-AI-RAI-AI-Trust-Risk-Taxonomy"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-xl bg-[#F39A3F] px-5 py-3 text-sm font-semibold text-[#050505] hover:bg-[#F6B65B]"
                >
                  Explore AITRT on GitHub ↗
                </a>
              </section>

              <aside className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 text-sm leading-7 text-[#77736D]">
                <strong className="text-[#F5F1EA]">Research note:</strong> AITRT v0.1 is the initial
                foundation. Its framework mappings are intended to be expanded and independently verified.
                The application scenarios described above are research directions and illustrative uses,
                not claims that the repository already implements a complete governance platform.
              </aside>
            </div>

            <PageNavigation current="/blog" />
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

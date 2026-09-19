import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageNavigation from "@/components/layout/PageNavigation";

const researchPages = {
  "ai-trust-score-dms": {
    eyebrow: "Responsible AI · Automotive AI",
    title: "AI Trust Score for Driver Monitoring Systems",
    intro:
      "A research framework for evaluating the trustworthiness of Driver Monitoring Systems through measurable dimensions spanning safety, fairness, robustness, explainability, privacy and governance.",
    theme: "cyan",
    sections: [
      {
        title: "Research focus",
        body:
          "The research explores how AI trustworthiness can be evaluated for DMS computer-vision systems, particularly under edge-case operating conditions. The work connects technical evaluation with a structured trust assessment rather than treating model accuracy as the only indicator.",
      },
      {
        title: "Trust dimensions",
        body:
          "The research considers safety, fairness, robustness, explainability, privacy and governance as complementary dimensions of trust. The dimensions are intended to make evaluation more explicit about the evidence required for a trustworthy automotive AI system.",
      },
      {
        title: "Evaluation approach",
        body:
          "The research combines image-derived features, baseline machine-learning models and evaluation metrics to examine how measurable technical evidence can contribute to a composite AI Trust Score. Calibration measures such as Expected Calibration Error and Brier Score are included alongside performance-oriented measures.",
      },
      {
        title: "Research boundary",
        body:
          "The available DMS data supports evaluation of several measurable dimensions, while some dimensions require additional evidence or data that are not available in the current dataset. The resulting score should therefore be interpreted as a research assessment, not as a certification or regulatory conclusion.",
      },
    ],
    metrics: ["Safety", "Fairness", "Robustness", "Explainability", "Privacy", "Governance"],
    visual: "dms",
  },
  "ai-safety-risk-classification": {
    eyebrow: "AI Safety · Semantic Analysis",
    title: "AI Safety Risk Classification using Semantic Fields",
    intro:
      "Research exploring semantic representations for identifying and classifying AI safety risks in conversational AI systems.",
    theme: "slate",
    sections: [
      {
        title: "Research problem",
        body:
          "AI safety risks are often described through heterogeneous language: incidents, attack patterns, failure modes, user interactions and system behaviors. This research explores whether semantic representations can provide a more structured way to identify relationships between risk concepts.",
      },
      {
        title: "Semantic field approach",
        body:
          "The research investigates semantic risk fields and embedding-based representations as a way of organizing related risk concepts. The objective is to move beyond isolated keywords toward contextual relationships between risk descriptions.",
      },
      {
        title: "Potential application",
        body:
          "A semantic classification layer could support risk triage, taxonomy discovery and downstream governance workflows. The research remains an exploration of the approach and should not be interpreted as a validated safety classification standard.",
      },
      {
        title: "Next research direction",
        body:
          "Future evaluation can compare semantic representations against labeled risk examples and assess classification quality, ambiguity, coverage and robustness across different risk categories.",
      },
    ],
    metrics: ["Semantic fields", "Embeddings", "Risk classification", "Contextual similarity"],
    visual: "semantic",
  },
  "responsible-ai-governance-automotive": {
    eyebrow: "AI Governance · Automotive",
    title: "Responsible AI Governance for Automotive",
    intro:
      "A lifecycle-oriented research stream examining how AI governance principles can become practical controls, assurance activities and evidence across automotive AI development.",
    theme: "indigo",
    sections: [
      {
        title: "Governance focus",
        body:
          "The research connects Responsible AI principles with the practical realities of engineering organizations: lifecycle decisions, ownership, risk assessment, evaluation, documentation, monitoring and evidence.",
      },
      {
        title: "Lifecycle perspective",
        body:
          "Governance is considered across concept and design, data, development, validation and testing, deployment, operations and monitoring, and retirement. This lifecycle perspective helps connect governance requirements to the point at which evidence and decisions are actually created.",
      },
      {
        title: "Framework alignment",
        body:
          "The research considers established governance and risk-management resources including the EU AI Act, NIST AI RMF and ISO/IEC standards. These resources remain authoritative; the research focuses on how organizations can operationalize relevant principles and controls.",
      },
      {
        title: "Assurance perspective",
        body:
          "A key research direction is shift-left AI assurance: identifying risks and evidence requirements early enough that governance becomes part of engineering workflows rather than a separate activity performed only at release.",
      },
    ],
    metrics: ["Lifecycle controls", "Risk", "Assurance", "Evidence", "Monitoring", "Accountability"],
    visual: "lifecycle",
  },
  "ai-trust-risk-taxonomy": {
    eyebrow: "AI Governance · Open Research Framework",
    title: "AI Trust & Risk Taxonomy (AITRT)",
    intro:
      "An open, machine-readable knowledge layer connecting AI risks, trust characteristics, lifecycle stages, risk scenarios, controls, metrics, evidence and external AI governance and security frameworks.",
    theme: "taxonomy",
    sections: [
      {
        title: "Why the taxonomy",
        body:
          "AITRT is designed as a relationship and knowledge layer between established resources. NIST AI RMF, MITRE ATLAS, OWASP resources, ISO/IEC standards and regulation address different parts of the AI risk landscape; AITRT focuses on making relationships between risks, controls, metrics and evidence explicit and reusable.",
      },
      {
        title: "Core model",
        body:
          "A risk can affect multiple trust dimensions, occur across lifecycle stages, manifest as scenarios, be measured by metrics, mitigated by controls, evidenced by artifacts and mapped to external frameworks. Relationships are therefore first-class data rather than annotations added later.",
      },
      {
        title: "v0.1 foundation",
        body:
          "The current foundation contains 9 trust dimensions, 7 lifecycle stages, 7 risk domains, 21 canonical risks, 15 starter controls, 12 starter metrics, 6 scenarios and 9 evidence types. Framework mappings are explicitly tracked with verification status.",
      },
      {
        title: "Research direction",
        body:
          "The taxonomy can support governance assessments, engineering workflows, evidence management and future graph or API representations. The repository is intentionally framework-neutral and does not claim to replace authoritative standards, frameworks or applicable law.",
      },
    ],
    metrics: ["9 trust dimensions", "7 lifecycle stages", "21 risks", "15 controls", "12 metrics", "9 evidence types"],
    github: "https://github.com/ankampriyanka/Responsible-AI-RAI-AI-Trust-Risk-Taxonomy",
    visual: "taxonomy",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(researchPages).map((slug) => ({ slug }));
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const research = researchPages[slug as keyof typeof researchPages];

  if (!research) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] py-16 text-[#F5F1EA] sm:py-20">
        <Container>
          <article className="mx-auto max-w-5xl">
            <header className="border-b border-[#2A2A2A] pb-10">
              <Link href="/research" className="text-sm font-semibold text-[#F5F1EA] hover:underline">
                ← Research portfolio
              </Link>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#F5F1EA]">{research.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#F5F1EA] sm:text-5xl">
                {research.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A9A39A]">{research.intro}</p>
            </header>

            <section className="mt-10 overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] p-6 sm:p-8">
              {research.visual === "dms" && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1EA]">Trust assessment lens</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["Observe", "Evaluate", "Score"].map((step, i) => (
                      <div key={step} className={`rounded-2xl p-5 ${i === 0 ? "bg-[#F39A3F]" : i === 1 ? "bg-[#111111] border border-[#2A2A2A]" : "bg-[#F39A3F] text-[#050505]"}`}>
                        <span className="text-xs font-bold uppercase tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                        <p className="mt-2 text-lg font-bold">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-[#111111] p-5 text-center font-semibold text-[#F5F1EA]">Evidence → Trust Dimensions → AI Trust Score</div>
                </div>
              )}
              {research.visual === "semantic" && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1EA]">Semantic risk field</p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {["Risk signal", "Context", "Embedding", "Similarity", "Classification"].map((item, i) => (
                      <div key={item} className={`rounded-full border px-5 py-3 text-sm font-semibold ${i === 2 ? "border-[#4E537D] bg-[#F39A3F] text-[#050505]" : "border-[#2A2A2A] bg-[#111111] text-[#F5F1EA]"}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-sm text-[#A9A39A]">Risk language → semantic representation → contextual classification</p>
                </div>
              )}
              {research.visual === "lifecycle" && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1EA]">Governance across the AI lifecycle</p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-4">
                    {["Concept", "Data", "Development", "Validation", "Deployment", "Monitoring", "Evidence", "Decision"].map((item, i) => (
                      <div key={item} className={`rounded-xl border p-4 text-center text-sm font-semibold ${i % 2 === 0 ? "border-[#3A3A3A] bg-[#111111]" : "border-[#F39A3F]/40 bg-[#18120F]"} text-[#F5F1EA]`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {research.visual === "taxonomy" && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1EA]">Relationship-first knowledge layer</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["Trust Dimension", "Lifecycle Stage", "Scenario", "Metric", "Control", "Evidence"].map((item, i) => (
                      <div key={item} className="rounded-xl border border-[#2A2A2A] bg-[#111111] p-4 text-center text-sm font-semibold text-[#F5F1EA]">
                        Risk → {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-[#F39A3F] p-4 text-center text-sm font-semibold text-[#050505]">External Framework Mapping</div>
                </div>
              )}
            </section>

            <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Research dimensions">
              {research.metrics.map((metric, index) => (
                <div
                  key={metric}
                  className={`rounded-2xl border p-5 ${index % 3 === 0 ? "border-[#F39A3F]/40 bg-[#18120F]" : index % 3 === 1 ? "border-[#2A2A2A] bg-[#F3F5F8]" : "border-[#3A3A3A] bg-[#181818]"}`}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#F5F1EA]">Research lens</span>
                  <p className="mt-2 font-semibold text-[#F5F1EA]">{metric}</p>
                </div>
              ))}
            </section>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_280px]">
              <div className="space-y-6">
                {research.sections.map((section, index) => (
                  <section key={section.title} className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-7 shadow-sm">
                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-[#F5F1EA]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-xl font-bold text-[#F5F1EA]">{section.title}</h2>
                        <p className="mt-3 leading-7 text-[#A9A39A]">{section.body}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <aside className="h-fit rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 lg:sticky lg:top-24">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1EA]">Research artifact</p>
                <p className="mt-3 text-sm leading-6 text-[#A9A39A]">
                  This page summarizes the research direction. Detailed notebooks, evidence and implementation artifacts should remain linked to their respective repositories and research outputs.
                </p>
                {"github" in research && research.github ? (
                  <a href={research.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#F39A3F] px-4 py-3 text-sm font-semibold text-[#050505] hover:bg-[#F6B65B]">
                    Open GitHub repository ↗
                  </a>
                ) : null}
              </aside>
            </div>

            <PageNavigation current="/research" />
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
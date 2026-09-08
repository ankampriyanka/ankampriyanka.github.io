import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "How Do You Measure AI Governance Debt? | Ankam Priyanka",
  description:
    "Part 2 of the AI Governance Debt research series: a conceptual model for measuring governance debt through coverage, assessments, controls, evidence, remediation and freshness.",
};

const dimensions = [
  {
    title: "Governance coverage",
    question: "How much of the AI portfolio is known and governed?",
    examples: [
      "Percentage of AI systems inventoried",
      "Percentage with accountable owners",
      "Percentage classified by risk",
      "Percentage covered by applicable governance requirements",
    ],
  },
  {
    title: "Assessment coverage",
    question: "How much of the portfolio has undergone the assessments it requires?",
    examples: [
      "Risk assessment completion",
      "Impact assessment completion",
      "Model evaluation coverage",
      "Third-party AI assessment coverage",
    ],
  },
  {
    title: "Control coverage",
    question: "Are the required controls implemented?",
    examples: [
      "Human oversight",
      "Data governance",
      "Security controls",
      "Transparency and documentation",
      "Monitoring",
      "Incident response",
    ],
  },
  {
    title: "Evidence completeness",
    question: "Can the organization demonstrate that its controls are operating?",
    examples: [
      "Evaluation results",
      "Approvals",
      "Monitoring records",
      "Risk decisions",
      "Test results",
      "Incident records",
      "Remediation evidence",
    ],
  },
  {
    title: "Remediation backlog",
    question: "How much known governance work remains unresolved?",
    examples: [
      "Overdue risk treatments",
      "Failed controls",
      "Unresolved high-risk findings",
      "Expired assessments",
      "Missing documentation",
    ],
  },
  {
    title: "Governance freshness",
    question: "How quickly does governance information become outdated?",
    examples: [
      "Assessment age",
      "Evidence age",
      "Control review frequency",
      "Change in system or model context",
    ],
  },
];

function DebtHighlight() {
  return (
    <strong className="rounded-md bg-amber-100 px-1.5 py-0.5 font-sans text-[0.92em] font-bold text-amber-950 ring-1 ring-inset ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-300/20">
      AI Governance Debt
    </strong>
  );
}

export default function MeasureAIGovernanceDebtPage() {
  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:py-18">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-slate-200 pb-9 dark:border-slate-800">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              AI Governance · Responsible AI · AI Assurance
            </p>
            <p className="mb-3 font-sans text-xs font-semibold text-slate-500 dark:text-slate-400">PART 2 · AI GOVERNANCE DEBT SERIES</p>
            <h1 className="max-w-4xl font-sans text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              How Do You Measure <span className="underline decoration-amber-300 decoration-4 underline-offset-4 dark:decoration-amber-500/70">AI Governance Debt</span>?
            </h1>
            <p className="mt-5 max-w-3xl font-serif text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              Turning a governance gap into something an organization can observe, discuss and act on.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">Research &amp; Perspectives</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">September 2026</span>
            </div>
          </header>

          <div className="font-serif text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-[17px] sm:leading-8">
            <p className="mb-7 text-lg font-semibold leading-7 text-slate-950 dark:text-white sm:text-xl sm:leading-8">
              If <DebtHighlight /> is real, the next question is uncomfortable: <em>How do you measure it?</em>
            </p>

            <p className="mb-7">
              In Part 1 of this series, I introduced AI Governance Debt as a concept for describing the gap between the governance
              an organization&apos;s AI portfolio requires and the governance capability in place. But a concept becomes useful only
              when we can observe and measure it.
            </p>

            <p className="mb-10">
              So I have been exploring a simple proposition: <strong className="font-sans font-bold text-slate-950 dark:text-white">AI Governance Debt should be treated as a measurable portfolio-level gap</strong>,
              not as a vague feeling that “governance is behind.”
            </p>

            <section className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
              <h2 className="mb-3 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                A six-dimensional view of the gap
              </h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
                I would break the gap into several dimensions. Together, they provide a way to observe where governance capability is falling short.
              </p>
            </section>

            <div className="mb-12 grid gap-5 md:grid-cols-2">
              {dimensions.map((dimension, index) => (
                <section key={dimension.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-sans text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {index + 1}
                    </span>
                    <h2 className="font-sans text-lg font-bold leading-7 text-slate-950 dark:text-white">{dimension.title}</h2>
                  </div>
                  <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{dimension.question}</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 marker:text-slate-400">
                    {dimension.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                </section>
              ))}
            </div>

            <figure className="my-12">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src="/ai-governance-debt-measurement.svg"
                  alt="Conceptual six-dimensional AI Governance Debt measurement model covering governance coverage, assessment coverage, control coverage, evidence completeness, remediation backlog and governance freshness."
                  width={1000}
                  height={650}
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <figcaption className="mt-3 text-center font-sans text-xs leading-5 text-slate-500 dark:text-slate-400">
                Conceptual measurement model: six dimensions that make the governance gap observable at portfolio level.
              </figcaption>
            </figure>

            <section className="mb-10">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                A conceptual model
              </h2>
              <p className="mb-6">
                Putting these dimensions together suggests a simple conceptual model:
              </p>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-6 text-center dark:border-amber-300/20 dark:bg-amber-400/10">
                <p className="font-sans text-lg font-bold tracking-tight text-amber-950 dark:text-amber-100 sm:text-2xl">
                  AI Governance Debt = Required Governance Capability − Effective Governance Capability
                </p>
              </div>
              <p className="mt-6">
                This is deliberately a conceptual model, not a universal mathematical formula. The interesting work is defining what
                “required” and “effective” mean for a particular organization, risk profile and regulatory context.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                What does this look like in practice?
              </h2>
              <p className="mb-6">
                Consider an organization with 100 AI systems. 95 are inventoried. 80 have completed risk assessments. 70 have monitoring.
                60 have current evidence. 15 have overdue high-risk remediation.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["95%", "inventoried"],
                  ["80%", "risk assessments complete"],
                  ["70%", "with monitoring"],
                  ["60%", "with current evidence"],
                  ["15", "overdue high-risk remediations"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900/60">
                    <p className="font-sans text-xl font-bold text-slate-950 dark:text-white">{value}</p>
                    <p className="font-sans text-xs leading-5 text-slate-500 dark:text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7">
                The organization may have a strong policy framework. But its governance coverage is still incomplete. That is the point.
              </p>
            </section>

            <section className="mb-10 border-t border-slate-200 pt-9 dark:border-slate-800">
              <p className="rounded-2xl bg-slate-950 px-5 py-6 font-sans text-base font-medium leading-7 text-white dark:bg-white dark:text-slate-950 sm:px-7 sm:py-6 sm:text-lg sm:leading-8">
                Governance maturity should not be inferred from the existence of policies alone. It should be assessed through coverage,
                implementation, evidence and outcomes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Questions worth exploring
              </h2>
              <ul className="list-disc space-y-2.5 pl-6">
                <li>What is the minimum evidence required to claim a governance control is effective?</li>
                <li>How should risk level affect required governance coverage?</li>
                <li>How should stale governance evidence be treated?</li>
              </ul>
            </section>

            <section className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
              <p className="font-sans text-xl font-bold leading-8 tracking-tight text-slate-950 dark:text-white sm:text-2xl sm:leading-9">
                Can we create a practical <DebtHighlight /> index that helps leadership answer three things?
              </p>
              <ol className="mt-5 list-decimal space-y-2 pl-6 font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                <li>Where is our governance debt?</li>
                <li>How large is it?</li>
                <li>What should we address first?</li>
              </ol>
              <p className="mt-6">That is what I will explore next.</p>
              <p className="mt-5 font-sans text-sm font-semibold text-slate-500 dark:text-slate-400">Part 3 will compare AI Governance Debt with technical debt and security debt.</p>
            </section>

            <section className="font-sans">
              <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">Sources &amp; references</h2>
              <ol className="space-y-2.5 pl-5 text-xs leading-6 text-slate-600 dark:text-slate-400 sm:text-sm">
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://airc.nist.gov/airmf-resources/playbook/" target="_blank" rel="noreferrer">NIST AI RMF Playbook</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" target="_blank" rel="noreferrer">NIST Generative AI Profile</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://www.iso.org/standard/42001" target="_blank" rel="noreferrer">ISO/IEC 42001</a></li>
              </ol>
            </section>

            <aside className="mt-8 rounded-xl bg-slate-50 p-4 font-sans text-xs leading-6 text-slate-600 dark:bg-slate-900/70 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-slate-200">Author note:</strong> The term “AI Governance Debt” is used here as a proposed conceptual
              construct for personal research. It is not presented as an official NIST or ISO term.
            </aside>
          </div>
        </article>
      </Container>
    </main>
  );
}

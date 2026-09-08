import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "AI Governance Debt vs Technical Debt vs Security Debt | Ankam Priyanka",
  description:
    "Part 3 of the AI Governance Debt research series: comparing AI Governance Debt with technical debt and security debt.",
};

function DebtHighlight() {
  return (
    <strong className="rounded-md bg-amber-100 px-1.5 py-0.5 font-sans text-[0.92em] font-bold text-amber-950 ring-1 ring-inset ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-300/20">
      AI Governance Debt
    </strong>
  );
}

const debts = [
  {
    name: "Technical Debt",
    question: "What shortcuts or deferred engineering decisions have accumulated in the technology?",
    concern: "Engineering sustainability",
  },
  {
    name: "Security Debt",
    question: "What unresolved security weaknesses or control gaps have accumulated?",
    concern: "Security resilience",
  },
  {
    name: "AI Governance Debt",
    question: "Where has our ability to govern AI failed to keep pace with how AI is developed, deployed and used?",
    concern: "Governance capability",
  },
];

const governanceGaps = [
  "No clear AI system owner",
  "No documented risk classification",
  "No assessment of model limitations",
  "No defined human escalation path",
  "No monitoring of harmful outputs",
  "No evidence that governance controls are actually operating",
  "No process for reassessing the system when the model or use case changes",
];

export default function AIGovernanceDebtComparisonPage() {
  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:py-18">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-slate-200 pb-9 dark:border-slate-800">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              AI Governance · Responsible AI · AI Assurance
            </p>
            <p className="mb-3 font-sans text-xs font-semibold text-slate-500 dark:text-slate-400">PART 3 · AI GOVERNANCE DEBT SERIES</p>
            <h1 className="max-w-4xl font-sans text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              <span className="underline decoration-amber-300 decoration-4 underline-offset-4 dark:decoration-amber-500/70">AI Governance Debt</span> vs Technical Debt vs Security Debt
            </h1>
            <p className="mt-5 max-w-3xl font-serif text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              Three related forms of organizational debt — but three different management questions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">Research &amp; Perspectives</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">September 2026</span>
            </div>
          </header>

          <div className="font-serif text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-[17px] sm:leading-8">
            <p className="mb-7 text-lg font-semibold leading-7 text-slate-950 dark:text-white sm:text-xl sm:leading-8">
              Technical debt is a familiar concept. Security debt has become equally well understood. But as AI gets embedded across products, processes and decisions, organizations need a third lens: <DebtHighlight />.
            </p>

            <p className="mb-10">
              The three are related — but they are not interchangeable.
            </p>

            <section className="mb-12 grid gap-5 md:grid-cols-3">
              {debts.map((debt, index) => (
                <article key={debt.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 font-sans text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {index + 1}
                  </div>
                  <h2 className="font-sans text-lg font-bold leading-7 text-slate-950 dark:text-white">{debt.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{debt.question}</p>
                </article>
              ))}
            </section>

            <figure className="my-12">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src="/ai-governance-debt-comparison.svg"
                  alt="Conceptual comparison of technical debt, security debt and AI Governance Debt, showing their distinct management concerns and their areas of overlap."
                  width={1000}
                  height={650}
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <figcaption className="mt-3 text-center font-sans text-xs leading-5 text-slate-500 dark:text-slate-400">
                The debts can interact, but each represents a different management concern.
              </figcaption>
            </figure>

            <section className="mb-12">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                One system can carry all three — in different ways
              </h2>
              <p className="mb-7">
                Consider an AI-powered customer service application. It could have low technical debt — clean, maintainable architecture. It could have low security debt — strong authentication, active vulnerability management and secure development practices.
              </p>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-300/20 dark:bg-amber-400/10 sm:p-7">
                <p className="mb-4 font-sans text-lg font-bold tracking-tight text-amber-950 dark:text-amber-100 sm:text-xl">
                  And still carry high <DebtHighlight />:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 marker:text-amber-700 dark:text-slate-200 dark:marker:text-amber-300 sm:text-base sm:leading-7">
                  {governanceGaps.map((gap) => <li key={gap}>{gap}</li>)}
                </ul>
              </div>
            </section>

            <section className="mb-12 border-y border-slate-200 py-10 dark:border-slate-800">
              <p className="text-lg font-semibold leading-8 text-slate-950 dark:text-white sm:text-xl">
                The system can be well engineered and securely deployed — and still be poorly governed. <strong>That distinction matters.</strong>
              </p>
              <p className="mt-6">
                A governance gap can create security risk. A security vulnerability can become a governance issue. A technical limitation can become a safety or compliance concern. The three debts feed each other.
              </p>
              <p className="mt-6">
                But the management question stays distinct in each case: technical debt is about the sustainability of the technology, security debt is about unresolved exposure to threats, and <DebtHighlight /> is about the organization&apos;s ability to sustain accountable, risk-informed, evidence-based oversight of AI.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Why AI Governance Debt is especially hard to manage
              </h2>
              <ol className="space-y-5 pl-6">
                <li className="pl-2">
                  <strong className="font-sans font-bold text-slate-950 dark:text-white">It&apos;s portfolio-wide.</strong> An organization may run hundreds of AI systems, models and third-party AI services — each accumulating its own gaps.
                </li>
                <li className="pl-2">
                  <strong className="font-sans font-bold text-slate-950 dark:text-white">It&apos;s dynamic.</strong> Models change, regulations change, use cases change, risk profiles change — governance has to track a moving target.
                </li>
                <li className="pl-2">
                  <strong className="font-sans font-bold text-slate-950 dark:text-white">It compounds.</strong> If governance capability doesn&apos;t scale as fast as the AI portfolio grows, unresolved obligations pile up faster than the organization can close them.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <p className="rounded-2xl bg-slate-950 px-5 py-6 font-sans text-base font-medium leading-7 text-white dark:bg-white dark:text-slate-950 sm:px-7 sm:py-6 sm:text-lg sm:leading-8">
                This is why having an AI policy is not enough. The real question is whether governance capability is keeping pace with AI deployment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-5 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                A simple management model
              </h2>
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-2 bg-slate-50 font-sans text-xs font-bold uppercase tracking-wider text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                  <div className="px-5 py-3">Debt type</div>
                  <div className="px-5 py-3">Management concern</div>
                </div>
                {debts.map((debt) => (
                  <div key={debt.name} className="grid grid-cols-2 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <div className="px-5 py-4 font-sans text-sm font-semibold text-slate-900 dark:text-white">{debt.name}</div>
                    <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">{debt.concern}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Questions worth exploring
              </h2>
              <ul className="list-disc space-y-2.5 pl-6">
                <li>Can an AI system have low technical/security debt but high governance debt?</li>
                <li>Where should governance controls intersect with engineering and security controls?</li>
                <li>Which debt should be prioritized when risks overlap?</li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="font-sans text-xl font-bold leading-8 tracking-tight text-slate-950 dark:text-white sm:text-2xl sm:leading-9">
                The next question is practical: how can an established framework like the NIST AI Risk Management Framework help organizations identify and reduce <DebtHighlight />?
              </p>
              <p className="mt-5 font-sans text-sm font-semibold text-slate-500 dark:text-slate-400">Part 4 will explore that connection.</p>
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
              <strong className="text-slate-900 dark:text-slate-200">Author note:</strong> The term “AI Governance Debt” is used here as a proposed conceptual construct for personal research. It is not presented as an official NIST or ISO term.
            </aside>
          </div>
        </article>
      </Container>
    </main>
  );
}

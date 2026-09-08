import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "AI Governance Debt — The Risk We Don't See | Ankam Priyanka",
  description:
    "AI Governance Debt — a proposed conceptual construct for understanding the accumulated gap between the governance an organization's growing AI portfolio requires and the governance capability in place.",
};

const debtSignals = [
  "AI systems without clearly assigned owners",
  "Risk assessments that were never completed or refreshed",
  "Models deployed without sufficient evaluation evidence",
  "AI systems without appropriate monitoring",
  "Third-party models that have not been adequately assessed",
  "Policies that exist, but are not embedded into the AI lifecycle",
  "Controls that are defined but not validated",
  "Remediation actions that remain open as the AI portfolio continues to grow",
];

function DebtHighlight() {
  return (
    <strong className="rounded-md bg-amber-100 px-1.5 py-0.5 font-sans text-[0.92em] font-bold text-amber-950 ring-1 ring-inset ring-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:ring-amber-300/20">
      AI Governance Debt
    </strong>
  );
}

export default function AIGovernanceDebtPage() {
  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:py-18">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-slate-200 pb-9 dark:border-slate-800">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              AI Governance · Responsible AI · AI Assurance
            </p>
            <h1 className="max-w-4xl font-sans text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              <span className="underline decoration-amber-300 decoration-4 underline-offset-4 dark:decoration-amber-500/70">AI Governance Debt</span> — The Risk We Don&apos;t See
            </h1>
            <p className="mt-5 max-w-3xl font-serif text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              A practical way to think about the growing gap between AI adoption and the governance capability needed to manage it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">Research &amp; Perspectives</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">September 2026</span>
            </div>
          </header>

          <div className="font-serif text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-[17px] sm:leading-8">
            <p className="mb-8 border-l-4 border-slate-900 pl-5 text-lg font-semibold leading-7 text-slate-950 dark:border-slate-200 dark:text-white sm:text-xl sm:leading-8">
              Your organization may already have AI governance debt.
              <br />
              You just may not have a way to see it.
            </p>

            <p className="mb-7">
              AI adoption is accelerating. Organizations are adding GenAI applications, AI agents, foundation models,
              third-party AI services and AI-enabled products at a pace that governance functions often struggle to match.
              What happens when AI adoption grows faster than AI governance capability? I call the resulting gap{" "}
              <DebtHighlight />. By this, I mean the accumulated gap between the governance an organization&apos;s growing
              AI portfolio requires and the governance capability in place.
            </p>

            <section className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Where governance debt shows up
              </h2>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">It can show up as:</p>
              <ul className="list-disc space-y-2.5 pl-6 marker:text-slate-500 dark:marker:text-slate-400">
                {debtSignals.map((signal) => (
                  <li key={signal} className="pl-1.5">{signal}</li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                How the debt compounds
              </h2>
              <p className="mb-6">
                None of these necessarily look catastrophic on their own but their accumulation is. Imagine an organization
                that begins with ten AI systems and develops governance processes appropriate for ten systems. Two years later,
                it has 150 AI systems, multiple foundation models, AI agents and third-party AI services. But its governance
                capability has barely changed.
              </p>
              <div className="rounded-2xl border-l-4 border-slate-300 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-900/50">
                <p className="mb-0 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
                  The organization may still have a Responsible AI policy. It may still conduct risk assessments. It may still
                  have an AI governance committee. Yet the gap between the scale of AI activity and the organization&apos;s ability
                  to govern that activity has widened.
                </p>
              </div>
              <p className="mt-6">
                That is what I mean by <DebtHighlight />. And, like other forms of organizational debt, it can compound.
              </p>
            </section>

            <figure className="my-12">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src="/ai-governance-debt.svg"
                  alt="Conceptual model showing an AI portfolio growing from 10 to 150 systems while governance capability grows more slowly, creating a widening AI Governance Debt gap."
                  width={1000}
                  height={600}
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <figcaption className="mt-3 text-center font-sans text-xs leading-5 text-slate-500 dark:text-slate-400">
                Conceptual model: as the AI portfolio scales faster than governance capability, the governance debt gap widens.
              </figcaption>
            </figure>

            <p className="mb-7">
              The larger the AI portfolio becomes, the harder it can be to establish ownership, maintain evidence, monitor risks,
              respond to incidents and demonstrate that governance controls are working.
            </p>

            <section className="mb-10 border-t border-slate-200 pt-9 dark:border-slate-800">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Where frameworks help
              </h2>
              <p className="mb-6">
                This is where frameworks such as the NIST AI Risk Management Framework become valuable. NIST structures AI risk
                management around <strong className="font-sans font-bold text-slate-950 dark:text-white">GOVERN, MAP, MEASURE and MANAGE</strong>,
                with governance intended to be cross-cutting across the AI risk-management process.
              </p>
              <p className="rounded-2xl bg-slate-950 px-5 py-5 font-sans text-sm font-medium leading-6 text-white dark:bg-white dark:text-slate-950 sm:px-7 sm:py-6 sm:text-base sm:leading-7">
                But adopting a framework is not the same as building governance capability.
              </p>
            </section>

            <section className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
              <p className="font-sans text-xl font-bold leading-8 tracking-tight text-slate-950 dark:text-white sm:text-2xl sm:leading-9">
                Can AI Governance Debt be identified, measured and actively reduced?
              </p>
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

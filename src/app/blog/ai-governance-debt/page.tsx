import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "AI Governance Debt — The Risk We Don't See | Ankam Priyanka",
  description:
    "AI Governance Debt — a proposed conceptual construct for understanding the accumulated gap between the governance an organization's growing AI portfolio requires and the governance capability in place.",
};

export default function AIGovernanceDebtPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Container>
        <article className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              AI Governance · Responsible AI · AI Assurance
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              AI Governance Debt — The Risk We Don&apos;t See
            </h1>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:tracking-tight">
            <p className="lead">
              Your organization may already have AI governance debt.
              <br />
              You just may not have a way to see it.
            </p>

            <p>
              AI adoption is accelerating. Organizations are adding GenAI applications, AI agents, foundation models,
              third-party AI services and AI-enabled products at a pace that governance functions often struggle to match.
              What happens when AI adoption grows faster than AI governance capability? I call the resulting gap
              <strong> AI Governance Debt</strong>. By this, I mean the accumulated gap between the governance an
              organization&apos;s growing AI portfolio requires and the governance capability in place.
            </p>

            <p>It can show up as:</p>
            <ul>
              <li>AI systems without clearly assigned owners</li>
              <li>risk assessments that were never completed or refreshed</li>
              <li>models deployed without sufficient evaluation evidence</li>
              <li>AI systems without appropriate monitoring</li>
              <li>third-party models that have not been adequately assessed</li>
              <li>policies that exist, but are not embedded into the AI lifecycle</li>
              <li>controls that are defined but not validated</li>
              <li>remediation actions that remain open as the AI portfolio continues to grow</li>
            </ul>

            <p>
              None of these necessarily look catastrophic on their own but their accumulation is.
              Imagine an organization that begins with ten AI systems and develops governance processes appropriate
              for ten systems. Two years later, it has 150 AI systems, multiple foundation models, AI agents and
              third-party AI services. But its governance capability has barely changed. The organization may still
              have a Responsible AI policy. It may still conduct risk assessments. It may still have an AI governance
              committee. Yet the gap between the scale of AI activity and the organization&apos;s ability to govern that
              activity has widened. That is what I mean by AI Governance Debt. And, like other forms of organizational
              debt, it can compound.
            </p>

            <figure className="not-prose my-12">
              <Image
                src="/ai-governance-debt.svg"
                alt="Conceptual diagram showing AI capability rising faster than governance capacity, creating a governance debt gap that compounds over time."
                width={900}
                height={520}
                className="h-auto w-full rounded-xl border border-slate-200 dark:border-slate-800"
              />
              <figcaption className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400">
                Conceptual model: governance debt compounds when AI capability grows faster than governance capacity.
              </figcaption>
            </figure>

            <p>
              The larger the AI portfolio becomes, the harder it can be to establish ownership, maintain evidence,
              monitor risks, respond to incidents and demonstrate that governance controls are working.
            </p>

            <p>
              This is where frameworks such as the NIST AI Risk Management Framework become valuable. NIST structures
              AI risk management around <strong>GOVERN, MAP, MEASURE and MANAGE</strong>, with governance intended to
              be cross-cutting across the AI risk-management process.
            </p>

            <p>
              But adopting a framework is not the same as building governance capability. Can AI Governance Debt be
              identified, measured and actively reduced?
            </p>

            <h2>Sources and references</h2>
            <ol>
              <li>NIST AI RMF Playbook: https://airc.nist.gov/airmf-resources/playbook/</li>
              <li>NIST Generative AI Profile: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence</li>
              <li>ISO/IEC 42001: https://www.iso.org/standard/42001</li>
            </ol>

            <p>
              <strong>Author note:</strong> The term “AI Governance Debt” is used here as a proposed conceptual
              construct for personal research. It is not presented as an official NIST or ISO term.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}

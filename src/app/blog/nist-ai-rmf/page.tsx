import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "NIST AI Risk Management Framework: Govern, Map, Measure & Manage | Ankam Priyanka",
  description:
    "A practical perspective on the four functions of the NIST AI Risk Management Framework: Govern, Map, Measure and Manage, and how they form a continuous AI risk management capability.",
};

const functions = [
  {
    number: "01",
    title: "GOVERN",
    subtitle: "Establish who is accountable",
    text: "Responsible AI starts before a model is built. Organizations need clear policies, accountability, risk tolerance, decision rights and governance mechanisms. Governance defines who owns AI risk, what standards apply, and when human oversight or escalation is required.",
    points: [
      "AI policies, processes and accountability are explicit",
      "Legal and regulatory requirements are understood and documented",
      "Risk tolerance determines the level of governance needed",
      "Roles, competencies and decision rights are defined",
      "Governance spans design, development, deployment and monitoring",
    ],
  },
  {
    number: "02",
    title: "MAP",
    subtitle: "Understand the AI system in context",
    text: "MAP establishes the context before deciding how much risk is acceptable. The same model can present very different risks depending on where it is deployed, who uses it, what decisions it influences and who may be affected.",
    points: [
      "Define the intended purpose and operating context",
      "Identify users, affected groups and stakeholders",
      "Understand system capabilities, limitations and dependencies",
      "Identify potential benefits, harms and unintended consequences",
      "Create a shared risk picture that informs measurement and monitoring",
    ],
  },
  {
    number: "03",
    title: "MEASURE",
    subtitle: "Turn risk into evidence",
    text: "Identifying a risk is not enough. MEASURE turns the risks identified in MAP into evidence that can be tested, tracked and challenged. The objective is not to collect as many metrics as possible, but to generate credible evidence relevant to the risk and context.",
    points: [
      "Select methods and metrics for significant risks",
      "Test performance, robustness, safety, security, fairness and privacy as relevant",
      "Use appropriate testing, evaluation, verification and validation approaches",
      "Analyze errors, limitations and failure modes",
      "Monitor changes and reassess measurement and control effectiveness",
    ],
  },
  {
    number: "04",
    title: "MANAGE",
    subtitle: "Convert evidence into decisions",
    text: "MANAGE is where AI risk management becomes operational. Evidence from MAP and MEASURE needs to lead to action: mitigate, transfer, avoid or accept a risk within defined tolerance. The responsible decision may be to proceed, change the system, pause deployment or stop.",
    points: [
      "Identify and prioritize risks based on impact, likelihood and resources",
      "Assign owners, actions, resources and timelines",
      "Choose appropriate risk treatment responses",
      "Decide whether to proceed, modify, pause or stop",
      "Monitor and reassess as context, evidence and risks change",
    ],
  },
];

function FunctionCard({ item }: { item: (typeof functions)[number] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 font-sans text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {item.number}
        </span>
        <div>
          <h2 className="font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
            {item.title}
          </h2>
          <p className="mt-1 font-sans text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            {item.subtitle}
          </p>
        </div>
      </div>

      <p className="mt-5 leading-7">{item.text}</p>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-slate-400">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

export default function NistAiRmfPage() {
  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:py-18">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-slate-200 pb-9 dark:border-slate-800">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              AI Governance · Responsible AI · AI Risk Management
            </p>
            <h1 className="max-w-4xl font-sans text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              NIST AI Risk Management Framework: <span className="underline decoration-cyan-300 decoration-4 underline-offset-4 dark:decoration-cyan-500/70">GOVERN · MAP · MEASURE · MANAGE</span>
            </h1>
            <p className="mt-5 max-w-3xl font-serif text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              A practical perspective on turning AI risk management from a framework into a continuous organizational capability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-sans text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">Research &amp; Perspectives</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900">September 2026</span>
            </div>
          </header>

          <div className="font-serif text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-[17px] sm:leading-8">
            <p className="mb-7 border-l-4 border-cyan-600 pl-5 text-lg font-semibold leading-7 text-slate-950 dark:border-cyan-400 dark:text-white sm:text-xl sm:leading-8">
              As organizations move from experimenting with AI to deploying it at scale, the question is no longer whether AI risk exists. The question is how an organization builds the capability to manage it consistently.
            </p>

            <p className="mb-7">
              The NIST AI Risk Management Framework (AI RMF) 1.0 provides a useful way to structure that thinking. Its Core is organized around four functions: <strong className="font-sans font-bold text-slate-950 dark:text-white">GOVERN, MAP, MEASURE and MANAGE</strong>. NIST describes these as high-level functions for managing AI risks, with GOVERN designed as a cross-cutting function that informs the other three.
            </p>

            <p className="mb-10">
              The important point is that this should not be interpreted as a rigid checklist or a one-time implementation exercise. NIST describes the framework as iterative and risk-based, with the functions applied and cross-referenced throughout the AI lifecycle.
            </p>

            <section className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
              <h2 className="font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                The four functions at a glance
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {functions.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="font-sans text-xs font-bold text-slate-400">{item.number}</p>
                    <p className="mt-2 font-sans text-sm font-bold text-slate-950 dark:text-white">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="space-y-6">
              {functions.map((item) => (
                <FunctionCard key={item.title} item={item} />
              ))}
            </div>

            <figure className="my-12">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src="/nist-ai-rmf-functions.svg"
                  alt="Conceptual view of the NIST AI Risk Management Framework four functions: Govern, Map, Measure and Manage."
                  width={1000}
                  height={620}
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <figcaption className="mt-3 text-center font-sans text-xs leading-5 text-slate-500 dark:text-slate-400">
                A practical view of the four NIST AI RMF functions and how they connect across the AI lifecycle.
              </figcaption>
            </figure>

            <section className="mb-12 border-y border-slate-200 py-10 dark:border-slate-800">
              <h2 className="mb-5 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                From framework to continuous capability
              </h2>
              <p className="mb-6">
                In practice, the four functions should create a feedback loop. MAP establishes the context and identifies risks. MEASURE generates evidence about those risks. MANAGE converts that evidence into decisions and actions. New incidents, monitoring results, changed assumptions and new evidence can then feed back into MAP and MEASURE.
              </p>
              <div className="rounded-2xl bg-slate-950 px-5 py-6 text-center font-sans font-bold text-white dark:bg-white dark:text-slate-950 sm:px-7 sm:py-7 sm:text-lg">
                MAP → MEASURE → MANAGE → LEARN → MAP
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                The <strong className="font-sans">LEARN</strong> step in this visual loop is my practical interpretation rather than an additional NIST function: it represents organizational learning from incidents, monitoring, evaluation results and changing context before the next MAP cycle.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Why this matters for AI Governance Debt
              </h2>
              <p className="mb-6">
                This also connects directly to my AI Governance Debt research. A governance framework can exist on paper while governance capability falls behind the scale and complexity of an organization&apos;s AI portfolio. GOVERN establishes the organizational foundation; MAP makes the portfolio and its risks understandable; MEASURE creates evidence; and MANAGE turns that evidence into action.
              </p>
              <p className="rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-6 font-sans text-base font-medium leading-7 text-cyan-950 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-100 sm:px-7 sm:text-lg">
                The real value of an AI risk framework is not the existence of the framework. It is the organization&apos;s ability to repeatedly use it to make better decisions as AI systems, risks and contexts evolve.
              </p>
            </section>

            <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
              <h2 className="font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                Explore the presentation
              </h2>
              <p className="mt-3 leading-7">
                I created an executive presentation that summarizes the four functions, their practical questions, expected outputs and the connection between risk analysis and management decisions.
              </p>
              <p className="mt-5 font-sans text-sm font-semibold text-slate-600 dark:text-slate-300">
                The presentation will be added here as a downloadable PDF: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800">/presentations/NIST_AI_RMF_4_Functions_Executive_Deck.pdf</code>
              </p>
            </section>

            <section className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                A few questions I am exploring
              </h2>
              <ul className="list-disc space-y-2.5 pl-6">
                <li>How do organizations turn AI RMF outcomes into measurable governance controls?</li>
                <li>How should evidence freshness influence AI risk decisions?</li>
                <li>How can AI governance capability scale as the AI portfolio grows?</li>
                <li>Can AI Governance Debt be measured using the evidence generated through MAP, MEASURE and MANAGE?</li>
              </ul>
            </section>

            <section className="font-sans">
              <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">Official NIST resources</h2>
              <ol className="space-y-2.5 pl-5 text-xs leading-6 text-slate-600 dark:text-slate-400 sm:text-sm">
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10" target="_blank" rel="noreferrer">NIST AI RMF 1.0</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" target="_blank" rel="noreferrer">NIST AI RMF Core</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://airc.nist.gov/airmf-resources/playbook/" target="_blank" rel="noreferrer">NIST AI RMF Playbook</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:hover:text-white" href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a></li>
              </ol>
            </section>

            <aside className="mt-8 rounded-xl bg-slate-50 p-4 font-sans text-xs leading-6 text-slate-600 dark:bg-slate-900/70 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-slate-200">Author note:</strong> This article is a practical interpretation of NIST AI RMF 1.0. The framework and its four functions are NIST terminology; the MAP → MEASURE → MANAGE → LEARN → MAP loop is presented as my own operational interpretation.
            </aside>
          </div>
        </article>
      </Container>
    </main>
  );
}

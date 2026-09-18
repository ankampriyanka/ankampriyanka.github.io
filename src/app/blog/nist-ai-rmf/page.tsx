import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageNavigation from "@/components/layout/PageNavigation";

export const metadata = {
  title: "NIST AI Risk Management Framework: Govern, Map, Measure & Manage | Ankam Priyanka",
  description:
    "A practical perspective on the four functions of the NIST AI Risk Management Framework: Govern, Map, Measure and Manage, and how they form a continuous AI risk management capability.",
};

const functions = [
  {
    number: "01",
    title: "GOVERN",
    subtitle: "Create the organizational conditions in which AI risk can be consistently managed.",
    question: "Who decides what responsible AI means here — and how do we make that decision enforceable?",
    text: "GOVERN is the foundation for the other three functions. It establishes the policies, accountability, risk tolerance, roles, competencies and decision rights needed to manage AI risk consistently across the organization and throughout the AI lifecycle.",
    areas: [
      "Foundation — policies, accountability, legal and regulatory requirements, risk tolerance",
      "People + culture — roles, competencies, decision rights and organizational responsibility",
      "Lifecycle — governance across design, development, deployment and monitoring",
      "Third-party AI, data and technology dependencies are included in governance",
      "Documentation, transparency and escalation mechanisms support accountable decisions",
    ],
  },
  {
    number: "02",
    title: "MAP",
    subtitle: "Understand the AI system in context before deciding how much risk is acceptable.",
    question: "What are we building or deploying, for what purpose, for whom, and what could go wrong in this context?",
    text: "MAP establishes a shared risk picture. It connects the technical system to its intended purpose, operating environment, stakeholders, affected groups, assumptions, dependencies, limitations and potential impacts. Risk cannot be understood independently of context.",
    areas: [
      "Purpose — define intended use, objectives and expected outcomes",
      "Context — understand the socio-technical environment and stakeholders",
      "Impact — identify potential benefits, harms and affected groups",
      "Risk — identify assumptions, limitations, dependencies and plausible failure modes",
      "Output — create a shared risk picture that informs testing, measurement and monitoring",
    ],
  },
  {
    number: "03",
    title: "MEASURE",
    subtitle: "Turn the risks identified in MAP into evidence that can be tested, tracked and challenged.",
    question: "What evidence do we need to determine whether the identified risks are actually being controlled?",
    text: "MEASURE is not about collecting as many metrics as possible. It is about building credible evidence for a risk decision. Methods and metrics should be selected for significant risks and applied through appropriate testing, evaluation, verification, validation and monitoring.",
    areas: [
      "Test / Evaluate — select methods and metrics for significant risks",
      "Assess performance, robustness, safety, security, fairness and privacy as relevant",
      "Interpret / Analyze — examine errors, limitations and failure modes",
      "Use testing, evaluation, verification and validation (TEVV) as appropriate",
      "Monitor / Track — detect changes and reassess evidence and control effectiveness",
    ],
  },
  {
    number: "04",
    title: "MANAGE",
    subtitle: "Use the evidence from MAP + MEASURE to prioritize risks and decide what happens next.",
    question: "Given what we know, what should we do about the risk — and who is accountable for the decision?",
    text: "MANAGE converts risk evidence into management action. Risks are identified and prioritized, appropriate responses are selected, and decisions are made within defined risk tolerance. A mature governance process must be able to support proceeding, changing, pausing or stopping an AI system.",
    areas: [
      "Identify and prioritize risks using impact, likelihood and available resources",
      "Treat risks through mitigation, transfer, avoidance or acceptance as appropriate",
      "Assign owners, actions, resources and timelines for high-priority risks",
      "Decide whether to proceed, change, pause or stop",
      "Monitor outcomes and feed incidents, new evidence and changed assumptions back into the cycle",
    ],
  },
];

function FunctionCard({ item }: { item: (typeof functions)[number] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 font-sans text-xs font-bold text-slate-600">{item.number}</span>
        <div>
          <h2 className="font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{item.title}</h2>
          <p className="mt-1 font-sans text-sm font-semibold text-cyan-700">{item.subtitle}</p>
        </div>
      </div>
      <p className="mt-5 leading-7">{item.text}</p>
      <div className="mt-6 rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-cyan-800">Practical question</p>
        <p className="mt-2 font-sans text-sm font-semibold leading-6 text-slate-900">{item.question}</p>
      </div>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-slate-600">
        {item.areas.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </section>
  );
}

export default function NistAiRmfPage() {
  return (
    <><Navbar />
      <main className="min-h-screen bg-white py-14 text-slate-900 sm:py-18">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-slate-200 pb-9">
            <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">AI Governance · Responsible AI · AI Risk Management</p>
            <h1 className="max-w-4xl font-sans text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-5xl">NIST AI Risk Management Framework: <span className="underline decoration-cyan-300 decoration-4 underline-offset-4">GOVERN · MAP · MEASURE · MANAGE</span></h1>
            <p className="mt-5 max-w-3xl font-serif text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">A practical perspective on turning AI risk management from a framework into a continuous organizational capability.</p>
            <div className="mt-6 flex flex-wrap gap-3 font-sans text-[11px] font-medium text-slate-500"><span className="rounded-full bg-slate-100 px-3 py-1.5">Research &amp; Perspectives</span><span className="rounded-full bg-slate-100 px-3 py-1.5">September 2026</span></div>
          </header>

          <div className="font-serif text-base leading-7 text-slate-700 sm:text-[17px] sm:leading-8">
            <p className="mb-7 border-l-4 border-cyan-600 pl-5 text-lg font-semibold leading-7 text-slate-950 sm:text-xl sm:leading-8">As organizations move from experimenting with AI to deploying it at scale, the question is no longer whether AI risk exists. The question is how an organization builds the capability to manage it consistently.</p>
            <p className="mb-7">The NIST AI Risk Management Framework (AI RMF) 1.0 provides a structured way to think about AI risk across the lifecycle. At its core are four functions: <strong className="font-sans font-bold text-slate-950">GOVERN, MAP, MEASURE and MANAGE</strong>. These functions are complementary rather than a simple sequence, with GOVERN providing the organizational foundation that remains relevant across the lifecycle.</p>
            <p className="mb-10">The framework should not be treated as a rigid checklist or a one-time implementation strategy. Real-world AI systems change, models evolve, vulnerabilities emerge and unexpected impacts may only become visible after deployment. Risk management therefore needs to operate as a continuous capability.</p>

            <section className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <h2 className="font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">The four functions at a glance</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">{functions.map((item) => <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-sans text-xs font-bold text-slate-600">{item.number}</p><p className="mt-2 font-sans text-sm font-bold text-slate-950">{item.title}</p></div>)}</div>
            </section>

            <div className="space-y-6">{functions.map((item) => <FunctionCard key={item.title} item={item} />)}</div>

            <figure className="my-12">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm"><Image src="/nist-ai-rmf-functions.svg" alt="Conceptual view of the NIST AI Risk Management Framework four functions: Govern, Map, Measure and Manage." width={1000} height={620} className="h-auto w-full rounded-xl" /></div>
              <figcaption className="mt-3 text-center font-sans text-xs leading-5 text-slate-500">A practical view of the four NIST AI RMF functions and their relationship across the AI lifecycle.</figcaption>
            </figure>

            <section className="mb-12 border-y border-slate-200 py-10">
              <h2 className="mb-5 font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">From framework to continuous capability</h2>
              <p className="mb-6">The functions become more useful when treated as an operating loop rather than four isolated activities. MAP establishes the context and risk picture. MEASURE turns significant risks into evidence. MANAGE uses that evidence to prioritize, treat and decide. Then incidents, monitoring results, evaluation findings and changed assumptions create new organizational learning that can change the next MAP cycle.</p>
              <div className="rounded-2xl bg-white px-5 py-6 text-center font-sans font-bold text-[#4E537D] sm:px-7 sm:py-7 sm:text-lg">MAP → MEASURE → MANAGE → LEARN → MAP</div>
              <p className="mt-5 text-sm leading-6 text-slate-600">The <strong className="font-sans">LEARN</strong> step is my practical interpretation of the organizational feedback loop, not a fifth NIST AI RMF function. It represents learning from incidents, monitoring, evaluation results and changes in context before the next MAP cycle.</p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Why this matters for AI Governance Debt</h2>
              <p className="mb-6">This connects directly to my AI Governance Debt research. An organization can have policies and processes on paper while its governance capability falls behind the scale and complexity of its AI portfolio. GOVERN establishes the organizational conditions; MAP makes the portfolio and its risks understandable; MEASURE creates credible evidence; and MANAGE turns that evidence into action.</p>
              <p className="rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-6 font-sans text-base font-medium leading-7 text-cyan-950 sm:px-7 sm:text-lg">The real value of an AI risk framework is not the existence of the framework. It is the organization&apos;s ability to repeatedly use it to make better decisions as AI systems, risks, evidence and contexts evolve.</p>
            </section>

            <section className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6 sm:p-7">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-700">Executive deck</p>
                <h2 className="mt-2 font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">NIST AI RMF — GOVERN · MAP · MEASURE · MANAGE</h2>
                <p className="mt-3 max-w-2xl leading-7">The five-page executive deck distills the four functions into practical questions, key areas, evidence and management decisions, followed by official NIST resources and links.</p>
              </div>
              <div className="border-t border-slate-200 bg-slate-50 p-6">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <iframe src="/NIST_AI_RMF_4_Functions_Executive_Deck.pdf#toolbar=0&navpanes=0&view=FitH" title="NIST AI RMF Executive Deck" className="h-[70vh] min-h-[520px] w-full" />
                </div>
                <div className="mt-4 flex justify-end">
                  <a href="/NIST_AI_RMF_4_Functions_Executive_Deck.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-sans text-xs font-semibold text-slate-700 transition hover:bg-slate-100">Open Full-Screen ↗</a>
                </div>
                <p className="mt-3 font-sans text-xs text-slate-500">The deck is presented here for viewing. Use the full-screen option for a larger reading experience.</p>
              </div>
            </section>

            <section className="mb-12 border-b border-slate-200 pb-10">
              <h2 className="mb-4 font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Questions I am exploring</h2>
              <ul className="list-disc space-y-2.5 pl-6"><li>How do organizations turn AI RMF outcomes into measurable governance controls?</li><li>How should evidence freshness influence AI risk decisions?</li><li>How can AI governance capability scale as the AI portfolio grows?</li><li>Can AI Governance Debt be measured using the evidence generated through MAP, MEASURE and MANAGE?</li></ul>
            </section>

            <section className="font-sans">
              <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Official NIST resources</h2>
              <ol className="space-y-2.5 pl-5 text-xs leading-6 text-slate-600 sm:text-sm">
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950" href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10" target="_blank" rel="noreferrer">NIST AI RMF 1.0</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950" href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" target="_blank" rel="noreferrer">NIST AI RMF Core</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950" href="https://airc.nist.gov/airmf-resources/playbook/" target="_blank" rel="noreferrer">NIST AI RMF Playbook</a></li>
                <li><a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-950" href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a></li>
              </ol>
              <p className="mt-5 text-xs leading-6 text-slate-500">Note: NIST AI RMF 1.0 is currently being revised. This article and the accompanying presentation summarize AI RMF 1.0 and its current companion resources.</p>
            </section>

            <aside className="mt-8 rounded-xl bg-slate-50 p-4 font-sans text-xs leading-6 text-slate-600"><strong className="text-slate-900">Author note:</strong> This article is a practical interpretation of NIST AI RMF 1.0. GOVERN, MAP, MEASURE and MANAGE are NIST terminology; the MAP → MEASURE → MANAGE → LEARN → MAP loop is presented as my own operational interpretation rather than an additional NIST function.</aside>
          </div>
        </article>
      </Container>
    <PageNavigation current="/blog" />
      </main>
  );
      <Footer />
    </>
  );
}

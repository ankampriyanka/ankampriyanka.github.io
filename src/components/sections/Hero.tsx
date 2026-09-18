import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ROUTES } from "@/constants/routes";

export default function Hero() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              AI Governance · Responsible AI · AI Assurance
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Building trustworthy AI systems through governance and assurance.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {siteConfig.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={ROUTES.RESEARCH}>Explore Research</Button>
              <Button href={ROUTES.PROJECTS} variant="secondary">
                View Projects
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-800 pt-7">
              <div>
                <p className="text-2xl font-bold text-cyan-300">14+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-300">AI</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                  Governance & Assurance
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-300">DBA</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                  AI & Machine Learning
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Trustworthy AI
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                From principles to measurable evidence.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Research and practical work across AI governance, AI safety,
                trust scoring, lifecycle assurance and LLM / RAG evaluation.
              </p>

              <div className="mt-8 space-y-3">
                {["Govern", "Map", "Measure", "Manage"].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                    <span className="text-xs text-cyan-300">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
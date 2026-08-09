import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ROUTES } from "@/constants/routes";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="pt-6 pb-0 md:pt-8">

          {/* Title */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            {siteConfig.title}
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-7xl">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <h2 className="mt-3 text-2xl font-semibold text-slate-700 dark:text-slate-200">
            Program Management • Responsible AI • AI Safety
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href={ROUTES.PROJECTS}>
              View Projects
            </Button>

            <Button href={ROUTES.RESUME} variant="secondary">
              View Resume
            </Button>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-8 border-t border-slate-200 pt-6 dark:border-slate-800 md:grid-cols-4">

            <div>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                14+
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                25+
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Enterprise Programs
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                5+
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                AI & Research Projects
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                DBA
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                AI & Machine Learning
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="max-w-4xl">
        {/* Title */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
          {siteConfig.title}
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <h2 className="mt-4 text-2xl font-semibold text-slate-700">
          Program Management • Responsible AI • AI Safety
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/projects">
            View Projects
          </Button>

          <Button href="/resume" variant="secondary">
            View Resume
          </Button>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-cyan-600">14+</p>
            <p className="mt-2 text-sm text-slate-600">
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-600">25+</p>
            <p className="mt-2 text-sm text-slate-600">
              Enterprise Programs
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-600">5+</p>
            <p className="mt-2 text-sm text-slate-600">
              AI & Research Projects
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-600">DBA</p>
            <p className="mt-2 text-sm text-slate-600">
              AI & Machine Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { greatLearningPortfolio, walshResearchPortfolio } from "@/data/portfolio";

function PortfolioCard({
  title,
  description,
  category,
  link,
  status,
}: {
  title: string;
  description: string;
  category: string;
  link?: string;
  status: "Portfolio" | "Research" | "Reserved";
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900 p-7 shadow-sm transition-shadow hover:border-slate-700 hover:shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
          {category}
        </span>
        <span className="text-sm font-medium text-slate-400">{status}</span>
      </div>

      <h4 className="mt-8 text-2xl font-semibold leading-tight text-white">
        {title}
      </h4>

      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
        {description}
      </p>

      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center font-semibold text-cyan-300 transition hover:text-cyan-200 hover:underline"
        >
          View ePortfolio <span className="ml-2">↗</span>
        </Link>
      )}
    </div>
  );
}

export default function AcademicPortfolio() {
  return (
    <section className="py-20">
      <SectionHeading
        title="Academic & Research Portfolio"
        subtitle="Academic AI/ML work and doctoral research, kept separate from professional projects."
      />

      <div className="space-y-16">
        <section>
          <h3 className="mb-5 text-2xl font-bold text-white">
            AI/ML Portfolio — Great Learning
          </h3>
          <p className="mb-8 max-w-3xl text-base leading-7 text-slate-300">
            Applied AI and machine learning projects completed through the Great Learning PGP. This section provides a dedicated home for the academic project portfolio.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {greatLearningPortfolio.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-5 text-2xl font-bold text-white">
            Doctoral & Organizational Research — Walsh College
          </h3>
          <p className="mb-8 max-w-3xl text-base leading-7 text-slate-300">
            A dedicated space for doctoral coursework, organizational assignments and research outputs. This area is reserved for the Walsh work and can be expanded as individual projects are curated.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {walshResearchPortfolio.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

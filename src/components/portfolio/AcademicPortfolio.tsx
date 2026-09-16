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
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300">
            {category}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">{status}</span>
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex font-semibold text-slate-900 hover:underline dark:text-white"
          >
            View ePortfolio ↗
          </Link>
        )}
      </div>
    </Card>
  );
}

export default function AcademicPortfolio() {
  return (
    <section className="py-20">
      <SectionHeading
        title="Academic & Research Portfolio"
        subtitle="Selected academic work alongside professional projects, with dedicated space for doctoral and organizational research."
      />

      <div className="space-y-16">
        <section>
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            AI/ML Portfolio — Great Learning
          </h3>
          <p className="mb-8 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
            Applied AI and machine learning projects completed through the Great Learning PGP. This section is intentionally separate from professional projects so the academic portfolio can be explored without mixing contexts.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {greatLearningPortfolio.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Doctoral & Organizational Research — Walsh College
          </h3>
          <p className="mb-8 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
            A dedicated space for doctoral coursework, organizational assignments and research outputs. Detailed entries can be added as the work is curated for publication.
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

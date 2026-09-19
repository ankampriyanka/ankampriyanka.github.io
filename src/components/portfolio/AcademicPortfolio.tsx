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
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-7 shadow-sm transition-shadow hover:border-[#F39A3F]/50 hover:shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[#F39A3F]/40 bg-[#181818] px-3 py-1 text-sm font-medium text-[#F5F1EA]">
          {category}
        </span>
        <span className="text-sm font-medium text-[#77736D]">{status}</span>
      </div>

      <h4 className="mt-8 text-2xl font-semibold leading-tight text-[#F5F1EA]">
        {title}
      </h4>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#A9A39A]">
        {description}
      </p>

      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center font-semibold text-[#F5F1EA] transition hover:text-[#F5F1EA] hover:underline"
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
          <h3 className="mb-5 text-2xl font-bold text-[#F5F1EA]">
            AI/ML Portfolio — Great Learning
          </h3>
          <p className="mb-8 max-w-3xl text-base leading-7 text-[#A9A39A]">
            Applied AI and machine learning projects completed through the Great Learning PGP. This section provides a dedicated home for the academic project portfolio.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {greatLearningPortfolio.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-5 text-2xl font-bold text-[#F5F1EA]">
            Doctoral & Organizational Research — Walsh College
          </h3>
          <p className="mb-8 max-w-3xl text-base leading-7 text-[#A9A39A]">
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

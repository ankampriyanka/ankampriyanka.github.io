import Link from "next/link";
import Container from "@/components/layout/Container";
import PageNavigation from "@/components/layout/PageNavigation";

const articles = [
  {
    title: "Understanding AI Bill of Materials (AIBOM)",
    description:
      "Why AI supply-chain visibility needs to extend beyond software components to models, datasets, agents, guardrails, runtime and evidence.",
    category: "AI Governance · AIBOM · Part 1",
    href: "/blog/understanding-ai-bom",
    date: "September 2026",
    readTime: "8 min read",
    series: "AIBOM",
    part: "Part 1",
  },
  {
    title: "NIST AI Risk Management Framework: GOVERN, MAP, MEASURE & MANAGE",
    description:
      "A practical perspective on turning the NIST AI RMF into a continuous AI risk management capability across governance, context, evidence and decisions.",
    category: "AI Governance · NIST AI RMF",
    href: "/blog/nist-ai-rmf",
    date: "September 2026",
    readTime: "8 min read",
    series: "NIST AI RMF",
  },
  {
    title: "AI Governance Debt: The Risk We Don't See",
    description:
      "A proposed research lens for understanding the growing gap between the governance an AI portfolio requires and the governance capability an organization has in place.",
    category: "AI Governance · Part 1",
    href: "/blog/ai-governance-debt",
    date: "September 2026",
    readTime: "7 min read",
    series: "AI Governance Debt",
    part: "Part 1",
  },
  {
    title: "How Do You Measure AI Governance Debt?",
    description:
      "A conceptual model for turning AI Governance Debt into a measurable portfolio-level gap across coverage, assessments, controls, evidence, remediation and freshness.",
    category: "AI Governance · Part 2",
    href: "/blog/ai-governance-debt-measuring",
    date: "September 2026",
    readTime: "8 min read",
    series: "AI Governance Debt",
    part: "Part 2",
  },
  {
    title: "AI Governance Debt vs Technical Debt vs Security Debt",
    description:
      "Why AI Governance Debt deserves a distinct lens alongside technical and security debt — and why the three should not be treated as interchangeable.",
    category: "AI Governance · Part 3",
    href: "/blog/ai-governance-debt-vs-technical-security",
    date: "September 2026",
    readTime: "8 min read",
    series: "AI Governance Debt",
    part: "Part 3",
  },
];

const featured = articles[0];
const latest = articles.slice(1);

function ArticleCard({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#C0CAD6] bg-[#EBEEF3] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          {article.category}
        </span>
        {article.part && (
          <span className="text-xs font-medium text-slate-500">{article.part}</span>
        )}
      </div>

      <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#4E537D]">
        <Link href={article.href} className="transition group-hover:text-cyan-200">
          {article.title}
        </Link>
      </h3>

      <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
        {article.description}
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-[#C0CAD6] pt-5 text-sm">
        <span className="text-slate-500">
          {article.date} · {article.readTime}
        </span>
        <Link
          href={article.href}
          className="font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-[#4E537D]">
      <Container>
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Research & Perspectives
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            AI Governance, Responsible AI & AI Assurance
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Independent research, frameworks and practical explorations focused
            on translating AI governance principles into measurable, actionable
            and continuously improvable practices.
          </p>
        </header>

        <section className="mt-16" aria-labelledby="featured-research">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <h2
              id="featured-research"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300"
            >
              Featured Research
            </h2>
          </div>

          <article className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-2xl sm:p-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {featured.category}
                </span>
                <span className="text-sm text-slate-500">
                  {featured.date} · {featured.readTime}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                <Link
                  href={featured.href}
                  className="transition hover:text-cyan-200"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {featured.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={featured.href}
                  className="inline-flex items-center rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Explore article <span className="ml-2">→</span>
                </Link>
                <span className="text-sm text-slate-500">
                  {featured.series} · {featured.part}
                </span>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-20" aria-labelledby="latest-research">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Latest Research
              </p>
              <h2 id="latest-research" className="mt-2 text-3xl font-bold">
                Research notes & frameworks
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {latest.map((article) => (
              <ArticleCard key={article.href} article={article} />
            ))}
          </div>
        </section>

        <section
          className="mt-16 rounded-2xl border border-[#C0CAD6] bg-[#EBEEF3]/60 p-7"
          aria-labelledby="research-series"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Research Series
          </p>
          <h2 id="research-series" className="mt-2 text-2xl font-bold">
            Follow the thinking across related articles
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#C0CAD6] bg-white p-5">
              <p className="font-semibold text-[#4E537D]">AI Governance Debt</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
                <span>Part 1</span>
                <span>→</span>
                <span>Part 2</span>
                <span>→</span>
                <span>Part 3</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#C0CAD6] bg-white p-5">
              <p className="font-semibold text-[#4E537D]">AIBOM</p>
              <div className="mt-3 text-sm text-slate-600">
                Part 1 · Understanding AI Bill of Materials
              </div>
            </div>
          </div>
        </section>
        <PageNavigation current="/blog" />
      </Container>
    </main>
  );
}

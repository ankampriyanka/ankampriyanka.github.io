import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "@/assests/pdf/LN picture.jpg";
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
    title: "From AI Risks to Evidence: Introducing the AI Trust & Risk Taxonomy",
    description:
      "How a relationship-first, machine-readable taxonomy connects AI risks, trust dimensions, lifecycle stages, scenarios, controls, metrics, evidence and external frameworks.",
    category: "AI Governance · AITRT",
    href: "/blog/ai-trust-risk-taxonomy",
    date: "September 2026",
    readTime: "10–12 min read",
    series: "AI Trust & Risk Taxonomy",
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
    <article className="group flex h-full flex-col rounded-2xl border border-[#2A2A2A] bg-[#111111] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F39A3F]/40 hover:shadow-xl">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-[#F39A3F]/40 bg-[#181818] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F5F1EA]">
          {article.category}
        </span>
        {article.part && (
          <span className="text-xs font-medium text-[#77736D]">{article.part}</span>
        )}
      </div>

      <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#F5F1EA]">
        <Link href={article.href} className="transition group-hover:text-[#F5F1EA]">
          {article.title}
        </Link>
      </h3>

      <p className="mt-4 flex-1 text-base leading-7 text-[#A9A39A]">
        {article.description}
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-[#2A2A2A] pt-5 text-sm">
        <span className="text-[#77736D]">
          {article.date} · {article.readTime}
        </span>
        <Link
          href={article.href}
          className="font-semibold text-[#F5F1EA] transition hover:text-[#F5F1EA]"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <><Navbar />
      <main className="min-h-screen bg-[#050505] py-24 text-[#F5F1EA]">
      <Container>
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F1EA]">
            Research & Perspectives
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            AI Governance, Responsible AI & AI Assurance
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A9A39A]">
            Independent research, frameworks and practical explorations focused
            on translating AI governance principles into measurable, actionable
            and continuously improvable practices.
          </p>
        </header>

        <section className="mt-16" aria-labelledby="featured-research">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#F39A3F]" />
            <h2
              id="featured-research"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5F1EA]"
            >
              Featured Research
            </h2>
          </div>

          <article className="relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] p-8 shadow-[0_20px_55px_rgba(243,154,63,0.08)] sm:p-10">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#F39A3F]/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_220px] lg:items-center">
              <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#F39A3F]/40 bg-[#181818] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F5F1EA]">
                  {featured.category}
                </span>
                <span className="text-sm text-[#77736D]">
                  {featured.date} · {featured.readTime}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                <Link
                  href={featured.href}
                  className="transition hover:text-[#F5F1EA]"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#A9A39A]">
                {featured.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={featured.href}
                  className="inline-flex items-center rounded-xl bg-[#F39A3F] px-5 py-3 font-semibold text-[#050505] transition hover:bg-[#F6B65B]"
                >
                  Explore article <span className="ml-2">→</span>
                </Link>
                <span className="text-sm text-[#77736D]">
                  {featured.series} · {featured.part}
                </span>
              </div>
              </div>
              <div className="mx-auto w-full max-w-[220px]">
                <div className="rounded-[1.75rem] border border-[#2A2A2A] bg-[#050505] p-2 shadow-lg">
                  <Image
                    src={profilePhoto}
                    alt="Ankam Priyanka"
                    width={440}
                    height={550}
                    className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-[#F5F1EA]">
                  AI Governance · Responsible AI
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-20" aria-labelledby="latest-research">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5F1EA]">
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
          className="mt-16 rounded-2xl border border-[#2A2A2A] bg-[#111111]/60 p-7"
          aria-labelledby="research-series"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5F1EA]">
            Research Series
          </p>
          <h2 id="research-series" className="mt-2 text-2xl font-bold">
            Follow the thinking across related articles
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#2A2A2A] bg-[#050505] p-5">
              <p className="font-semibold text-[#F5F1EA]">AI Governance Debt</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-[#A9A39A]">
                <span>Part 1</span>
                <span>→</span>
                <span>Part 2</span>
                <span>→</span>
                <span>Part 3</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#050505] p-5">
              <p className="font-semibold text-[#F5F1EA]">AIBOM</p>
              <div className="mt-3 text-sm text-[#A9A39A]">
                Part 1 · Understanding AI Bill of Materials
              </div>
            </div>
          </div>
        </section>
        <PageNavigation current="/blog" />
      </Container>
    </main>
      <Footer /></>
  );
}

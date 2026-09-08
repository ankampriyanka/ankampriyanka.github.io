import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const articles = [
  {
    title: "AI Governance Debt: The Risk We Don't See",
    description:
      "A proposed research lens for understanding the growing gap between the governance an AI portfolio requires and the governance capability an organization has in place.",
    category: "AI Governance · Part 1",
    href: "/blog/ai-governance-debt",
    date: "September 2026",
  },
  {
    title: "How Do You Measure AI Governance Debt?",
    description:
      "A conceptual model for turning AI Governance Debt into a measurable portfolio-level gap across coverage, assessments, controls, evidence, remediation and freshness.",
    category: "AI Governance · Part 2",
    href: "/blog/ai-governance-debt-measuring",
    date: "September 2026",
  },
  {
    title: "AI Governance Debt vs Technical Debt vs Security Debt",
    description:
      "Why AI Governance Debt deserves a distinct lens alongside technical and security debt — and why the three should not be treated as interchangeable.",
    category: "AI Governance · Part 3",
    href: "/blog/ai-governance-debt-vs-technical-security",
    date: "September 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Container>
        <SectionHeading
          title="Research & Perspectives"
          subtitle="Independent research, frameworks and practical explorations in AI Governance, Responsible AI, AI Safety and AI Assurance."
        />

        <div className="mb-12 max-w-3xl">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            My work focuses on translating AI governance principles into measurable,
            actionable and continuously improvable practices — bridging the gap between
            policy, engineering and organizational execution.
          </p>
        </div>

        <section aria-labelledby="research-articles" className="grid gap-6 md:grid-cols-2">
          <h2 id="research-articles" className="sr-only">Research articles</h2>
          {articles.map((article) => (
            <article key={article.href} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{article.category}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                <Link href={article.href} className="transition group-hover:underline">{article.title}</Link>
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{article.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>{article.date}</span>
                <Link href={article.href} className="font-semibold text-slate-900 dark:text-white">Read article →</Link>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </main>
  );
}

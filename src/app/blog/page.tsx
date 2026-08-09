import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Container>
        <SectionHeading
          title="Blog"
          subtitle="Writing and insights on Responsible AI, AI Safety, program management and emerging technology."
        />

        <div className="mt-12 max-w-2xl">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Blog articles will be added here as I publish research,
            technical explorations and perspectives on Responsible AI
            and AI Safety.
          </p>
        </div>
      </Container>
    </main>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageNavigation from "@/components/layout/PageNavigation";

export default function AboutPage() {
  return (
    <><Navbar />
      <main className="min-h-screen bg-white py-24 text-slate-900">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Program Management, Responsible AI, AI Safety and Automotive AI."
        />

        <div className="mt-12 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I am a Program Management and Product Operations professional
            with 14+ years of experience spanning engineering, program
            management, Agile coaching, business operations and AI/ML.
          </p>

          <p>
            My current focus is on Responsible AI, AI Safety and governance,
            particularly for safety-critical automotive systems.
          </p>

          <p>
            I am currently pursuing a DBA in AI & Machine Learning, with
            research interests in trustworthy AI, AI evaluation and Driver
            Monitoring Systems.
          </p>
        </div>
        <PageNavigation current="/about" />
      </Container>
    </main>
  );
      <Footer />
    </>
  );
}

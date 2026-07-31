import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">
            Let's Build Responsible AI Together
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            I'm passionate about Program Management, Responsible AI,
            AI Safety, Product Operations, and building trustworthy AI
            systems for enterprise and automotive domains.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact">
              Contact Me
            </Button>

            <Button
              href="https://github.com/ankampriyanka"
              variant="secondary"
            >
              View GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
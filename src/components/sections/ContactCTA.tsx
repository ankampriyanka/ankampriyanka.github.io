import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 text-white"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I'm always interested in collaborating on Responsible AI,
            AI Safety, Technical Program Management, Automotive AI,
            Governance and Enterprise Transformation initiatives.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact">
              Contact Me
            </Button>

            <Button
              href="https://github.com/ankampriyanka"
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { social } from "@/data/social";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

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
            AI Safety, Technical Program Management,
            Product Operations and Enterprise AI initiatives.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button href={`mailto:${social.email}`}>
              <span className="flex items-center gap-2">
                <FaEnvelope />
                Contact Me
              </span>
            </Button>

            <Button
              href={social.github}
              variant="secondary"
            >
              <span className="flex items-center gap-2">
                <FaGithub />
                GitHub
              </span>
            </Button>

            <Button
              href={social.linkedin}
              variant="secondary"
            >
              <span className="flex items-center gap-2">
                <FaLinkedin />
                LinkedIn
              </span>
            </Button>

          </div>
        </div>
      </Container>
    </section>
  );
}
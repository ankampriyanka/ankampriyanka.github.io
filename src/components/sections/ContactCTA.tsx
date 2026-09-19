import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { social } from "@/data/social";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section id="contact" className="border-y border-[#2A2A2A] bg-[#111111] py-20 text-[#F5F1EA]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F39A3F]">Let's Connect</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Ideas, research and responsible AI in practice.</h2>
          <p className="mt-6 text-lg leading-8 text-[#A9A39A]">Interested in collaborating on AI Governance, Responsible AI, AI Safety, AI Assurance or enterprise AI initiatives?</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={social.email}><span className="flex items-center gap-2"><FaEnvelope /> Email</span></Button>
            <Button href={social.linkedin} variant="secondary"><span className="flex items-center gap-2"><FaLinkedin /> LinkedIn</span></Button>
            <Button href={social.github} variant="secondary"><span className="flex items-center gap-2"><FaGithub /> GitHub</span></Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
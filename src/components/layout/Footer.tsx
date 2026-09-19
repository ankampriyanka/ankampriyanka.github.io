import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { social } from "@/data/social";
import { siteConfig } from "@/data/site";
import Container from "./Container";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#050505]">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-[#F5F1EA]">{siteConfig.name}</h3>
            <p className="mt-3 text-sm leading-6 text-[#A9A39A]">{siteConfig.title}</p>
            <p className="mt-6 text-xs text-[#77736D]">{siteConfig.copyright}</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#77736D]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#A9A39A]">
              <li><Link className="hover:text-[#F39A3F]" href="/">Home</Link></li>
              <li><Link className="hover:text-[#F39A3F]" href={ROUTES.PROJECTS}>Projects</Link></li>
              <li><Link className="hover:text-[#F39A3F]" href={ROUTES.RESEARCH}>Research</Link></li>
              <li><Link className="hover:text-[#F39A3F]" href={ROUTES.RESUME}>Resume</Link></li>
              <li><Link className="hover:text-[#F39A3F]" href={ROUTES.CONTACT}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#77736D]">Connect</h4>
            <div className="space-y-3 text-sm text-[#A9A39A]">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#F39A3F]"><FaLinkedin /> LinkedIn</a>
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#F39A3F]"><FaGithub /> GitHub</a>
              <a href={social.email} className="flex items-center gap-3 hover:text-[#F39A3F]"><FaEnvelope /> Email</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
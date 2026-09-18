import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { social } from "@/data/social";
import { siteConfig } from "@/data/site";
import Container from "./Container";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="border-t border-[#C0CAD6] bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-[#4E537D]">{siteConfig.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{siteConfig.title}</p>
            <p className="mt-6 text-xs text-slate-500">{siteConfig.copyright}</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link className="hover:text-[#4E537D]" href="/">Home</Link></li>
              <li><Link className="hover:text-[#4E537D]" href={ROUTES.PROJECTS}>Projects</Link></li>
              <li><Link className="hover:text-[#4E537D]" href={ROUTES.RESEARCH}>Research</Link></li>
              <li><Link className="hover:text-[#4E537D]" href={ROUTES.RESUME}>Resume</Link></li>
              <li><Link className="hover:text-[#4E537D]" href={ROUTES.CONTACT}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Connect</h4>
            <div className="space-y-3 text-sm text-slate-600">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#4E537D]"><FaLinkedin /> LinkedIn</a>
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#4E537D]"><FaGithub /> GitHub</a>
              <a href={social.email} className="flex items-center gap-3 hover:text-[#4E537D]"><FaEnvelope /> Email</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { social } from "@/data/social";
import { siteConfig } from "@/data/site";
import Container from "./Container";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">

          {/* Left */}

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {siteConfig.name}
            </h3>

            <p className="mt-4 text-slate-600">
              {siteConfig.title}
            </p>

            <p className="mt-6 text-sm text-slate-500">
              {siteConfig.copyright}
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="mb-4 font-semibold uppercase">
              Navigation
            </h4>

            <ul className="space-y-3">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href={ROUTES.PROJECTS}>
                  Projects
                </Link>
              </li>

              <li>
                <Link href={ROUTES.RESEARCH}>
                  Research
                </Link>
              </li>

              <li>
                <Link href={ROUTES.RESUME}>
                  Resume
                </Link>
              </li>

              <li>
                <Link href={ROUTES.CONTACT}>
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}

          <div>

            <h4 className="mb-4 font-semibold uppercase">
              Connect
            </h4>

            <div className="space-y-4">

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-600"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-600"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-3 hover:text-cyan-600"
              >
                <FaEnvelope />
                Email
              </a>

            </div>

          </div>

        </div>
      </Container>
    </footer>
  );
}
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-bold">{siteConfig.name}</h3>

          <p className="mt-2 max-w-md text-sm text-gray-600">
            {siteConfig.title}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Navigation
          </h4>

          <ul className="space-y-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 transition-colors hover:text-cyan-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-800">
            Connect
          </h4>

          <ul className="space-y-2">
            <li>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                className="text-sm text-gray-600 transition-colors hover:text-cyan-600"
              >
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href={siteConfig.social.github}
                target="_blank"
                className="text-sm text-gray-600 transition-colors hover:text-cyan-600"
              >
                GitHub
              </Link>
            </li>

            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-gray-600 transition-colors hover:text-cyan-600"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
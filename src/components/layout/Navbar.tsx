import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navigation } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-cyan-300"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
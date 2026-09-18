import Link from "next/link";

const pages = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function PageNavigation({ current }: { current: string }) {
  const index = pages.findIndex((page) => page.href === current);
  const previous = index > 0 ? pages[index - 1] : null;
  const next = index >= 0 && index < pages.length - 1 ? pages[index + 1] : null;

  return (
    <nav aria-label="Page navigation" className="mt-16 flex items-center justify-between border-t border-[#C0CAD6] pt-6">
      {previous ? (
        <Link href={previous.href} className="group text-sm font-semibold text-[#4E537D] hover:text-[#3f4468]">
          <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Previous</span>
          <span className="mt-1 block">← {previous.label}</span>
        </Link>
      ) : <span />}
      {next ? (
        <Link href={next.href} className="group text-right text-sm font-semibold text-[#4E537D] hover:text-[#3f4468]">
          <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Next</span>
          <span className="mt-1 block">{next.label} →</span>
        </Link>
      ) : <span />}
    </nav>
  );
}
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-[#050505]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#F5F1EA] hover:text-[#F39A3F]">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-[#A9A39A] transition-colors hover:text-[#F39A3F]">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
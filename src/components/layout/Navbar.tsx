import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#C0CAD6] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#4E537D] hover:text-[#3f4468]">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#4E537D]">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
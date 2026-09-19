import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href?: string; variant?: "primary" | "secondary" };

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const base = "inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F39A3F]";
  const variants = {
    primary: "bg-[#F39A3F] text-[#050505] hover:bg-[#F6B65B] hover:-translate-y-0.5",
    secondary: "border border-[#3A3A3A] bg-[#111111] text-[#F5F1EA] hover:border-[#F39A3F] hover:text-[#F39A3F] hover:-translate-y-0.5",
  };
  const className = `${base} ${variants[variant]}`;
  return href ? <Link href={href} className={className}>{children}</Link> : <button className={className}>{children}</button>;
}
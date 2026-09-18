import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7E4E9]";

  const variants = {
    primary: "bg-[#4E537D] text-white hover:bg-[#424769] hover:-translate-y-0.5",
    secondary: "border border-[#C0CAD6] bg-white text-[#4E537D] hover:border-[#4E537D] hover:bg-[#EBEEF3] hover:-translate-y-0.5",
  };

  const className = `${base} ${variants[variant]}`;

  return href ? <Link href={href} className={className}>{children}</Link> : <button className={className}>{children}</button>;
}
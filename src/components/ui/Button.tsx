import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center rounded-xl px-6 py-3 font-medium transition-colors";

const variants = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",

  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
};

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
import { ReactNode } from "react";

type CardProps = { children: ReactNode };

export default function Card({ children }: CardProps) {
  return <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#F39A3F]/60 hover:shadow-[0_18px_45px_rgba(243,154,63,0.08)]">{children}</div>;
}
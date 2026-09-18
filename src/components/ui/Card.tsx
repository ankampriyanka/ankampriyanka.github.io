import { ReactNode } from "react";

type CardProps = { children: ReactNode };

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-[#C0CAD6] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#4E537D]/50 hover:shadow-md">
      {children}
    </div>
  );
}
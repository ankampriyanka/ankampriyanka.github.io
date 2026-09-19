import Link from "next/link";
import { Research } from "@/types/research";

type ResearchCardProps = { research: Research };

const variants = {
  1: { surface: "bg-[#15120F]", border: "border-[#F39A3F]/45", accent: "bg-[#F39A3F]", badge: "border-[#F39A3F]/40 bg-[#1D1711] text-[#F6B65B]", motif: "TRUST · AUTOMOTIVE AI" },
  2: { surface: "bg-[#151111]", border: "border-[#8F1D14]/60", accent: "bg-[#8F1D14]", badge: "border-[#8F1D14]/50 bg-[#1C1110] text-[#E9A19A]", motif: "RISK · SEMANTIC ANALYSIS" },
  3: { surface: "bg-[#121217]", border: "border-[#77736D]/50", accent: "bg-[#F6B65B]", badge: "border-[#3A3A3A] bg-[#181818] text-[#F6B65B]", motif: "GOVERNANCE · LIFECYCLE" },
  4: { surface: "bg-[#111111]", border: "border-[#F5F1EA]/30", accent: "bg-[#F5F1EA]", badge: "border-[#3A3A3A] bg-[#181818] text-[#F5F1EA]", motif: "TAXONOMY · KNOWLEDGE LAYER" },
} as const;

export default function ResearchCard({ research }: ResearchCardProps) {
  const variant = variants[research.id as keyof typeof variants] ?? variants[1];
  return (
    <article className={`group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border ${variant.border} ${variant.surface} p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(243,154,63,0.08)]`}>
      <div className={`absolute left-0 top-0 h-1 w-full ${variant.accent}`} />
      <div className="flex items-center justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${variant.badge}`}>{research.area}</span>
        <span className="text-xs font-medium text-[#77736D]">{research.status}</span>
      </div>
      <div className="mt-7 flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${variant.accent}`} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9A39A]">{variant.motif}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#F5F1EA]">{research.title}</h3>
      <p className="mt-4 flex-grow text-sm leading-7 text-[#A9A39A]">{research.summary}</p>
      <Link href={`/research/${research.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-[#F39A3F] transition group-hover:translate-x-1">Explore research <span className="ml-2">→</span></Link>
    </article>
  );
}
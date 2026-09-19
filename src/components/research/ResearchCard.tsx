import { Research } from "@/types/research";

type ResearchCardProps = { research: Research };

const variants = {
  1: {
    surface: "bg-[#F2FBFC]",
    border: "border-[#A7E4E9]",
    accent: "bg-[#A7E4E9]",
    badge: "bg-white border-[#A7E4E9] text-[#4E537D]",
    motif: "TRUST · AUTOMOTIVE AI",
  },
  2: {
    surface: "bg-[#F3F5F8]",
    border: "border-[#C0CAD6]",
    accent: "bg-[#C0CAD6]",
    badge: "bg-white border-[#C0CAD6] text-[#4E537D]",
    motif: "RISK · SEMANTIC ANALYSIS",
  },
  3: {
    surface: "bg-[#F1F1F7]",
    border: "border-[#AEB3D0]",
    accent: "bg-[#4E537D]",
    badge: "bg-white border-[#AEB3D0] text-[#4E537D]",
    motif: "GOVERNANCE · LIFECYCLE",
  },
} as const;

export default function ResearchCard({ research }: ResearchCardProps) {
  const variant = variants[research.id as keyof typeof variants] ?? variants[1];

  return (
    <article
      className={`group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border ${variant.border} ${variant.surface} p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className={`absolute left-0 top-0 h-1 w-full ${variant.accent}`} />

      <div className="flex items-center justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${variant.badge}`}>
          {research.area}
        </span>
        <span className="text-xs font-medium text-slate-500">{research.status}</span>
      </div>

      <div className="mt-7 flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${variant.accent}`} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4E537D]">
          {variant.motif}
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#4E537D]">
        {research.title}
      </h3>

      <p className="mt-4 flex-grow text-sm leading-7 text-slate-600">
        {research.summary}
      </p>

      <div className="mt-6 text-sm font-semibold text-[#4E537D] transition group-hover:translate-x-1">
        Explore research <span className="ml-2">→</span>
      </div>
    </article>
  );
}
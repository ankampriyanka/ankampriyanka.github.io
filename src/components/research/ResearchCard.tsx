import Link from "next/link";
import { Research } from "@/types/research";

type ResearchCardProps = { research: Research };

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <article className="group border-b border-[#2A2A2A] py-7 first:pt-0 last:border-b-0">
      <div className="grid gap-5 md:grid-cols-[72px_1fr_auto] md:items-start">
        <div className="text-3xl font-bold text-[#3A3A3A]">
          {String(research.id).padStart(2, "0")}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F39A3F]">{research.area}</span>
            <span className="text-xs text-[#77736D]">{research.status}</span>
          </div>
          <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-[#F5F1EA]">{research.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#A9A39A]">{research.summary}</p>
        </div>
        <Link href={`/research/${research.slug}`} className="inline-flex items-center self-end text-sm font-semibold text-[#F39A3F] transition group-hover:translate-x-1 md:self-start">
          Explore <span className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}

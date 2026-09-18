import Card from "@/components/ui/Card";
import { Research } from "@/types/research";

type ResearchCardProps = { research: Research };

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Card>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#C0CAD6] bg-[#EBEEF3] px-3 py-1 text-xs font-medium text-[#4E537D]">{research.area}</span>
          <span className="text-xs font-medium text-slate-500">{research.status}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#4E537D]">{research.title}</h3>
        <p className="mt-4 flex-grow text-sm leading-7 text-slate-600">{research.summary}</p>
        <div className="mt-6 text-sm font-medium text-[#4E537D]">Explore research →</div>
      </div>
    </Card>
  );
}
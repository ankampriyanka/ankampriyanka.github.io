import Card from "@/components/ui/Card";
import { Research } from "@/types/research";

type ResearchCardProps = {
  research: Research;
};

export default function ResearchCard({
  research,
}: ResearchCardProps) {
  return (
    <Card>
      <div className="flex h-full flex-col">
        {/* Area & Status */}
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
            {research.area}
          </span>

          <span className="text-sm text-gray-500">
            {research.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900">
          {research.title}
        </h3>

        {/* Summary */}
        <p className="mt-4 flex-grow text-gray-600">
          {research.summary}
        </p>

        {/* Future Button */}
        <button className="mt-6 w-fit rounded-lg border border-cyan-600 px-4 py-2 text-cyan-600 transition hover:bg-cyan-600 hover:text-white">
          Read More →
        </button>
      </div>
    </Card>
  );
}
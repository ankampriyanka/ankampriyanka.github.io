type SectionHeadingProps = { title: string; subtitle?: string };

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4E537D]">
        Research · Practice · Delivery
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#4E537D] md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p>}
    </div>
  );
}
type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
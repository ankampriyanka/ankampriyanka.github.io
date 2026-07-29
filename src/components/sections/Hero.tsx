import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        {/* Title */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
          {siteConfig.title}
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
          {siteConfig.name}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {siteConfig.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
            View Projects
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
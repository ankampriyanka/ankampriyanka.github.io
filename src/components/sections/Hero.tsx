import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ROUTES } from "@/constants/routes";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-20 md:grid-cols-[1fr_320px] md:items-center md:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#4E537D]">
              AI Governance · Responsible AI · AI Assurance
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#4E537D] md:text-5xl">
              AI Governance, Responsible AI &amp; AI Assurance
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={ROUTES.RESEARCH}>Explore Research</Button>
              <Button href={ROUTES.PROJECTS} variant="secondary">View Projects</Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-[#C0CAD6] pt-6 md:grid-cols-3">
              <div><p className="text-2xl font-bold text-[#4E537D]">14+</p><p className="mt-1 text-sm text-slate-600">Years Experience</p></div>
              <div><p className="text-2xl font-bold text-[#4E537D]">AI</p><p className="mt-1 text-sm text-slate-600">Governance &amp; Assurance</p></div>
              <div><p className="text-2xl font-bold text-[#4E537D]">DBA</p><p className="mt-1 text-sm text-slate-600">AI &amp; Machine Learning</p></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-72 w-64 overflow-hidden rounded-[2rem] border-8 border-[#EBEEF3] bg-[#A7E4E9] shadow-lg">
              <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-[#4E537D]">
                Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
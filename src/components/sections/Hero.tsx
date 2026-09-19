import Image from "next/image";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { ROUTES } from "@/constants/routes";
import profilePhoto from "@/assests/pdf/LN picture.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#F39A3F]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8F1D14]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid min-h-[600px] items-center gap-14 py-20 md:grid-cols-[340px_1fr] md:gap-20 md:py-24 lg:min-h-[650px]">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-[#F39A3F]/50" />
              <div className="absolute -inset-8 rounded-full border border-[#3A3A3A]/60" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-[10px] border-[#181818] bg-[#111111] shadow-[0_24px_60px_rgba(243,154,63,0.12)] sm:h-80 sm:w-80">
                <Image
                  src={profilePhoto}
                  alt="Ankam Priyanka"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F5F1EA]">
              AI Governance · Responsible AI · AI Assurance
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#4E537D] sm:text-5xl">
              Building trustworthy AI through governance, assurance and measurable risk.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A39A]">
              {profile.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#F39A3F]/50 bg-[#181818] px-4 py-2 text-sm font-medium text-[#4E537D]">AI Governance</span>
              <span className="rounded-full border border-[#3A3A3A] bg-[#111111] px-4 py-2 text-sm font-medium text-[#4E537D]">Responsible AI</span>
              <span className="rounded-full border border-[#8F1D14]/60 bg-[#181111] px-4 py-2 text-sm font-medium text-[#4E537D]">AI Assurance</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={ROUTES.RESEARCH}>Explore Research</Button>
              <Button href={ROUTES.RESUME} variant="secondary">View Resume</Button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-[#2A2A2A] py-5">
              <div>
                <p className="text-2xl font-bold text-[#4E537D]">14+</p>
                <p className="mt-1 text-xs leading-5 text-[#77736D]">Years experience</p>
              </div>
              <div className="border-l border-[#2A2A2A] pl-5">
                <p className="text-2xl font-bold text-[#4E537D]">AI</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Governance &amp; assurance</p>
              </div>
              <div className="border-l border-[#C0CAD6] pl-5">
                <p className="text-2xl font-bold text-[#4E537D]">DBA</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">AI &amp; Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
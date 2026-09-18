import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageNavigation from "@/components/layout/PageNavigation";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experienceTimeline";
import { education } from "@/data/education";
import { certifications } from "@/data/certification";
import { skills } from "@/data/skills";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="border-b border-[#C0CAD6] bg-[#EBEEF3] py-16">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4E537D]">{profile.title}</p>
            <h1 className="mt-3 text-4xl font-bold text-[#4E537D] md:text-5xl">Resume</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{profile.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex rounded-xl bg-[#4E537D] px-5 py-3 text-sm font-semibold text-white hover:bg-[#424769]">View Resume ↗</a>
              <a href="/resume.pdf?download=1" className="inline-flex rounded-xl border border-[#C0CAD6] bg-white px-5 py-3 text-sm font-semibold text-[#4E537D] hover:bg-[#EBEEF3]">Download PDF ↓</a>
            </div>
          </Container>
        </section>

        <section className="py-16"><Container>
          <h2 className="mb-10 text-3xl font-bold text-[#4E537D]">Professional Experience</h2>
          {experiences.map((experience) => (
            <div key={experience.id} className="mb-8 rounded-2xl border border-[#C0CAD6] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#4E537D]">{experience.role}</h3>
              <p className="mt-2 font-semibold text-[#4E537D]">{experience.company}</p>
              <p className="mb-5 text-sm text-slate-500">{experience.duration} • {experience.location}</p>
              <p className="leading-8 text-slate-600">{experience.description}</p>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-700">{experience.achievements.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </Container></section>

        <section className="bg-[#EBEEF3] py-16"><Container>
          <h2 className="mb-10 text-3xl font-bold text-[#4E537D]">Education</h2>
          <div className="grid gap-6">{education.map((item) => <div key={item.id} className="rounded-2xl border border-[#C0CAD6] bg-white p-6"><h3 className="text-xl font-semibold text-[#4E537D]">{item.degree}</h3><p className="mt-2 text-[#4E537D]">{item.specialization}</p><p className="mt-2 text-slate-700">{item.institution}</p><p className="text-sm text-slate-500">{item.duration}</p></div>)}</div>
        </Container></section>

        <section className="py-16"><Container>
          <h2 className="mb-10 text-3xl font-bold text-[#4E537D]">Certifications &amp; Standards</h2>
          <div className="grid gap-6 md:grid-cols-2">{certifications.map((cert) => <div key={cert.id} className="rounded-2xl border border-[#C0CAD6] bg-white p-6 shadow-sm"><h3 className="font-semibold text-[#4E537D]">{cert.name}</h3><p className="mt-2 text-slate-500">{cert.issuer}</p><p className="mt-2 text-sm text-slate-700">{cert.year}</p></div>)}</div>
        </Container></section>

        <section className="bg-[#EBEEF3] py-16"><Container>
          <h2 className="mb-10 text-3xl font-bold text-[#4E537D]">Core Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">{skills.map((skill) => <div key={skill.id} className="rounded-2xl border border-[#C0CAD6] bg-white p-6"><h3 className="mb-4 text-xl font-semibold text-[#4E537D]">{skill.category}</h3><div className="flex flex-wrap gap-3">{skill.skills.map((item) => <span key={item} className="rounded-full bg-[#A7E4E9] px-3 py-2 text-sm text-[#4E537D]">{item}</span>)}</div></div>)}</div>
        </Container></section>
        <PageNavigation current="/resume" />
      </main>
      <Footer />
    </>
  );
}
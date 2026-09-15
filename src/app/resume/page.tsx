import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import { profile } from "@/data/profile";
import { experiences } from "@/data/experienceTimeline";
import { education } from "@/data/education";
import { certifications } from "@/data/certification";
import { skills } from "@/data/skills";

export default function ResumePage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        <section className="bg-slate-900 py-24 text-white">
          <Container>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              {profile.title}
            </p>
            <h1 className="mt-3 text-5xl font-bold">Resume</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {profile.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-sans">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                View Resume ↗
              </a>
              <a
                href="/resume.pdf?download=1"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-slate-800"
              >
                Download PDF ↓
              </a>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <h2 className="mb-12 text-4xl font-bold">Professional Experience</h2>

            {experiences.map((experience) => (
              <div key={experience.id} className="mb-12 rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold">{experience.role}</h3>
                <p className="mt-2 font-semibold text-cyan-600">{experience.company}</p>
                <p className="mb-6 text-sm text-slate-500">
                  {experience.duration} • {experience.location}
                </p>
                <p className="leading-8 text-slate-600">{experience.description}</p>
                <ul className="mt-6 list-disc space-y-3 pl-6">
                  {experience.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container>
            <h2 className="mb-12 text-4xl font-bold">Education</h2>
            <div className="grid gap-8">
              {education.map((item) => (
                <div key={item.id} className="rounded-xl border p-6">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-2 text-cyan-600">{item.specialization}</p>
                  <p className="mt-2">{item.institution}</p>
                  <p className="text-sm text-slate-500">{item.duration}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <h2 className="mb-10 text-4xl font-bold">Certifications &amp; Standards</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="mt-2 text-slate-500">{cert.issuer}</p>
                  <p className="mt-2 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container>
            <h2 className="mb-10 text-4xl font-bold">Core Skills</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.id} className="rounded-xl border p-6">
                  <h3 className="mb-4 text-xl font-semibold">{skill.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.skills.map((item) => (
                      <span key={item} className="rounded-full bg-cyan-100 px-3 py-2 text-sm text-cyan-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

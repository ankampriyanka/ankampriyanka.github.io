"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/experience/TimelineItem";
import { experiences } from "@/data/experienceTimeline";

export default function ExperienceTimeline() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="experience" className="bg-white py-20">
      <Container>
        <SectionHeading
          title="Professional Journey"
          subtitle="14+ years across engineering, program management, product operations and Responsible AI."
        />

        <div className="mt-10">
          {experiences.map((experience) => {
            const isOpen = openId === experience.id;

            return (
              <div key={experience.id} className="border-b border-[#C0CAD6] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? 0 : experience.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <div>
                    <p className="text-lg font-semibold text-[#4E537D]">{experience.company}</p>
                    <p className="mt-1 text-sm text-slate-500">{experience.role} · {experience.duration}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`text-2xl font-light text-[#4E537D] transition-transform ${isOpen ? "rotate-90" : ""}`}
                  >
                    &gt;
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5">
                    <TimelineItem experience={experience} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
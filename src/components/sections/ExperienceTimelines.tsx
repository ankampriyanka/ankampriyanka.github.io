"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/experience/TimelineItem";
import { experiences } from "@/data/experienceTimeline";

export default function ExperienceTimeline() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="experience" className="bg-[#0B0B0B] py-20">
      <Container>
        <SectionHeading title="Professional Journey" subtitle="14+ years across engineering, program management, product operations and Responsible AI." />
        <div className="mt-10">
          {experiences.map((experience) => {
            const isOpen = openId === experience.id;
            return (
              <div key={experience.id} className="border-b border-[#2A2A2A] last:border-b-0">
                <button type="button" onClick={() => setOpenId(isOpen ? 0 : experience.id)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                  <div>
                    <p className="text-lg font-semibold text-[#F5F1EA]">{experience.company}</p>
                    <p className="mt-1 text-sm text-[#77736D]">{experience.role} · {experience.duration}</p>
                  </div>
                  <span aria-hidden="true" className={`text-2xl font-light text-[#F39A3F] transition-transform ${isOpen ? "rotate-90" : ""}`}>›</span>
                </button>
                {isOpen && <div className="pb-5"><TimelineItem experience={experience} /></div>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { experience } from "@/data/experience";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/ui/Button";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Academic Journey"
        number="04"
        title="Academic Experience"
        subheading="Career progression across teaching, research, and institutional leadership roles."
      />
      <div className="mt-20 relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy-900/20 to-transparent md:-translate-x-1/2" />
        <ul className="space-y-12 md:space-y-16">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                  {isEven ? (
                    <>
                      <div className="md:pr-12 pl-12 md:pl-0">
                        <div className="card-elegant p-6 md:p-7 relative">
                          <div className="flex items-center">
                            <Button variant="chip">
                              <Calendar size={12} />
                              {item.yearRange}
                            </Button>
                          </div>
                          <h3 className="display-serif text-xl md:text-2xl mt-3">
                            {item.position}
                          </h3>
                          <p className="text-navy-700 font-medium text-sm mt-1">
                            {item.institution}
                          </p>
                          {item.description && (
                            <p className="text-sm text-ink-500 mt-4 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="md:pl-12 pl-12">
                        <div className="card-elegant p-6 md:p-7 relative">
                          <div className="flex items-center">
                            <Button variant="chip">
                              <Calendar size={12} />
                              {item.yearRange}
                            </Button>
                          </div>
                          <h3 className="display-serif text-xl md:text-2xl mt-3">
                            {item.position}
                          </h3>
                          <p className="text-navy-700 font-medium text-sm mt-1">
                            {item.institution}
                          </p>
                          {item.description && (
                            <p className="text-sm text-ink-500 mt-4 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-8 h-8 rounded-full bg-navy-800/5" />
                <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-ivory-50 border-2 border-navy-800 z-10 shadow-sm" />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

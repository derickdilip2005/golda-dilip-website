"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { researchInterests } from "@/data/research";
import { Atom, Cpu, Database, Network, ShieldCheck, BookOpen } from "lucide-react";

const interestIcons = [Atom, Cpu, Database, Network, ShieldCheck, BookOpen];

export default function ResearchInterests() {
  return (
    <section id="research-interests" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Research"
        number="02"
        title="Research & Interests"
        subheading="Exploring intelligent technologies that shape the future of computing."
      />
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {researchInterests.map((interest, index) => {
          const Icon = interestIcons[index % interestIcons.length];
          return (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-elegant p-6 md:p-8 hover:border-navy-900/40 relative overflow-hidden group hover:bg-navy-900/[0.02] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <span className="label-small">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="text-navy-700/40 group-hover:text-navy-700/60 transition-colors">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="display-serif text-xl md:text-2xl mt-2 text-ink-900">
                {interest.name}
              </h3>
              {interest.shortDescription && (
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                  {interest.shortDescription}
                </p>
              )}
              <div className="w-8 h-px bg-navy-800/50 mt-4" />
              <div
                className="absolute pointer-events-none right-3 bottom-3 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(15, 27, 51, 0.25) 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                  width: "28px",
                  height: "28px",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

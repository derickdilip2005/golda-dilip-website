"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { events, AcademicEvent } from "@/data/events";
import { motion } from "framer-motion";

const chipStyles: Record<AcademicEvent["type"], string> = {
  Conference: "bg-navy-100 text-navy-700 border-navy-900/15",
  Workshop: "bg-gold-100 text-gold-600 border-gold-300/40",
  FDP: "bg-navy-50 text-navy-700 border-navy-900/10",
  Seminar: "bg-ink-500/5 text-ink-700 border-ink-500/15",
  "Invited Talk": "bg-navy-900 text-ivory-50 border-navy-900",
  Other: "bg-ivory-100 text-ink-700 border-ink-500/15",
};

export default function EventTimeline() {
  return (
    <section id="events" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Events"
        number="09"
        title="Academic Engagement"
        subheading="Conferences, workshops, faculty development programmes, and invited talks."
      />

      <div className="mt-16 mx-auto max-w-4xl space-y-6 md:space-y-8">
        {events.map((event: AcademicEvent, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative border-l-2 border-navy-800/20 pl-6 md:pl-8"
          >
            <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-navy-800 ring-4 ring-ivory-50" />
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-ink-500/15 bg-ivory-50 px-3 py-1.5 text-xs font-medium text-ink-700">
                {event.date}
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-eyebrow ${chipStyles[event.type]}`}
              >
                {event.type}
              </span>
            </div>
            <p className="display-serif mt-2 text-xl">{event.title}</p>
            {event.venue && (
              <p className="mt-0.5 text-sm text-navy-700">{event.venue}</p>
            )}
            {event.description && (
              <p className="mt-1 text-sm text-ink-500">{event.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

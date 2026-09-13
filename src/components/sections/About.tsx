import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import { profile, stats } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="About Me"
        number="01"
        title="Academic Profile & Journey"
        subheading="Motivated and enthusiastic educator with excellent communication skills demonstrated by 23 years of teaching experience."
      />
      <div className="mt-16 grid gap-12 lg:gap-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <AnimatedSection>
            <p className="eyebrow">01</p>
            <div className="mt-4 flex items-center gap-4">
              <h3 className="display-serif text-5xl md:text-6xl text-navy-700/60">About</h3>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                <GraduationCap size={22} strokeWidth={1.5} />
              </div>
            </div>
            <p className="mt-8 text-ink-500 leading-relaxed text-[15px]">
              Shaping the future of computing through dedicated research, inspired teaching, and academic leadership over two decades of service.
            </p>
          </AnimatedSection>
        </div>
        <div className="md:col-span-7">
          <AnimatedSection delay={0.05}>
            <div className="divider-line md:hidden mb-8" />
            {profile.biography.map((paragraph, index) => (
              <p
                key={index}
                className="text-ink-700 leading-relaxed text-[15px] first:mt-0 mt-5"
              >
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-y border-ink-500/15">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="p-6 md:p-8 border-r border-ink-500/15 last:border-r-0 col-span-1 odd:border-b md:odd:border-b-0 even:border-b md:even:border-b-0 border-b-ink-500/15"
          >
            <AnimatedSection delay={index * 0.05}>
              <p className="display-serif text-4xl md:text-5xl text-navy-800 tracking-tightest">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-eyebrow font-semibold text-ink-500">
                {stat.label}
              </p>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </section>
  );
}

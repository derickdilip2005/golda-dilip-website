import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import Button from "@/components/shared/ui/Button";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Education"
        number="05"
        title="Academic Qualifications"
        subheading="Foundational graduate and postgraduate training in computer science and engineering management."
      />
      <div className="mt-16 space-y-3 md:space-y-4">
        {education.map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.06}>
            <div className="card-elegant p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 relative hover:border-navy-900/30">
              <div className="flex-none w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center p-3">
                <GraduationCap size={22} strokeWidth={1.5} className="text-navy-700" />
              </div>
              <div className="flex-1">
                <p className="display-serif text-xl md:text-2xl text-ink-900">
                  {item.degree}
                </p>
                <div className="mt-1.5">
                  <span className="label-small">Branch · {item.branch}</span>
                </div>
                {item.institution && (
                  <p className="text-sm text-ink-600 mt-2">{item.institution}</p>
                )}
              </div>
              <div className="flex-none">
                {item.year && (
                  <Button variant="chip">{`Year: ${item.year}`}</Button>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

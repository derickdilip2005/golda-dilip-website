import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import { Award, Medal } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const featured = achievements.find((a) => a.featured);
  const nonFeatured = achievements.filter((a) => !a.featured);

  return (
    <section id="achievements" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Recognition"
        number="10"
        title="Awards & Achievements"
        subheading="Peer recognition and honours received throughout an academic career."
      />
      <div className="mt-16 grid md:grid-cols-5 gap-5">
        {featured && (
          <AnimatedSection className="md:col-span-3 order-1 md:order-none">
            <div className="card-elegant p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-ivory-50 border-navy-900 h-full min-h-[320px]">
              <div className="w-40 h-40 absolute -top-10 -right-10 rounded-full blur-3xl opacity-20 bg-gold-500/40" />
              <p className="eyebrow text-gold-300">Featured Recognition</p>
              <Award size={36} className="mt-6 text-gold-300" strokeWidth={1.5} />
              <h3 className="display-serif serif text-2xl md:text-3xl mt-4 leading-tight text-ivory-50">
                {featured.title}
              </h3>
              <p className="text-ivory-100/70 text-sm md:text-base mt-4 leading-relaxed">
                {featured.description}
              </p>
              <p className="text-xs uppercase tracking-eyebrow text-gold-300 mt-6">
                {featured.issuer} {featured.issuer && featured.year ? "· " : ""}{featured.year}
              </p>
            </div>
          </AnimatedSection>
        )}
        <div className="md:col-span-2 flex flex-col space-y-5 order-none md:order-none">
          {nonFeatured.map((achievement, i) => (
            <AnimatedSection key={achievement.title} delay={i * 0.08}>
              <div className="card-elegant p-5 md:p-6 h-full">
                <Medal size={22} className="text-navy-700" strokeWidth={1.5} />
                <h4 className="text-lg serif font-serif font-semibold text-ink-900 mt-3 leading-snug">
                  {achievement.title}
                </h4>
                <p className="text-sm text-ink-500 mt-2">
                  {achievement.issuer}
                  {achievement.issuer && achievement.year ? " · " : ""}
                  {achievement.year}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

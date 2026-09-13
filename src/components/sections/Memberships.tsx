import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import { memberships } from "@/data/memberships";

export default function Memberships() {
  return (
    <section id="memberships" className="section-wrap pt-10">
      <SectionHeading
        align="split"
        eyebrow="Affiliations"
        number="12"
        title="Professional Memberships"
        subheading="Active participation in leading international professional societies."
      />
      <div className="mt-14 flex flex-wrap items-center gap-4 md:gap-6">
        {memberships.map((membership, i) => (
          <AnimatedSection key={membership.logoText} delay={i * 0.05}>
            <div className="inline-flex items-center gap-3 px-5 py-3 card-elegant hover:border-navy-900/30">
              <span className="display-serif font-serif font-bold text-navy-800 tracking-wider text-lg md:text-xl">
                {membership.logoText}
              </span>
              <span className="label-small max-w-[200px] hidden md:block">
                {membership.organization}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

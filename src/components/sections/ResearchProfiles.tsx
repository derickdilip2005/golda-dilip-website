import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import { researchProfiles } from "@/data/research";
import { ExternalLink, ArrowRight } from "lucide-react";

const platformStyles: Record<string, { bg: string; border: string; borderHover: string; accent: string }> = {
  Scopus: {
    bg: "bg-[#F97316]/[0.04]",
    border: "border-[#F97316]/20",
    borderHover: "hover:border-[#F97316]/50",
    accent: "bg-[#F97316]",
  },
  "Google Scholar": {
    bg: "bg-[#4285F4]/[0.04]",
    border: "border-[#4285F4]/20",
    borderHover: "hover:border-[#4285F4]/50",
    accent: "bg-[#4285F4]",
  },
  Vidwan: {
    bg: "bg-[#15803D]/[0.04]",
    border: "border-[#15803D]/20",
    borderHover: "hover:border-[#15803D]/50",
    accent: "bg-[#15803D]",
  },
  ORCID: {
    bg: "bg-[#A6CE39]/[0.08]",
    border: "border-[#A6CE39]/30",
    borderHover: "hover:border-[#A6CE39]/60",
    accent: "bg-[#A6CE39]",
  },
};

export default function ResearchProfiles() {
  return (
    <section id="research-profiles" className="section-wrap pt-0">
      <SectionHeading
        align="split"
        eyebrow="Research Profiles"
        number="03"
        title="Scholarly Platforms"
        subheading="Explore published work, citation metrics, and academic presence across primary research databases."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {researchProfiles.map((platform, index) => {
          const style = platformStyles[platform.platform];
          return (
            <AnimatedSection key={platform.platform} delay={index * 0.08}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-sm border p-6 md:p-7 transition-all group hover:shadow-editorial hover:-translate-y-0.5 duration-300 relative ${style.bg} ${style.border} ${style.borderHover}`}
              >
                <div className={`absolute top-0 left-0 w-6 h-[2px] ${style.accent}`} />
                <ExternalLink
                  size={16}
                  className="absolute top-6 right-6 text-ink-700/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
                <p className="font-serif font-bold tracking-eyebrow text-[13px] text-ink-700/80">
                  {platform.platform.toUpperCase()}
                </p>
                <p className="text-sm text-ink-500 mt-5 leading-relaxed">
                  {platform.description}
                </p>
                <div className="mt-8">
                  <span className="relative inline-flex items-center gap-1 text-sm font-medium text-navy-800 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-navy-900 after:transition-transform hover:after:origin-left hover:after:scale-x-100 group-hover:after:scale-x-100 group-after:origin-left">
                    Visit Profile
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

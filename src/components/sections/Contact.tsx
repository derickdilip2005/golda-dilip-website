import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import { Mail, Building2, MapPin, BookOpen, FileText, GraduationCap, Network } from "lucide-react";
import { profile } from "@/data/profile";

const researchProfiles = [
  { name: "Scopus", short: "SCOPUS", icon: FileText, href: "#" },
  { name: "Google Scholar", short: "SCHOLAR", icon: BookOpen, href: "#" },
  { name: "Vidwan", short: "VIDWAN", icon: Network, href: "#" },
  { name: "ORCID", short: "ORCID", icon: GraduationCap, href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-wrap bg-navy-950 text-ivory-50 rounded-none sm:rounded-[32px] max-w-[1400px] mx-auto my-10 md:my-16"
    >
      <SectionHeading
        light
        eyebrow="Get in touch"
        number="13"
        eyebrowClass="text-gold-300/90"
        numberClass="text-ivory-100/10"
        titleClass="text-ivory-50"
        subheadingClass="text-ivory-100/70"
        title="Let's Connect"
        subheading="For academic collaborations, research discussions, professional engagements, and scholarly communication."
      />
      <div className="mt-16 grid md:grid-cols-2 gap-10 lg:gap-20">
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-sm border border-ivory-50/10 bg-navy-900/50 backdrop-blur relative">
              <Mail size={22} className="text-gold-300/90 absolute top-5 right-5" strokeWidth={1.5} />
              <p className="label-small text-gold-300/90">Email</p>
              <p className="text-ivory-50 mt-1.5 text-base font-medium break-all">goldad@srmist.edu.in</p>
            </div>
            <div className="p-6 rounded-sm border border-ivory-50/10 bg-navy-900/50 backdrop-blur relative">
              <Building2 size={22} className="text-gold-300/90 absolute top-5 right-5" strokeWidth={1.5} />
              <p className="label-small text-gold-300/90">Department</p>
              <p className="text-ivory-50 mt-1.5 text-base font-medium leading-snug">{profile.department}</p>
            </div>
            <div className="p-6 rounded-sm border border-ivory-50/10 bg-navy-900/50 backdrop-blur relative sm:col-span-2">
              <Building2 size={22} className="text-gold-300/90 absolute top-5 right-5" strokeWidth={1.5} />
              <p className="label-small text-gold-300/90">Institution</p>
              <p className="text-ivory-50 mt-1.5 text-base font-medium leading-snug">{profile.institution}</p>
            </div>
            <div className="p-6 rounded-sm border border-ivory-50/10 bg-navy-900/50 backdrop-blur relative sm:col-span-2">
              <MapPin size={22} className="text-gold-300/90 absolute top-5 right-5" strokeWidth={1.5} />
              <p className="label-small text-gold-300/90">Campus Location</p>
              <p className="text-ivory-50 mt-1.5 text-base font-medium leading-snug">Vadapalani Campus, Chennai</p>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 gap-3 md:gap-4 content-start h-full">
            {researchProfiles.map((rp, i) => (
              <a
                key={rp.name}
                rel="noopener noreferrer"
                className="p-4 rounded-sm border border-ivory-50/10 bg-ivory-50/5 hover:bg-ivory-50/10 transition-colors flex flex-col gap-2 group"
              >
                <rp.icon size={20} className="text-gold-300/90" strokeWidth={1.5} />
                <p className="font-serif font-bold text-ivory-50 tracking-wide text-sm md:text-base">
                  {rp.short}
                </p>
                <p className="text-xs text-ivory-100/60 group-hover:text-ivory-100/80 transition-colors">
                  {rp.name}
                </p>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ResearchInterests from "@/components/sections/ResearchInterests";
import ResearchProfiles from "@/components/sections/ResearchProfiles";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Education from "@/components/sections/Education";
import PublicationList from "@/components/sections/PublicationList";
import PhDSupervision from "@/components/sections/PhDSupervision";
import CertificationGrid from "@/components/sections/CertificationGrid";
import EventTimeline from "@/components/sections/EventTimeline";
import Achievements from "@/components/sections/Achievements";
import Books from "@/components/sections/Books";
import Memberships from "@/components/sections/Memberships";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" className="bg-ivory-50 text-ink-900 min-h-screen">
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="research" className="section-wrap !py-0">
        <ResearchInterests />
        <ResearchProfiles />
      </section>
      <ExperienceTimeline />
      <Education />
      <PublicationList />
      <PhDSupervision />
      <CertificationGrid />
      <EventTimeline />
      <Achievements />
      <Books />
      <Memberships />
      <Contact />
    </main>
  );
}

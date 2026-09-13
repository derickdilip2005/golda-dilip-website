import SectionHeading from "@/components/shared/SectionHeading";
import { phdScholars, phdSupervisionStats, PhDScholar } from "@/data/supervision";

export default function PhDSupervision() {
  const { completed, ongoing } = phdSupervisionStats;
  const completedCount = String(completed).padStart(2, "0");
  const ongoingCount = String(ongoing).padStart(2, "0");

  return (
    <section id="supervision" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Supervision"
        number="07"
        title="Research Supervision"
        subheading="Mentoring the next generation of scholars through rigorous doctoral research."
      />

      <div className="mt-16 mb-12 rounded-sm border border-navy-900/10 bg-gradient-to-br from-navy-50 to-ivory-50 px-8 py-8 md:px-12 md:py-10">
      <div className="flex items-center justify-center gap-6 md:justify-start md:gap-8">
          <span className="font-serif text-6xl font-bold leading-none tracking-tightest text-navy-800 md:text-7xl">
            02
          </span>
          <div className="h-14 w-px bg-navy-900/15 md:h-16" />
          <div className="flex flex-col">

            <span className="mt-1 font-serif text-2xl font-semibold leading-tight text-navy-800 md:text-3xl">
              PhD Scholars Completed
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {phdScholars.map((scholar: PhDScholar, index: number) => (
          <div key={index} className="card-elegant relative p-6">
            <span
              className={`absolute right-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow ${
                scholar.status === "Completed"
                  ? "bg-gold-100 text-gold-600"
                  : "bg-navy-100 text-navy-700"
              }`}
            >
              {scholar.status}
            </span>
            <p className="display-serif pr-24 text-xl">{scholar.name}</p>
            <div className="mt-5 space-y-3">
              <div>
                <p className="label-small">Research Area</p>
                <p className="mt-1 text-sm text-ink-700">{scholar.researchArea}</p>
              </div>
              <div>
                <p className="label-small">Year</p>
                <p className="mt-1 text-sm text-ink-700">{scholar.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

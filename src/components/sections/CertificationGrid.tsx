import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/ui/Button";
import { certifications, Certification } from "@/data/certifications";
import Image from "next/image";
import { Award } from "lucide-react";

export default function CertificationGrid() {
  return (
    <section id="certifications" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Certifications"
        number="08"
        title="Certifications &amp; Credentials"
        subheading="Professional certifications and continuous learning achievements."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert: Certification, index: number) => {
          const viewUrl = cert.pdfPath ?? cert.externalUrl;
          return (
            <div key={index} className="card-elegant overflow-hidden">
              <div className="relative flex aspect-[4/3] items-center justify-center border-b border-ink-500/10 bg-navy-50 text-navy-700">
                {cert.imagePath ? (
                  <Image
                    src={cert.imagePath}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <Award size={48} className="opacity-50" />
                )}
              </div>
              <div className="p-5">
                <p className="display-serif text-lg">{cert.title}</p>
                <p className="mt-1 text-sm text-navy-700">{cert.issuer}</p>
                <div className="mt-2 inline-flex items-center rounded-full border border-ink-500/15 bg-ivory-50 px-3 py-1.5 text-xs font-medium text-ink-700">
                  {cert.year}
                </div>
                {viewUrl && (
                  <div className="mt-4">
                    <Button variant="link" href={viewUrl} arrow>
                      Verify Certificate
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/ui/AnimatedSection";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { books } from "@/data/books";

export default function Books() {
  return (
    <section id="books" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Publications"
        number="11"
        title="Books & Contributions"
        subheading="Authored volumes and contributed chapters in the field."
      />
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {books.map((book, i) => (
          <AnimatedSection key={book.title} delay={i * 0.06}>
            <div className="card-elegant h-full overflow-hidden">
              <div className="relative aspect-[3/2] border-b border-ink-500/15 bg-navy-50">
                {book.coverImage ? (
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <BookOpen size={42} className="text-navy-700/60" strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div className="flex h-full flex-col p-6">
                <h3 className="font-serif text-xl font-semibold leading-snug text-ink-900">
                  {book.title}
                </h3>
                <p className="mt-2 text-sm text-navy-700">{book.publisher}</p>
                {(book.isbn || book.year) && (
                  <p className="mt-3 text-xs text-ink-500">
                    {book.isbn}
                    {book.isbn && book.year ? " · " : ""}
                    {book.year}
                  </p>
                )}
                {book.description && (
                  <p className="text-sm text-ink-500 mt-2 line-clamp-3 leading-relaxed">
                    {book.description}
                  </p>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

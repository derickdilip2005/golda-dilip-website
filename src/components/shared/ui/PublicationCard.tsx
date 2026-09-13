"use client";

import { motion } from "framer-motion";
import { Publication } from "@/data/publications";
import Card from "@/components/shared/ui/Card";
import { FileText, ExternalLink, BookOpen } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
  index?: number;
}

export default function PublicationCard({ publication, index = 0 }: PublicationCardProps) {
  const { title, authors, year, venue, type, doi, url } = publication;

  const typeIcon = type === "Journal" || type === "Book Chapter" ? BookOpen : FileText;
  const TypeIcon = typeIcon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card hoverable className="h-full">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label-small">{year}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 bg-navy-900/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-navy-800">
                <TypeIcon size={11} />
                {type}
              </span>
            </div>
            <h3 className="mt-3 display-serif text-lg md:text-xl leading-snug text-balance">
              {title}
            </h3>
            <p className="mt-2 text-sm text-ink-700 leading-relaxed">
              {authors.join(", ")}
            </p>
            <p className="mt-1 text-sm italic text-ink-500">{venue}</p>
            {doi && (
              <p className="mt-2 text-xs text-ink-500">
                <span className="font-medium">DOI:</span> {doi}
              </p>
            )}
          </div>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-md border border-ink-500/15 px-3 py-2 text-xs font-medium text-ink-700 transition-colors hover:border-navy-900 hover:text-navy-900"
              aria-label={`Open ${title}`}
            >
              View
              <ExternalLink
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </Card>
    </motion.article>
  );
}

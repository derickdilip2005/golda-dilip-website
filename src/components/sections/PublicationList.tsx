"use client";

import { useMemo, useState } from "react";
import { Filter, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { publications, Publication } from "@/data/publications";
import SectionHeading from "@/components/shared/SectionHeading";
import PublicationCard from "@/components/shared/ui/PublicationCard";
import Button from "@/components/shared/ui/Button";

const FILTERS: Array<"All" | Publication["type"]> = [
  "All",
  "Journal",
  "Conference",
  "Book Chapter",
  "Other",
];

export default function PublicationList() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]>("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return publications;
    return publications.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  const countByType = useMemo(() => {
    const map: Record<string, number> = { All: publications.length };
    for (const p of publications) {
      map[p.type] = (map[p.type] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <section id="publications" className="section-wrap">
      <SectionHeading
        align="split"
        eyebrow="Scholarly Output"
        number="06"
        title="Selected publications"
        subheading="A curated selection of peer-reviewed works spanning journals, conferences, and book chapters."
      />

      <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setFilterOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={filterOpen}
          >
            <Filter size={14} />
            Filter: {activeFilter}
            {filterOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </Button>
          {filterOpen && (
            <div className="absolute left-0 z-20 mt-2 w-56 overflow-hidden rounded-md border border-ink-500/10 bg-ivory-50 shadow-editorial">
              <ul role="listbox">
                {FILTERS.map((filter) => {
                  const active = filter === activeFilter;
                  return (
                    <li key={filter}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={active}
                        onClick={() => {
                          setActiveFilter(filter);
                          setFilterOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                          active
                            ? "bg-navy-900 text-ivory-50"
                            : "text-ink-700 hover:bg-navy-50"
                        }`}
                      >
                        <span>{filter}</span>
                        <span
                          className={`text-xs ${
                            active ? "text-ivory-50/70" : "text-ink-500"
                          }`}
                        >
                          {countByType[filter] ?? 0}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <p className="text-sm text-ink-500">
          Showing <span className="font-medium text-ink-900">{filtered.length}</span> of{" "}
          {publications.length} publications
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-4">
          {filtered.map((pub, i) => {
            const originalIndex = publications.indexOf(pub);
            return (
              <PublicationCard
                key={`${pub.title}-${pub.year}-${i}`}
                publication={pub}
                index={originalIndex}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-10 card-elegant p-10 text-center">
          <p className="text-sm text-ink-500">
            No publications match the selected filter.
          </p>
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <Button
          variant="link"
          href="https://scholar.google.com/citations?hl=en&user=IXCUjQMAAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noopener noreferrer"
          arrow
        >
          View full publication list on Google Scholar
          <ExternalLink size={12} />
        </Button>
      </div>
    </section>
  );
}

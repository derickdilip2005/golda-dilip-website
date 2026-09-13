import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { researchProfiles } from "@/data/research";

export default function Footer() {
  return (
    <footer className="bg-ivory-50">
      <div className="divider-line" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="font-serif font-bold text-2xl text-ink-900">
              Dr. Golda Dilip
            </span>
            <div className="mt-2 text-sm text-ink-500 space-y-0.5">
              <p>{profile.title}</p>
              <p>{profile.department}</p>
              <p>{profile.institution}, Vadapalani</p>
            </div>
          </div>

          <div>
            <div className="label-small mb-5">Research Profiles</div>
            <ul className="space-y-3.5">
              {researchProfiles.map((item) => (
                <li key={item.platform}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    <ExternalLink size={14} strokeWidth={1.75} />
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-line mt-16" />
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-ink-500 gap-3">
          <p>© 2026 Dr. Golda Dilip. All rights reserved.</p>
          <p>Designed with academic precision.</p>
        </div>
      </div>
    </footer>
  );
}

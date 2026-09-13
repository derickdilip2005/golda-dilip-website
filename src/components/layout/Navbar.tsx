'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#supervision", label: "Supervision" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-ivory-50/85 border-b border-ink-500/10 text-ink-900"
          : "bg-transparent text-ivory-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
        <Link
          href="#top"
          className="font-serif font-bold tracking-tight text-lg md:text-xl flex items-baseline gap-1"
        >
          <span className="text-navy-700">GD</span>
          <span
            className={scrolled ? "text-ink-700" : "text-ivory-100/70"}
          >
            / CSE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={profile.cvUrl || "#"}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-eyebrow px-4 py-2 rounded-full border border-current/20 hover:bg-navy-900 hover:text-ivory-50 hover:border-navy-900 transition-colors"
          >
            <Download size={13} /> CV
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 -mr-2"
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-ivory-50 border-l border-ink-500/10 shadow-2xl z-50 text-ink-900"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-ink-700"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.75} />
            </button>

            <nav className="mt-20 px-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="relative text-base font-medium after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-navy-900 after:transition-transform hover:after:origin-left hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <Link
                href={profile.cvUrl || "#"}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-eyebrow w-full px-4 py-3 rounded-full border border-ink-900/20 text-ink-900 hover:bg-navy-900 hover:text-ivory-50 hover:border-navy-900 transition-colors"
              >
                <Download size={13} /> Download CV
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}

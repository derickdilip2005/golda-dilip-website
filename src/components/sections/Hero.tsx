'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

const networkStyle = {
  backgroundImage:
    "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(201,169,106,0.08) 0, transparent 40%), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 60px), repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 60px)",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-navy-950 text-ivory-50 flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 pointer-events-none bg-grain opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={networkStyle}
      />
      <div className="absolute top-16 left-10 w-24 h-px bg-gradient-to-r from-gold-500/70 to-transparent" />

      <div className="relative z-10 w-full section-wrap flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 w-full">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-semibold uppercase tracking-eyebrow text-ivory-100/70"
          >
            {profile.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-semibold leading-[1.05] tracking-tightest mt-5 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory-50 text-balance"
          >
            {profile.name}
          </motion.h1>

          <div className="mt-6 space-y-1 font-sans text-ivory-100/90">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg font-medium"
            >
              Professor &amp; Head
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base"
            >
              Department of Computer Science &amp; Engineering
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base"
            >
              SRM Institute of Science and Technology, Vadapalani
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-ivory-100/75 leading-relaxed text-[15px] md:text-base"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#research"
              className="inline-flex items-center gap-2 bg-ivory-50 text-navy-950 px-5 py-3 text-sm font-medium rounded-md hover:bg-ivory-100 transition-colors"
            >
              Explore My Research
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link
              href="#publications"
              className="inline-flex items-center gap-2 border border-ivory-50/25 text-ivory-50 px-5 py-3 text-sm font-medium rounded-md hover:bg-ivory-50 hover:text-navy-950 transition-colors"
            >
              View Publications
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10"
          >
            <a
              href="#research"
              className="inline-flex items-center gap-2 text-sm text-ivory-100/80 hover:text-ivory-50 transition-colors"
            >
              Research Profiles
              <ChevronDown size={15} className="animate-bounce" />
            </a>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-full rounded-tl-[3px] rounded-tr-[80px] rounded-br-[3px] rounded-bl-[40px] overflow-hidden border border-ivory-50/15 shadow-portrait bg-navy-900/40"
            >
              <Image
                src={profile.profileImage || "/images/profile.webp"}
                alt="Professional portrait of Dr. Golda Dilip"
                fill
                className="object-cover object-[center_20%]"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500'><rect width='100%' height='100%' fill='%231a2744'/><text x='50%' y='50%' fill='%23e9dcb7' font-family='Georgia' font-size='22' text-anchor='middle' dy='.3em'>PORTRAIT PLACEHOLDER</text></svg>"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-0 bottom-10 lg:left-auto lg:-right-4 lg:bottom-16 bg-ivory-50 text-ink-900 px-4 py-3 shadow-editorial rounded-md animate-floaty"
            >
              <div className="text-[10px] uppercase tracking-eyebrow text-navy-600 font-semibold">
                Professor &amp; Head
              </div>
              <div className="text-sm font-semibold text-ink-900 mt-0.5">
                CSE • SRMIST
              </div>
            </motion.div>

            <div className="absolute top-4 right-8 w-3 h-3 rotate-45 border border-gold-500/60 animate-floaty" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-100/60 text-[11px] uppercase tracking-eyebrow">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-ivory-100/60 to-transparent" />
      </div>
    </section>
  );
}

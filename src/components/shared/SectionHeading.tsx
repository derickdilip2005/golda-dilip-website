interface SectionHeadingProps {
  eyebrow?: string;
  number?: string;
  title: string;
  subheading?: string;
  align?: "left" | "split";
  className?: string;
  light?: boolean;
  eyebrowClass?: string;
  numberClass?: string;
  titleClass?: string;
  subheadingClass?: string;
}

export default function SectionHeading({
  eyebrow,
  number,
  title,
  subheading,
  align = "left",
  className = "",
  light = false,
  eyebrowClass = "",
  numberClass = "",
  titleClass = "",
  subheadingClass = "",
}: SectionHeadingProps) {
  const eyebrowBase = light ? "text-gold-300/90" : "";
  const numberBase = light ? "text-ivory-100/10" : "text-navy-700/70";
  const titleBase = light ? "text-ivory-50" : "text-ink-900";
  const subheadingBase = light ? "text-ivory-100/70" : "text-ink-500";
  const dividerBase = light ? "bg-ivory-50/10" : "bg-ink-500/15";

  if (align === "split") {
    return (
      <div className={`${className}`}>
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <div className="lg:w-72">
            {eyebrow && <p className={`eyebrow ${eyebrowBase} ${eyebrowClass}`}>{eyebrow}</p>}
            {number && (
              <p className={`mt-4 font-serif text-6xl font-semibold leading-none md:text-7xl ${numberBase} ${numberClass}`}>
                {number}
              </p>
            )}
          </div>
          <div>
            <h2 className={`display-serif text-4xl text-balance md:text-5xl lg:text-6xl ${titleBase} ${titleClass}`}>
              {title}
            </h2>
            {subheading && (
              <p className={`mt-4 max-w-xl leading-relaxed ${subheadingBase} ${subheadingClass}`}>
                {subheading}
              </p>
            )}
            <div className={`divider-line mt-8 ${dividerBase}`} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow ${eyebrowBase} ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className={`mt-4 display-serif text-4xl text-balance md:text-5xl lg:text-6xl ${titleBase} ${titleClass}`}>
        {title}
      </h2>
      {subheading && (
        <p className={`mt-4 leading-relaxed ${subheadingBase} ${subheadingClass}`}>{subheading}</p>
      )}
      <div className={`divider-line mt-8 ${dividerBase}`} />
    </div>
  );
}

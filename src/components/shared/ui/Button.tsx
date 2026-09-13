import { ArrowRight } from "lucide-react";

interface ButtonBaseProps {
  variant?: "primary" | "ghost" | "link" | "chip";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  arrow?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    href,
    arrow = false,
    ...rest
  } = props;

  const baseSize =
    size === "sm"
      ? "!px-3.5 !py-2 text-xs"
      : size === "lg"
      ? "!px-6 !py-3.5 text-base"
      : "";

  const variantClass =
    variant === "primary"
      ? `btn-primary ${baseSize}`
      : variant === "ghost"
      ? `btn-ghost ${baseSize}`
      : variant === "link"
      ? "link-underline"
      : "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-500/15 text-xs font-medium text-ink-700 bg-ivory-50 hover:border-navy-900/40 hover:text-navy-900 transition-colors";

  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={14} strokeWidth={2} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={`${variantClass} ${className}`}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={`${variantClass} ${className}`} {...buttonProps}>
      {content}
    </button>
  );
}

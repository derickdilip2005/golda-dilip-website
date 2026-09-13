interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = "", hoverable = false }: CardProps) {
  return (
    <div
      className={`card-elegant p-6 md:p-8 ${hoverable ? "hover:-translate-y-0.5" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

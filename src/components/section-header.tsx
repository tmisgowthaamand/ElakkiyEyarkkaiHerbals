import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, centered = false, className }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

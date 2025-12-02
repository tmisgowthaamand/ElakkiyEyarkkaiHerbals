import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Variant {
  label: string;
  price: number;
}

interface ProductVariantsProps {
  variants: Variant[];
  selectedVariant: string;
  onSelectVariant: (label: string) => void;
}

export const ProductVariants = ({ 
  variants, 
  selectedVariant, 
  onSelectVariant 
}: ProductVariantsProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-foreground">
        Select Size
      </label>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <Button
            key={variant.label}
            variant={selectedVariant === variant.label ? "default" : "outline"}
            onClick={() => onSelectVariant(variant.label)}
            className={cn(
              "min-w-[100px]",
              selectedVariant === variant.label && "ring-2 ring-primary ring-offset-2"
            )}
          >
            <div className="flex flex-col items-center">
              <span className="font-semibold">{variant.label}</span>
              <span className="text-xs">₹{variant.price}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

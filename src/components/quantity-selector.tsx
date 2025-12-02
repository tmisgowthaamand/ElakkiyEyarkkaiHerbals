import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export const QuantitySelector = ({ 
  quantity, 
  onIncrease, 
  onDecrease, 
  min = 1,
  max = 99 
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="h-10 w-10 rounded-full"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="h-10 w-10 rounded-full"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

interface AddToCartButtonProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  variant?: string;
  quantity?: number;
  disabled?: boolean;
}

export const AddToCartButton = ({ 
  product, 
  variant, 
  quantity = 1,
  disabled = false 
}: AddToCartButtonProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      ...product,
      variant,
      quantity,
    });

    toast.success("Added to cart", {
      description: `${product.name}${variant ? ` (${variant})` : ""} added to your cart`,
    });
  };

  return (
    <Button 
      onClick={handleAddToCart} 
      disabled={disabled}
      className="gap-2"
      size="lg"
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </Button>
  );
};

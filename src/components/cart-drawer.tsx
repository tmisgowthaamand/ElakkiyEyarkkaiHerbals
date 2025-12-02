import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart-store";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CartDrawer = () => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-heading">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
            <Link to="/oils">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4 -mr-4">
              <div className="space-y-4 py-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant || ""}`} className="flex gap-4 p-4 bg-muted rounded-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          {item.variant && (
                            <p className="text-xs text-muted-foreground">{item.variant}</p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="h-8 w-8"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="text-sm font-bold">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <Link to="/cart" className="block">
                <Button className="w-full" size="lg">
                  View Cart & Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

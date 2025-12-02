import { Link } from "react-router-dom";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-32 w-32 text-muted-foreground/50 mx-auto mb-8" />
          <h1 className="text-4xl font-heading font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Add some products to get started
          </p>
          <Link to="/oils">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.variant || ""}`} className="p-6">
                <div className="flex gap-6">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <Link to={`/product/${item.slug}`}>
                          <h3 className="text-xl font-heading font-semibold hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        {item.variant && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Size: {item.variant}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id, item.variant)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-semibold w-12 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-heading font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-primary">FREE</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/oils">
                <Button variant="outline" className="w-full mt-4">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

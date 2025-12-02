import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      toast.error("Please fill all required fields");
      return;
    }

    // Simulate order placement
    const orderId = `ORD${Date.now()}`;
    localStorage.setItem("lastOrderId", orderId);
    localStorage.setItem("lastOrderDetails", JSON.stringify({
      items,
      total: getTotalPrice(),
      customerInfo: formData,
    }));

    clearCart();
    toast.success("Order placed successfully!");
    navigate("/success");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Shipping Information */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Shipping Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Full Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House No., Street, Area"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Payment Method</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold mb-1">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Pay when your order is delivered
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-2xl font-heading font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant || ""}`} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        {item.variant && (
                          <p className="text-muted-foreground text-xs">{item.variant}</p>
                        )}
                        <p className="text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />
                
                <div className="space-y-3 mb-6">
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

                <Button type="submit" className="w-full" size="lg">
                  Place Order
                </Button>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

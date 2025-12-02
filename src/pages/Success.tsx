import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("lastOrderId");
    const details = localStorage.getItem("lastOrderDetails");
    
    if (id) setOrderId(id);
    if (details) setOrderDetails(JSON.parse(details));
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <CheckCircle className="h-24 w-24 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-muted-foreground">
            Thank you for your order. We'll process it shortly.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">Order Details</h2>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="text-xl font-bold text-primary">{orderId}</p>
              </div>
            </div>

            {orderDetails && (
              <>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Delivery Address</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">{orderDetails.customerInfo.name}</p>
                    <p>{orderDetails.customerInfo.phone}</p>
                    <p>{orderDetails.customerInfo.address}</p>
                    <p>{orderDetails.customerInfo.city}, {orderDetails.customerInfo.pincode}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                  <div className="space-y-3">
                    {orderDetails.items.map((item: any) => (
                      <div key={`${item.id}-${item.variant || ""}`} className="flex justify-between">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          {item.variant && (
                            <p className="text-sm text-muted-foreground">{item.variant}</p>
                          )}
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="pt-3 border-t">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-primary">₹{orderDetails.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Payment Method</p>
                  <p className="text-muted-foreground">Cash on Delivery</p>
                </div>
              </>
            )}
          </div>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            We'll send you updates about your order. Usually delivered within 3-5 business days.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Back to Home
              </Button>
            </Link>
            <Link to="/oils">
              <Button size="lg" variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

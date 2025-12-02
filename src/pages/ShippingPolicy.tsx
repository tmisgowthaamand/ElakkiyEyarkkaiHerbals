import { PolicyLayout } from "@/components/policy-layout";
import { MapPin, Phone, Mail, Truck, Globe, Map } from "lucide-react";

const ShippingPolicy = () => {
    return (
        <PolicyLayout
            title="Shipping & Delivery Policy"
            subtitle="Safe, Fresh & On-Time Delivery"
        >
            <p className="mb-4">
                At Elakkiya Eyarkkai Herbals, we take every step to ensure that our woodpress and coldpress oils reach you in perfect condition—fresh, securely packed, and delivered on time.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Order Processing</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Orders are processed within 2–4 business days of payment confirmation.</li>
                <li>Bulk or wholesale orders may require additional preparation time. Customers will be informed in advance.</li>
                <li>Orders placed on weekends or public holidays are processed on the next business day.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Delivery Coverage</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Truck className="w-4 h-4 text-accent" /> Domestic Shipping
                    </h3>
                    <p className="text-sm text-muted-foreground">We deliver across India via trusted courier and logistics partners.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Map className="w-4 h-4 text-accent" /> Local Deliveries
                    </h3>
                    <p className="text-sm text-muted-foreground">Tiruppur & Tamil Nadu: Faster timelines may apply for regional deliveries.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-accent" /> International Orders
                    </h3>
                    <p className="text-sm text-muted-foreground">Export or bulk orders outside India may be accepted on request.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Estimated Delivery Timelines</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4 text-center">
                <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">TN</div>
                    <div className="font-semibold mb-1">Tamil Nadu</div>
                    <div className="text-sm text-muted-foreground">3–5 business days after dispatch</div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">IN</div>
                    <div className="font-semibold mb-1">Rest of India</div>
                    <div className="text-sm text-muted-foreground">5–10 business days after dispatch</div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">INT</div>
                    <div className="font-semibold mb-1">International</div>
                    <div className="text-sm text-muted-foreground">Timelines vary based on destination</div>
                </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-6">
                Note: Delivery times are estimates and may be affected by courier delays, weather conditions, or regional restrictions.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Shipping Charges</h2>
            <p className="mb-2">Charges are calculated based on:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Order weight and volume</li>
                <li>Delivery location</li>
                <li>Shipping method selected</li>
            </ul>
            <p className="mb-4"><strong>Free Shipping:</strong> Occasionally offered for orders above a certain value (announced via promotions).</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Packaging & Quality Assurance</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Oils are packed in sealed, tamper-proof bottles/pouches.</li>
                <li>Products are further secured with cushioning and moisture-resistant packaging to avoid leakage or damage.</li>
                <li>Bulk and wholesale shipments are packed in corrugated boxes or drums for safe transit.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Tracking & Updates</h2>
            <p className="mb-2">Once dispatched, customers will receive:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>A tracking number via email or SMS</li>
                <li>A courier link to monitor shipment status</li>
            </ul>
            <p className="mb-4">Tracking updates may take 24–48 hours to reflect after dispatch.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Delays & Exceptions</h2>
            <p className="mb-2">Delivery may be delayed due to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Natural calamities or extreme weather</li>
                <li>Courier strikes or operational backlogs</li>
                <li>Customs clearance (for exports)</li>
                <li>Incorrect/incomplete address details provided by the customer</li>
            </ul>
            <p className="mb-4">We will notify customers promptly if delays occur.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Need Help With Shipping?</h2>
            <p className="mb-2">For questions or assistance regarding your shipment, contact:</p>

            <div className="space-y-4 mt-6 mb-8">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                        <p className="font-semibold">Elakkiya Eyarkkai Herbals</p>
                        <p className="text-muted-foreground">4/675, Puthu Road, Srinivasa Nagar, Tiruppur, Tamil Nadu - 641605</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <p className="text-muted-foreground">+91 7418098614</p>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <p className="text-muted-foreground">Elakkiyaeyarkkaiherbals@gmail.com</p>
                </div>
            </div>

            <p className="text-sm text-muted-foreground">Last Updated: August 2025</p>
            <p className="text-sm text-muted-foreground">© 2025 Elakkiya Eyarkkai Herbals. All Rights Reserved.</p>
        </PolicyLayout>
    );
};

export default ShippingPolicy;

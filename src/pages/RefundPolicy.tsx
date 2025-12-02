import { PolicyLayout } from "@/components/policy-layout";
import { MapPin, Phone, Mail, AlertCircle, RefreshCw, XCircle, CheckCircle2 } from "lucide-react";

const RefundPolicy = () => {
    return (
        <PolicyLayout
            title="Cancellation & Refund Policy"
            subtitle="Clear, Fair & Transparent"
        >
            <p className="mb-4">
                At Elakkiya Eyarkkai Herbals, we strive to provide high-quality woodpress and coldpress oils that reach our customers in perfect condition. Since our products are consumables, cancellations and refunds are subject to specific guidelines to maintain quality, hygiene, and customer satisfaction.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-accent" /> Order Cancellations
            </h2>
            <h3 className="text-lg font-semibold mb-2">Cancellation Window:</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Orders may be cancelled within 2 hours of placement, provided they have not yet been processed or dispatched.</li>
                <li>Once an order is packed or shipped, cancellations are not permitted due to the perishable and consumable nature of oils.</li>
                <li>For bulk/wholesale orders, cancellation terms will be specified in the quotation or purchase agreement.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-accent" /> Returns & Replacements
            </h2>
            <p className="mb-2">We only accept returns in the following cases:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Wrong product delivered against the order</li>
                <li>Damaged or tampered packaging upon delivery</li>
                <li>Quality defects reported immediately upon opening</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Conditions:</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Issues must be reported within 48 hours of delivery with supporting photos/videos.</li>
                <li>Products must remain in sealed, unused condition.</li>
                <li>Opened or partially used bottles/pouches are not eligible for return.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-accent" /> Non-Returnable Products
            </h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Opened, used, or tampered products</li>
                <li>Products damaged due to improper storage after delivery</li>
                <li>Delays caused by courier or external factors beyond our control</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" /> Refunds
            </h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Approved refunds will be initiated within 5–7 business days of confirmation.</li>
                <li>Refunds will be processed via the original payment method (UPI, card, net banking, etc.).</li>
                <li>Depending on your bank or provider, funds may take 7–10 business days to reflect.</li>
                <li>Customers may opt for a replacement product or store credit instead of a refund.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Need Help?</h2>
            <p className="mb-2">For assistance regarding cancellations or refunds, please contact:</p>

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

export default RefundPolicy;

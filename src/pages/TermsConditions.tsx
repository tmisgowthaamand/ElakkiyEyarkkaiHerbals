import { PolicyLayout } from "@/components/policy-layout";
import { MapPin, Phone, Mail } from "lucide-react";

const TermsConditions = () => {
    return (
        <PolicyLayout
            title="Terms & Conditions"
            subtitle="Your Agreement with Elakkiya Eyarkkai Herbals"
        >
            <p className="mb-4">
                Welcome to Elakkiya Eyarkkai Herbals. By accessing our website, placing an order, or purchasing our coldpress/woodpress oils, you agree to the following Terms & Conditions. These terms govern all transactions, product use, and services we provide.
            </p>
            <p className="mb-4">
                If you do not agree with any part of these terms, please discontinue use of our services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">1. General Use of the Website & Services</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>You confirm that you are at least 18 years of age or accessing the site under the supervision of a guardian.</li>
                <li>You agree to use our services only for lawful purposes and in ways that do not harm our reputation or restrict others from using the site.</li>
                <li>We reserve the right to decline or cancel orders if fraudulent activity, misuse, or violation of these terms is detected.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Products & Authenticity</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>We specialize in woodpress and coldpress edible oils. All products are manufactured under strict quality standards.</li>
                <li>Product descriptions, packaging, and images are for representation only; natural variations may occur in texture, aroma, or color due to the traditional extraction process.</li>
                <li>Oils are intended for personal, household, or wholesale business use only and must not be resold under false branding.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Pricing & Payments</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>All prices are listed in Indian Rupees (INR ₹) unless specified otherwise.</li>
                <li>Prices may change due to raw material availability, market fluctuations, or company policies.</li>
                <li>Payments must be made in full at the time of order.</li>
                <li>We accept UPI, credit/debit cards, net banking, and secure third-party payment gateways.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Orders are dispatched within the processing time communicated during checkout.</li>
                <li>Delivery timelines depend on the destination, order size, and logistics partner availability.</li>
                <li>Customers must provide accurate shipping details. We are not liable for delivery delays caused by incorrect addresses or courier issues.</li>
                <li>Please refer to our Shipping Policy for detailed terms.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Returns & Refunds</h2>
            <p className="mb-4">Due to the consumable nature of edible oils, products cannot be returned once opened.</p>
            <p className="mb-2">Refunds or replacements are allowed only for:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Damaged or tampered packaging reported on delivery</li>
                <li>Wrong product supplied against the order</li>
            </ul>
            <p className="mb-4">Refunds are processed as per our Cancellation & Refund Policy.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
                All logos, product names, branding, packaging designs, and website content belong to Elakkiya Eyarkkai Herbals.
            </p>
            <p className="mb-4">
                Reproduction, distribution, or misuse without written permission is prohibited.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>We are not responsible for any health concerns arising from misuse, improper storage, or allergic reactions.</li>
                <li>Our oils are produced under hygienic conditions, but customers are responsible for verifying suitability before consumption.</li>
                <li>Liability is strictly limited to the value of the product purchased.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">8. Governing Law & Jurisdiction</h2>
            <p className="mb-4">
                These Terms & Conditions are governed by the laws of India, with jurisdiction under the courts of Tiruppur, Tamil Nadu.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
            <p className="mb-2">For queries, concerns, or assistance, please reach out to us:</p>

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

export default TermsConditions;

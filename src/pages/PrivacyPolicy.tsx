import { PolicyLayout } from "@/components/policy-layout";
import { MapPin, Phone, Mail } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <PolicyLayout
            title="Privacy Policy"
            subtitle="Your Privacy, Our Commitment"
        >
            <h2 className="text-2xl font-semibold mt-6 mb-4">Your Privacy, Our Commitment</h2>
            <p className="mb-4">
                At Elakkiya Eyarkkai Herbals, your privacy is our priority. Whether you purchase our woodpress/coldpress oils online, place wholesale orders, or connect with us for inquiries, we are committed to protecting the personal information you share with us. We ensure that your data is handled with transparency, care, and compliance with applicable Indian IT laws and globally recognized data protection standards.
            </p>
            <p className="mb-4">
                This Privacy Policy explains the type of information we collect, how we use it, the measures we take to protect it, and your rights as our customer.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
            <p className="mb-2">When you interact with us, we may collect the following:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Full Name / Business Name</li>
                <li>Email Address & Phone Number</li>
                <li>Billing & Shipping Address</li>
                <li>Order & Transaction Details</li>
                <li>Payment Information (processed via secure third-party gateways)</li>
                <li>GST/Tax Information (for wholesale/B2B orders)</li>
                <li>Device & Browser Information (for website visits)</li>
                <li>Cookies & Analytics Data (to improve site performance)</li>
            </ul>
            <p className="mb-4">We only collect information necessary for smooth operations, order fulfillment, and customer support.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
            <p className="mb-2">We use your data solely for:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Processing and fulfilling customer orders</li>
                <li>Coordinating delivery and logistics</li>
                <li>Providing after-sales support and resolving queries</li>
                <li>Managing wholesale/B2B transactions</li>
                <li>Sending updates, promotions, or offers (only if you opt in)</li>
                <li>Ensuring compliance with taxation and legal requirements</li>
                <li>Improving website experience and product offerings</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">How We Protect Your Information</h2>
            <p className="mb-2">We implement strong safeguards to ensure your data remains secure:</p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>SSL Encryption:</strong> All online transactions are encrypted.</li>
                <li><strong>Secure Payments:</strong> We never store sensitive payment details; transactions are processed via trusted third-party providers.</li>
                <li><strong>Access Controls:</strong> Only authorized personnel can access sensitive information.</li>
                <li><strong>Regular Reviews:</strong> Security protocols and systems are updated regularly to prevent misuse.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
            <p className="mb-2">As our customer, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Request access to the information we hold about you</li>
                <li>Ask for corrections or updates to your data</li>
                <li>Request deletion of your personal data (where legally permissible)</li>
                <li>Withdraw consent from promotional communications</li>
                <li>Raise privacy-related concerns at any time</li>
            </ul>
            <p className="mb-4">We respond to such requests within 30 business days.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Sharing</h2>
            <p className="mb-2">Your data is never sold. It is shared only with:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Logistics partners (for delivery of orders)</li>
                <li>Payment gateways (for secure processing)</li>
                <li>Regulatory authorities (if legally required)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Policy Updates</h2>
            <p className="mb-4">
                We may update this Privacy Policy periodically to reflect business, legal, or technological changes. The most recent version will always be available on our website with the updated date.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p className="mb-2">For privacy-related questions, requests, or complaints, please reach out to us:</p>
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

export default PrivacyPolicy;

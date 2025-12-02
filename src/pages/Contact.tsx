import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all required fields");
            return;
        }

        // Simulate form submission
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Get in Touch"
                    subtitle="Have questions? We'd love to hear from you"
                    centered
                />

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <Card className="p-8 text-center">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-3">Visit Us</h3>
                        <p className="text-muted-foreground">
                            4/675, Puthu Road, Srinivasa Nagar,<br />
                            Tiruppur, Tamil Nadu - 641605
                        </p>
                    </Card>

                    <Card className="p-8 text-center">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Phone className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-3">Call Us</h3>
                        <p className="text-muted-foreground">
                            +91 7418098614<br />
                            Mon - Sat, 9AM - 6PM IST
                        </p>
                    </Card>

                    <Card className="p-8 text-center">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-3">Email Us</h3>
                        <p className="text-muted-foreground">
                            Elakkiyaeyarkkaiherbals@gmail.com<br />
                            We reply within 24 hours
                        </p>
                    </Card>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="p-8">
                        <h2 className="text-3xl font-heading font-bold mb-6 text-center">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="name">Name *</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="message">Message *</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what you'd like to know..."
                                    rows={6}
                                    required
                                    className="mt-2"
                                />
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;

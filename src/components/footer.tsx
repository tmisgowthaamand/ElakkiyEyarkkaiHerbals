import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Business%20and%20Product%20photos/Business%20photo%202.png"
                alt="Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
              <h3 className="text-xl font-heading font-bold text-primary">
                Elakkiya Eyarkkai Herbals
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Premium herbal wellness products rooted in traditional Tamil wisdom.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/oils" className="text-muted-foreground hover:text-primary transition-colors">
                  Hair Oils
                </Link>
              </li>
              <li>
                <Link to="/shampoos" className="text-muted-foreground hover:text-primary transition-colors">
                  Shampoos
                </Link>
              </li>
              <li>
                <Link to="/soaps" className="text-muted-foreground hover:text-primary transition-colors">
                  Soaps
                </Link>
              </li>
              <li>
                <Link to="/hair-treatments" className="text-muted-foreground hover:text-primary transition-colors">
                  Hair Treatments
                </Link>
              </li>
              <li>
                <Link to="/face-care" className="text-muted-foreground hover:text-primary transition-colors">
                  Face Care
                </Link>
              </li>
              <li>
                <Link to="/face-oils" className="text-muted-foreground hover:text-primary transition-colors">
                  Face Oils
                </Link>
              </li>
              <li>
                <Link to="/combo-packs" className="text-muted-foreground hover:text-primary transition-colors">
                  Combo Packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-muted-foreground">
                  4/675, Puthu Road, Srinivasa Nagar,<br />
                  Tiruppur, Tamil Nadu - 641605
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground">
                  +91 7418098614
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground">
                  Elakkiyaeyarkkaiherbals@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Elakkiya Eyarkkai Herbals. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/shipping-policy" className="hover:text-primary transition-colors">
              Shipping Policy
            </Link>
            <Link to="/refund-policy" className="hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

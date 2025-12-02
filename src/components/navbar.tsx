import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const categories = [
    { name: "Hair Oils", href: "/oils" },
    { name: "Shampoos", href: "/shampoos" },
    { name: "Soaps", href: "/soaps" },
    { name: "Hair Treatments", href: "/hair-treatments" },
    { name: "Face Care", href: "/face-care" },
    { name: "Face Oils", href: "/face-oils" },
    { name: "Combo Packs", href: "/combo-packs" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Business%20and%20Product%20photos/Business%20photo%202.png"
              alt="Logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="text-2xl font-heading font-bold text-primary">
              Elakkiya Eyarkkai Herbals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <div className="border-t pt-6">
                    <Link
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors mb-4"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

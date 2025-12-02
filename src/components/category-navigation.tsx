import { Link } from "react-router-dom";
import { Leaf, Droplet, Bath, Sparkles, Heart, Flower2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const CategoryNavigation = () => {
  const categories = [
    {
      name: "Hair Oils",
      href: "/oils",
      icon: Droplet,
      description: "Traditional herbal oils",
    },
    {
      name: "Shampoos",
      href: "/shampoos",
      icon: Sparkles,
      description: "Natural cleansing",
    },
    {
      name: "Soaps",
      href: "/soaps",
      icon: Bath,
      description: "Pure herbal soaps",
    },
    {
      name: "Hair Treatments",
      href: "/hair-treatments",
      icon: Leaf,
      description: "Complete hair care",
    },
    {
      name: "Face Care",
      href: "/face-care",
      icon: Heart,
      description: "Radiant skin",
    },
    {
      name: "Face Oils",
      href: "/face-oils",
      icon: Flower2,
      description: "Natural glow",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link key={category.name} to={category.href}>
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 border-border bg-card h-full">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

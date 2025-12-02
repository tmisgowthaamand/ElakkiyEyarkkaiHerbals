import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                100% Natural & Herbal
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Traditional Tamil
              <span className="text-primary block">Wellness</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Discover the ancient wisdom of herbal care with our premium range of natural oils, shampoos, soaps, and face care products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/oils">
                <Button size="lg" className="gap-2">
                  Shop Hair Oils
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Natural</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">60+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">5K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
                alt="Natural herbal products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold mb-1">Premium Quality</p>
              <p className="text-2xl font-bold">Herbal Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

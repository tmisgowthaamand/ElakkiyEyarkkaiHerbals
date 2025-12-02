import { Link } from "react-router-dom";
import { Hero } from "@/components/hero";
import { CategoryNavigation } from "@/components/category-navigation";
import { SectionHeader } from "@/components/section-header";
import { ProductGrid } from "@/components/product-grid";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";

const Home = () => {
  const featuredOils = products.filter((p) => p.category === "oils").slice(0, 4);
  const featuredShampoos = products.filter((p) => p.category === "shampoos").slice(0, 4);
  const featuredSoaps = products.filter((p) => p.category === "soaps").slice(0, 4);
  const featuredFaceCare = products.filter((p) => p.category === "face-care").slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Category Navigation */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Shop by Category"
            subtitle="Explore our complete range of traditional herbal products"
            centered
          />
          <CategoryNavigation />
        </div>
      </section>

      {/* Featured Oils */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader
              title="Hair Oils"
              subtitle="Traditional herbal oils for strong, lustrous hair"
            />
            <Link to="/oils">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredOils} />
        </div>
      </section>

      {/* Featured Shampoos */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader
              title="Herbal Shampoos"
              subtitle="Natural cleansing for healthy, vibrant hair"
            />
            <Link to="/shampoos">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredShampoos} />
        </div>
      </section>

      {/* Featured Soaps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader
              title="Natural Soaps"
              subtitle="Pure herbal soaps for radiant, healthy skin"
            />
            <Link to="/soaps">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredSoaps} />
        </div>
      </section>

      {/* Featured Face Care */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader
              title="Face Care"
              subtitle="Complete natural face care for glowing skin"
            />
            <Link to="/face-care">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredFaceCare} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Elakkiya Eyarkkai Herbals"
            subtitle="Committed to quality, tradition, and your wellness"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8 rounded-2xl bg-muted">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">100% Natural</h3>
              <p className="text-muted-foreground">
                Pure herbal ingredients with no harmful chemicals or artificial additives
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-muted">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Traditional Recipes</h3>
              <p className="text-muted-foreground">
                Time-tested Tamil herbal formulations passed down through generations
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-muted">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                Thousands of satisfied customers experiencing visible improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Customer Stories"
            subtitle="What our customers say about us"
            centered
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Natural Wellness?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of customers who have transformed their hair and skin care routine with our traditional herbal products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/oils">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Shopping
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

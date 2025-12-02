import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <SectionHeader
              title="Our Story"
              subtitle="Rooted in tradition, crafted with care"
            />
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Elakkiya Eyarkkai Herbals was born from a deep respect for traditional Tamil wellness practices and a commitment to preserving ancient herbal knowledge for modern times.
              </p>
              <p>
                For generations, our families have passed down recipes and techniques for creating natural hair and skin care products using the finest herbs and ingredients. Today, we bring these time-tested formulations to you, maintaining the same dedication to purity and effectiveness.
              </p>
              <p>
                Every product we create is a blend of traditional wisdom and careful craftsmanship, ensuring that you receive the authentic benefits of herbal care.
              </p>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/about-hero.png"
              alt="Traditional herbal preparation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <SectionHeader
          title="Our Values"
          subtitle="What drives us every day"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <Card className="p-8 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">100% Natural</h3>
            <p className="text-muted-foreground">
              Pure herbal ingredients with no harmful chemicals or synthetic additives
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Traditional Wisdom</h3>
            <p className="text-muted-foreground">
              Ancient Tamil formulations preserved and perfected over generations
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              Rigorous quality checks ensure every product meets our high standards
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Community Focus</h3>
            <p className="text-muted-foreground">
              Supporting local farmers and artisans who share our commitment to quality
            </p>
          </Card>
        </div>

        {/* Our Promise */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Promise to You</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We promise to deliver only the finest herbal products, crafted with care and respect for tradition. Every product is made in small batches to ensure freshness and quality. We believe in transparency, sustainability, and the power of nature to enhance your well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

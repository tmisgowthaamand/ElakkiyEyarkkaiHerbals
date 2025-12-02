import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Chennai",
    text: "The Karumboola Hair Oil has transformed my hair! It's thicker and shinier than ever before. Truly traditional quality.",
    rating: 5,
  },
  {
    name: "Ananya Krishnan",
    location: "Coimbatore",
    text: "I've been using the face care products for 3 months now. My skin has never looked better. All natural ingredients!",
    rating: 5,
  },
  {
    name: "Lakshmi Raj",
    location: "Madurai",
    text: "The herbal shampoos are amazing! No more chemicals, just pure natural goodness. My whole family uses them now.",
    rating: 5,
  },
  {
    name: "Divya Menon",
    location: "Trichy",
    text: "Best herbal soaps I've ever used. My skin feels so soft and natural. The turmeric soap is my favorite!",
    rating: 5,
  },
];

export const TestimonialCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full bg-muted border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

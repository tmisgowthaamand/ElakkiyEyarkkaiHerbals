import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HairTreatments = () => {
  const [sortBy, setSortBy] = useState("default");
  const [priceFilter, setPriceFilter] = useState("all");

  let treatmentProducts = products.filter((p) => p.category === "hair-treatments");

  // Price filter
  if (priceFilter === "under-1000") {
    treatmentProducts = treatmentProducts.filter((p) => p.price < 1000);
  } else if (priceFilter === "1000-1500") {
    treatmentProducts = treatmentProducts.filter((p) => p.price >= 1000 && p.price <= 1500);
  } else if (priceFilter === "1500-2000") {
    treatmentProducts = treatmentProducts.filter((p) => p.price > 1500 && p.price <= 2000);
  } else if (priceFilter === "above-2000") {
    treatmentProducts = treatmentProducts.filter((p) => p.price > 2000);
  }

  // Sorting
  if (sortBy === "price-low") {
    treatmentProducts = [...treatmentProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    treatmentProducts = [...treatmentProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    treatmentProducts = [...treatmentProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="Hair Treatments"
          subtitle="Complete hair care solutions - powders, dyes, and serums"
        />

        {/* Filters & Sort */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-4">
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-1000">Under ₹1000</SelectItem>
                <SelectItem value="1000-1500">₹1000 - ₹1500</SelectItem>
                <SelectItem value="1500-2000">₹1500 - ₹2000</SelectItem>
                <SelectItem value="above-2000">Above ₹2000</SelectItem>
              </SelectContent>
            </Select>

            <p className="text-muted-foreground self-center">
              {treatmentProducts.length} products
            </p>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="price-low">Price (Low to High)</SelectItem>
              <SelectItem value="price-high">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products */}
        <ProductGrid products={treatmentProducts} />
      </div>
    </div>
  );
};

export default HairTreatments;

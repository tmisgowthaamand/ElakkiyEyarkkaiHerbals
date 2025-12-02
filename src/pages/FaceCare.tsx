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

const FaceCare = () => {
  const [sortBy, setSortBy] = useState("default");
  const [priceFilter, setPriceFilter] = useState("all");

  let faceCareProducts = products.filter((p) => p.category === "face-care");

  // Price filter
  if (priceFilter === "under-1000") {
    faceCareProducts = faceCareProducts.filter((p) => p.price < 1000);
  } else if (priceFilter === "1000-1500") {
    faceCareProducts = faceCareProducts.filter((p) => p.price >= 1000 && p.price <= 1500);
  } else if (priceFilter === "1500-2000") {
    faceCareProducts = faceCareProducts.filter((p) => p.price > 1500 && p.price <= 2000);
  } else if (priceFilter === "above-2000") {
    faceCareProducts = faceCareProducts.filter((p) => p.price > 2000);
  }

  // Sorting
  if (sortBy === "price-low") {
    faceCareProducts = [...faceCareProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    faceCareProducts = [...faceCareProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    faceCareProducts = [...faceCareProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="Face Care"
          subtitle="Complete natural face care for glowing, healthy skin"
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
              {faceCareProducts.length} products
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
        <ProductGrid products={faceCareProducts} />
      </div>
    </div>
  );
};

export default FaceCare;

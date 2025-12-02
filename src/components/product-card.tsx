import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const displayPrice = product.variants && product.variants.length > 0
    ? (product.variants[0].price === product.variants[product.variants.length - 1].price
      ? `₹${product.variants[0].price}`
      : `₹${product.variants[0].price} - ₹${product.variants[product.variants.length - 1].price}`)
    : `₹${product.price}`;

  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4 flex-1">
          <Badge variant="secondary" className="mb-2 text-xs">
            {product.category}
          </Badge>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              {displayPrice}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

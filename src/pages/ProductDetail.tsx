import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductVariants } from "@/components/product-variants";
import { QuantitySelector } from "@/components/quantity-selector";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { SectionHeader } from "@/components/section-header";
import { ProductGrid } from "@/components/product-grid";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants ? product.variants[0].label : ""
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentPrice = product.variants
    ? product.variants.find((v) => v.label === selectedVariant)?.price || product.price
    : product.price;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to={`/${product.category}`}>
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to {product.category}
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-primary mb-6">
                ₹{currentPrice}
              </p>
              <p className="text-lg text-muted-foreground">
                {product.shortDescription}
              </p>
            </div>

            <Separator />

            {/* Variants */}
            {product.variants && (
              <>
                <ProductVariants
                  variants={product.variants}
                  selectedVariant={selectedVariant}
                  onSelectVariant={setSelectedVariant}
                />
                <Separator />
              </>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Quantity
              </label>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(quantity + 1)}
                onDecrease={() => setQuantity(quantity - 1)}
              />
            </div>

            {/* Add to Cart */}
            <AddToCartButton
              product={{
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: currentPrice,
                imageUrl: product.imageUrl,
              }}
              variant={product.variants ? selectedVariant : undefined}
              quantity={quantity}
            />

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">About This Product</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Key Ingredients</h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Benefits</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <SectionHeader
              title="Related Products"
              subtitle="You might also like these products"
            />
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

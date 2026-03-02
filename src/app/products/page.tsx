import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">All Products</h1>
      <p className="text-gray-500 mb-8">{products.length} products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

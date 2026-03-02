import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to TestShop
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of quality products. From everyday essentials to unique finds.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Browse all products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link
            href="/products"
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

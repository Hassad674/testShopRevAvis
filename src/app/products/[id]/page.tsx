"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductById, formatPrice } from "@/data/products";
import { useCart } from "@/context/cart";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
        <Link href="/products" className="text-indigo-600 hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link
        href="/products"
        className="text-sm text-indigo-600 hover:underline mb-6 inline-block"
      >
        &larr; Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-gray-900 mb-8">
            {formatPrice(product.price)}
          </p>
          <button
            onClick={handleAdd}
            className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            {added ? "Added!" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

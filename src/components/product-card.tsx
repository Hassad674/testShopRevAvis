"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/cart";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

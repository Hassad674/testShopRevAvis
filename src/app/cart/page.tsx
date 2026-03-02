"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some products to get started.</p>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-600 hover:underline cursor-pointer"
        >
          Clear cart
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-4"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <Link
                href={`/products/${product.id}`}
                className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {product.name}
              </Link>
              <p className="text-sm text-gray-500">{formatPrice(product.price)} each</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                +
              </button>
            </div>

            <div className="text-right w-24">
              <p className="font-semibold text-gray-900">
                {formatPrice(product.price * quantity)}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
              title="Remove"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-xl font-bold text-gray-900">{formatPrice(totalPrice)}</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
        <button
          onClick={async () => {
            setCheckoutLoading(true);
            const res = await fetch("/api/checkout", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                items: items.map(({ product, quantity }) => ({
                  name: product.name,
                  price: product.price,
                  quantity,
                  image: product.image,
                })),
              }),
            });
            const data = await res.json();
            if (data.url) {
              window.location.href = data.url;
            } else {
              setCheckoutLoading(false);
            }
          }}
          disabled={checkoutLoading}
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors cursor-pointer"
        >
          {checkoutLoading ? "Redirecting to Stripe..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}

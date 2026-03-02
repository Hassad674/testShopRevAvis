"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/cart";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-6">&#10003;</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <Link
        href="/products"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Continue shopping
      </Link>
    </div>
  );
}

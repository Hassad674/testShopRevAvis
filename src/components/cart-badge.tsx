"use client";

import Link from "next/link";
import { useCart } from "@/context/cart";

export function CartBadge() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative text-sm text-gray-600 hover:text-gray-900 transition-colors"
    >
      Cart
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-4 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

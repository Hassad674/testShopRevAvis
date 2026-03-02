import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/context/cart";
import { CartBadge } from "@/components/cart-badge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TestShop",
  description: "A simple e-commerce test shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <CartProvider>
          <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-gray-900">
                TestShop
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href="/products"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Products
                </Link>
                <CartBadge />
              </div>
            </nav>
          </header>

          <main className="min-h-[calc(100vh-8rem)]">{children}</main>

          <footer className="border-t border-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} TestShop. Built for testing purposes.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}

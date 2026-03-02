export interface Product {
  id: string;
  name: string;
  price: number; // in cents
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 2999,
    description:
      "A timeless essential. Made from 100% organic cotton, this classic white tee offers a comfortable fit perfect for everyday wear. Pair it with jeans or layer it under a jacket.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "Clothing",
  },
  {
    id: "2",
    name: "Leather Crossbody Bag",
    price: 8900,
    description:
      "Handcrafted from genuine leather, this crossbody bag combines style and functionality. Features an adjustable strap, multiple compartments, and a secure magnetic closure.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
    category: "Accessories",
  },
  {
    id: "3",
    name: "Running Sneakers",
    price: 12900,
    description:
      "Lightweight and responsive, these running sneakers feature cushioned soles and breathable mesh uppers. Designed for both casual walks and serious runs.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "Shoes",
  },
  {
    id: "4",
    name: "Denim Jacket",
    price: 7900,
    description:
      "A wardrobe staple that never goes out of style. This denim jacket features a classic fit, button closure, and two chest pockets. Perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
    category: "Clothing",
  },
  {
    id: "5",
    name: "Minimalist Watch",
    price: 15900,
    description:
      "Clean lines and a sleek design make this minimalist watch the perfect accessory. Features a Japanese quartz movement, stainless steel case, and genuine leather strap.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Canvas Backpack",
    price: 5900,
    description:
      "Durable and spacious, this canvas backpack is ideal for daily commutes or weekend adventures. Padded laptop sleeve, multiple pockets, and water-resistant coating.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    category: "Accessories",
  },
  {
    id: "7",
    name: "Wool Beanie",
    price: 1999,
    description:
      "Stay warm in style with this soft merino wool beanie. Ribbed knit design with a comfortable stretch fit. Available in one size that fits most.",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop",
    category: "Accessories",
  },
  {
    id: "8",
    name: "Slim Fit Chinos",
    price: 4900,
    description:
      "These slim fit chinos offer a modern silhouette with stretch comfort. Made from a cotton-elastane blend for all-day ease. Perfect for casual or smart-casual looks.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop",
    category: "Clothing",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

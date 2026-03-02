import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { items } = await req.json();

  if (!items || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "No items provided" }, { status: 400 });
  }

  const origin = req.headers.get("origin") || "http://localhost:3001";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items.map(
      (item: { name: string; price: number; quantity: number; image: string }) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })
    ),
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });

  return NextResponse.json({ url: session.url });
}

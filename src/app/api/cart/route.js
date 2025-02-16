import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Helper to get the cart from cookies
export function getCartFromCookies() {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart");
  return cart ? JSON.parse(cart.value) : [];
}

// Helper to update the cart in cookies
export function setCartToCookies(cart) {
  cookies().set("cart", JSON.stringify(cart), { httpOnly: true, path: "/" });
}


/**
 * 
 * @param {NextRequest} req 
 * @returns {{ message: string, cart: [] }}
 * @description API to add items to cart
 */
export async function POST(req) {
  const { productId, quantity } = await req.json();
  let cart = getCartFromCookies();

  // Check if item exists
  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  // Save back to cookies
  setCartToCookies(cart);

  return NextResponse.json({ message: "Cart updated", cart });
}

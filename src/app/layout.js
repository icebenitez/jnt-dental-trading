import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { CartSheet } from "@/components/cart-sheet"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "J&T Dental Trading",
  description: "Professional dental supplies for dentists, schools, and hospitals in the Philippines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center">
              <MainNav />
              <MobileNav />
              <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-2">
                  <CartSheet />
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1 max-w-screen-xl mx-auto">
            <div className="container mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

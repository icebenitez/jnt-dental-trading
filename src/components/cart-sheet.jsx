"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Open cart</span>
          <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
            2
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Cart (2 items)</SheetTitle>
          <SheetDescription>Review your cart before checking out.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-4 p-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                      <Image src="/placeholder.svg" alt="Product image" fill className="absolute object-cover" />
                    </div>
                    <div className="flex flex-col self-start">
                      <span className="line-clamp-1 text-sm font-medium mb-1">Dental Instrument Set</span>
                      <span className="line-clamp-1 text-sm text-muted-foreground">Qty 1</span>
                      <span className="line-clamp-1 text-sm text-muted-foreground">₱15,000.00</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="grid gap-4 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total</span>
            <span>₱30,000.00</span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}


import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function randomPrice() {
  return Math.floor(Math.random() * 10000).toFixed(2)
}

export function ProductCard({product}) {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="border-b p-0">
        <div className="aspect-square relative">
          <Image src="/placeholder.svg" alt="Product image" fill className="object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <Link href={`/products/1`}>
          <CardTitle className="line-clamp-1">Dental Instrument Set</CardTitle>
        </Link>
        <CardDescription className="line-clamp-2">
          Complete set of essential dental instruments for general practice
        </CardDescription>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">₱{randomPrice()}</div>
          <Button size="sm" onClick={() => {console.log('i am clicked')}}>Add to cart</Button>
        </div>
      </CardContent>
    </Card>
  )
}


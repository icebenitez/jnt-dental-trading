"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

/**
 * 
 * @param {{
 *     id: string
 *     name: string
 *     price: number
 *     description: string
 *     features: string[]
 *     specs: Record<string, string>
 *     stock: number
 *     sku: string
 *   }} param0 
 * @returns 
 */
export function ProductInfo({ product }) {
  const [quantity, setQuantity] = React.useState(1)

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const addToCart = () => {
    toast.success(`Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart`)
  }

  const addToWishlist = () => {
    toast.success("Added to wishlist")
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">₱{product.price.toLocaleString()}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <p className="text-base text-muted-foreground">{product.description}</p>
      </div>

      <div className="mt-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Features</h3>
          <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Specifications</CardTitle>
          <CardDescription>Technical details and information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4">
                <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                <dd className="text-sm">{value}</dd>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Stock Status</h3>
          <p className="text-sm text-muted-foreground">
            {product.stock > 0 ? `${product.stock} units available` : "Out of stock"}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">SKU</h3>
          <p className="text-sm text-muted-foreground">{product.sku}</p>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
              <MinusIcon className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              max={product.stock}
              className="mx-2 w-20 text-center"
              value={quantity}
              onChange={(e) => {
                const val = Number.parseInt(e.target.value)
                if (val >= 1 && val <= product.stock) {
                  setQuantity(val)
                }
              }}
            />
            <Button variant="outline" size="icon" onClick={incrementQuantity} disabled={quantity >= product.stock}>
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button className="flex-1" onClick={addToCart} disabled={product.stock === 0}>
            Add to Cart
          </Button>
          <Button variant="outline" onClick={addToWishlist}>
            Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  )
}


import Link from "next/link"
import { ProductCard } from "@/components/product-card"

/**
 * 
 * @param {{
 *  category: string, 
 *  currentProductId: string
 * }} param0 
 * @returns 
 */
export function RelatedProducts({ category, currentProductId }) {
  // This would normally fetch from your database
  const relatedProducts = [
    {
      id: "1",
      name: "Dental Chair",
      description: "Modern dental chair with advanced positioning controls",
      price: 199999.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "2",
      name: "LED Curing Light",
      description: "High-intensity LED curing light for dental procedures",
      price: 15999.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "3",
      name: "Ultrasonic Scaler",
      description: "Professional ultrasonic dental scaler",
      price: 24999.99,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "4",
      name: "Dental Compressor",
      description: "Silent dental air compressor",
      price: 45999.99,
      image: "/placeholder.svg?height=400&width=400",
    },
  ].filter((product) => product.id !== currentProductId)

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Related Products</h2>
        <p className="text-sm text-muted-foreground">Other products in the {category} category</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}


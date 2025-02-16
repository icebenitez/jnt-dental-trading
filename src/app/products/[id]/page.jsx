import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { RelatedProducts } from "@/components/related-products"
import { Separator } from "@/components/ui/separator"

export default function ProductPage({ params }) {
  // This would normally fetch from your database
  const product = {
    id: params.id,
    name: "Digital X-Ray Sensor",
    price: 89999.99,
    description:
      "High-resolution digital X-ray sensor with advanced imaging capabilities. Perfect for dental clinics and hospitals.",
    features: [
      "High-resolution imaging",
      "Quick image processing",
      "Ergonomic design",
      "Compatible with most dental software",
      "Durable construction",
    ],
    specs: {
      "Sensor Type": "CMOS",
      Resolution: "20 lp/mm",
      Connection: "USB 3.0",
      Software: "Included",
      Warranty: "2 years",
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Equipment",
    stock: 5,
    sku: "XRS-001",
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 pt-6 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product gallery */}
          <ProductGallery images={product.images} />

          {/* Product info */}
          <ProductInfo product={product} />
        </div>

        <Separator className="my-8" />

        {/* Related products */}
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  )
}


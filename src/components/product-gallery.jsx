"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = React.useState(0)

  return (
    <div className="flex flex-col-reverse">
      {/* Image grid */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={cn(
                "relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring focus:ring-primary focus:ring-offset-4",
                selectedImage === i ? "ring ring-primary ring-offset-4" : "ring-transparent",
              )}
              role="tab"
              aria-selected={selectedImage === i}
              aria-controls={`product-image-${i}`}
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main image */}
      <div className="aspect-h-1 aspect-w-1 w-full">
        <div
          id={`product-image-${selectedImage}`}
          aria-labelledby={`product-image-${selectedImage}-trigger`}
          role="tabpanel"
          className="relative h-96 w-full sm:h-[500px] lg:h-[600px]"
        >
          <Image
            src={images[selectedImage] || "/placeholder.svg"}
            alt="Product image"
            className="h-full w-full object-cover object-center sm:rounded-lg"
            fill
            priority
          />
        </div>
      </div>
    </div>
  )
}


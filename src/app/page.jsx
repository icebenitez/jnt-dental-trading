import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between space-x-2 p-4">
        <div className="flex flex-1 items-center space-x-2">
          <Input placeholder="Search products..." className="w-[150px] lg:w-[250px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                Categories
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Equipment</DropdownMenuItem>
              <DropdownMenuItem>Instruments</DropdownMenuItem>
              <DropdownMenuItem>Consumables</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between space-x-2 p-4">
        <div className="flex-1 text-sm text-muted-foreground">12 products found</div>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                Sort by
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>Price: Low to high</DropdownMenuItem>
              <DropdownMenuItem>Price: High to low</DropdownMenuItem>
              <DropdownMenuItem>Newest first</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <ScrollArea>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}


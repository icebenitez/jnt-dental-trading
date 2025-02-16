"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { businessName } from "@/lib/variables"

const categories = [
  {
    title: "Equipment",
    href: "/category/equipment",
    description: "Professional dental equipment for your practice",
    items: [
      { title: "Dental Chairs", href: "/category/equipment/chairs" },
      { title: "X-Ray Machines", href: "/category/equipment/xray" },
      { title: "Sterilization", href: "/category/equipment/sterilization" },
    ],
  },
  {
    title: "Instruments",
    href: "/category/instruments",
    description: "High-quality dental instruments and tools",
    items: [
      { title: "Hand Instruments", href: "/category/instruments/hand" },
      { title: "Surgical Instruments", href: "/category/instruments/surgical" },
      { title: "Diagnostic Tools", href: "/category/instruments/diagnostic" },
    ],
  },
  {
    title: "Consumables",
    href: "/category/consumables",
    description: "Essential dental supplies and materials",
    items: [
      { title: "Impression Materials", href: "/category/consumables/impression" },
      { title: "Disposables", href: "/category/consumables/disposables" },
      { title: "Dental Materials", href: "/category/consumables/materials" },
    ],
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{businessName}</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {categories.map((category) => (
            <NavigationMenuItem key={category.title}>
              <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href={category.href}
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">{category.title}</div>
                        <p className="text-sm leading-tight text-muted-foreground">{category.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {category.items.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href ?? "#"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"


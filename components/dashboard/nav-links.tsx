"use client"

import { cn } from "@/lib/utils"
// import {
//   LayoutDashboardIcon,
//   Settings2Icon,
//   ShoppingBagIcon,
//   User2Icon,
// } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Overview",
    href: "/dashboard",
    // icon: <LayoutDashboardIcon />,
  },
  {
    name: "Invoices",
    href: "/dashboard/products",
    // icon: <ShoppingBagIcon />,
  },
  {
    name: "customers",
    href: "/dashboard/customers",
    // icon: <User2Icon />,
  },
]

export default function NavLinks({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "hover:text-primary text-sm font-medium transition-colors",
            {
              "text-muted-foreground": pathname !== link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

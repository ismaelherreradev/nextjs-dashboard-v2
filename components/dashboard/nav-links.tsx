import Link from "next/link"
import {
  BanknoteIcon,
  BarChart2Icon,
  FolderArchiveIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  Settings2Icon,
  ShoppingBagIcon,
  User2Icon,
  Users2Icon,
} from "lucide-react"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <User2Icon />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBagIcon />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <BanknoteIcon />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <FolderArchiveIcon />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <BarChart2Icon />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users2Icon />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Settings2Icon />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <HelpCircleIcon />,
      },
    ],
  },
]

export default function NavLinks() {
  return (
    <>
      {menuItems.map((item) => {
        return (
          <div key={item.title} className="mb-5">
            <h3 className="mb-2 text-sm font-bold uppercase text-gray-500">
              {item.title}
            </h3>
            <ul>
              {item.list.map((subitem) => (
                <li key={subitem.title}>
                  <Link
                    href={subitem.path}
                    className="flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <span className="mr-3">{subitem.icon}</span>
                    {subitem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}

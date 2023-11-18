import MainNavbar from "@/components/main-navbar"
import Sidenav from "@/components/dashboard/sidenav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="bg-accent flex-1 p-5">
        <Sidenav />
      </div>
      <div className="flex-[4] p-4">
        <MainNavbar />
        {children}
      </div>
    </div>
  )
}

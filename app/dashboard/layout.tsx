import MainNav from "@/components/dashboard/main-nav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MainNav />
      {children}
    </main>
  )
}

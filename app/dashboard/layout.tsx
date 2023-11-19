import MainNav from "@/components/dashboard/main-nav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <MainNav />
      </header>
      <section className="container relative">
        <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
      </section>
    </main>
  )
}

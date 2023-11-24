import { LoginCard } from "@/components/login/login-card"

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <LoginCard />
    </div>
  )
}

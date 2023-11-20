import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboardIcon } from "lucide-react"

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          <div className="flex items-center space-x-2">
            <LayoutDashboardIcon />
            <span>Dashboard</span>
          </div>
        </h2>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">h1</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

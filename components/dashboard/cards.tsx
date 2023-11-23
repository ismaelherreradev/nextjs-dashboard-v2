import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { BanknoteIcon, Clock2Icon, InboxIcon, User2Icon } from "lucide-react"

type Props = {
  title: string
  value: number | string
  type: "invoices" | "customers" | "pending" | "collected"
}

const icons = {
  invoices: InboxIcon,
  customers: User2Icon,
  pending: Clock2Icon,
  collected: BanknoteIcon,
}

export default function Cards({ title, value, type }: Props) {
  const Icon = icons[type]
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon ? <Icon className="text-muted-foreground h-4 w-4" /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

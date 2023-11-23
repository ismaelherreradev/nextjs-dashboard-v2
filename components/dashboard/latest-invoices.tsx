import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { fetchLatestInvoices } from "@/lib/data"

export default async function LastestInvoices() {
  const latestInvoices = await fetchLatestInvoices()

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>
          <span className="text-sm">Latest Invoices</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {latestInvoices.map((invoice) => (
            <div className="flex items-center" key={invoice.id}>
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                />
                <AvatarFallback>
                  {invoice.name.split(" ").map((name) => `${name[0].at(0)}`)}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {invoice.name}
                </p>
                <p className="text-muted-foreground text-sm">{invoice.email}</p>
              </div>
              <div className="ml-auto font-medium">{invoice.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

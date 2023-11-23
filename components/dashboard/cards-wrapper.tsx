import Cards from "./cards"
import { fetchCardData } from "@/lib/data"

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData()

  return (
    <>
      <Cards title="Collected" value={totalPaidInvoices} type="collected" />
      <Cards title="Pending" value={totalPendingInvoices} type="pending" />
      <Cards title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Cards
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  )
}

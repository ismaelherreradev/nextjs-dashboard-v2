import { fetchCardData } from "@/lib/data";
import Cards from "./cards"

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Cards title="Collected" value={totalPaidInvoices} type="collected" />
      <Cards title="Pending" value={totalPendingInvoices} type="pending" />
      <Cards title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Cards
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
      </div>
    </>
  )
}

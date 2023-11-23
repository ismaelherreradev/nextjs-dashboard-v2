import { Chart } from "./chart"
import { fetchRevenue } from "@/lib/data"

export default async function OverviewChart() {
  const revenue = await fetchRevenue()

  return (
    <>
      <Chart data={revenue} />
    </>
  )
}

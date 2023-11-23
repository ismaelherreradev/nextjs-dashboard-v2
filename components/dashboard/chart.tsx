"use client"

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function Chart(revenue: any) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>
          <span className="text-sm">Overview</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenue.data}>
            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="revenue" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

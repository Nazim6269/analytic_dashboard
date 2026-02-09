"use client";

import { OrderDataPoint } from "@/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { formatNumber } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface OrdersChartProps {
  data: OrderDataPoint[];
  loading?: boolean;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string; color: string }>;
  label?: string;
}) {
  if (!active || !payload) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <p className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </p>
      {payload.map((entry) => (
        <p
          key={entry.dataKey}
          className="text-sm"
          style={{ color: entry.color }}
        >
          {entry.dataKey === "orders" ? "Orders" : "Returns"}:{" "}
          {formatNumber(entry.value)}
        </p>
      ))}
    </div>
  );
}

export function OrdersChart({ data, loading = false }: OrdersChartProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Orders & Returns</CardTitle>
        </CardHeader>
        <Skeleton className="h-[300px] w-full" />
      </Card>
    );
  }

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle>Orders & Returns</CardTitle>
      </CardHeader>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              className="dark:opacity-20"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              stroke="#94a3b8"
            />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="orders"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              name="Orders"
            />
            <Bar
              dataKey="returns"
              fill="#f59e0b"
              radius={[4, 4, 0, 0]}
              name="Returns"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

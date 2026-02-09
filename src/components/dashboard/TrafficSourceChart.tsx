"use client";

import { TrafficSource } from "@/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { formatNumber } from "@/lib/utils";

interface TrafficSourceChartProps {
  data: TrafficSource[];
  loading?: boolean;
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: { source: string; percentage: number; color: string };
  }>;
}) {
  if (!active || !payload?.[0]) return null;

  const entry = payload[0].payload;
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {entry.source}
      </p>
      <p className="text-sm" style={{ color: entry.color }}>
        {formatNumber(payload[0].value)} visitors ({entry.percentage}%)
      </p>
    </div>
  );
}

export function TrafficSourceChart({
  data,
  loading = false,
}: TrafficSourceChartProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <Skeleton className="h-[300px] w-full" />
      </Card>
    );
  }

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
      </CardHeader>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              className="dark:opacity-20"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fontSize: 12 }}
              stroke="#94a3b8"
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <YAxis
              type="category"
              dataKey="source"
              tick={{ fontSize: 12 }}
              stroke="#94a3b8"
              width={70}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="visitors" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

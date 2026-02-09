"use client";

import { UserDistribution } from "@/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface UserDistributionChartProps {
  data: UserDistribution[];
  loading?: boolean;
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { color: string } }>;
}) {
  if (!active || !payload?.[0]) return null;

  const entry = payload[0];
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {entry.name}
      </p>
      <p className="text-sm" style={{ color: entry.payload.color }}>
        {entry.value} users
      </p>
    </div>
  );
}

export function UserDistributionChart({
  data,
  loading = false,
}: UserDistributionChartProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>User Distribution</CardTitle>
        </CardHeader>
        <Skeleton className="mx-auto h-[300px] w-[300px] rounded-full" />
      </Card>
    );
  }

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle>User Distribution</CardTitle>
      </CardHeader>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

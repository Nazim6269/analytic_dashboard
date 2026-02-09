"use client";

import dynamic from "next/dynamic";
import { DashboardData } from "@/types";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const RevenueChart = dynamic(
  () =>
    import("./RevenueChart").then((mod) => ({ default: mod.RevenueChart })),
  {
    ssr: false,
    loading: () => <ChartSkeleton title="Revenue Overview" />,
  }
);

const OrdersChart = dynamic(
  () =>
    import("./OrdersChart").then((mod) => ({ default: mod.OrdersChart })),
  {
    ssr: false,
    loading: () => <ChartSkeleton title="Orders & Returns" />,
  }
);

const UserDistributionChart = dynamic(
  () =>
    import("./UserDistributionChart").then((mod) => ({
      default: mod.UserDistributionChart,
    })),
  {
    ssr: false,
    loading: () => <ChartSkeleton title="User Distribution" />,
  }
);

const TrafficSourceChart = dynamic(
  () =>
    import("./TrafficSourceChart").then((mod) => ({
      default: mod.TrafficSourceChart,
    })),
  {
    ssr: false,
    loading: () => <ChartSkeleton title="Traffic Sources" />,
  }
);

function ChartSkeleton({ title }: { title: string }) {
  return (
    <Card>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </div>
      <Skeleton className="h-[300px] w-full" />
    </Card>
  );
}

interface ChartSectionProps {
  data: DashboardData;
  loading?: boolean;
}

export function ChartSection({ data, loading = false }: ChartSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <RevenueChart data={data.revenue} loading={loading} />
      <OrdersChart data={data.orders} loading={loading} />
      <UserDistributionChart
        data={data.userDistribution}
        loading={loading}
      />
      <TrafficSourceChart data={data.trafficSources} loading={loading} />
    </div>
  );
}

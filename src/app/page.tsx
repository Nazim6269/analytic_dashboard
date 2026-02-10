"use client";

import { useCallback, useEffect, useMemo } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FilterSection } from "@/components/dashboard/FilterSection";
import { KPISection } from "@/components/dashboard/KPISection";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { ErrorState } from "@/components/ui/ErrorState";
import { useDashboardStore } from "@/store/useDashboardStore";
import { defaultDashboardData } from "@/data/mockData";

export default function Home() {
  const data = useDashboardStore((state) => state.data);
  const loading = useDashboardStore((state) => state.loading);
  const error = useDashboardStore((state) => state.error);
  const fetchDashboardData = useDashboardStore(
    (state) => state.fetchDashboardData
  );

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const dashboardData = useMemo(
    () => data || defaultDashboardData,
    [data]
  );

  const handleRetry = useCallback(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Overview
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome back! Here&apos;s what&apos;s happening with your business.
          </p>
        </div>

        {/* Filters */}
        <FilterSection />

        {/* Error State */}
        {error && (
          <ErrorState message={error} onRetry={handleRetry} />
        )}

        {/* KPI Cards */}
        <KPISection data={dashboardData.kpis} loading={loading} />

        {/* Charts */}
        <ChartSection data={dashboardData} loading={loading} />
      </div>
    </DashboardLayout>
  );
}

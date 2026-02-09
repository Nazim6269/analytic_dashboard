"use client";

import { KPIData } from "@/types";
import { KPICard, KPICardSkeleton } from "./KPICard";

interface KPISectionProps {
  data: KPIData[];
  loading?: boolean;
}

export function KPISection({ data, loading = false }: KPISectionProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <KPICardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {data.map((kpi, index) => (
        <KPICard key={kpi.title} data={kpi} index={index} />
      ))}
    </div>
  );
}

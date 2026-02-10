"use client";

import React, { memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import { KPIData } from "@/types";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
};

interface KPICardProps {
  data: KPIData;
  index?: number;
}

export const KPICard = memo(function KPICard({ data, index = 0 }: KPICardProps) {
  const Icon = useMemo(() => iconMap[data.icon] || TrendingUp, [data.icon]);
  const colors = useMemo(() => colorMap[data.color] || colorMap.indigo, [data.color]);

  return (
    <Card
      hover
      className="animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {data.title}
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
            {data.value}
          </p>
          <div className="mt-2 flex items-center gap-1">
            {data.changeType === "increase" ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span
              className={cn(
                "text-sm font-medium",
                data.changeType === "increase"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              )}
            >
              {data.change > 0 ? "+" : ""}
              {data.change}%
            </span>
            <span className="text-xs text-gray-400">vs last period</span>
          </div>
        </div>
        <div className={cn("rounded-xl p-3", colors.bg)}>
          <Icon className={cn("h-6 w-6", colors.text)} />
        </div>
      </div>
    </Card>
  );
});

export const KPICardSkeleton = memo(function KPICardSkeleton() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-12 w-12 rounded-xl" />
      </div>
    </Card>
  );
});

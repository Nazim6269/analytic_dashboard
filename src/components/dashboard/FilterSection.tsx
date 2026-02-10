"use client";

import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/store/useDashboardStore";
import { DATE_RANGES, USER_TYPES } from "@/lib/constants";
import { Select } from "@/components/ui/Select";

export function FilterSection() {
  const { filters, setFilters } = useDashboardStore();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Date Range Tabs */}
      <div className="flex rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800">
        {DATE_RANGES.map((range) => (
          <button
            key={range.value}
            onClick={() => setFilters({ dateRange: range.value })}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-all",
              filters.dateRange === range.value
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            )}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* User Type Select */}
      <Select
        label="User Type"
        options={USER_TYPES}
        value={filters.userType}
        onChange={(value) =>
          setFilters({
            userType: value as "all" | "free" | "premium" | "enterprise",
          })
        }
      />
    </div>
  );
}

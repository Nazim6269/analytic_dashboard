import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-900 lg:p-6">
      {/* Filter skeleton */}
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-40" />
      </div>

      {/* KPI grid skeleton */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-12 w-12 rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts grid skeleton */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
          >
            <Skeleton className="mb-4 h-4 w-32" />
            <Skeleton className="h-[300px] w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

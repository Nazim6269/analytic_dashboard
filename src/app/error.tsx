"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-red-200 bg-white p-8 shadow-sm dark:border-red-900/30 dark:bg-gray-800">
        <AlertTriangle className="h-12 w-12 text-red-500" />
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Something went wrong!
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>
        <button
          onClick={reset}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

import { DashboardData, DashboardFilters } from "@/types";
import { API_BASE_URL } from "./constants";

export async function fetchDashboard(
  filters: DashboardFilters
): Promise<DashboardData> {
  const params = new URLSearchParams({
    dateRange: filters.dateRange,
    userType: filters.userType,
  });

  const response = await fetch(
    `${API_BASE_URL}/dashboard?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch dashboard data: ${response.statusText}`);
  }

  return response.json();
}

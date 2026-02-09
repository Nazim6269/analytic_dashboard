import { create } from "zustand";
import { DashboardData, DashboardFilters } from "@/types";
import { API_BASE_URL } from "@/lib/constants";

interface DashboardStore {
  data: DashboardData | null;
  filters: DashboardFilters;
  loading: boolean;
  error: string | null;
  setFilters: (filters: Partial<DashboardFilters>) => void;
  setData: (data: DashboardData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchDashboardData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  data: null,
  filters: {
    dateRange: "12m",
    userType: "all",
  },
  loading: false,
  error: null,

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
    get().fetchDashboardData();
  },

  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  fetchDashboardData: async () => {
    const { filters } = get();
    set({ loading: true, error: null });

    try {
      const params = new URLSearchParams({
        dateRange: filters.dateRange,
        userType: filters.userType,
      });

      const response = await fetch(
        `${API_BASE_URL}/dashboard?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data: DashboardData = await response.json();
      set({ data, loading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        loading: false,
      });
    }
  },
}));

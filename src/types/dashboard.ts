export interface KPIData {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  icon: string;
  color: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  target: number;
}

export interface OrderDataPoint {
  month: string;
  orders: number;
  returns: number;
}

export interface UserDistribution {
  name: string;
  value: number;
  color: string;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
  color: string;
}

export interface DashboardData {
  kpis: KPIData[];
  revenue: RevenueDataPoint[];
  orders: OrderDataPoint[];
  userDistribution: UserDistribution[];
  trafficSources: TrafficSource[];
}

export interface DashboardFilters {
  dateRange: "7d" | "30d" | "12m";
  userType: "all" | "free" | "premium" | "enterprise";
}

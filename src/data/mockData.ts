import { DashboardData } from "@/types";

const fullYearRevenue = [
  { month: "Jan", revenue: 65000, target: 60000 },
  { month: "Feb", revenue: 59000, target: 62000 },
  { month: "Mar", revenue: 80000, target: 65000 },
  { month: "Apr", revenue: 81000, target: 68000 },
  { month: "May", revenue: 56000, target: 70000 },
  { month: "Jun", revenue: 55000, target: 72000 },
  { month: "Jul", revenue: 40000, target: 74000 },
  { month: "Aug", revenue: 70000, target: 76000 },
  { month: "Sep", revenue: 92000, target: 78000 },
  { month: "Oct", revenue: 88000, target: 80000 },
  { month: "Nov", revenue: 95000, target: 82000 },
  { month: "Dec", revenue: 110000, target: 85000 },
];

const fullYearOrders = [
  { month: "Jan", orders: 1200, returns: 80 },
  { month: "Feb", orders: 1100, returns: 65 },
  { month: "Mar", orders: 1400, returns: 90 },
  { month: "Apr", orders: 1350, returns: 85 },
  { month: "May", orders: 1000, returns: 70 },
  { month: "Jun", orders: 980, returns: 60 },
  { month: "Jul", orders: 850, returns: 55 },
  { month: "Aug", orders: 1150, returns: 75 },
  { month: "Sep", orders: 1500, returns: 95 },
  { month: "Oct", orders: 1450, returns: 88 },
  { month: "Nov", orders: 1550, returns: 92 },
  { month: "Dec", orders: 1800, returns: 110 },
];

const userDistribution = [
  { name: "Free", value: 620, color: "#4f46e5" },
  { name: "Premium", value: 425, color: "#06b6d4" },
  { name: "Enterprise", value: 200, color: "#10b981" },
];

const trafficSources = [
  { source: "Organic", visitors: 45000, percentage: 45, color: "#4f46e5" },
  { source: "Paid", visitors: 25000, percentage: 25, color: "#06b6d4" },
  { source: "Social", visitors: 20000, percentage: 20, color: "#10b981" },
  { source: "Referral", visitors: 10000, percentage: 10, color: "#f59e0b" },
];

export const defaultDashboardData: DashboardData = {
  kpis: [
    {
      title: "Total Revenue",
      value: "$845,230",
      change: 12.5,
      changeType: "increase",
      icon: "DollarSign",
      color: "indigo",
    },
    {
      title: "Total Users",
      value: "24,521",
      change: 8.2,
      changeType: "increase",
      icon: "Users",
      color: "blue",
    },
    {
      title: "Total Orders",
      value: "12,845",
      change: -3.1,
      changeType: "decrease",
      icon: "ShoppingCart",
      color: "emerald",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: 1.8,
      changeType: "increase",
      icon: "TrendingUp",
      color: "amber",
    },
  ],
  revenue: fullYearRevenue,
  orders: fullYearOrders,
  userDistribution,
  trafficSources,
};

export function getFilteredData(
  dateRange: string,
  userType: string
): DashboardData {
  let revenue = [...fullYearRevenue];
  let orders = [...fullYearOrders];
  let kpis = [...defaultDashboardData.kpis];

  // Filter by date range
  if (dateRange === "7d") {
    revenue = fullYearRevenue.slice(-1);
    orders = fullYearOrders.slice(-1);
    kpis = [
      {
        title: "Total Revenue",
        value: "$28,450",
        change: 5.2,
        changeType: "increase",
        icon: "DollarSign",
        color: "indigo",
      },
      {
        title: "Total Users",
        value: "1,842",
        change: 3.1,
        changeType: "increase",
        icon: "Users",
        color: "blue",
      },
      {
        title: "Total Orders",
        value: "892",
        change: -1.5,
        changeType: "decrease",
        icon: "ShoppingCart",
        color: "emerald",
      },
      {
        title: "Conversion Rate",
        value: "2.89%",
        change: 0.4,
        changeType: "increase",
        icon: "TrendingUp",
        color: "amber",
      },
    ];
  } else if (dateRange === "30d") {
    revenue = fullYearRevenue.slice(-3);
    orders = fullYearOrders.slice(-3);
    kpis = [
      {
        title: "Total Revenue",
        value: "$293,000",
        change: 9.8,
        changeType: "increase",
        icon: "DollarSign",
        color: "indigo",
      },
      {
        title: "Total Users",
        value: "8,234",
        change: 6.5,
        changeType: "increase",
        icon: "Users",
        color: "blue",
      },
      {
        title: "Total Orders",
        value: "4,800",
        change: 2.3,
        changeType: "increase",
        icon: "ShoppingCart",
        color: "emerald",
      },
      {
        title: "Conversion Rate",
        value: "3.12%",
        change: 1.2,
        changeType: "increase",
        icon: "TrendingUp",
        color: "amber",
      },
    ];
  }

  // Filter by user type
  if (userType !== "all") {
    const multipliers: Record<string, number> = {
      free: 0.45,
      premium: 0.35,
      enterprise: 0.2,
    };
    const multiplier = multipliers[userType] || 1;

    revenue = revenue.map((r) => ({
      ...r,
      revenue: Math.round(r.revenue * multiplier),
      target: Math.round(r.target * multiplier),
    }));

    orders = orders.map((o) => ({
      ...o,
      orders: Math.round(o.orders * multiplier),
      returns: Math.round(o.returns * multiplier),
    }));

    const revenueValue = revenue.reduce((sum, r) => sum + r.revenue, 0);
    kpis = kpis.map((kpi) => {
      if (kpi.title === "Total Revenue") {
        return {
          ...kpi,
          value: `$${(revenueValue / 1000).toFixed(0)}K`,
        };
      }
      return kpi;
    });
  }

  return {
    kpis,
    revenue,
    orders,
    userDistribution,
    trafficSources,
  };
}

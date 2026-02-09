export const COLORS = {
  primary: "#4f46e5",
  primaryLight: "#818cf8",
  secondary: "#3b82f6",
  success: "#10b981",
  danger: "#ef4444",
  warning: "#f59e0b",
  info: "#06b6d4",
  chart: {
    blue: "#4f46e5",
    cyan: "#06b6d4",
    green: "#10b981",
    orange: "#f59e0b",
    pink: "#ec4899",
    purple: "#8b5cf6",
  },
} as const;

export const API_BASE_URL = "/api";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const DATE_RANGES = [
  { label: "7 Days", value: "7d" as const },
  { label: "30 Days", value: "30d" as const },
  { label: "12 Months", value: "12m" as const },
];

export const USER_TYPES = [
  { label: "All Users", value: "all" as const },
  { label: "Free", value: "free" as const },
  { label: "Premium", value: "premium" as const },
  { label: "Enterprise", value: "enterprise" as const },
];

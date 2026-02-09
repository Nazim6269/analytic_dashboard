import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "danger" | "warning" | "info" | "default";
  className?: string;
}

const variantStyles = {
  success:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  warning:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  default:
    "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

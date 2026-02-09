"use client";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import {
  BarChart3,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Users, label: "Users", href: "#" },
  { icon: ShoppingCart, label: "Orders", href: "#" },
  { icon: Package, label: "Products", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export function Sidebar() {
  const { isCollapsed, toggleCollapse } = useSidebarStore();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 hidden h-screen border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 lg:block",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
        {!isCollapsed && (
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Analytics
          </span>
        )}
        <button
          onClick={toggleCollapse}
          className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4 space-y-1 px-3">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              item.active
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon
              className={cn(
                "h-5 w-5 shrink-0",
                item.active
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"
              )}
            />
            {!isCollapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}

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
  X,
} from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Users, label: "Users", href: "#" },
  { icon: ShoppingCart, label: "Orders", href: "#" },
  { icon: Package, label: "Products", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export function MobileMenu() {
  const { isOpen, setOpen } = useSidebarStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in menu */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-72 transform border-r border-gray-200 bg-white transition-transform duration-300 dark:border-gray-700 dark:bg-gray-800 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Analytics
          </span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-1 px-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                item.active
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  item.active
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-400 dark:text-gray-500"
                )}
              />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

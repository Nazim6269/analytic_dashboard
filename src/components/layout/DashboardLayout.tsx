"use client";

import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { useSidebarStore } from "@/store/useSidebarStore";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <MobileMenu />

      <div
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "lg:ml-20" : "lg:ml-64"
        )}
      >
        <Header />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}

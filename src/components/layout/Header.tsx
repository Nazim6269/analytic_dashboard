"use client";

import { Bell, Menu, LogOut, Settings, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DropdownMenu, DropdownItem } from "@/components/ui/DropdownMenu";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Badge } from "@/components/ui/Badge";

const notifications = [
  { id: 1, text: "New user registered", time: "2 min ago" },
  { id: 2, text: "Revenue target achieved", time: "1 hour ago" },
  { id: 3, text: "Server load high", time: "3 hours ago" },
];

export function Header() {
  const { toggle } = useSidebarStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80 lg:px-6">
      {/* Left: Mobile menu button + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          Dashboard
        </h1>
      </div>

      {/* Right: Theme toggle + Notifications + User */}
      <div className="flex items-center gap-2">
        <ThemeToggle />

        {/* Notifications */}
        <DropdownMenu
          trigger={
            <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
          }
        >
          <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Notifications
            </p>
          </div>
          {notifications.map((n) => (
            <div
              key={n.id}
              className="px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {n.text}
              </p>
              <p className="text-xs text-gray-400">{n.time}</p>
            </div>
          ))}
        </DropdownMenu>

        {/* User Dropdown */}
        <DropdownMenu
          trigger={
            <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <User className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Admin
                </p>
                <Badge variant="info" className="text-[10px]">
                  Pro
                </Badge>
              </div>
            </div>
          }
        >
          <DropdownItem icon={<User className="h-4 w-4" />}>
            Profile
          </DropdownItem>
          <DropdownItem icon={<Settings className="h-4 w-4" />}>
            Settings
          </DropdownItem>
          <div className="border-t border-gray-200 dark:border-gray-700" />
          <DropdownItem
            icon={<LogOut className="h-4 w-4" />}
            className="text-red-600 dark:text-red-400"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </div>
    </header>
  );
}

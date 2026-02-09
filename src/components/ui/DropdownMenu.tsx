"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  className?: string;
}

export function DropdownMenu({
  trigger,
  children,
  align = "right",
  className,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute top-full z-50 mt-2 min-w-[200px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800",
            align === "right" ? "right-0" : "left-0",
            className
          )}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export function DropdownItem({
  children,
  onClick,
  className,
  icon,
}: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        className
      )}
    >
      {icon && <span className="h-4 w-4">{icon}</span>}
      {children}
    </button>
  );
}

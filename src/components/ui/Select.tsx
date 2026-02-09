import { cn } from "@/lib/utils";
import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

export function Select({
  label,
  options,
  value,
  onChange,
  className,
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      {label && (
        <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 text-sm text-gray-700 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}

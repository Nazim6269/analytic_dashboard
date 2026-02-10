# Analytics Dashboard

A production-ready Admin Analytics Dashboard built with Next.js, TypeScript, Tailwind CSS, Recharts, and Zustand. Features real-time data visualization, responsive design, dark mode, and interactive filtering.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4?logo=tailwindcss)

## Features

- **4 KPI Cards** - Revenue, Users, Orders, Conversion Rate with trend indicators
- **4 Interactive Charts** - Revenue line chart, Orders bar chart, User distribution donut chart, Traffic sources horizontal bar chart
- **Dark/Light Theme** - System preference detection with manual toggle
- **Responsive Design** - Mobile, tablet, and desktop layouts
- **Collapsible Sidebar** - Full navigation with icon-only collapsed mode
- **Data Filtering** - Date range (7 days, 30 days, 12 months) and user type filters
- **Loading States** - Skeleton placeholders for all components
- **Error Handling** - Error boundary with retry functionality
- **Animations** - Fade-in, slide-up entrance animations with staggered delays

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 |
| Charts | Recharts 3 |
| State Management | Zustand 5 |
| Icons | Lucide React |
| Font | Inter (next/font/google) |
| Utilities | clsx + tailwind-merge |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Nazim6269/analytic_dashboard.git

# Navigate to the project
cd analytics-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|--------|------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:server` | Start JSON Server on port 3001 |
| `npm run dev:all` | Start both Next.js and JSON Server |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── dashboard/
│   │       └── route.ts        # Dashboard API endpoint
│   ├── error.tsx               # Error boundary
│   ├── globals.css             # Global styles & theme variables
│   ├── layout.tsx              # Root layout with Inter font
│   ├── loading.tsx             # Loading skeleton page
│   └── page.tsx                # Main dashboard page
├── components/
│   ├── dashboard/
│   │   ├── ChartSection.tsx    # Chart grid with dynamic imports
│   │   ├── FilterSection.tsx   # Date range & user type filters
│   │   ├── KPICard.tsx         # Individual KPI card
│   │   ├── KPISection.tsx      # KPI grid layout
│   │   ├── OrdersChart.tsx     # Orders bar chart
│   │   ├── RevenueChart.tsx    # Revenue line chart
│   │   ├── TrafficSourceChart.tsx  # Traffic horizontal bar chart
│   │   └── UserDistributionChart.tsx # User donut chart
│   ├── layout/
│   │   ├── DashboardLayout.tsx # Main layout orchestrator
│   │   ├── Header.tsx          # Top bar with notifications
│   │   ├── MobileMenu.tsx      # Mobile slide-in navigation
│   │   └── Sidebar.tsx         # Collapsible sidebar
│   └── ui/
│       ├── Badge.tsx           # Status badges
│       ├── Button.tsx          # Button with variants
│       ├── Card.tsx            # Card container
│       ├── DropdownMenu.tsx    # Dropdown with outside-click
│       ├── ErrorState.tsx      # Error display with retry
│       ├── Select.tsx          # Styled select input
│       ├── Skeleton.tsx        # Loading placeholder
│       └── ThemeToggle.tsx     # Dark/light mode toggle
├── data/
│   └── mockData.ts            # Mock data with filter logic
├── hooks/
│   ├── useMediaQuery.ts       # Responsive breakpoint hook
│   └── useTheme.ts            # Theme initialization hook
├── lib/
│   ├── api.ts                 # Fetch wrapper
│   ├── constants.ts           # Colors, breakpoints, config
│   └── utils.ts               # cn(), formatCurrency(), etc.
├── store/
│   ├── useDashboardStore.ts   # Dashboard state & actions
│   ├── useSidebarStore.ts     # Sidebar open/collapse state
│   └── useThemeStore.ts       # Theme state with localStorage
└── types/
    ├── dashboard.ts           # TypeScript interfaces
    └── index.ts               # Re-exports
```

## Architecture Decisions

### State Management - Zustand
Chose Zustand over Redux for its minimal boilerplate, hooks-first API, and built-in TypeScript support. Each domain has its own store (dashboard, theme, sidebar) for separation of concerns.

### Data Flow
```
Filter change → Zustand store → API route → Mock data (filtered) → Store update → Re-render
```

### Charts - Recharts
Selected Recharts for its React-native declarative API, built-in responsive containers, and extensive chart type support. Charts are dynamically imported with `next/dynamic` to reduce initial bundle size.

### Theme System
- Zustand store manages theme state with localStorage persistence
- `.dark` class toggled on `<html>` element
- CSS custom properties in `globals.css` switch with `.dark` selector
- Components use Tailwind `dark:` prefix for dark mode styles

### Responsive Strategy
- **Mobile (<640px)**: Single column, hamburger menu, no sidebar
- **Tablet (640-1024px)**: 2-column grids, no sidebar
- **Desktop (>1024px)**: Full/collapsed sidebar, 4-column KPI grid, 2x2 chart grid

### Performance Optimizations
- `React.memo` on KPI cards to prevent unnecessary re-renders
- `useMemo` and `useCallback` for computed values and handlers
- Zustand selectors for granular subscriptions
- Dynamic imports (`next/dynamic`) for chart components with SSR disabled
- Skeleton loading states to prevent layout shift

## Deployment

The app is deployed on Vercel. To deploy your own:

1. Push to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with default Next.js settings

## License

MIT

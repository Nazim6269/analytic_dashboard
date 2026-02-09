import { NextRequest, NextResponse } from "next/server";
import { getFilteredData } from "@/data/mockData";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const dateRange = searchParams.get("dateRange") || "12m";
    const userType = searchParams.get("userType") || "all";

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const data = getFilteredData(dateRange, userType);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}

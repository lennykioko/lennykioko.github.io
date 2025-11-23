import { NextRequest, NextResponse } from "next/server";
import { googleSheetsService } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, resource, downloadUrl, timestamp } = body;

    // Validate required fields
    if (!email || !resource || !downloadUrl || !timestamp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save to Google Sheets
    const success = await googleSheetsService.saveDownloadData({
      email,
      resource,
      downloadUrl,
      timestamp,
    });

    if (success) {
      return NextResponse.json(
        { message: "Download data saved successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to save download data" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

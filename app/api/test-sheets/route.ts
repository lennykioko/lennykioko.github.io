import { NextResponse } from "next/server";
import { googleSheetsService } from "@/lib/googleSheets";

export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME;

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: "Missing GOOGLE_SHEETS_SHEET_ID environment variable" },
        { status: 500 }
      );
    }

    // First, test basic access to the spreadsheet
    console.log("Testing Google Sheets access...");
    console.log("Sheet ID:", spreadsheetId);
    console.log("Sheet Name:", sheetName);

    // Test the Google Sheets connection with a sample entry
    const testData = {
      email: "test@example.com",
      resource: "Test Resource",
      downloadUrl: "https://example.com/test",
      timestamp: new Date().toISOString(),
    };

    const success = await googleSheetsService.saveDownloadData(testData);

    if (success) {
      return NextResponse.json(
        {
          message: "Google Sheets integration test successful!",
          spreadsheetId,
          sheetName,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          error: "Google Sheets integration test failed",
          spreadsheetId,
          sheetName,
          troubleshooting: {
            checkAccess: "Make sure the service account has Editor access",
            checkSheetName: "Verify the sheet name exists exactly as specified",
            checkSharing:
              "Ensure the sheet is shared with: " +
              process.env.GOOGLE_CLIENT_EMAIL,
          },
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Test API Error:", error);
    return NextResponse.json(
      {
        error: "Test failed with error",
        details: error?.message || error,
        troubleshooting: {
          step1:
            "Check if the Google Sheet exists with ID: " +
            process.env.GOOGLE_SHEETS_SHEET_ID,
          step2:
            "Verify sheet name is exactly: " +
            process.env.GOOGLE_SHEETS_SHEET_NAME,
          step3:
            "Confirm service account has Editor access: " +
            process.env.GOOGLE_CLIENT_EMAIL,
          step4: "Make sure the sheet is shared with the service account email",
        },
      },
      { status: 500 }
    );
  }
}

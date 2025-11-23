import { google } from "googleapis";

interface DownloadData {
  email: string;
  resource: string;
  downloadUrl: string;
  timestamp: string;
}

export class GoogleSheetsService {
  private sheets;
  private auth;

  constructor() {
    // Initialize auth with service account credentials
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    this.sheets = google.sheets({ version: "v4", auth: this.auth });
  }

  async saveDownloadData(data: DownloadData): Promise<boolean> {
    try {
      const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;
      const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

      if (!spreadsheetId) {
        console.error("Missing GOOGLE_SHEETS_SHEET_ID environment variable");
        return false;
      }

      // First, verify the sheet exists and we have access
      const sheetExists = await this.verifySheetAccess(
        spreadsheetId,
        sheetName
      );
      if (!sheetExists) {
        console.error(
          `Sheet "${sheetName}" not found or no access. Available sheets:`,
          await this.listSheets(spreadsheetId)
        );
        return false;
      }

      // Check if headers exist, if not add them
      await this.ensureHeaders(spreadsheetId, sheetName);

      // Add the new row using proper A1 notation
      const values = [
        [
          new Date(data.timestamp).toLocaleString(),
          data.email,
          data.resource,
          data.downloadUrl,
        ],
      ];

      const result = await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:D`, // Use proper A1 notation
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS", // Ensure new rows are inserted
        requestBody: {
          values,
        },
      });

      console.log(
        `${result.data.updates?.updatedRows} row(s) added to Google Sheets`
      );
      return true;
    } catch (error: any) {
      console.error("Error saving to Google Sheets:", error?.message || error);
      if (error?.response?.status === 403) {
        console.error(
          "Permission denied. Make sure the service account has Editor access to the sheet."
        );
      } else if (error?.response?.status === 404) {
        console.error(
          "Spreadsheet or sheet not found. Check the SHEET_ID and sheet name."
        );
      }
      return false;
    }
  }

  private async ensureHeaders(spreadsheetId: string, sheetName: string) {
    try {
      // Check if the sheet has content
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A1:D1`,
      });

      // If no data or first row is not headers, add headers
      if (!response.data.values || response.data.values.length === 0) {
        await this.sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${sheetName}!A1:D1`,
          valueInputOption: "RAW",
          requestBody: {
            values: [["Timestamp", "Email", "Resource", "Download URL"]],
          },
        });
      }
    } catch (error: any) {
      console.error("Error ensuring headers:", error?.message || error);
    }
  }

  private async verifySheetAccess(
    spreadsheetId: string,
    sheetName: string
  ): Promise<boolean> {
    try {
      // Try to get basic sheet info first
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId,
      });

      // Check if the sheet name exists
      const sheetExists = response.data.sheets?.some(
        (sheet) => sheet.properties?.title === sheetName
      );

      return !!sheetExists;
    } catch (error: any) {
      console.error("Error verifying sheet access:", error?.message || error);
      return false;
    }
  }

  private async listSheets(spreadsheetId: string): Promise<string[]> {
    try {
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId,
      });

      return (
        response.data.sheets?.map(
          (sheet) => sheet.properties?.title || "Unknown"
        ) || []
      );
    } catch (error: any) {
      console.error("Error listing sheets:", error?.message || error);
      return [];
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();

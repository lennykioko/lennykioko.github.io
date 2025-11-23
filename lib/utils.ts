import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Check if the current domain supports downloads
 * @returns true if downloads are supported on current domain
 */
export function isDownloadSupportedDomain(): boolean {
  if (typeof window === "undefined") return true; // SSR fallback

  const hostname = window.location.hostname;
  // Support downloads only on the main domain
  return (
    hostname === "lennykioko.com" ||
    hostname === "lennykioko.org" ||
    hostname === "localhost"
  );
}

/**
 * Show a simple alert asking users to visit lennykioko.com for downloads
 * @param onConfirm - Optional callback when user clicks OK
 */
export function showDownloadRedirectAlert(onConfirm?: () => void): void {
  if (typeof window === "undefined") return;
  
  const userConfirmed = window.confirm(
    "Downloads are only available at lennykioko.com\n\nThis GitHub Pages site doesn't support downloads. Would you like to visit lennykioko.com now?"
  );
  
  if (userConfirmed && onConfirm) {
    onConfirm();
  }
}

export function getCalendlyUrl(): string | null {
  const configuredUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  if (!configuredUrl) {
    return null;
  }

  try {
    const url = new URL(configuredUrl);
    const isCalendlyHost =
      url.hostname === "calendly.com" || url.hostname.endsWith(".calendly.com");

    if (url.protocol !== "https:" || !isCalendlyHost || url.pathname === "/") {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

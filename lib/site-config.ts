const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = configuredSiteUrl?.replace(/\/$/, "") || "http://localhost:3000";
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH)?.replace(/\/$/, "") ?? "";
export const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

function isExternalUrl(path: string) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path);
}

/** Prefixes internal browser links for project-page hosting while leaving hashes and external URLs unchanged. */
export function sitePath(path: string) {
  if (isExternalUrl(path) || !basePath || !path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

/** Builds an absolute URL beneath the configured site root, including an optional project-page path. */
export function absoluteSiteUrl(path: string) {
  const relativePath = path === "/" ? "" : path.replace(/^\/+/, "");
  return new URL(relativePath, `${siteUrl}/`).toString();
}

export const robotsMetadata = isPreview
  ? { index: false, follow: false, googleBot: { index: false, follow: false } }
  : { index: true, follow: true, googleBot: { index: true, follow: true } };

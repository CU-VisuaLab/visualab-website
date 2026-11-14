/** Resolve site-local paths for GitHub Pages previews and the final custom domain. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function siteUrl(path: string): string {
  if (!path || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}/${path.replace(/^\/+/, '')}`;
}

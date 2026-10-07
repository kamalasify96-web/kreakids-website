// When the site is hosted under a sub-path (GitHub Pages: /kreakids-website) every absolute
// file URL needs that prefix. On a root domain NEXT_PUBLIC_BASE_PATH is empty and nothing changes.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  if (!path || !path.startsWith("/") || (BASE_PATH && path.startsWith(`${BASE_PATH}/`))) return path;
  return `${BASE_PATH}${path}`;
}

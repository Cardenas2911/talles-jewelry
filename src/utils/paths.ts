
/**
 * Resolves a path relative to the base URL of the site.
 * Essential for GitHub Pages deployment where the site is served from a subdirectory.
 * 
 * @param path The path to resolve (e.g., "/images/logo.png")
 * @returns The resolved path (e.g., "/talles-jewelry/images/logo.png")
 */
export const resolvePath = (path: string) => {
    const base = import.meta.env.BASE_URL;
    const cleanBase = base === '/' ? '' : base.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    return `${cleanBase}${cleanPath}`;
};

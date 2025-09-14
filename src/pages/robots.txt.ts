 import type { APIRoute } from 'astro';

    const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /
Sitemap: ${sitemapURL.href}
`;

    export const GET: APIRoute = ({ site }) => {
      // Ensure 'site' is defined in your astro.config.mjs
      if (!site) {
        throw new Error("Astro 'site' configuration is required to generate robots.txt dynamically.");
      }
      
      const sitemapURL = new URL('/sitemap-index.xml', site); // Adjust sitemap-index.xml if your sitemap name is different

      return new Response(getRobotsTxt(sitemapURL), {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      });
    };
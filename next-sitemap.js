/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.baseURL || 'https://realty-nsk.vercel.app/',
  changefreq: 'daily',
  priority: 0.8,
  sitemapBaseFileName: 'sitemap',
  alternateRefs: [
    {
      href: 'https://realty-nsk.vercel.app/',
      hreflang: 'ru',
    },
  ],
  sitemapSize: 7000,
  autoLastmod: true,
  exclude: [],
  sourceDir: '.next',
  outDir: 'public',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
    includeNonIndexSitemaps: false,
  },
}

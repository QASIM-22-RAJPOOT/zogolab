import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");

const parseEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) return {};

  return fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return acc;

      const separatorIndex = trimmed.indexOf("=");
      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      acc[key] = value;
      return acc;
    }, {});
};

const localEnv = {
  ...parseEnvFile(path.join(root, ".env")),
  ...parseEnvFile(path.join(root, ".env.production")),
};

const rawSiteUrl =
  process.env.VITE_SITE_URL ||
  localEnv.VITE_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "";

const normalizeUrl = (value) => {
  if (!value) return "";
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
};

const siteUrl = normalizeUrl(rawSiteUrl);
const sitemapPath = path.join(publicDir, "sitemap.xml");
const robotsPath = path.join(publicDir, "robots.txt");

fs.mkdirSync(publicDir, { recursive: true });

if (!siteUrl) {
  fs.writeFileSync(robotsPath, "User-agent: *\nAllow: /\n", "utf8");

  if (fs.existsSync(sitemapPath)) fs.unlinkSync(sitemapPath);

  console.warn(
    "[SEO] VITE_SITE_URL is not set. robots.txt was generated, but sitemap.xml was skipped. Set VITE_SITE_URL to your final production URL.",
  );
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/privacy-policy", priority: "0.3" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(sitemapPath, sitemap, "utf8");
fs.writeFileSync(robotsPath, robots, "utf8");
console.log(`[SEO] Generated sitemap.xml and robots.txt for ${siteUrl}`);

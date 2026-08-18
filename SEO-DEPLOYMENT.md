# Zogo Lab SEO Deployment Checklist

## 1. Set the production URL

Before the production build, set:

```env
VITE_SITE_URL=https://your-final-domain.com
```

On Vercel, add it in **Project Settings → Environment Variables** for Production. If it is not set, the build script can use Vercel's production project URL, but setting your final custom domain is preferred.

## 2. Build

```bash
npm run build
```

The prebuild SEO script automatically creates:

- `public/robots.txt`
- `public/sitemap.xml`

## 3. Verify after deployment

Open these URLs in your browser:

- `https://your-final-domain.com/robots.txt`
- `https://your-final-domain.com/sitemap.xml`

Also view page source and confirm the title and description are present.

## 4. Google Search Console

1. Add the final domain/property.
2. Verify ownership.
3. Submit `/sitemap.xml` in the Sitemaps section.
4. Inspect the homepage URL and choose **Request indexing**.
5. Repeat for `/privacy-policy` if you want that page indexed.

## 5. Important

Indexing makes a page eligible to appear in Google. It does not guarantee a top ranking. Rankings also depend on useful content, competition, links/mentions, performance, trust and ongoing updates.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HOME_DESCRIPTION =
  "Zogo Lab is a Lahore-based creative technology studio for game development, apps, websites, UI/UX, software solutions and 3D experiences.";

const ROUTE_SEO = {
  "/": {
    title: "Zogo Lab | Game, App & Web Development Studio",
    description: HOME_DESCRIPTION,
    type: "website",
  },
  "/privacy-policy": {
    title: "Privacy Policy & Terms | Zogo Lab",
    description:
      "Read the Zogo Lab Privacy Policy and Terms of Service for our games, websites and online services.",
    type: "article",
  },
};

const ensureMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const ensureCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const ensureStructuredData = (data) => {
  const id = "zogo-lab-structured-data";
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const normalizeSiteUrl = (url) => url?.trim().replace(/\/+$/, "");

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = ROUTE_SEO[pathname] || {
      title: "Page Not Found | Zogo Lab",
      description: HOME_DESCRIPTION,
      type: "website",
      noIndex: true,
    };

    const configuredSiteUrl = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);
    const siteUrl = configuredSiteUrl || window.location.origin;
    const canonicalPath = pathname === "/" ? "/" : pathname;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    const socialImageUrl = `${siteUrl}/og-image.jpg`;

    document.title = config.title;

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: config.description,
    });

    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: config.noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    ensureMeta('meta[name="googlebot"]', {
      name: "googlebot",
      content: config.noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.description,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: config.type,
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: socialImageUrl,
    });
    ensureMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "Zogo Lab creative technology studio",
    });
    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Zogo Lab",
    });

    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: config.title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: config.description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: socialImageUrl,
    });

    ensureCanonical(canonicalUrl);

    if (pathname === "/") {
      ensureStructuredData({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "Zogo Lab",
            url: `${siteUrl}/`,
            email: "mailto:Zogolabs@gmail.com",
            telephone: "+92 371 6519006",
            description: HOME_DESCRIPTION,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lahore",
              addressCountry: "PK",
            },
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: "Zogo Lab",
            publisher: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        ],
      });
    } else {
      ensureStructuredData({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: config.title,
        description: config.description,
        url: canonicalUrl,
        isPartOf: {
          "@type": "WebSite",
          name: "Zogo Lab",
          url: `${siteUrl}/`,
        },
      });
    }
  }, [pathname]);

  return null;
}

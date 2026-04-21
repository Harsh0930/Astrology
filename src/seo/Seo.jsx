import { useEffect } from "react";
import { absoluteUrl, siteMeta } from "./siteMeta";
import { localizePath } from "../i18n/config";

function upsertMeta(selector, attributes) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("link");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
}

function upsertScript(id, payload) {
  let tag = document.head.querySelector(`#${id}`);
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = id;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(payload);
}

export function Seo({
  title,
  description,
  path = "/",
  basePath = "/",
  lang = "en",
  keywords = [],
  structuredData = [],
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteMeta.siteName}` : siteMeta.defaultTitle;
    const fullDescription = description ?? siteMeta.defaultDescription;
    const url = absoluteUrl(path);

    document.title = fullTitle;
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";

    upsertMeta('meta[name="description"]', { name: "description", content: fullDescription });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords.join(", ") });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    upsertMeta('meta[name="author"]', { name: "author", content: siteMeta.siteName });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: fullDescription });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteMeta.siteName });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: siteMeta.defaultImage });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: fullDescription });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: siteMeta.defaultImage });
    upsertMeta('meta[name="geo.region"]', { name: "geo.region", content: `${siteMeta.country}-${siteMeta.addressRegion}` });
    upsertMeta('meta[name="geo.placename"]', { name: "geo.placename", content: `${siteMeta.addressLocality}, ${siteMeta.addressRegion}` });
    upsertMeta('meta[name="geo.position"]', {
      name: "geo.position",
      content: `${siteMeta.geo.latitude};${siteMeta.geo.longitude}`,
    });
    upsertMeta('meta[name="ICBM"]', {
      name: "ICBM",
      content: `${siteMeta.geo.latitude}, ${siteMeta.geo.longitude}`,
    });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: url });
    upsertLink('link[rel="alternate"][hreflang="en-IN"]', {
      rel: "alternate",
      hreflang: "en-IN",
      href: absoluteUrl(localizePath(basePath, "en")),
    });
    upsertLink('link[rel="alternate"][hreflang="hi-IN"]', {
      rel: "alternate",
      hreflang: "hi-IN",
      href: absoluteUrl(localizePath(basePath, "hi")),
    });
    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: absoluteUrl(localizePath(basePath, "en")),
    });

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteMeta.siteName,
      url: siteMeta.baseUrl,
      description: siteMeta.defaultDescription,
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
    };

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteMeta.siteName,
      url: siteMeta.baseUrl,
      telephone: siteMeta.phone,
      email: siteMeta.email,
      areaServed: "India",
      description: siteMeta.defaultDescription,
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteMeta.addressLocality,
        addressRegion: siteMeta.addressRegion,
        postalCode: siteMeta.postalCode,
        addressCountry: siteMeta.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteMeta.geo.latitude,
        longitude: siteMeta.geo.longitude,
      },
      sameAs: ["https://instagram.com", "https://wa.me/919876543210"],
    };

    upsertScript("schema-website", websiteSchema);
    upsertScript("schema-business", businessSchema);

    structuredData.forEach((item, index) => {
      upsertScript(`schema-page-${index}`, item);
    });
  }, [basePath, description, keywords, lang, path, structuredData, title]);

  return null;
}

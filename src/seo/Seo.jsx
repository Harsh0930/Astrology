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
    const fullTitle = title
      ? title.includes(siteMeta.siteName)
        ? title
        : `${title} | ${siteMeta.siteName}`
      : siteMeta.defaultTitle;
    const fullDescription = description ?? siteMeta.defaultDescription;
    const url = absoluteUrl(path);
    const pageLanguage = lang === "hi" ? "hi-IN" : "en-IN";
    const pageLocale = lang === "hi" ? "hi_IN" : "en_IN";
    const alternateLocale = lang === "hi" ? "en_IN" : "hi_IN";

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
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: pageLocale });
    upsertMeta('meta[property="og:locale:alternate"]', { property: "og:locale:alternate", content: alternateLocale });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: fullDescription });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: siteMeta.defaultImage });
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#08111F" });
    upsertMeta('meta[name="geo.region"]', { name: "geo.region", content: `${siteMeta.country}-${siteMeta.geoRegionCode}` });
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
      inLanguage: pageLanguage,
    };

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteMeta.siteName,
      url: siteMeta.baseUrl,
      image: siteMeta.defaultImage,
      telephone: siteMeta.phone,
      email: siteMeta.email,
      areaServed: [
        {
          "@type": "City",
          name: siteMeta.addressLocality,
        },
        {
          "@type": "AdministrativeArea",
          name: siteMeta.addressRegion,
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      description: siteMeta.defaultDescription,
      priceRange: siteMeta.priceRange,
      inLanguage: pageLanguage,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteMeta.streetAddress,
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
      openingHoursSpecification: siteMeta.openingHours.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.days.map((day) => `https://schema.org/${day}`),
        opens: slot.opens,
        closes: slot.closes,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteMeta.phone,
        email: siteMeta.email,
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: siteMeta.sameAs,
    };

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      url,
      description: fullDescription,
      inLanguage: pageLanguage,
      isPartOf: {
        "@type": "WebSite",
        name: siteMeta.siteName,
        url: siteMeta.baseUrl,
      },
      about: {
        "@type": "ProfessionalService",
        name: siteMeta.siteName,
      },
    };

    upsertScript("schema-website", websiteSchema);
    upsertScript("schema-business", businessSchema);
    upsertScript("schema-webpage", webPageSchema);

    document.head.querySelectorAll('script[id^="schema-page-"]').forEach((tag) => tag.remove());
    structuredData.forEach((item, index) => {
      upsertScript(`schema-page-${index}`, item);
    });
  }, [basePath, description, keywords, lang, path, structuredData, title]);

  return null;
}

const fallbackBaseUrl = "https://www.chintpurniblessings.com";
const baseUrl = (import.meta.env.VITE_SITE_URL || fallbackBaseUrl).replace(/\/+$/, "");

export const siteMeta = {
  siteName: "Chintpurni Blessings",
  defaultTitle: "Chintpurni Blessings - Spiritual Healing and Astrology in Sitarganj",
  defaultDescription:
    "Consult Chintpurni Blessings in Sitarganj, Uttarakhand for spiritual healing by Guru Chintpurni Kripa Das and Vedic astrology guidance by a dedicated astrologer.",
  baseUrl,
  defaultImage: `${baseUrl}/Chintpurni-blessings-seal.jpeg`,
  phone: "+91 9456165462",
  email: "chintpurniblessings@gmail.com",
  streetAddress: "Ram Ji Medical, near Turna Hospital",
  addressLocality: "Sitarganj",
  addressRegion: "Uttarakhand",
  geoRegionCode: "UT",
  postalCode: "262405",
  country: "IN",
  priceRange: "INR on request",
  sameAs: [
    "https://wa.me/919456165462",
    "https://instagram.com/chintpurniblessings",
    "https://www.facebook.com/share/1B8DV6119J/?mibextid=wwXIfr",
  ],
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  geo: {
    latitude: "28.9292",
    longitude: "79.7043",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteMeta.baseUrl).toString();
}

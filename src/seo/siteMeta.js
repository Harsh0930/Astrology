export const siteMeta = {
  siteName: "Chintapurni Blessings",
  defaultTitle: "Chintapurni Blessings - Spiritual Healing and Astrology in Sitarganj",
  defaultDescription:
    "Consult Chintapurni Blessings in Sitarganj, Uttarakhand for spiritual healing by Guru Ji and Vedic astrology guidance by Neeraj.",
  baseUrl: "https://rakeshbaba.com",
  defaultImage: "https://rakeshbaba.com/og-cover.jpg",
  phone: "+91 98765 43210",
  email: "support@rakeshbaba.com",
  addressLocality: "Sitarganj",
  addressRegion: "Uttarakhand",
  postalCode: "262405",
  country: "IN",
  geo: {
    latitude: "28.9292",
    longitude: "79.7043",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteMeta.baseUrl).toString();
}

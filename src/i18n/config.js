export const supportedLanguages = ["en", "hi"];

export function detectLanguageFromPathname(pathname = "/") {
  return pathname === "/hi" || pathname.startsWith("/hi/") ? "hi" : "en";
}

export function stripLanguagePrefix(pathname = "/") {
  if (pathname === "/hi") {
    return "/";
  }
  if (pathname.startsWith("/hi/")) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}

export function localizePath(pathname = "/", lang = "en") {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (lang === "hi") {
    return normalized === "/" ? "/hi" : `/hi${normalized}`;
  }
  return normalized;
}

export function switchLanguagePath(pathname = "/", nextLang = "en") {
  return localizePath(stripLanguagePrefix(pathname), nextLang);
}

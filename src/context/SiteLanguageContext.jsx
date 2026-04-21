import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { detectLanguageFromPathname, localizePath, stripLanguagePrefix, switchLanguagePath } from "../i18n/config";
import { getLocalizedContent } from "../data/siteContent";

const SiteLanguageContext = createContext(null);

export function SiteLanguageProvider({ children }) {
  const location = useLocation();
  const lang = detectLanguageFromPathname(location.pathname);
  const basePath = stripLanguagePrefix(location.pathname);
  const content = useMemo(() => getLocalizedContent(lang), [lang]);

  const value = useMemo(
    () => ({
      lang,
      isHindi: lang === "hi",
      content,
      basePath,
      localizePath: (path) => localizePath(path, lang),
      switchLanguagePath: (nextLang) => switchLanguagePath(location.pathname, nextLang),
    }),
    [basePath, content, lang, location.pathname]
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);
  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }
  return context;
}

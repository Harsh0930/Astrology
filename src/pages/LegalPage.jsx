import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function LegalPage({ pageKey }) {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.legalPages?.[pageKey];

  if (!page) {
    return null;
  }

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath(page.slug)}
        basePath={page.slug}
        lang={lang}
      />

      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />

      <Container maxWidth="lg" className="px-4 py-12 sm:py-18 lg:py-22">
        {page.meta?.length ? (
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {page.meta.map((item) => (
              <div key={item.label} className="glass-card content-box rounded-[26px]">
                <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{item.label}</Typography>
                <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{item.value}</Typography>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mb-6 glass-card content-box rounded-[30px]">
          <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{page.intro}</Typography>
        </div>

        <div className="grid gap-5">
          {page.sections.map((section) => (
            <section key={section.title} className="glass-card content-box rounded-[30px]">
              <Typography component="h2" variant="h4" className="mb-4 text-white">
                {section.title}
              </Typography>
              {section.paragraphs?.map((paragraph) => (
                <Typography key={paragraph} className="mb-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  {paragraph}
                </Typography>
              ))}
              {section.bullets?.length ? (
                <div className="grid gap-3">
                  {section.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                      {bullet}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="glass-card content-box rounded-[30px]">
            <Typography className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
              {content.common.quickLinks}
            </Typography>
            <div className="flex flex-col gap-3">
              <RouterLink className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath("/services")}>
                {content.common.exploreServices}
              </RouterLink>
              <RouterLink className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath("/horoscope")}>
                {content.common.viewHoroscope}
              </RouterLink>
              <RouterLink className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath("/contact")}>
                {content.common.bookConsultation}
              </RouterLink>
            </div>
          </div>

          <div className="astrology-shift-section astro-modern-border rounded-[30px] border border-white/10 p-5 sm:p-8">
            <Typography component="h2" variant="h4" className="text-white">
              {lang === "hi" ? "क्या आपको सीधे मार्गदर्शन की आवश्यकता है?" : "Need direct assistance?"}
            </Typography>
            <Typography className="mt-3 text-sm leading-7 text-[#d0d9ef] sm:text-base">
              {lang === "hi"
                ? "यदि आपका प्रश्न केवल नीति से आगे बढ़कर बुकिंग या सेवा चयन से जुड़ा है, तो टीम से सीधे संपर्क करें।"
                : "If your question goes beyond policy details and into booking or service selection, reach out to the team directly."}
            </Typography>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button component={RouterLink} to={localizePath("/contact")} variant="contained" color="secondary">
                {content.common.bookConsultation}
              </Button>
              <Button href={content.brand.whatsapp} variant="outlined" color="inherit">
                {content.common.askOnWhatsApp}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

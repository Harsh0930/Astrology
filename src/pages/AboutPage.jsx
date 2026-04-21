import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function AboutPage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.about;

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/about")}
        basePath="/about"
        lang={lang}
        keywords={page.seo.keywords}
      />
      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />
      <Container maxWidth="lg" className="px-4 py-12 sm:py-18 lg:py-22">
        <Typography className="mb-8 text-sm leading-7 text-[var(--text-soft)] sm:text-base">{page.sectionIntro}</Typography>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="stack-card glass-card content-box rounded-[32px]">
            <Typography className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
              {lang === "hi" ? "आशीर्वाद की उपस्थिति" : "Presence of Blessings"}
            </Typography>
            <Typography component="h2" variant="h4" className="mb-4 text-white">
              {lang === "hi" ? "यह स्थान साधना, संरक्षण और स्पष्ट मार्गदर्शन का संगम है" : "This space brings together devotion, protection, and clear guidance"}
            </Typography>
            <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {lang === "hi"
                ? "गुरु जी की हीलिंग यात्रा और नीरज जी की ज्योतिषीय दिशा, दोनों को एक संतुलित और सम्मानपूर्ण अनुभव के रूप में प्रस्तुत किया गया है।"
                : "Guru Ji’s healing path and Neeraj’s astrological guidance are presented as two distinct offerings held within one respectful and devotional experience."}
            </Typography>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="about-image-card stack-card glass-card">
              <img src="/guru-portrait-5.png" alt="Guru Ji in a floral devotional setting" />
            </div>
            <div className="about-image-card stack-card glass-card">
              <img src="/maa-chintpurni.jpg" alt="Maa Chintpurni floral shrine detail" />
            </div>
          </div>
        </div>

        <section id="about-guru" className="mb-8">
          <div className="stack-card glass-card content-box rounded-[32px]">
            <div className="mb-5 flex items-center gap-4">
              <div className="profile-avatar-shell flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/25 bg-[radial-gradient(circle_at_top,rgba(199,154,92,0.26),rgba(94,165,138,0.14))] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(17,31,28,0.95),rgba(8,17,15,0.98))] text-lg font-bold text-[var(--gold)]">
                  G
                </div>
              </div>
              <div className="min-w-0">
                <Typography className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                  {page.guru.eyebrow}
                </Typography>
                <Typography className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                  {page.guru.title}
                </Typography>
              </div>
            </div>

            <Typography className="mb-6 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {page.guru.intro}
            </Typography>
            <Typography component="h2" variant="h4" className="mb-4 text-white">
              {page.guru.pointsTitle}
            </Typography>
            <div className="grid gap-4 md:grid-cols-3">
              {page.guru.points.map((point) => (
                <div key={point} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                  <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{point}</Typography>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button component={RouterLink} to={localizePath("/services#black-magic-removal")} variant="contained">
                {content.common.exploreGuruServices}
              </Button>
              <Button component={RouterLink} to={localizePath("/contact")} variant="outlined">
                {content.common.bookConsultation}
              </Button>
            </div>
          </div>
        </section>

        <section id="about-neeraj" className="mb-8">
          <div className="astrology-shift-section astro-modern-border rounded-[32px] border border-white/10 p-5 sm:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="profile-avatar-shell flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_top,rgba(198,213,255,0.3),rgba(113,133,255,0.18))] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(14,26,54,0.95),rgba(8,14,29,0.98))] text-lg font-bold text-[#d9e2ff]">
                  N
                </div>
              </div>
              <div className="min-w-0">
                <Typography className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#bfd3ff]">
                  {page.astrologer.eyebrow}
                </Typography>
                <Typography className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                  {page.astrologer.title}
                </Typography>
              </div>
            </div>

            <Typography className="mb-6 text-sm leading-7 text-[#d0d9ef] sm:text-base">
              {page.astrologer.intro}
            </Typography>
            <Typography component="h2" variant="h4" className="mb-4 text-white">
              {page.astrologer.pointsTitle}
            </Typography>
            <div className="grid gap-4 md:grid-cols-3">
              {page.astrologer.points.map((point) => (
                <div key={point} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                  <Typography className="text-sm leading-7 text-[#d0d9ef] sm:text-base">{point}</Typography>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button component={RouterLink} to={localizePath("/services#kundali-reading")} variant="contained" color="secondary">
                {content.common.exploreAstrologyServices}
              </Button>
              <Button component={RouterLink} to={localizePath("/horoscope")} variant="outlined" color="inherit">
                {content.common.viewHoroscope}
              </Button>
            </div>
          </div>
        </section>

        <div className="stack-card glass-card content-box rounded-[32px]">
          <Typography component="h2" variant="h4" className="mb-4 text-white">
            {page.bridge.title}
          </Typography>
          <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
            {page.bridge.body}
          </Typography>
        </div>
      </Container>
    </>
  );
}

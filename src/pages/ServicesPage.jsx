import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function ServicesPage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.servicesHub;

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/services")}
        basePath="/services"
        lang={lang}
        keywords={page.seo.keywords}
      />

      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />

      <Container maxWidth="xl" className="px-4 py-12 sm:py-18 lg:py-22">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="editorial-panel">
            <Typography className="editorial-kicker mb-4">{content.common.viewAllServices}</Typography>
            <Typography className="text-base leading-8 text-[var(--text-soft)] md:text-[1.0625rem] lg:text-[1.125rem]">
              {page.intro}
            </Typography>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card content-box rounded-[28px]">
              <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--gold-soft)]">{page.spiritualTitle}</Typography>
              <Typography component="h2" variant="h4" className="mb-3 text-white">
                {content.common.spiritualServices}
              </Typography>
              <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                {lang === "hi"
                  ? "आध्यात्मिक परामर्श, नकारात्मक ऊर्जा से राहत, और जीवन की उलझनों में स्पष्ट दिशा के लिए समर्पित सेवाएँ।"
                  : "Dedicated healing services for negative energy relief, spiritual clarity, and practical support through difficult life phases."}
              </Typography>
            </div>
            <div className="astrology-panel astro-modern-border content-box rounded-[28px]">
              <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[#dbe6ff]">{page.astrologyTitle}</Typography>
              <Typography component="h2" variant="h4" className="mb-3 text-white">
                {content.common.astrologyServicesLabel}
              </Typography>
              <Typography className="text-sm leading-7 text-[#dbe6ff] sm:text-base">
                {lang === "hi"
                  ? "राशि, ग्रह, कुंडली और समय के प्रभाव को समझकर फैसलों में स्पष्टता देने वाली आधुनिक ज्योतिष सेवाएँ।"
                  : "Modern astrology guidance built around charts, planetary timing, and thoughtful interpretation for more confident decisions."}
              </Typography>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <SectionHeading eyebrow={page.spiritualTitle} title={content.common.spiritualServices} align="center" level="h2" />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {content.serviceGroups.spiritual.map((service) => (
              <article key={service.id} id={service.id} className="stack-card glass-card content-box rounded-[28px]">
                <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--gold-soft)]">{service.tag}</Typography>
                <Typography component="h3" variant="h4" className="mb-3 text-white">
                  {service.title}
                </Typography>
                <Typography className="mb-5 text-sm leading-7 text-[var(--text-soft)] sm:text-base">{service.blurb}</Typography>
                <div className="mb-5 grid gap-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button component={RouterLink} to={localizePath(service.path)} variant="contained">
                    {content.common.learnMore}
                  </Button>
                  <Button component={RouterLink} to={localizePath("/contact")} variant="outlined">
                    {content.common.bookThisService}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow={page.astrologyTitle} title={content.common.astrologyServicesLabel} align="center" level="h2" />
          <div className="mt-8 grid gap-5">
            {content.serviceGroups.astrology.map((service) => (
              <article key={service.id} id={service.id} className="stack-card astrology-shift-section astro-modern-border content-box rounded-[28px] border border-white/10 p-5 sm:p-8">
                <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[#dbe6ff]">{service.tag}</Typography>
                <Typography component="h3" variant="h4" className="mb-3 text-white">
                  {service.title}
                </Typography>
                <Typography className="mb-5 max-w-3xl text-sm leading-7 text-[#dbe6ff] sm:text-base">{service.blurb}</Typography>
                <div className="mb-5 grid gap-3 md:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[#dbe6ff] sm:text-base">
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button component={RouterLink} to={localizePath(service.path)} variant="contained" color="secondary">
                    {content.common.learnMore}
                  </Button>
                  <Button component={RouterLink} to={localizePath("/contact")} variant="outlined" color="inherit">
                    {content.common.bookThisService}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
            {content.common.bookConsultation}
          </Button>
          <Button component={RouterLink} to={localizePath("/testimonials")} variant="outlined">
            {content.common.viewTestimonials}
          </Button>
        </div>
      </Container>
    </>
  );
}

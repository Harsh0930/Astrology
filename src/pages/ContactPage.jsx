import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { BookingWidget } from "../components/BookingWidget";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function ContactPage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.contactPage;

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/contact")}
        basePath="/contact"
        lang={lang}
        keywords={page.seo.keywords}
      />

      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />

      <Container maxWidth="xl" className="px-4 py-10 sm:py-14 lg:py-16">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="contact-banner-card rounded-[30px]">
            <img src="/guru-vedic-library-portrait.png" alt="Consultation setting at Chintpurni Blessings" />
            <div className="contact-banner-overlay">
              <Typography className="editorial-kicker mb-4">{page.getInTouchTitle}</Typography>
              <Typography component="p" className="max-w-2xl text-sm leading-8 text-white/88 sm:text-base">
                {page.intro}
              </Typography>
            </div>
          </div>

          <div className="editorial-panel">
            <Typography component="h2" variant="h4" className="mb-5 text-white">
              {page.getInTouchTitle}
            </Typography>
            <div className="grid gap-4">
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faLocationDot} /></span>
                  <div>
                    <Typography className="mb-1 text-sm uppercase tracking-[0.14em] text-[var(--gold-soft)]">{content.common.address}</Typography>
                    <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{content.brand.fullAddress}</Typography>
                  </div>
                </div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faPhoneVolume} /></span>
                  <div>
                    <Typography className="mb-1 text-sm uppercase tracking-[0.14em] text-[var(--gold-soft)]">{content.common.phoneWhatsapp}</Typography>
                    <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{content.brand.phone}</Typography>
                  </div>
                </div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <div>
                    <Typography className="mb-1 text-sm uppercase tracking-[0.14em] text-[var(--gold-soft)]">{content.common.email}</Typography>
                    <Typography className="break-all text-sm leading-7 text-[var(--text-soft)] sm:text-base">{content.brand.email}</Typography>
                  </div>
                </div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faShieldHeart} /></span>
                  <div>
                    <Typography className="mb-1 text-sm uppercase tracking-[0.14em] text-[var(--gold-soft)]">{content.common.hours}</Typography>
                    <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{content.brand.availability}</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card rounded-[30px] p-5 sm:p-7">
            <BookingWidget lang={lang} phone={content.brand.phoneCompact} calendlyUrl={content.brand.calendly} />
          </div>

          <div className="grid gap-6">
            <div className="astrology-shift-section astro-modern-border rounded-[30px] border border-white/10 p-5 sm:p-7">
              <Typography component="h2" variant="h4" className="mb-4 text-white">
                {page.expectationsTitle}
              </Typography>
              <div className="grid gap-3">
                {page.expectations.map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[#dbe6ff] sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-5 sm:p-7">
              <Typography component="h2" variant="h4" className="mb-4 text-white">
                {page.remoteTitle}
              </Typography>
              <Typography className="mb-5 text-sm leading-7 text-[var(--text-soft)] sm:text-base">{page.remoteBody}</Typography>
              <div className="grid gap-3">
                {page.remoteItems.map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-panel">
              <Typography component="h2" variant="h4" className="mb-4 text-white">
                {page.astrologyTitle}
              </Typography>
              <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{page.astrologyBody}</Typography>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button component={RouterLink} to={localizePath("/services/astrology")} variant="contained">
                  {content.common.learnMore}
                </Button>
                <Button component={RouterLink} to={localizePath("/about")} variant="outlined">
                  {content.common.readAboutGuru}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

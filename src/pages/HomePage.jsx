import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { DevotionalGallery } from "../components/DevotionalGallery";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function HomePage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.home;
  const coreServices = content.services.slice(0, 5);
  const heroParagraph = page.hero.body[0] ?? "";
  const [openServiceId, setOpenServiceId] = useState(coreServices[0]?.id ?? "");

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      mainEntity: page.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/")}
        basePath="/"
        lang={lang}
        keywords={page.seo.keywords}
        structuredData={structuredData}
      />

      <Reveal component="section" className="relative overflow-hidden px-4 pb-8 pt-6 sm:pb-12 sm:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_88%_4%,rgba(143,182,255,0.18),transparent_32%),linear-gradient(180deg,rgba(7,14,27,0.96),rgba(8,16,31,0.98))]" />
        <div className="cosmic-grid pointer-events-none absolute inset-0 opacity-26" />
        <Container maxWidth="xl" className="relative">
          <div className="home-hero-shell">
            <div className="home-hero-grid">
              <div className="home-hero-copy">
                <Typography className="editorial-kicker home-hero-kicker">{page.hero.eyebrow}</Typography>
                <Typography component="h1" variant="h1" className="font-heading max-w-3xl text-white">
                  {page.hero.title}
                </Typography>
                <Typography className="max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-[1.0625rem]">
                  {heroParagraph}
                </Typography>

                <div className="info-badge-row">
                  <div className="info-badge">
                    <FontAwesomeIcon icon={faPhoneVolume} className="text-[var(--gold)]" />
                    <span>{content.brand.phone}</span>
                  </div>
                  <div className="info-badge">
                    <FontAwesomeIcon icon={faLocationDot} className="text-[var(--gold)]" />
                    <span>{content.brand.location}</span>
                  </div>
                </div>

                <div className="hero-actions">
                  <Button component={RouterLink} to={localizePath("/contact")} variant="contained" endIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                    {page.hero.primaryCta}
                  </Button>
                  <Button component={RouterLink} to={localizePath("/services")} variant="outlined">
                    {page.hero.secondaryCta}
                  </Button>
                </div>

                <div className="home-hero-metrics">
                  {content.trustStats.map((stat) => (
                    <div key={stat.label} className="metric-card">
                      <AnimatedCounter value={`${stat.value}+`} className="metric-value" />
                      <Typography className="mt-2 text-sm leading-6 text-[var(--text-soft)] sm:text-[0.95rem]">{stat.label}</Typography>
                    </div>
                  ))}
                </div>
              </div>

              <div className="home-hero-visual">
                <div className="home-hero-image-card">
                  <div className="home-hero-image-shell">
                    <img src="/guru-floral-altar-portrait.png" alt="Guru Ji in a floral devotional altar setting" />
                  </div>
                  <div className="home-hero-image-content">
                    <Typography className="home-hero-label">{page.guruIntro.eyebrow}</Typography>
                    <Typography component="h2" variant="h4" className="text-white">
                      {page.guruIntro.title}
                    </Typography>
                    <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                      {page.guruIntro.body[0]}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell pt-0">
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow={page.servicesSection.eyebrow}
            title={page.servicesSection.title}
            body={page.servicesSection.body}
            align="center"
            level="h2"
          />
          <div className="core-services-opener-grid mt-8">
            {coreServices.map((service) => {
              const isOpen = openServiceId === service.id;

              return (
                <article key={service.id} className={`core-service-opener ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="core-service-opener-trigger"
                    onClick={() => setOpenServiceId((current) => (current === service.id ? "" : service.id))}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <Typography className="mb-2 text-xs uppercase tracking-[0.12em] text-[var(--gold-soft)]">{service.tag}</Typography>
                      <Typography component="h3" variant="h5" className="text-left text-white">
                        {service.title}
                      </Typography>
                    </div>
                    <span className="core-service-opener-icon">
                      <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="core-service-opener-body">
                      <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{service.blurb}</Typography>
                      <div className="mt-4 grid gap-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                            {benefit}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <Button component={RouterLink} to={localizePath(service.path)} variant="contained">
                          {content.common.learnMore}
                        </Button>
                        <Button component={RouterLink} to={localizePath("/contact")} variant="outlined">
                          {content.common.bookThisService}
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </Container>
      </Reveal>

      <DevotionalGallery />

      <Reveal className="section-shell">
        <Container maxWidth="xl">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="editorial-panel">
              <SectionHeading eyebrow={page.signs.eyebrow} title={page.signs.title} body={page.signs.body} level="h2" />
              <div className="mt-6">
                <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
                  {page.signs.cta}
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {page.signs.items.map((item) => (
                <article key={item} className="stack-card glass-card content-box rounded-[26px]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/25 bg-[rgba(212,175,55,0.1)] text-[var(--gold)]">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <Typography className="text-base leading-8 text-[var(--text-soft)]">{item}</Typography>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="xl">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="astrology-shift-section astro-modern-border rounded-[32px] border border-white/10 p-5 sm:p-8">
              <SectionHeading eyebrow={page.trust.eyebrow} title={page.trust.title} level="h2" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {page.trust.items.map((item) => (
                  <article key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/22 bg-[rgba(212,175,55,0.1)] text-[var(--gold)]">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <Typography className="text-sm leading-7 text-[#dbe6ff] sm:text-base">{item}</Typography>
                  </article>
                ))}
              </div>
            </div>

            <div className="glass-card content-box rounded-[32px]">
              <SectionHeading eyebrow={page.note.eyebrow} title={page.note.title} level="h2" />
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/25 bg-[rgba(212,175,55,0.12)] text-[var(--gold)]">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <Typography className="text-base leading-8 text-[var(--text-soft)] md:text-[1.0625rem]">{page.note.quote}</Typography>
                <Typography className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--gold-soft)]">{page.note.attribution}</Typography>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell pt-0">
        <Container maxWidth="xl">
          <SectionHeading eyebrow={page.faqSection.eyebrow} title={page.faqSection.title} body={page.faqSection.body} align="center" level="h2" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.faqs.map((item) => (
              <article key={item.question} className="stack-card glass-card content-box rounded-[26px]">
                <Typography component="h3" variant="h5" className="mb-3 text-white">
                  {item.question}
                </Typography>
                <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{item.answer}</Typography>
              </article>
            ))}
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="lg">
          <div className="astrology-shift-section astro-modern-border rounded-[32px] border border-white/10 p-5 sm:p-8">
            <SectionHeading eyebrow={page.contactStrip.eyebrow} title={page.contactStrip.title} body={page.contactStrip.body} level="h2" />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-start gap-3 text-white">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faLocationDot} /></span>
                  <div>
                    <Typography className="text-sm uppercase tracking-[0.16em] text-[var(--gold-soft)]">{content.common.address}</Typography>
                    <Typography className="text-sm leading-7 text-[#dbe6ff] sm:text-base">{content.brand.locationLine}</Typography>
                    <Typography className="text-sm leading-7 text-[#dbe6ff] sm:text-base">{content.brand.fullAddress}</Typography>
                  </div>
                </div>
                <div className="mb-4 flex items-start gap-3 text-white">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faPhoneVolume} /></span>
                  <div>
                    <Typography className="text-sm uppercase tracking-[0.16em] text-[var(--gold-soft)]">{content.common.phoneWhatsapp}</Typography>
                    <Typography className="text-sm leading-7 text-[#dbe6ff] sm:text-base">{content.brand.phone}</Typography>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white">
                  <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <div>
                    <Typography className="text-sm uppercase tracking-[0.16em] text-[var(--gold-soft)]">{content.common.email}</Typography>
                    <Typography className="break-all text-sm leading-7 text-[#dbe6ff] sm:text-base">{content.brand.email}</Typography>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <Typography className="mb-3 text-sm uppercase tracking-[0.16em] text-[var(--gold-soft)]">{content.common.hours}</Typography>
                <Typography className="mb-5 text-sm leading-7 text-[#dbe6ff] sm:text-base">{content.brand.availability}</Typography>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
                    {content.common.bookConsultation}
                  </Button>
                  <Button component={RouterLink} to={localizePath("/services")} variant="outlined" color="inherit">
                    {content.common.viewAllServices}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>
    </>
  );
}

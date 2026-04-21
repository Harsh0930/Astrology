import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faLocationDot, faPhoneVolume, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Chip, Container, MenuItem, TextField, Typography } from "@mui/material";
import { SectionHeading } from "../components/SectionHeading";
import { MagneticButton } from "../components/MagneticButton";
import { Reveal } from "../components/Reveal";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { Seo } from "../seo/Seo";
import { getLivePanchang, getRashiHoroscope } from "../utils/astro";
import { useSiteLanguage } from "../context/SiteLanguageContext";

function handleSpotlightMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
}

export function HomePage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const currentHome = content.home;
  const focusOptions = content.horoscopePage.focuses;
  const [selectedSign, setSelectedSign] = useState("Aries");
  const [selectedFocus, setSelectedFocus] = useState(focusOptions[0]);
  const [activeGuruTopic, setActiveGuruTopic] = useState(currentHome.guruSection.topics[0].key);
  const [activeAstroTab, setActiveAstroTab] = useState(currentHome.astrologySection.tabs[0].key);

  const panchang = useMemo(() => getLivePanchang(new Date(), lang), [lang]);
  const horoscope = useMemo(() => getRashiHoroscope(selectedSign, selectedFocus, lang), [lang, selectedFocus, selectedSign]);
  const guruTopic = currentHome.guruSection.topics.find((item) => item.key === activeGuruTopic) ?? currentHome.guruSection.topics[0];
  const astroTab = currentHome.astrologySection.tabs.find((item) => item.key === activeAstroTab) ?? currentHome.astrologySection.tabs[0];
  const guruServices = content.services.filter((service) => service.category === "guru");
  const astrologyServices = content.services.filter((service) => service.category === "astrology");

  useEffect(() => {
    setSelectedFocus(content.horoscopePage.focuses[0]);
    setActiveGuruTopic(content.home.guruSection.topics[0].key);
    setActiveAstroTab(content.home.astrologySection.tabs[0].key);
  }, [content.home.astrologySection.tabs, content.home.guruSection.topics, content.horoscopePage.focuses, lang]);

  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      mainEntity: currentHome.faqs.map((item) => ({
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
        title={currentHome.seo.title}
        description={currentHome.seo.description}
        path={localizePath("/")}
        basePath="/"
        lang={lang}
        keywords={currentHome.seo.keywords}
        structuredData={homeStructuredData}
      />

      <Reveal component="section" className="relative overflow-hidden px-4 pb-12 pt-6 sm:pb-16 sm:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(94,165,138,0.16),transparent_26%),radial-gradient(circle_at_84%_8%,rgba(199,154,92,0.18),transparent_24%),linear-gradient(180deg,rgba(8,18,16,0.96),rgba(7,17,15,1))]" />
        <div className="cosmic-grid pointer-events-none absolute inset-0 opacity-30" />
        <Container maxWidth="xl" className="relative">
          <section className="hero-shell">
            <div className="hero-background-media">
              <img src="/guru-portrait-1.png" alt="Guru Ji seated in a sacred astrological setting" />
            </div>

            <div className="hero-layout">
              <div className="hero-content">
                <Chip
                  label={currentHome.heroChip}
                  className="!max-w-full !border !border-[var(--gold)]/30 !bg-black/25 !text-[var(--gold)]"
                  variant="outlined"
                />

                <Typography component="h1" variant="h1" className="font-heading max-w-4xl text-white">
                  {currentHome.title}
                </Typography>

                <Typography className="max-w-3xl text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8 lg:text-[1.125rem]">
                  {currentHome.description}
                </Typography>

                <div className="hero-actions">
                  <MagneticButton component="a" href="#guru-path" size="large" variant="contained" className="glow-trail">
                    {currentHome.quickNav.guruButton}
                  </MagneticButton>
                  <MagneticButton component="a" href="#astrology-path" size="large" variant="outlined" className="glow-trail">
                    {currentHome.quickNav.astrologyButton}
                  </MagneticButton>
                </div>

                <div className="hero-info-grid">
                  {content.trustStats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="hero-stat-card glass-card content-box-tight rounded-[24px]">
                      <AnimatedCounter value={stat.value} className="font-heading text-[var(--gold)]" />
                      <Typography className="mt-2 text-base leading-7 text-[var(--text-soft)]">{stat.label}</Typography>
                    </div>
                  ))}
                </div>

                <div className="glass-card content-box rounded-[28px]">
                  <Typography className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)] sm:text-sm">
                    {currentHome.quickNav.eyebrow}
                  </Typography>
                  <Typography component="h2" variant="h3" className="font-heading text-white">
                    {currentHome.quickNav.title}
                  </Typography>
                  <Typography className="mt-3 text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">
                    {currentHome.quickNav.body}
                  </Typography>

                  <div className="hero-quick-nav mt-5">
                    <Button component="a" href="#guru-path" variant="outlined">
                      {content.common.guruSection}
                    </Button>
                    <Button component="a" href="#astrology-path" variant="outlined" color="secondary">
                      {content.common.astrologySection}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="hero-side-panel">
                <div className="hero-portrait-card glass-card">
                  <img src="/guru-portrait-4.png" alt="Guru Ji with a sacred astrological halo" />
                </div>

                <div className="hero-side-grid">
                  <div className="glass-card content-box rounded-[26px]">
                    <Typography className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                      {lang === "hi" ? "दैवी उपस्थिति" : "Divine Presence"}
                    </Typography>
                    <Typography component="h2" variant="h4" className="font-heading text-white">
                      {lang === "hi" ? "माता चिंतपूर्णी की कृपा से मार्गदर्शन" : "Guidance Blessed by Maa Chintapurni"}
                    </Typography>
                    <Typography className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                      {lang === "hi"
                        ? "हीलिंग और ज्योतिष की यह यात्रा भक्ति, संरक्षण और स्पष्ट दिशा के भाव के साथ प्रस्तुत की गई है।"
                        : "The healing and astrology journey is presented with a devotional, protected, and purposeful presence throughout the experience."}
                    </Typography>
                  </div>

                  <div className="hero-mini-image glass-card">
                    <img src="/maa-chintpurni.jpg" alt="Maa Chintpurni floral devotional image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Reveal>

      <Reveal id="guru-path" className="section-shell">
        <Container maxWidth="xl">
          <div className="box-grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="stack-card spotlight-card creative-border glass-card content-box rounded-[32px]" onMouseMove={handleSpotlightMove}>
              <SectionHeading
                eyebrow={currentHome.guruSection.eyebrow}
                title={currentHome.guruSection.title}
                body={currentHome.guruSection.body}
                level="h2"
              />

              <div className="mt-6 flex flex-wrap gap-3">
                {currentHome.guruSection.topics.map((topic) => (
                  <button
                    key={topic.key}
                    type="button"
                    onClick={() => setActiveGuruTopic(topic.key)}
                    className={`expert-toggle rounded-full border px-4 py-2 text-sm transition ${
                      activeGuruTopic === topic.key
                        ? "border-[var(--gold)] bg-[rgba(199,154,92,0.14)] text-white"
                        : "border-white/10 bg-white/5 text-[var(--text-soft)]"
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] border border-[var(--gold)]/20 bg-[rgba(199,154,92,0.08)] p-5 sm:p-6">
                <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{guruTopic.label}</Typography>
                <Typography component="h3" variant="h4" className="font-heading text-white">
                  {guruTopic.title}
                </Typography>
                <Typography className="mt-4 text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">
                  {guruTopic.description}
                </Typography>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button component={RouterLink} to={localizePath("/services#black-magic-removal")} variant="contained">
                  {currentHome.guruSection.primaryCta}
                </Button>
                <Button component={RouterLink} to={localizePath("/about#about-guru")} variant="outlined">
                  {currentHome.guruSection.secondaryCta}
                </Button>
              </div>
            </div>

            <div className="stack-card creative-border glass-card content-box rounded-[32px]">
              <Typography className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                {currentHome.guruSection.servicesTitle}
              </Typography>
              <Typography className="mb-6 text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">
                {currentHome.guruSection.servicesBody}
              </Typography>

              <div className="box-grid md:grid-cols-2">
                {guruServices.map((service) => (
                  <article key={service.id} className="stack-card spotlight-card interactive-tile rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-6" onMouseMove={handleSpotlightMove}>
                    <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{service.tag}</Typography>
                    <Typography component="h3" variant="h5" className="font-heading mb-3 text-white">
                      {service.title}
                    </Typography>
                    <Typography className="text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">{service.blurb}</Typography>
                    <Button component={RouterLink} to={localizePath(`/services#${service.id}`)} variant="text" sx={{ mt: 2 }}>
                      {content.common.learnMore}
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal id="astrology-path" className="section-shell">
        <Container maxWidth="xl">
          <section className="astrology-shift-section astro-modern-border overflow-hidden rounded-[36px] border border-white/10 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8" onMouseMove={handleSpotlightMove}>
            <div className="box-grid lg:grid-cols-[1.02fr_0.98fr]">
              <div>
                <SectionHeading
                  eyebrow={currentHome.astrologySection.eyebrow}
                  title={currentHome.astrologySection.title}
                  body={currentHome.astrologySection.body}
                  level="h2"
                />

                <div className="mt-6 flex flex-wrap gap-3">
                  {currentHome.astrologySection.tabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveAstroTab(tab.key)}
                      className={`expert-toggle rounded-full border px-4 py-2 text-sm transition ${
                        activeAstroTab === tab.key
                          ? "border-white/40 bg-white text-[#0b1730]"
                          : "border-white/15 bg-white/5 text-white/75"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="tab-panel-animated mt-6 astrology-panel astro-modern-border content-box" onMouseMove={handleSpotlightMove}>
                  <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[#bfd3ff]">{astroTab.label}</Typography>
                  <Typography component="h3" variant="h4" className="font-heading text-white">
                    {astroTab.title}
                  </Typography>
                  <Typography className="mt-4 text-base leading-7 text-[#d0d9ef] md:text-[1.0625rem] md:leading-8">
                    {astroTab.body}
                  </Typography>
                  <div className="mt-5 box-grid">
                    {astroTab.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-base leading-7 text-[#d0d9ef]">
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button component={RouterLink} to={localizePath(astroTab.ctaTo)} variant="contained" color="secondary">
                      {astroTab.ctaLabel}
                    </Button>
                    <Button component={RouterLink} to={localizePath("/about#about-neeraj")} variant="outlined" color="inherit">
                      {currentHome.astrologySection.primaryCta}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="box-grid">
                <div className="astrology-panel astro-modern-border content-box" onMouseMove={handleSpotlightMove}>
                  <Typography className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#bfd3ff] sm:text-sm">
                    {lang === "hi" ? "व्यक्तिगत राशिफल स्नैपशॉट" : "Personalised Horoscope Snapshot"}
                  </Typography>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      select
                      label={content.common.selectRashi}
                      value={selectedSign}
                      onChange={(event) => setSelectedSign(event.target.value)}
                    >
                      {content.zodiacSigns.map((sign) => (
                        <MenuItem key={sign.name} value={sign.name}>
                          {sign.vedicName}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      select
                      label={content.common.focus}
                      value={selectedFocus}
                      onChange={(event) => setSelectedFocus(event.target.value)}
                    >
                      {focusOptions.map((focus) => (
                        <MenuItem key={focus} value={focus}>
                          {focus}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>

                  <div className="mt-4 rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-6">
                    <Typography className="text-sm uppercase tracking-[0.18em] text-[#bfd3ff]">
                      {selectedSign} {selectedFocus}
                    </Typography>
                    <Typography component="h3" variant="h4" className="font-heading mt-2 text-white">
                      {horoscope.headline}
                    </Typography>
                    <Typography className="mt-3 text-base leading-7 text-[#d0d9ef] md:text-[1.0625rem] md:leading-8">
                      {horoscope.body}
                    </Typography>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[18px] border border-white/10 p-3">
                        <Typography className="text-xs uppercase tracking-[0.16em] text-[#bfd3ff]">{content.common.luckyColor}</Typography>
                        <Typography className="mt-2 text-white">{horoscope.luckyColor}</Typography>
                      </div>
                      <div className="rounded-[18px] border border-white/10 p-3">
                        <Typography className="text-xs uppercase tracking-[0.16em] text-[#bfd3ff]">{content.common.luckyWindow}</Typography>
                        <Typography className="mt-2 text-white">{horoscope.luckyWindow}</Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="astrology-panel astro-modern-border content-box" onMouseMove={handleSpotlightMove}>
                  <Typography className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#bfd3ff]">
                    {lang === "hi" ? "आंतरिक लिंक" : "Internal Links"}
                  </Typography>
                  <div className="box-grid">
                    {astrologyServices.map((service) => (
                      <RouterLink
                        key={service.id}
                        to={localizePath(`/services#${service.id}`)}
                        className="group rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 no-underline transition hover:border-white/30 hover:bg-white/8"
                      >
                        <Typography className="mb-1 text-xs uppercase tracking-[0.16em] text-[#bfd3ff]">{service.tag}</Typography>
                        <Typography className="flex items-center justify-between gap-3 text-white">
                          <span>{service.title}</span>
                          <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#bfd3ff]" />
                        </Typography>
                      </RouterLink>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button component={RouterLink} to={localizePath("/horoscope")} variant="contained" color="secondary">
                      {content.common.viewHoroscope}
                    </Button>
                    <Button component={RouterLink} to={localizePath("/rashi")} variant="outlined" color="inherit">
                      {content.common.viewRashiGuide}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="xl">
          <div className="box-grid lg:grid-cols-[1.06fr_0.94fr]">
            <div className="stack-card spotlight-card creative-border glass-card content-box rounded-[28px]" onMouseMove={handleSpotlightMove}>
              <SectionHeading
                eyebrow={currentHome.visit.eyebrow}
                title={currentHome.visit.title}
                body={currentHome.visit.body}
                level="h2"
              />
              <div className="mt-6 box-grid sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-[var(--text-soft)]">
                  <div className="mb-2 flex items-center gap-3 text-white">
                    <span className="text-[var(--gold)]"><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span>{content.brand.location}</span>
                  </div>
                  <span>{content.brand.postalCode}</span>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-[var(--text-soft)]">
                  <div className="mb-2 flex items-center gap-3 text-white">
                    <span className="text-[var(--gold)]"><FontAwesomeIcon icon={faPhoneVolume} /></span>
                    <span>{content.brand.phone}</span>
                  </div>
                  <span>{content.common.onlineInPerson}</span>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 px-4 py-4">
                <Typography className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  {lang === "hi" ? "आज का पंचांग" : "Today’s Panchang"}
                </Typography>
                <Typography className="text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">
                  {`${panchang.dateLabel}. ${lang === "hi" ? "तिथि" : "Tithi"}: ${panchang.tithi}. ${lang === "hi" ? "नक्षत्र" : "Nakshatra"}: ${panchang.nakshatra}. ${lang === "hi" ? "ऊर्जा" : "Energy"}: ${panchang.moonPhase}.`}
                </Typography>
              </div>
            </div>

            <div className="stack-card creative-border glass-card content-box rounded-[28px]">
              <Typography className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                {currentHome.cta.eyebrow}
              </Typography>
              <Typography component="h2" variant="h3" className="font-heading text-white">
                {content.brand.tagline}
              </Typography>
              <Typography className="mt-4 text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">
                {currentHome.cta.body}
              </Typography>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
                  {content.common.bookNow}
                </Button>
                <Button href={content.brand.whatsapp} variant="outlined">
                  {content.common.askOnWhatsApp}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow={currentHome.trust.eyebrow}
            title={currentHome.trust.title}
            body={currentHome.trust.body}
            align="center"
            level="h2"
          />
          <div className="testimonial-scroll mt-8 lg:grid lg:grid-cols-3">
            {content.testimonials.map((item) => (
              <div key={item.name} className="stack-card spotlight-card creative-border glass-card content-box rounded-[26px]" onMouseMove={handleSpotlightMove}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Typography component="h3" variant="h6" className="font-heading text-white">
                    {item.name}
                  </Typography>
                  <div className="flex items-center gap-2 text-[var(--gold)]">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <Typography className="text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">{item.text}</Typography>
              </div>
            ))}
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow={currentHome.faqSection.eyebrow}
            title={currentHome.faqSection.title}
            body={currentHome.faqSection.body}
            align="center"
            level="h2"
          />
          <div className="mt-8 box-grid md:grid-cols-3">
            {currentHome.faqs.map((item) => (
              <article key={item.question} className="stack-card spotlight-card creative-border glass-card content-box rounded-[26px]" onMouseMove={handleSpotlightMove}>
                <Typography component="h3" variant="h5" className="font-heading mb-3 text-white">
                  {item.question}
                </Typography>
                <Typography className="text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">{item.answer}</Typography>
              </article>
            ))}
          </div>
        </Container>
      </Reveal>
    </>
  );
}

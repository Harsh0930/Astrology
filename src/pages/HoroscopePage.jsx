import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Container, MenuItem, TextField, Typography } from "@mui/material";
import { PageHero } from "../components/PageHero";
import { MagneticButton } from "../components/MagneticButton";
import { Reveal } from "../components/Reveal";
import { Seo } from "../seo/Seo";
import { getRashiHoroscope } from "../utils/astro";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function HoroscopePage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.horoscopePage;
  const [filter, setFilter] = useState(page.focuses[0]);
  const [sign, setSign] = useState("Aries");
  const [period, setPeriod] = useState(page.periods[0]);
  const current = content.zodiacSigns.find((item) => item.name === sign) ?? content.zodiacSigns[0];
  const horoscope = useMemo(() => getRashiHoroscope(sign, filter, lang), [sign, filter, lang]);

  useEffect(() => {
    setFilter(page.focuses[0]);
    setPeriod(page.periods[0]);
  }, [page.focuses, page.periods]);

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/horoscope")}
        basePath="/horoscope"
        lang={lang}
        keywords={page.seo.keywords}
      />
      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />
      <Reveal className="section-shell">
        <Container maxWidth="lg">
          <div className="stack-card glass-card content-box rounded-[28px]">
            <Typography component="h2" variant="h3" className="mb-4 text-white">
              {page.introTitle}
            </Typography>
            <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {page.introBody}
            </Typography>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <TextField select label={content.common.selectPeriod} value={period} onChange={(event) => setPeriod(event.target.value)}>
                {page.periods.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
              <TextField select label={content.common.selectSign} value={sign} onChange={(event) => setSign(event.target.value)}>
                {content.zodiacSigns.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.vedicName}
                  </MenuItem>
                ))}
              </TextField>
              <TextField select label={content.common.focusArea} value={filter} onChange={(event) => setFilter(event.target.value)}>
                {page.focuses.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-5 sm:p-6">
              <Typography className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                {period} {page.guidanceFor} {current.vedicName}
              </Typography>
              <Typography component="h3" variant="h4" className="font-heading mt-2 text-white">
                {horoscope.headline}
              </Typography>
              <Typography className="mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">{horoscope.body}</Typography>
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="xl">
          <Typography component="h2" variant="h3" className="mb-6 text-center text-white">
            {page.weeklyTitle}
          </Typography>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.weekly.map(([name, focus]) => (
              <div key={name} className="stack-card glass-card content-box rounded-[26px]">
                <Typography component="h3" variant="h5" className="mb-2 text-white">
                  {name}
                </Typography>
                <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{focus}</Typography>
              </div>
            ))}
          </div>
        </Container>
      </Reveal>

      <Reveal className="section-shell">
        <Container maxWidth="lg">
          <div className="astrology-shift-section astro-modern-border rounded-[28px] border border-[var(--gold)]/18 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
            <Typography component="h2" variant="h4" className="text-white">
              {page.ctaTitle}
            </Typography>
            <Typography className="mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {page.ctaBody}
            </Typography>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <MagneticButton component={RouterLink} to={localizePath("/contact")} variant="contained" className="glow-trail">
                {page.ctaButton}
              </MagneticButton>
              <Button variant="outlined" href={content.brand.whatsapp}>
                {content.common.askOnWhatsApp}
              </Button>
            </div>
          </div>
        </Container>
      </Reveal>
    </>
  );
}

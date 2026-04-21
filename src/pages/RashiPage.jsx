import { Container, Typography } from "@mui/material";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function RashiPage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.rashiPage;

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/rashi")}
        basePath="/rashi"
        lang={lang}
        keywords={page.seo.keywords}
      />
      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />
      <Container maxWidth="xl" className="px-4 py-12 sm:py-18 lg:py-22">
        <div className="mb-8 stack-card glass-card content-box rounded-[28px]">
          <Typography component="h2" variant="h4" className="mb-4 text-white">
            {page.introTitle}
          </Typography>
          <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
            {page.introBody}
          </Typography>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {content.zodiacSigns.map((sign) => (
            <div key={sign.name} className="stack-card glass-card content-box rounded-[28px]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <Typography className="text-2xl font-bold text-[var(--gold)]">{sign.symbol}</Typography>
                <Typography className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{sign.element}</Typography>
              </div>
              <Typography component="h2" variant="h5" className="mb-2 text-white">
                {sign.vedicName}
              </Typography>
              <Typography className="mb-4 text-sm text-[var(--text-soft)] sm:text-base">{sign.name}</Typography>
              <div className="grid gap-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">{sign.trait}</div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                  <span className="font-semibold text-white">{content.common.rulingPlanet}:</span> {sign.rulingPlanet}
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                  <span className="font-semibold text-white">{content.common.strengths}:</span> {sign.strengths}
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                  <span className="font-semibold text-white">{content.common.challenges}:</span> {sign.challenges}
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                  <span className="font-semibold text-white">{content.common.luckyColorsGemstone}:</span> {sign.lucky}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 stack-card glass-card content-box rounded-[28px]">
          <Typography component="h2" variant="h4" className="mb-4 text-white">
            {page.outroTitle}
          </Typography>
          <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
            {page.outroBody}
          </Typography>
        </div>
      </Container>
    </>
  );
}

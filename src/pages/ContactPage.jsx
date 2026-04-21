import { Button, Container, TextField, Typography } from "@mui/material";
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
      <Container maxWidth="lg" className="px-4 py-12 sm:py-18 lg:py-22">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[28px] p-5 sm:p-8">
            <Typography component="h2" variant="h4" className="mb-4 text-white">
              {page.reachTitle}
            </Typography>
            <div className="grid gap-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <span className="font-semibold text-white">{content.common.address}:</span> {content.brand.location} - {content.brand.postalCode}
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <span className="font-semibold text-white">{content.common.phoneWhatsapp}:</span> {content.brand.phone}
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <span className="font-semibold text-white">{content.common.email}:</span> {content.brand.email}
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                <span className="font-semibold text-white">{content.common.consultationHoursLabel}:</span> {content.common.mondaySunday}, {content.common.consultationHours}
              </div>
            </div>

            <div className="mt-6 rounded-[22px] border border-[var(--gold)]/20 bg-[rgba(199,154,92,0.08)] px-4 py-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {page.supportNote}
            </div>
          </div>

          <div className="glass-card rounded-[28px] p-5 sm:p-8">
            <Typography component="h2" variant="h4" className="mb-5 text-white">
              {page.bookTitle}
            </Typography>
            <div className="grid gap-4">
              <TextField label={content.common.name} />
              <TextField label={content.common.phoneNumber} />
              <TextField label={content.common.issueNeeded} multiline minRows={4} />
              <Button variant="contained" size="large">
                {content.common.sendQuery}
              </Button>
              <Button variant="outlined" size="large" href={content.brand.whatsapp}>
                {content.common.continueOnWhatsApp}
              </Button>
            </div>

            <div className="mt-6 grid gap-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {page.steps.map((step) => (
                <div key={step} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

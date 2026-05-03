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

      <Container maxWidth="xl" className="px-4 py-10 sm:py-14 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="editorial-panel">
            <Typography className="editorial-kicker mb-4">{content.brand.guruName}</Typography>
            <Typography className="max-w-3xl text-base leading-8 text-[var(--text-soft)] md:text-[1.0625rem]">
              {page.intro}
            </Typography>
            <div className="about-highlight-grid mt-6">
              {page.mission.paragraphs.slice(0, 3).map((item) => (
                <div key={item} className="about-highlight-card">
                  <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{item}</Typography>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4">
            <div className="about-image-card rounded-[30px]">
              <img src="/guru-floral-altar-portrait.png" alt="Guru Ji in a devotional healing space" />
            </div>
            <div className="glass-card content-box rounded-[28px]">
              <Typography className="mb-2 text-xs uppercase tracking-[0.12em] text-[var(--gold-soft)]">
                {lang === "hi" ? "सरल, सम्मानजनक, गोपनीय" : "Simple, respectful, confidential"}
              </Typography>
              <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                {lang === "hi"
                  ? "यहाँ मार्गदर्शन का केंद्र प्रदर्शन नहीं, बल्कि स्पष्टता, करुणा और भरोसेमंद दिशा है।"
                  : "The focus here is not spectacle. It is clarity, compassion, and a calm process people can trust."}
              </Typography>
            </div>
          </section>
        </div>

        <div className="about-sections-grid mt-8">
          {page.sections.map((section) => (
            <article key={section.title} className="glass-card content-box rounded-[28px]">
              <Typography component="h2" variant="h5" className="mb-3 text-white">
                {section.title}
              </Typography>
              {section.paragraphs.map((paragraph) => (
                <Typography key={paragraph} className="mb-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                  {paragraph}
                </Typography>
              ))}
            </article>
          ))}
        </div>

        <div className="about-cta-panel mt-8">
          <div>
            <Typography className="editorial-kicker mb-4">{page.mission.title}</Typography>
            <Typography component="h2" variant="h4" className="mb-3 text-white">
              {page.mission.title}
            </Typography>
            <Typography className="max-w-3xl text-sm leading-7 text-[#dbe6ff] sm:text-base">
              {page.mission.paragraphs.join(" ")}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button component={RouterLink} to={localizePath("/services")} variant="contained">
              {content.common.exploreServices}
            </Button>
            <Button component={RouterLink} to={localizePath("/contact")} variant="outlined" color="inherit">
              {content.common.bookConsultation}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

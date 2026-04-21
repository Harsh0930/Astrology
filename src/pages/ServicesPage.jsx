import { Button, Chip, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function ServicesPage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.servicesPage;
  const guruServices = content.services.filter((service) => service.category === "guru");
  const astrologyServices = content.services.filter((service) => service.category === "astrology");

  const renderServiceGroup = (title, body, services, theme = "default") => (
    <section className={theme === "astrology" ? "astrology-shift-section rounded-[32px] border border-white/10 p-5 sm:p-8" : ""}>
      <div className={theme === "astrology" ? "" : "mb-0"}>
        <Typography component="h2" variant="h3" className="mb-3 text-white">
          {title}
        </Typography>
        <Typography className={`mb-6 text-sm leading-7 sm:text-base ${theme === "astrology" ? "text-[#d0d9ef]" : "text-[var(--text-soft)]"}`}>
          {body}
        </Typography>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article id={service.id} key={service.id} className={`stack-card ${theme === "astrology" ? "astrology-panel astro-modern-border content-box" : "glass-card content-box"} rounded-[28px]`}>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Typography component="h3" variant="h4" className="text-white">
                {service.title}
              </Typography>
              <Chip
                label={service.tag}
                className={`!self-start ${theme === "astrology" ? "!bg-white/12 !text-[#bfd3ff]" : "!bg-[rgba(199,154,92,0.14)] !text-[var(--gold)]"}`}
              />
            </div>
            <Typography className={`mb-5 text-sm leading-7 sm:text-base ${theme === "astrology" ? "text-[#d0d9ef]" : "text-[var(--text-soft)]"}`}>
              {service.blurb}
            </Typography>
            <div className="mb-6 grid gap-3">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm sm:text-base">
                  <span className={theme === "astrology" ? "text-[#d0d9ef]" : "text-[var(--text-soft)]"}>{benefit}</span>
                </div>
              ))}
            </div>
            <Button component={RouterLink} to={localizePath("/contact")} variant="contained" color={theme === "astrology" ? "secondary" : "primary"}>
              {content.common.bookThisService}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );

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
        {renderServiceGroup(page.guruGroup.title, page.guruGroup.body, guruServices)}
        <div className="h-8" />
        {renderServiceGroup(page.astrologyGroup.title, page.astrologyGroup.body, astrologyServices, "astrology")}

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {page.faqs.map((item) => (
            <article key={item.question} className="glass-card rounded-[28px] p-5 sm:p-8">
              <Typography component="h3" variant="h5" className="mb-3 text-white">
                {item.question}
              </Typography>
              <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{item.answer}</Typography>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}

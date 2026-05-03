import { Link as RouterLink, useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.serviceDetailPages[serviceSlug];

  if (!page) {
    return null;
  }

  const relatedServices = content.services.filter((service) => service.id !== serviceSlug).slice(0, 3);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.hero.title,
      description: page.seo.description,
      serviceType: page.hero.title,
      areaServed: "India",
      provider: {
        "@type": "ProfessionalService",
        name: content.brand.siteName,
      },
    },
  ];

  if (page.faqs?.length) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath(page.slug)}
        basePath={page.slug}
        lang={lang}
        keywords={page.seo.keywords}
        structuredData={structuredData}
      />

      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />

      <Container maxWidth="xl" className="px-4 py-12 sm:py-18 lg:py-22">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-5">
            {page.sections.map((section, index) => (
              <section key={section.title} className={`stack-card ${index % 2 === 0 ? "glass-card" : "astrology-panel astro-modern-border"} content-box rounded-[30px]`}>
                <Typography component="h2" variant="h4" className="mb-4 text-white">
                  {section.title}
                </Typography>
                {section.paragraphs?.map((paragraph) => (
                  <Typography key={paragraph} className="mb-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                    {paragraph}
                  </Typography>
                ))}
                {section.bullets?.length ? (
                  <div className="grid gap-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <div className="grid gap-5">
            <div className="about-image-card glass-card">
              <img
                src={serviceSlug === "astrology" ? "/guru-zodiac-sanctum-portrait.png" : "/guru-cosmic-wheel-portrait.png"}
                alt={page.hero.title}
              />
            </div>

            <div className="glass-card content-box rounded-[30px]">
              <Typography className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                {lang === "hi" ? "अगला कदम" : "Next Step"}
              </Typography>
              <Typography component="h2" variant="h4" className="mb-4 text-white">
                {lang === "hi" ? "अपनी स्थिति पर व्यक्तिगत मार्गदर्शन लें" : "Take the next step with personal guidance"}
              </Typography>
              <Typography className="mb-5 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                {lang === "hi"
                  ? "यदि यह सेवा आपकी स्थिति से मेल खाती है, तो हमसे संपर्क करें। यदि आप अभी भी अनिश्चित हैं, तो हम सही दिशा चुनने में मदद करेंगे।"
                  : "If this service matches your concern, reach out directly. If you are still unsure, we will help you choose the right path with honesty and care."}
              </Typography>
              <div className="flex flex-col gap-3">
                <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
                  {content.common.bookConsultation}
                </Button>
                <Button component={RouterLink} to={localizePath("/services")} variant="outlined">
                  {content.common.viewAllServices}
                </Button>
                <Button href={content.brand.whatsapp} variant="outlined">
                  {content.common.askOnWhatsApp}
                </Button>
              </div>
            </div>

            {page.faqs?.length ? (
              <div className="glass-card content-box rounded-[30px]">
                <Typography component="h2" variant="h4" className="mb-4 text-white">
                  {lang === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                </Typography>
                <div className="grid gap-4">
                  {page.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
                      <Typography component="h3" variant="h6" className="mb-2 text-white">
                        {faq.question}
                      </Typography>
                      <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{faq.answer}</Typography>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="glass-card content-box rounded-[30px]">
              <Typography className="mb-4 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                {lang === "hi" ? "संबंधित सेवाएं" : "Related Services"}
              </Typography>
              <div className="grid gap-3">
                {relatedServices.map((service) => (
                  <RouterLink
                    key={service.id}
                    to={localizePath(service.path)}
                    className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 no-underline transition hover:border-[var(--gold)]/35 hover:bg-white/8"
                  >
                    <Typography className="mb-1 text-sm uppercase tracking-[0.16em] text-[var(--gold)]">{service.tag}</Typography>
                    <Typography className="text-white">{service.title}</Typography>
                  </RouterLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

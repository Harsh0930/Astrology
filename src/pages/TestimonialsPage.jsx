import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { PageHero } from "../components/PageHero";
import { Seo } from "../seo/Seo";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function TestimonialsPage() {
  const { lang, content, localizePath } = useSiteLanguage();
  const page = content.testimonialsPage;
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = content.testimonials;
  const active = testimonials[activeIndex];
  const previewItems = useMemo(
    () => testimonials.map((item, index) => ({ ...item, index })),
    [testimonials],
  );
  const structuredData = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        itemReviewed: {
          "@type": "ProfessionalService",
          name: content.brand.siteName,
        },
        ratingValue: (
          testimonials.reduce((sum, item) => sum + Number(item.rating || 0), 0) / Math.max(testimonials.length, 1)
        ).toFixed(1),
        reviewCount: testimonials.length,
        bestRating: "5",
        worstRating: "1",
      },
      ...testimonials.map((item) => ({
        "@context": "https://schema.org",
        "@type": "Review",
        author: {
          "@type": "Person",
          name: item.name,
        },
        reviewBody: item.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(item.rating),
          bestRating: "5",
          worstRating: "1",
        },
        itemReviewed: {
          "@type": "ProfessionalService",
          name: content.brand.siteName,
        },
      })),
    ],
    [content.brand.siteName, testimonials],
  );

  const handleMove = (direction) => {
    setActiveIndex((current) => {
      const total = testimonials.length;
      return (current + direction + total) % total;
    });
  };

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={localizePath("/testimonials")}
        basePath="/testimonials"
        lang={lang}
        keywords={page.seo.keywords}
        structuredData={structuredData}
      />

      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} description={page.hero.description} />

      <Container maxWidth="xl" className="px-4 py-10 sm:py-14 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <section className="editorial-panel">
            <Typography className="editorial-kicker mb-4">
              {lang === "hi" ? "विश्वास की आवाज़ें" : "Voices of trust"}
            </Typography>
            <Typography component="h2" variant="h4" className="mb-4 text-white">
              {lang === "hi" ? "मार्गदर्शन के बाद का बदलाव" : "What changed after guidance"}
            </Typography>
            <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">{page.intro}</Typography>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
                {content.common.bookConsultation}
              </Button>
              <Button component={RouterLink} to={localizePath("/services")} variant="outlined">
                {content.common.viewAllServices}
              </Button>
            </div>
          </section>

          <section className="testimonial-carousel-shell">
            <div className="testimonial-carousel-main">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/25 bg-[rgba(212,175,55,0.12)] text-[var(--gold)]">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <div className="flex items-center gap-2 text-[var(--gold-soft)]">
                  <FontAwesomeIcon icon={faStar} />
                  <span>{active.rating}</span>
                </div>
              </div>

              <Typography component="h2" variant="h4" className="mb-3 text-white">
                {active.name}
              </Typography>
              <Typography className="text-base leading-8 text-[var(--text-soft)] md:text-[1.0625rem]">
                {active.text}
              </Typography>

              <div className="testimonial-carousel-actions mt-6">
                <button type="button" className="testimonial-arrow-button" onClick={() => handleMove(-1)} aria-label="Previous testimonial">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button type="button" className="testimonial-arrow-button" onClick={() => handleMove(1)} aria-label="Next testimonial">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

            <div className="testimonial-carousel-nav">
              {previewItems.map((item) => (
                <button
                  key={`${item.name}-${item.index}`}
                  type="button"
                  className={`testimonial-preview-card ${item.index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(item.index)}
                >
                  <span>{item.name}</span>
                  <span>{item.rating}/5</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="about-cta-panel mt-8">
          <div>
            <Typography component="h2" variant="h4" className="mb-3 text-white">
              {page.ctaTitle}
            </Typography>
            <Typography className="max-w-3xl text-sm leading-7 text-[#dbe6ff] sm:text-base">
              {page.ctaBody}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button component={RouterLink} to={localizePath("/contact")} variant="contained" color="secondary">
              {content.common.bookConsultation}
            </Button>
            <Button component={RouterLink} to={localizePath("/about")} variant="outlined" color="inherit">
              {content.common.readAboutGuru}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

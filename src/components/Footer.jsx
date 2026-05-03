import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function Footer() {
  const { content, localizePath } = useSiteLanguage();
  const spiritualServices = content.serviceGroups.spiritual.slice(0, 4);
  const astrologyServices = content.serviceGroups.astrology.slice(0, 4);

  return (
    <Box className="footer-shell mt-16 border-t border-white/[0.08]">
      <Container maxWidth="xl" className="px-4 py-12 sm:py-16">
        <div className="footer-cta mb-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <Typography className="editorial-kicker mb-4">{content.common.bookConsultation}</Typography>
            <Typography variant="h3" className="font-heading mb-4 text-white">
              {content.footer.description}
            </Typography>
            <Typography className="max-w-xl text-base leading-8 text-[var(--text-soft)]">
              {content.brand.tagline}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 lg:items-end lg:justify-center">
            <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
              {content.common.bookConsultation}
            </Button>
            <Button variant="outlined" href={content.brand.whatsapp}>
              {content.common.whatsappNow}
            </Button>
          </div>
        </div>

        <div className="footer-grid lg:grid-cols-[1.2fr_0.8fr_0.95fr_0.95fr_1fr]">
          <div className="max-w-xl">
            <Typography variant="h4" className="font-heading mb-4 leading-tight text-white">
              {content.brand.siteName}
            </Typography>
            <Typography className="mb-6 max-w-md text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              {content.footer.description}
            </Typography>
            <div className="grid gap-3 text-sm text-[var(--text-soft)]">
              <div className="flex items-start gap-3">
                <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faEnvelope} /></span>
                <span className="break-all">{content.brand.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faPhoneVolume} /></span>
                <span>{content.brand.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faLocationDot} /></span>
                <span>{content.brand.fullAddress}</span>
              </div>
            </div>
            <div className="footer-social-row mt-5">
              <a href={content.brand.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={content.brand.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
          </div>

          <div>
            <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.pages}</Typography>
            <div className="flex flex-col gap-3 leading-7">
              {content.navLinks.map((link) => (
                <RouterLink key={link.to} className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath(link.to)}>
                  {link.label}
                </RouterLink>
              ))}
            </div>
          </div>

          <div>
            <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.spiritualServices}</Typography>
            <div className="flex flex-col gap-3 leading-7 text-[var(--text-soft)]">
              {spiritualServices.map((service) => (
                <RouterLink key={service.id} className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath(service.path)}>
                  {service.title}
                </RouterLink>
              ))}
            </div>
          </div>

          <div>
            <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.astrologyServicesLabel}</Typography>
            <div className="flex flex-col gap-3 leading-7 text-[var(--text-soft)]">
              {astrologyServices.map((service) => (
                <RouterLink key={service.id} className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath(service.path)}>
                  {service.title}
                </RouterLink>
              ))}
            </div>
          </div>

          <div>
            <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.hours}</Typography>
            <div className="flex flex-col gap-3 leading-7 text-[var(--text-soft)]">
              <span>{content.common.mondaySunday}</span>
              <span>{content.common.consultationHours}</span>
              <span>{content.common.onlineInPerson}</span>
              <div className="mt-3 border-t border-white/10 pt-3">
                <Typography className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.legal}</Typography>
                <div className="flex flex-col gap-2">
                  {content.footer.legalLinks.map((link) => (
                    <RouterLink key={link.to} className="text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath(link.to)}>
                      {link.label}
                    </RouterLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-sm text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <Typography className="leading-6">{content.brand.tagline}</Typography>
          <Typography className="leading-6">{content.common.copyright}</Typography>
        </div>
      </Container>
    </Box>
  );
}

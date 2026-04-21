import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function Footer() {
  const { content, localizePath } = useSiteLanguage();

  return (
    <Box className="mt-16 border-t border-white/10 bg-[linear-gradient(180deg,rgba(5,10,12,0.98),rgba(8,8,18,0.98))]">
      <Container maxWidth="xl" className="px-4 py-12 sm:py-16">
        <div className="footer-shell rounded-[36px] border border-white/10 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="stack-card glass-card content-box rounded-[30px]">
              <Typography className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                {content.brand.blessing}
              </Typography>
              <Typography variant="h4" className="font-heading mb-4 leading-tight text-white">
                {content.brand.siteName}
              </Typography>
              <Typography className="mb-6 max-w-2xl text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8">
                {content.footer.description}
              </Typography>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <Button component={RouterLink} to={localizePath("/contact")} variant="contained">
                  {content.common.bookConsultation}
                </Button>
                <Button variant="outlined" href={content.brand.whatsapp}>
                  {content.common.whatsappNow}
                </Button>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="footer-contact-card rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-[var(--text-soft)]">
                  <div className="mb-2 flex items-start gap-3 text-white">
                    <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <span>Email</span>
                  </div>
                  <span className="break-all">{content.brand.email}</span>
                </div>
                <div className="footer-contact-card rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-[var(--text-soft)]">
                  <div className="mb-2 flex items-start gap-3 text-white">
                    <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faPhoneVolume} /></span>
                    <span>{content.common.call}</span>
                  </div>
                  <span>{content.brand.phone}</span>
                </div>
                <div className="footer-contact-card rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-[var(--text-soft)]">
                  <div className="mb-2 flex items-start gap-3 text-white">
                    <span className="pt-1 text-[var(--gold)]"><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span>{content.common.address}</span>
                  </div>
                  <span>{content.brand.location} - {content.brand.postalCode}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stack-card glass-card content-box rounded-[28px]">
                <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.pages}</Typography>
                <div className="flex flex-col gap-3 leading-7">
                  {content.navLinks.map((link) => (
                    <RouterLink key={link.to} className="footer-link text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath(link.to)}>
                      {link.label}
                    </RouterLink>
                  ))}
                </div>
              </div>

              <div className="stack-card glass-card content-box rounded-[28px]">
                <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.popularServices}</Typography>
                <div className="flex flex-col gap-3 leading-7 text-[var(--text-soft)]">
                  {content.services.slice(0, 4).map((service) => (
                    <RouterLink key={service.id} className="footer-link text-[var(--text-soft)] no-underline transition hover:text-white" to={localizePath(`/services#${service.id}`)}>
                      {service.title}
                    </RouterLink>
                  ))}
                </div>
              </div>

              <div className="stack-card glass-card content-box rounded-[28px] sm:col-span-2">
                <Typography className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{content.common.hours}</Typography>
                <div className="grid gap-3 md:grid-cols-3 leading-7 text-[var(--text-soft)]">
                  <span>{content.common.mondaySunday}</span>
                  <span>{content.common.consultationHours}</span>
                  <span>{content.common.onlineInPerson}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
            <Typography className="leading-6">{content.brand.tagline}</Typography>
            <Typography className="leading-6">{content.common.copyright}</Typography>
          </div>
        </div>
      </Container>
    </Box>
  );
}

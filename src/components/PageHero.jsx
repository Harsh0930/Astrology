import { Container, Typography } from "@mui/material";

export function PageHero({ eyebrow, title, description }) {
  return (
    <header className="page-hero-shell">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,182,255,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_24%),linear-gradient(180deg,rgba(8,15,29,0.82),rgba(8,15,29,0.12))]" />
      <Container maxWidth="lg" className="relative">
        <div className="page-hero-panel">
          <div className="page-hero-text">
            <Typography className="editorial-kicker mb-4">{eyebrow}</Typography>
            <Typography component="h1" variant="h1" className="mb-4 max-w-4xl text-white sm:mb-5">
              {title}
            </Typography>
            <Typography className="max-w-3xl text-base leading-8 text-[var(--text-soft)] md:text-[1.0625rem] lg:text-[1.125rem]">
              {description}
            </Typography>
          </div>
        </div>
      </Container>
    </header>
  );
}

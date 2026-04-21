import { Container, Typography } from "@mui/material";

export function PageHero({ eyebrow, title, description }) {
  return (
    <header className="relative overflow-hidden border-b border-white/10 px-4 py-10 sm:py-14 lg:py-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,165,138,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(199,154,92,0.18),transparent_24%),linear-gradient(180deg,rgba(9,18,16,0.7),rgba(9,18,16,0.18))]" />
      <Container maxWidth="lg" className="relative">
        <Typography className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--gold)] sm:mb-4 sm:text-sm sm:tracking-[0.28em]">
          {eyebrow}
        </Typography>
        <Typography component="h1" variant="h1" className="mb-4 max-w-4xl text-white sm:mb-5">
          {title}
        </Typography>
        <Typography className="max-w-3xl text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8 lg:text-[1.125rem]">
          {description}
        </Typography>
      </Container>
    </header>
  );
}

import { Box, Chip, Typography } from "@mui/material";

export function SectionHeading({ eyebrow, title, body, align = "left", level = "h2" }) {
  return (
    <Box className={`section-heading-shell ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}`}>
      {eyebrow ? (
        <Chip
          label={eyebrow}
          className="!mb-3 !border !border-[var(--gold)]/28 !bg-[rgba(212,175,55,0.1)] !px-2 !text-[0.75rem] !text-[var(--gold-soft)] sm:!mb-4 sm:!text-sm"
          variant="outlined"
        />
      ) : null}
      <Typography component={level} variant="h2" className="mb-3 text-white sm:mb-4">
        {title}
      </Typography>
      {body ? (
        <Typography variant="body1" className="text-base leading-7 text-[var(--text-soft)] md:text-[1.0625rem] md:leading-8 lg:text-[1.125rem]">
          {body}
        </Typography>
      ) : null}
    </Box>
  );
}

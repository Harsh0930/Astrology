import { Box, Chip, Typography } from "@mui/material";

export function SectionHeading({ eyebrow, title, body, align = "left", level = "h2" }) {
  return (
    <Box className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Chip
          label={eyebrow}
          className="!mb-3 !border !border-[var(--gold)]/35 !bg-[rgba(199,154,92,0.1)] !text-[0.72rem] !text-[var(--gold)] sm:!mb-4 sm:!text-sm"
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

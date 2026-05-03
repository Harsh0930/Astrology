import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function AnnouncementBar() {
  const { content, localizePath, isHindi } = useSiteLanguage();
  const marqueeItems = [...content.notices, ...content.notices];

  return (
    <Box className="announcement-shell sticky top-0 z-50 border-b border-white/[0.08] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5">
        <Typography className="hidden rounded-full border border-[var(--gold)]/25 bg-[rgba(212,175,55,0.1)] px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[var(--gold-soft)] md:inline-flex">
          {isHindi ? "अपडेट" : "Updates"}
        </Typography>
        <div className="announcement-marquee">
          <div className="announcement-marquee-track">
            {marqueeItems.map((item, index) => (
              <Typography key={`${item}-${index}`} variant="body2" className="announcement-item">
                {item}
              </Typography>
            ))}
          </div>
        </div>
        <Button component={RouterLink} to={localizePath("/contact")} variant="text" color="primary" className="!shrink-0 !px-3">
          {content.common.book}
        </Button>
      </div>
    </Box>
  );
}

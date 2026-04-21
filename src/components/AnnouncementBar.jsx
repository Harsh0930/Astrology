import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const { content, localizePath } = useSiteLanguage();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % content.notices.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [content.notices.length]);

  return (
    <Box className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,22,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
        <Typography variant="body2" className="pr-2 text-[var(--text-soft)]">
          {content.notices[index]}
        </Typography>
        <Button component={RouterLink} to={localizePath("/contact")} variant="text" color="primary" className="!shrink-0">
          {content.common.book}
        </Button>
      </div>
    </Box>
  );
}

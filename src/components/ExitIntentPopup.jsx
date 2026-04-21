import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faGift, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const { content, localizePath } = useSiteLanguage();

  useEffect(() => {
    if (window.innerWidth < 768) {
      return undefined;
    }

    let shown = sessionStorage.getItem("exit-intent-shown") === "true";

    const onLeave = (event) => {
      if (shown || event.clientY > 24) {
        return;
      }
      shown = true;
      sessionStorage.setItem("exit-intent-shown", "true");
      setOpen(true);
    };

    const onScroll = () => {
      if (shown) {
        return;
      }
      const scrollRatio = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
      if (scrollRatio > 0.62) {
        shown = true;
        sessionStorage.setItem("exit-intent-shown", "true");
        setOpen(true);
      }
    };

    document.addEventListener("mouseout", onLeave);
    window.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Box className="fixed inset-x-4 bottom-6 z-[65] mx-auto max-w-lg rounded-[30px] border border-[var(--gold)]/25 bg-[linear-gradient(145deg,rgba(17,20,37,0.97),rgba(12,13,24,0.96))] p-5 shadow-[0_24px_100px_rgba(0,0,0,0.48)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Typography className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
            {content.exitPopup.eyebrow}
          </Typography>
          <Typography variant="h5" className="font-heading mb-2 text-white">
            {content.exitPopup.title}
          </Typography>
          <Typography className="text-[var(--text-soft)]">
            {content.exitPopup.body}
          </Typography>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="contained" href={content.brand.whatsapp} startIcon={<FontAwesomeIcon icon={faGift} />}>
              {content.common.whatsappNow}
            </Button>
            <Button component={RouterLink} to={localizePath("/contact")} variant="outlined" startIcon={<FontAwesomeIcon icon={faCommentDots} />}>
              {content.common.bookConsultation}
            </Button>
          </div>
        </div>
        <IconButton color="inherit" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </div>
    </Box>
  );
}

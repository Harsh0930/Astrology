import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box, IconButton, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function GreetingPopup() {
  const [open, setOpen] = useState(false);
  const { content } = useSiteLanguage();

  useEffect(() => {
    if (window.innerWidth < 640 || sessionStorage.getItem("welcome-popup-shown")) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("welcome-popup-shown", "true");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Box className="greeting-popup-card fixed inset-x-4 bottom-24 z-[60] mx-auto max-w-md rounded-[30px] border border-[var(--gold)]/25 bg-[linear-gradient(160deg,rgba(18,35,31,0.98),rgba(8,17,15,0.96))] p-5 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur sm:bottom-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Typography variant="h5" className="mb-2 text-white">
            {content.greetingPopup.title}
          </Typography>
          <Typography className="text-[var(--text-soft)]">
            {content.greetingPopup.body}
          </Typography>
        </div>
        <IconButton color="inherit" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </div>
    </Box>
  );
}

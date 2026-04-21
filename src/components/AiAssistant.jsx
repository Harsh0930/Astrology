import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faWandMagicSparkles, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function AiAssistant() {
  const { content, localizePath } = useSiteLanguage();
  const promptKeys = Object.keys(content.aiAssistant.prompts);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(content.aiAssistant.defaultMessage);

  useEffect(() => {
    setMessage(content.aiAssistant.defaultMessage);
  }, [content.aiAssistant.defaultMessage]);

  return (
    <>
      {open ? (
        <Paper className="fixed bottom-22 right-3 z-50 w-[min(92vw,360px)] rounded-[28px] border border-white/10 bg-[rgba(13,15,31,0.96)] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur sm:bottom-6 sm:right-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <Typography variant="h6" className="text-white">
                {content.aiAssistant.title}
              </Typography>
              <Typography className="text-sm text-[var(--text-soft)]">
                {content.aiAssistant.subtitle}
              </Typography>
            </div>
            <IconButton color="inherit" onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </IconButton>
          </div>
          <div className="rounded-[22px] bg-white/5 p-4 text-sm leading-6 text-[var(--text-soft)]">
            {message}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {promptKeys.map((key) => (
              <Button key={key} variant="outlined" onClick={() => setMessage(content.aiAssistant.prompts[key])}>
                {key}
              </Button>
            ))}
            <Button component={RouterLink} to={localizePath("/contact")} variant="contained" startIcon={<FontAwesomeIcon icon={faWandMagicSparkles} />}>
              {content.common.bookNow}
            </Button>
          </div>
        </Paper>
      ) : null}

      <Button
        variant="contained"
        startIcon={<FontAwesomeIcon icon={faCommentDots} />}
        onClick={() => setOpen(true)}
        className="!fixed !bottom-22 !right-3 !z-50 !rounded-full !bg-[linear-gradient(135deg,#C79A5C,#5EA58A)] !px-4 !py-3 !text-black sm:!bottom-6 sm:!right-4 sm:!px-5"
      >
        {content.common.ask}
      </Button>
    </>
  );
}

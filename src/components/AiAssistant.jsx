import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCommentDots, faWandMagicSparkles, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function AiAssistant() {
  const { content, localizePath, isHindi } = useSiteLanguage();
  const promptKeys = Object.keys(content.aiAssistant.prompts);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(content.aiAssistant.defaultMessage);

  useEffect(() => {
    setMessage(content.aiAssistant.defaultMessage);
  }, [content.aiAssistant.defaultMessage]);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-ai-assistant", handleOpen);
    return () => window.removeEventListener("open-ai-assistant", handleOpen);
  }, []);

  return (
    <>
      {open ? (
        <Paper className="assistant-panel-shell fixed bottom-[7.2rem] left-3 right-3 z-[52] max-h-[calc(100vh-8.6rem)] w-auto overflow-y-auto rounded-[28px] border border-white/10 bg-[rgba(13,15,31,0.96)] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur md:bottom-[5.9rem] md:left-auto md:right-4 md:max-h-[calc(100vh-7.6rem)] md:w-[min(92vw,360px)]">
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

      {!open ? (
        <button type="button" onClick={() => setOpen(true)} className="ask-trigger-button" aria-label={content.common.ask}>
          <span className="ask-trigger-orb">
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <span className="ask-trigger-copy">
            <span className="ask-trigger-kicker">{isHindi ? "तुरंत सहायता" : "Instant Help"}</span>
            <span className="ask-trigger-label">{content.common.ask}</span>
          </span>
          <span className="ask-trigger-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </button>
      ) : null}
    </>
  );
}

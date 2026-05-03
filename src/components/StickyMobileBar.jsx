import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faChevronDown,
  faCommentDots,
  faPhoneVolume,
  faVolumeHigh,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";
import { useToast } from "../context/ToastContext";

export function StickyMobileBar() {
  const { content, localizePath, isHindi } = useSiteLanguage();
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const actions = [
    { label: content.common.call, href: `tel:${content.brand.phoneCompact}`, icon: <FontAwesomeIcon icon={faPhoneVolume} /> },
    { label: content.common.whatsapp, href: content.brand.whatsapp, icon: <FontAwesomeIcon icon={faWhatsapp} /> },
    { label: content.common.book, to: localizePath("/contact"), icon: <FontAwesomeIcon icon={faCalendarDays} /> },
    { label: content.common.ask, action: "assistant", icon: <FontAwesomeIcon icon={faCommentDots} /> },
  ];

  useEffect(() => {
    const handleAudioState = (event) => {
      setAudioEnabled(Boolean(event.detail?.enabled));
    };

    window.addEventListener("ambient-audio-state", handleAudioState);
    return () => window.removeEventListener("ambient-audio-state", handleAudioState);
  }, []);

  const handleToggle = () => {
    setOpen((current) => {
      const next = !current;
      showToast(
        next ? (isHindi ? "क्विक एक्शन खुले" : "Quick actions opened") : (isHindi ? "क्विक एक्शन बंद हुए" : "Quick actions hidden"),
        "success",
      );
      return next;
    });
  };

  const handleAudioToggle = () => {
    window.dispatchEvent(new CustomEvent("toggle-ambient-audio"));
  };

  const handleAskOpen = () => {
    window.dispatchEvent(new CustomEvent("open-ai-assistant"));
    setOpen(false);
  };

  return (
    <Box className="mobile-action-bar fixed inset-x-2 bottom-2 z-40 md:hidden">
      <div className={`mobile-action-panel ${open ? "is-open" : "is-closed"}`}>
        <div className="grid grid-cols-2 gap-2">
          {actions.map((action, index) => (
            <Tooltip key={action.label} title={action.label} placement="top">
              {action.to ? (
                <Box component={RouterLink} to={action.to} aria-label={action.label} className={`mobile-action-link mobile-action-tile ${index === 1 ? "is-highlight" : ""}`} onClick={() => setOpen(false)}>
                  <span className={`mobile-action-icon ${index === 1 ? "is-highlight" : ""}`}>{action.icon}</span>
                  <span className="mobile-action-label">{action.label}</span>
                </Box>
              ) : action.action === "assistant" ? (
                <button type="button" aria-label={action.label} className={`mobile-action-link mobile-action-tile ${index === 1 ? "is-highlight" : ""}`} onClick={handleAskOpen}>
                  <span className={`mobile-action-icon ${index === 1 ? "is-highlight" : ""}`}>{action.icon}</span>
                  <span className="mobile-action-label">{action.label}</span>
                </button>
              ) : (
                <a href={action.href} aria-label={action.label} className={`mobile-action-link mobile-action-tile ${index === 1 ? "is-highlight" : ""}`} onClick={() => setOpen(false)}>
                  <span className={`mobile-action-icon ${index === 1 ? "is-highlight" : ""}`}>{action.icon}</span>
                  <span className="mobile-action-label">{action.label}</span>
                </a>
              )}
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="mobile-action-bar-shell">
        <div>
          <Typography className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            {isHindi ? "त्वरित लिंक" : "Quick Links"}
          </Typography>
          <Typography className="text-[0.8125rem] text-[var(--text-soft)]">
            {isHindi ? "कॉल, व्हाट्सऐप, पूछें या बुकिंग" : "Call, WhatsApp, ask, or book instantly"}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <IconButton className={`!h-10 !w-10 !border !border-white/10 !bg-white/5 ${audioEnabled ? "!text-[var(--gold)]" : "!text-white"}`} onClick={handleAudioToggle}>
            <FontAwesomeIcon icon={faVolumeHigh} />
          </IconButton>
          <IconButton className="!h-10 !w-10 !border !border-[var(--gold)]/20 !bg-[rgba(199,154,92,0.12)] !text-[var(--gold)]" onClick={handleToggle}>
            <FontAwesomeIcon icon={open ? faXmark : faChevronDown} />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

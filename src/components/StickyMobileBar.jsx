import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays, faChevronDown, faPhoneVolume, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";
import { useToast } from "../context/ToastContext";

export function StickyMobileBar() {
  const { content, localizePath } = useSiteLanguage();
  const { showToast } = useToast();
  const [open, setOpen] = useState(false);

  const actions = [
    { label: content.common.call, href: `tel:${content.brand.phoneCompact}`, icon: <FontAwesomeIcon icon={faPhoneVolume} /> },
    { label: content.common.whatsapp, href: content.brand.whatsapp, icon: <FontAwesomeIcon icon={faWhatsapp} /> },
    { label: content.common.book, to: localizePath("/contact"), icon: <FontAwesomeIcon icon={faCalendarDays} /> },
  ];

  const handleToggle = () => {
    setOpen((current) => {
      const next = !current;
      showToast(next ? "Quick actions opened" : "Quick actions hidden", "success");
      return next;
    });
  };

  return (
    <Box className="mobile-action-bar fixed inset-x-2 bottom-2 z-40 rounded-[28px] border border-white/10 bg-[rgba(8,18,16,0.94)] p-2 shadow-[0_15px_60px_rgba(0,0,0,0.5)] backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3 rounded-[22px] border border-white/10 bg-white/5 px-3 py-2">
        <div>
          <Typography className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            Quick Links
          </Typography>
          <Typography className="text-[0.8125rem] text-[var(--text-soft)]">
            Call, WhatsApp, or book instantly
          </Typography>
        </div>
        <IconButton className="!h-10 !w-10 !border !border-[var(--gold)]/20 !bg-[rgba(199,154,92,0.12)] !text-[var(--gold)]" onClick={handleToggle}>
          <FontAwesomeIcon icon={open ? faXmark : faChevronDown} />
        </IconButton>
      </div>

      <div className={`mobile-action-links mt-2 grid grid-cols-3 gap-2 ${open ? "is-open" : "is-closed"}`}>
        {actions.map((action, index) => (
          <Tooltip key={action.label} title={action.label} placement="top">
            {action.to ? (
              <Box
                component={RouterLink}
                to={action.to}
                aria-label={action.label}
                className={`mobile-action-link flex min-w-0 items-center justify-center rounded-[20px] px-2 py-3 text-center no-underline text-lg ${
                  index === 1
                    ? "bg-[linear-gradient(135deg,rgba(199,154,92,0.96),rgba(241,225,197,0.88))] text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${index === 1 ? "bg-black/10" : "bg-white/8"}`}>
                  {action.icon}
                </span>
              </Box>
            ) : (
              <a
                href={action.href}
                aria-label={action.label}
                className={`mobile-action-link flex min-w-0 items-center justify-center rounded-[20px] px-2 py-3 text-center no-underline text-lg ${
                  index === 1
                    ? "bg-[linear-gradient(135deg,rgba(199,154,92,0.96),rgba(241,225,197,0.88))] text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${index === 1 ? "bg-black/10" : "bg-white/8"}`}>
                  {action.icon}
                </span>
              </a>
            )}
          </Tooltip>
        ))}
      </div>
    </Box>
  );
}

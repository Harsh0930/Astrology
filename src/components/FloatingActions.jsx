import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box, Tooltip } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function FloatingActions() {
  const { content } = useSiteLanguage();
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      href: content.brand.whatsapp,
      label: content.common.whatsapp,
      accent: "is-whatsapp",
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      href: content.brand.instagram,
      label: "Instagram",
      accent: "is-instagram",
    },
    {
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      href: content.brand.facebook,
      label: "Facebook",
      accent: "is-facebook",
    },
  ];

  return (
    <Box className="floating-action-dock fixed bottom-5 left-4 z-40 hidden items-center md:flex xl:left-6">
      <Tooltip title={open ? "Close" : "Open Social Links"} placement="right">
        <button
          type="button"
          aria-label={open ? "Close social links" : "Open social links"}
          aria-expanded={open}
          className="floating-toggle-button"
          onClick={() => setOpen((current) => !current)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faShareNodes} />
        </button>
      </Tooltip>

      <div className={`floating-social-stack ${open ? "is-open" : ""}`}>
        {actions.map((item) => (
          <Tooltip key={item.label} title={item.label} placement="top">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={`floating-social-link ${item.accent}`}
            >
              <span>{item.icon}</span>
            </a>
          </Tooltip>
        ))}
      </div>
    </Box>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Box, Tooltip } from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function FloatingActions() {
  const { content } = useSiteLanguage();

  const links = [
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      href: content.brand.whatsapp,
      label: content.common.whatsapp,
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FontAwesomeIcon icon={faPhoneVolume} />,
      href: `tel:${content.brand.phoneCompact}`,
      label: content.common.call,
    },
  ];

  return (
    <Box className="floating-action-dock fixed bottom-28 right-4 z-40 hidden rounded-[30px] border border-white/10 bg-[rgba(10,22,19,0.74)] p-2 shadow-[0_22px_70px_rgba(0,0,0,0.38)] backdrop-blur sm:flex sm:flex-col sm:gap-2">
      {links.map((item, index) => (
        <Tooltip key={item.label} title={item.label} placement="left">
          <a
            href={item.href}
            aria-label={item.label}
            className={`floating-action-link flex h-13 w-13 items-center justify-center rounded-full border no-underline text-lg transition ${
              index === 0
                ? "border-[rgba(199,154,92,0.45)] bg-[linear-gradient(135deg,rgba(199,154,92,0.98),rgba(241,225,197,0.9))] text-black"
                : "border-white/10 bg-white/6 text-white hover:border-[var(--gold)]/25 hover:bg-white/10"
            }`}
          >
            <span>{item.icon}</span>
          </a>
        </Tooltip>
      ))}
    </Box>
  );
}

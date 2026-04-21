import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faOm, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function Navbar() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const { content, localizePath, switchLanguagePath, isHindi } = useSiteLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSwitchLanguage = () => {
    navigate(switchLanguagePath(isHindi ? "en" : "hi"));
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className={elevated ? "border-b border-white/10 bg-[rgba(8,17,15,0.88)] backdrop-blur-xl" : "bg-transparent"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters className="min-h-[72px] justify-between gap-3 py-2">
            <Box component={RouterLink} to={localizePath("/")} className="min-w-0 flex items-center gap-3 no-underline">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[radial-gradient(circle_at_top,_rgba(199,154,92,0.36),_rgba(94,165,138,0.08))] sm:h-11 sm:w-11">
                <FontAwesomeIcon icon={faOm} className="text-[var(--gold)]" />
              </div>
              <div className="min-w-0">
                <Typography variant="h6" className="truncate text-base text-white sm:text-lg">
                  {content.brand.shortName}
                </Typography>
                <Typography variant="caption" className="block truncate text-[var(--text-soft)]">
                  {content.brand.location}
                </Typography>
              </div>
            </Box>

            <Box className="hidden items-center gap-5 md:flex">
              {content.navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={localizePath(link.to)}
                  className={({ isActive }) =>
                    `text-sm font-semibold no-underline transition ${isActive || location.pathname === localizePath(link.to) ? "text-[var(--gold)]" : "text-white hover:text-[var(--gold)]"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </Box>

            <Box className="hidden items-center gap-3 md:flex">
              <Button variant="text" onClick={handleSwitchLanguage} startIcon={<FontAwesomeIcon icon={faGlobe} />}>
                {content.languageToggle}
              </Button>
              <Button variant="outlined" href={content.brand.whatsapp}>
                {content.common.whatsappNow}
              </Button>
              <Button component={RouterLink} to={localizePath("/contact")} variant="contained" startIcon={<FontAwesomeIcon icon={faWandMagicSparkles} />}>
                {content.common.bookConsultation}
              </Button>
            </Box>

            <IconButton className="md:!hidden" color="inherit" onClick={() => setOpen(true)}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="h-full w-[280px] bg-[var(--card)] px-4 py-6">
          <List>
            {content.navLinks.map((link) => (
              <ListItemButton key={link.to} component={RouterLink} to={localizePath(link.to)} onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <div className="mt-4 grid gap-3">
            <Button fullWidth variant="outlined" onClick={handleSwitchLanguage} startIcon={<FontAwesomeIcon icon={faGlobe} />}>
              {content.languageToggle}
            </Button>
            <Button fullWidth component={RouterLink} to={localizePath("/contact")} variant="contained" onClick={() => setOpen(false)}>
              {content.common.bookConsultation}
            </Button>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

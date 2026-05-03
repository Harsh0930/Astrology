import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
  TextField,
  Toolbar,
} from "@mui/material";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function Navbar() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
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

  const searchResults = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    const pageMatches = content.navLinks.map((link) => ({
      label: link.label,
      to: localizePath(link.to),
      type: isHindi ? "पेज" : "Page",
    }));

    const serviceMatches = content.services.map((service) => ({
      label: service.title,
      to: localizePath(service.path),
      type: service.category === "spiritual" ? content.common.serviceCategorySpiritual : content.common.serviceCategoryAstrology,
    }));

    return [...pageMatches, ...serviceMatches]
      .filter((item) => item.label.toLowerCase().includes(value))
      .slice(0, 6);
  }, [content.common.serviceCategoryAstrology, content.common.serviceCategorySpiritual, content.navLinks, content.services, isHindi, localizePath, query]);

  const handleNavigate = (target) => {
    navigate(target);
    setQuery("");
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className={elevated ? "border-b border-white/[0.08] bg-[rgba(8,16,31,0.76)] backdrop-blur-2xl" : "bg-transparent"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters className="min-h-[78px] justify-between gap-3 py-3">
            <Box component={RouterLink} to={localizePath("/")} className="rounded-full border border-white/[0.08] bg-white/[0.04] p-2.5 no-underline backdrop-blur">
              <div className="navbar-logo-ring">
                <img src="/Chintpurni-blessings-seal.jpeg" alt="Chintpurni Blessings logo" className="navbar-logo-image" />
              </div>
            </Box>

            <Box className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 backdrop-blur md:flex">
              {content.navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={localizePath(link.to)}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[0.95rem] font-semibold no-underline transition ${
                      isActive || location.pathname === localizePath(link.to)
                        ? "bg-white/8 text-[var(--gold-soft)]"
                        : "text-white hover:bg-white/6 hover:text-[var(--gold-soft)]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </Box>

            <Box className="relative hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex">
              <div className="navbar-search-shell">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-search-icon" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={isHindi ? "सेवा या पेज खोजें" : "Search services or pages"}
                  className="navbar-search-input"
                  aria-label={isHindi ? "खोजें" : "Search"}
                />
                {searchResults.length > 0 ? (
                  <div className="navbar-search-results">
                    {searchResults.map((result) => (
                      <button key={result.to} type="button" className="navbar-search-result" onClick={() => handleNavigate(result.to)}>
                        <span>{result.label}</span>
                        <span>{result.type}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
              <Button variant="text" onClick={handleSwitchLanguage} startIcon={<FontAwesomeIcon icon={faGlobe} />}>
                {content.languageToggle}
              </Button>
            </Box>

            <IconButton className="md:!hidden !border !border-white/10 !bg-white/5" color="inherit" onClick={() => setOpen(true)}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="h-full w-[320px] px-4 py-6">
          <TextField
            fullWidth
            size="small"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={isHindi ? "सेवा या पेज खोजें" : "Search services or pages"}
            InputProps={{
              startAdornment: <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 text-white/60" />,
            }}
          />
          {searchResults.length > 0 ? (
            <div className="mt-3 grid gap-2">
              {searchResults.map((result) => (
                <button key={`mobile-${result.to}`} type="button" className="navbar-search-result" onClick={() => handleNavigate(result.to)}>
                  <span>{result.label}</span>
                  <span>{result.type}</span>
                </button>
              ))}
            </div>
          ) : null}
          <List>
            {content.navLinks.map((link) => (
              <ListItemButton
                key={link.to}
                component={RouterLink}
                to={localizePath(link.to)}
                onClick={() => setOpen(false)}
                className="!mb-2 !rounded-[18px] !border !border-white/[0.08] !bg-white/[0.04]"
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <div className="mt-4 grid gap-3">
            <Button fullWidth variant="outlined" onClick={handleSwitchLanguage} startIcon={<FontAwesomeIcon icon={faGlobe} />}>
              {content.languageToggle}
            </Button>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

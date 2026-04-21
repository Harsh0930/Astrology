import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { FloatingActions } from "./FloatingActions";
import { StickyMobileBar } from "./StickyMobileBar";
import { GreetingPopup } from "./GreetingPopup";
import { AiAssistant } from "./AiAssistant";
import { Footer } from "./Footer";
import { ConstellationBackground } from "./ConstellationBackground";
import { AmbientAudioToggle } from "./AmbientAudioToggle";
import { ExitIntentPopup } from "./ExitIntentPopup";
import { ScrollManager } from "./ScrollManager";
import { ToastBar } from "./ToastBar";

export function AppShell() {
  return (
    <Box className="min-h-screen bg-[var(--bg)] text-white">
      <ScrollManager />
      <ToastBar />
      <ConstellationBackground />
      <AnnouncementBar />
      <Navbar />
      <GreetingPopup />
      <ExitIntentPopup />
      <FloatingActions />
      <AiAssistant />
      <AmbientAudioToggle />
      <StickyMobileBar />
      <main className="overflow-x-clip pb-26 md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}

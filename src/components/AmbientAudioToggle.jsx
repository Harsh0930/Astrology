import { useEffect, useRef, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useSiteLanguage } from "../context/SiteLanguageContext";

export function AmbientAudioToggle() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef(null);
  const { isHindi } = useSiteLanguage();

  useEffect(() => {
    const audio = new Audio("/ambient-om-chanting.mp3");
    audio.loop = true;
    audio.volume = 0.22;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (enabled) {
      audio.pause();
      setEnabled(false);
      return;
    }

    try {
      await audio.play();
      setEnabled(true);
    } catch {
      setEnabled(false);
    }
  };

  const tooltip = enabled
    ? isHindi ? "ध्वनि बंद करें" : "Mute ambient sound"
    : isHindi ? "ध्वनि चलाएँ" : "Play ambient sound";

  return (
    <Tooltip title={tooltip} placement="left">
      <IconButton
        onClick={toggleAudio}
        className="!fixed !bottom-22 !left-3 !z-50 !border !border-white/10 !bg-[rgba(12,14,28,0.84)] !text-white backdrop-blur sm:!bottom-6 sm:!left-4"
      >
        <FontAwesomeIcon icon={enabled ? faVolumeHigh : faVolumeXmark} />
      </IconButton>
    </Tooltip>
  );
}

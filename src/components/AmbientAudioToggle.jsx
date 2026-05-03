import { useEffect, useRef, useState } from "react";
import { Tooltip } from "@mui/material";
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

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("ambient-audio-state", { detail: { enabled } }));
  }, [enabled]);

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

  useEffect(() => {
    const handleToggleRequest = () => {
      toggleAudio();
    };

    window.addEventListener("toggle-ambient-audio", handleToggleRequest);
    return () => window.removeEventListener("toggle-ambient-audio", handleToggleRequest);
  });

  const tooltip = enabled
    ? isHindi ? "ध्वनि बंद करें" : "Mute ambient sound"
    : isHindi ? "ध्वनि चलाएँ" : "Play ambient sound";

  return (
    <Tooltip title={tooltip} placement="right">
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={tooltip}
        className={`desktop-ambient-button ${enabled ? "is-active" : ""}`}
      >
        <span className="desktop-ambient-icon">
          <FontAwesomeIcon icon={enabled ? faVolumeHigh : faVolumeXmark} />
        </span>
      </button>
    </Tooltip>
  );
}

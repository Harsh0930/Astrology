import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpFromBracket,
  faImages,
  faWandMagicSparkles,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useSiteLanguage } from "../context/SiteLanguageContext";

const STORAGE_KEY = "chintpurni-gallery-uploads";
const MAX_UPLOADS = 4;
const TARGET_WIDTH = 960;
const TARGET_HEIGHT = 1200;

function loadSavedUploads() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUploads(items) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

function normalizeImage(file, labels, index) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error("read_failed"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("image_failed"));
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = TARGET_WIDTH;
        canvas.height = TARGET_HEIGHT;

        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("canvas_failed"));
          return;
        }

        const scale = Math.max(TARGET_WIDTH / img.width, TARGET_HEIGHT / img.height);
        const drawWidth = img.width * scale;
        const drawHeight = img.height * scale;
        const offsetX = (TARGET_WIDTH - drawWidth) / 2;
        const offsetY = (TARGET_HEIGHT - drawHeight) / 2;

        context.fillStyle = "#08111F";
        context.fillRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        resolve({
          id: `${Date.now()}-${index}-${file.name}`,
          src: canvas.toDataURL("image/jpeg", 0.82),
          alt: file.name,
          tag: labels.uploadedTag,
          title: labels.uploadedTitle,
          caption: labels.uploadedCaption,
        });
      };

      img.src = String(reader.result);
    };

    reader.readAsDataURL(file);
  });
}

export function DevotionalGallery() {
  const { isHindi } = useSiteLanguage();
  const inputRef = useRef(null);
  const labels = useMemo(
    () =>
      isHindi
        ? {
            eyebrow: "आशीर्वाद गैलरी",
            title: "गुरु जी और देवी स्वरूप की झलकियां",
            body:
              "गुरु जी की उपस्थिति, पूजा स्थल की ऊर्जा और भक्तों द्वारा साझा की गई छवियों को एक शांत, आधुनिक दृश्य अनुभाग में सजाया गया है।",
            note: "फोन से चुनी गई तस्वीरें इसी फ्रेम अनुपात में केवल इस डिवाइस पर जोड़ी जाएंगी।",
            upload: "फोटो अपलोड करें",
            clear: "अपलोड हटाएं",
            uploadedTag: "आपकी फोटो",
            uploadedTitle: "भक्त द्वारा साझा छवि",
            uploadedCaption: "यह तस्वीर बिना किसी बैकएंड के केवल आपके ब्राउज़र में जोड़ी गई है।",
            shrineTag: "देवी दर्शन",
            shrineTitle: "पुष्प अर्पण और पूजा स्थल",
            shrineCaption: "मां चितपूर्णी के समक्ष सजा यह पवित्र स्थान पुष्प, दीप और श्रद्धा की ऊर्जा को दर्शाता है।",
            guruTag: "गुरु स्वरूप",
            guruTitle: "गुरु जी का आशीर्वादमय दर्शन",
            guruCaption: "यह छवि गुरु जी की शांत, स्थिर और संरक्षण देने वाली उपस्थिति को प्रमुख रूप से सामने लाती है।",
            currentLabel: "सक्रिय फ्रेम",
            helper: "अपनी फोन गैलरी या कैमरा से तस्वीर जोड़ें।",
            limitReached: "एक समय में अधिकतम 4 अपलोडेड फोटो रखी जा सकती हैं।",
            uploadError: "कुछ फोटो प्रोसेस नहीं हो पाईं। कृपया फिर से प्रयास करें।",
            emptyState: "नई फोटो जोड़ने पर वे नीचे की गैलरी स्ट्रिप में दिखाई देंगी।",
            navigation: "गैलरी नियंत्रण",
            collection: "फोटो संग्रह",
          }
        : {
            eyebrow: "Blessings Gallery",
            title: "A living gallery of Guru Ji and devotional presence",
            body:
              "Guru Ji, the altar atmosphere, and visitor-shared devotional moments are brought together in a quieter, more refined gallery layout.",
            note: "Photos selected from a phone are resized into the same gallery frame ratio on this device only.",
            upload: "Upload Photos",
            clear: "Clear Uploads",
            uploadedTag: "Visitor Photo",
            uploadedTitle: "Shared devotional moment",
            uploadedCaption: "This image was added only in the browser without any backend storage.",
            shrineTag: "Sacred Altar",
            shrineTitle: "Flowers, diya, and devotional offering",
            shrineCaption: "The altar image brings forward the sacred setting, floral devotion, and ceremonial warmth of the space.",
            guruTag: "Guru Presence",
            guruTitle: "Guru Ji in a calm blessing posture",
            guruCaption: "This portrait gives the gallery a direct and grounded focal point around Guru Ji's presence and guidance.",
            currentLabel: "Current frame",
            helper: "Choose a photo from your phone gallery or camera.",
            limitReached: "You can keep up to 4 uploaded photos here at a time.",
            uploadError: "Some images could not be processed. Please try again.",
            emptyState: "Once you add new photos, they will appear in the gallery strip below.",
            navigation: "Gallery controls",
            collection: "Photo collection",
          },
    [isHindi],
  );

  const baseItems = useMemo(
    () => [
      {
        id: "guru",
        src: "/gallery-guru-portrait.jpeg",
        alt: "Guru Ji seated in red devotional attire",
        tag: labels.guruTag,
        title: labels.guruTitle,
        caption: labels.guruCaption,
      },
      {
        id: "altar",
        src: "/gallery-devotional-altar.jpeg",
        alt: "Devotional altar decorated with flowers and diya",
        tag: labels.shrineTag,
        title: labels.shrineTitle,
        caption: labels.shrineCaption,
      },
    ],
    [labels],
  );

  const [uploadedItems, setUploadedItems] = useState(() => loadSavedUploads());
  const [activeIndex, setActiveIndex] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const items = useMemo(() => [...baseItems, ...uploadedItems], [baseItems, uploadedItems]);
  const activeItem = items[activeIndex] ?? items[0];
  const remainingSlots = MAX_UPLOADS - uploadedItems.length;

  useEffect(() => {
    saveUploads(uploadedItems);
  }, [uploadedItems]);

  useEffect(() => {
    if (activeIndex > items.length - 1) {
      setActiveIndex(Math.max(items.length - 1, 0));
    }
  }, [activeIndex, items.length]);

  const handleMove = (direction) => {
    setActiveIndex((current) => {
      const total = items.length;
      return (current + direction + total) % total;
    });
  };

  const handleUploadTrigger = () => {
    if (!remainingSlots || processing) {
      return;
    }

    inputRef.current?.click();
  };

  const handleFilesChange = async (event) => {
    const files = Array.from(event.target.files ?? []).slice(0, remainingSlots);
    event.target.value = "";

    if (!files.length) {
      return;
    }

    setProcessing(true);
    setError("");

    try {
      const normalized = await Promise.all(files.map((file, index) => normalizeImage(file, labels, index)));
      startTransition(() => {
        setUploadedItems((current) => [...current, ...normalized]);
        setActiveIndex(baseItems.length + uploadedItems.length);
      });
    } catch {
      setError(labels.uploadError);
    } finally {
      setProcessing(false);
    }
  };

  const handleClearUploads = () => {
    setUploadedItems([]);
    setActiveIndex(0);
    setError("");
    saveUploads([]);
  };

  return (
    <Reveal className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="gallery-section-shell">
          <div className="gallery-section-head">
            <SectionHeading eyebrow={labels.eyebrow} title={labels.title} body={labels.body} level="h2" />
          </div>

          <div className="gallery-feature-grid">
            <article className="gallery-glow-card gallery-spotlight-card">
              <div className="gallery-spotlight-media">
                <img src={activeItem.src} alt={activeItem.alt} />
              </div>
              <div className="gallery-spotlight-overlay">
                <div className="gallery-stage-meta">
                  <Typography className="gallery-stage-tag">{activeItem.tag}</Typography>
                  <div className="gallery-stage-count">
                    <FontAwesomeIcon icon={faImages} />
                    <span>
                      {labels.currentLabel}: {activeIndex + 1}/{items.length}
                    </span>
                  </div>
                </div>
                <div className="gallery-spotlight-copy">
                  <Typography component="h3" variant="h3" className="text-white">
                    {activeItem.title}
                  </Typography>
                  <Typography className="gallery-stage-caption">{activeItem.caption}</Typography>
                </div>
              </div>
            </article>

            <aside className="gallery-side-panel">
              <div className="gallery-side-card">
                <Typography className="gallery-toolbar-label">{labels.navigation}</Typography>
                <Typography className="gallery-side-title">{activeItem.title}</Typography>
                <Typography className="gallery-toolbar-note">{activeItem.caption}</Typography>
                <div className="gallery-control-row">
                  <button type="button" className="gallery-nav-button" onClick={() => handleMove(-1)} aria-label="Previous image">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button type="button" className="gallery-nav-button" onClick={() => handleMove(1)} aria-label="Next image">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>

              <div className="gallery-side-card gallery-upload-card">
                <div className="gallery-upload-header">
                <div className="gallery-upload-badge">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </div>
                  <div>
                    <Typography className="gallery-toolbar-label">{labels.collection}</Typography>
                    <Typography className="gallery-toolbar-note">{remainingSlots ? labels.note : labels.limitReached}</Typography>
                  </div>
                </div>
                <Typography className="gallery-toolbar-note">{labels.helper}</Typography>
                <input ref={inputRef} type="file" accept="image/*" multiple onChange={handleFilesChange} className="hidden" />
                <div className="gallery-toolbar-actions">
                  <Button
                    variant="contained"
                    onClick={handleUploadTrigger}
                    startIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
                    disabled={!remainingSlots || processing}
                  >
                    {processing ? "..." : labels.upload}
                  </Button>
                  {uploadedItems.length ? (
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={handleClearUploads}
                      startIcon={<FontAwesomeIcon icon={faTrashCan} />}
                    >
                      {labels.clear}
                    </Button>
                  ) : null}
                </div>
                {error ? <Typography className="gallery-upload-error">{error}</Typography> : null}
              </div>
            </aside>
          </div>

          <div className="gallery-filmstrip-shell">
            <Typography className="gallery-toolbar-label">{labels.collection}</Typography>
            <div className="gallery-filmstrip">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`gallery-filmstrip-card ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="gallery-filmstrip-media">
                    <img src={item.src} alt={item.alt} />
                  </div>
                  <div className="gallery-filmstrip-copy">
                    <Typography className="gallery-thumbnail-tag">{item.tag}</Typography>
                    <Typography className="gallery-filmstrip-title">{item.title}</Typography>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {!uploadedItems.length ? <Typography className="gallery-empty-note">{labels.emptyState}</Typography> : null}
        </div>
      </div>
    </Reveal>
  );
}

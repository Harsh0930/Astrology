import { useEffect, useMemo, useRef, useState } from "react";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faDownload, faMicrophone, faPhoneVolume, faStop } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { INDIA_STATES, getCitiesForState } from "../data/indiaLocations";

const STORAGE_KEY = "chintpurni-bookings-v2";
const COUNTRY_CODES = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA / Canada (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+971", label: "UAE (+971)" },
];
const SLOT_TIMES = [
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "1:00 PM",
  "1:15 PM",
  "1:30 PM",
  "1:45 PM",
  "2:00 PM",
  "2:30 PM",
  "2:45 PM",
  "3:00 PM",
  "3:15 PM",
  "3:30 PM",
  "4:00 PM",
  "4:15 PM",
  "4:30 PM",
  "4:45 PM",
  "5:00 PM",
];
const TOTAL_DAILY_TOKENS = SLOT_TIMES.length;

function formatDateLabel(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

function formatLongDate(dateValue, locale) {
  const date = new Date(`${dateValue}T00:00:00`);
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatDateTime(dateValue, locale) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateValue));
}

function buildDateOptions(locale, bookings) {
  const today = new Date();
  return Array.from({ length: 10 }, (_, index) => {
    const next = new Date(today);
    next.setDate(today.getDate() + index);
    const iso = next.toISOString().slice(0, 10);
    const tokensUsed = bookings.filter((b) => b.date === iso).length;
    const tokensLeft = Math.max(TOTAL_DAILY_TOKENS - tokensUsed, 0);
    const baseLabel = formatDateLabel(next, locale);
    const label = `${baseLabel} (${tokensLeft} left)`;
    return {
      value: iso,
      label,
    };
  });
}

function readBookings() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistBookings(bookings) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

function buildToken(bookings, dateValue) {
  const sameDayBookings = bookings.filter((booking) => booking.date === dateValue);
  const nextSequence = sameDayBookings.reduce((max, booking) => Math.max(max, Number(booking.sequence || 0)), 0) + 1;

  return {
    token: `CHINTPURNI-${dateValue.replaceAll("-", "")}-${String(nextSequence).padStart(3, "0")}`,
    sequence: nextSequence,
  };
}

function createInitialForm(dateOptions) {
  return {
    name: "",
    countryCode: "+91",
    phone: "",
    concern: "",
    date: dateOptions[0]?.value ?? "",
    slot: SLOT_TIMES[0],
    state: "",
    city: "",
    clientType: "new",
  };
}

function sanitizeDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function buildWhatsappMessage(entry, labels, clinicPhone) {
  return [
    labels.greetingHindi,
    labels.greetingEnglish,
    "",
    `${labels.token}: ${entry.token}`,
    `${labels.detailName}: ${entry.name}`,
    `${labels.detailPhone}: ${entry.phoneFull}`,
    `${labels.detailCityState}: ${entry.city}, ${entry.state}`,
    `${labels.detailDate}: ${entry.dateLabel}`,
    `${labels.detailSlot}: ${entry.slot}`,
    `${labels.detailConcern}: ${entry.concern}`,
    "",
    `Chintpurni Blessings: ${clinicPhone}`,
  ].join("\n");
}

export function BookingWidget({ lang = "en", phone, calendlyUrl = "" }) {
  const locale = lang === "hi" ? "hi-IN" : "en-IN";
  const isHindi = lang === "hi";
  const labels = isHindi
    ? {
        eyebrow: "बुकिंग और स्लॉट",
        title: "अपना स्लॉट चुनें और चिंतपूर्णी टोकन तुरंत प्राप्त करें",
        body: "यह फ्रंटएंड-आधारित टोकन सिस्टम है। चुना गया स्लॉट इसी डिवाइस पर सुरक्षित किया जाएगा और आपका बुकिंग कार्ड तुरंत तैयार हो जाएगा।",
        name: "पूरा नाम",
        clientType: "क्लाइंट प्रकार",
        clientTypeNew: "नए क्लाइंट",
        clientTypeOld: "पुराने क्लाइंट",
        state: "राज्य",
        city: "शहर",
        cityPlaceholder: "राज्य चुनने के बाद शहर लिखें",
        countryCode: "कंट्री कोड",
        phone: "फोन नंबर",
        concern: "समस्या / सेवा विवरण",
        date: "तारीख चुनें",
        slot: "स्लॉट चुनें",
        schedule: "परामर्श समय",
        scheduleValue: "सुबह 10:00 बजे से शाम 5:00 बजे तक",
        tokensLeft: "आज के टोकन शेष",
        tokensBooked: "बुक किए गए टोकन",
        allBooked: "इस दिन के सभी 25 टोकन बुक हो चुके हैं। कृपया दूसरी तारीख चुनें।",
        availability: "उपलब्ध स्लॉट",
        noSlot: "इस दिन के लिए अब कोई स्लॉट उपलब्ध नहीं है।",
        slotHelp: "टोकन तभी सुरक्षित होगा जब आप नीचे बुकिंग टोकन जनरेट करेंगे।",
        book: "बुकिंग टोकन जनरेट करें",
        openCalendly: "Calendly खोलें",
        callNow: "अभी कॉल करें",
        token: "आपका टोकन",
        tokenCardTitle: "परामर्श टोकन / Consultation Token",
        tokenSummary: "कृपया इस कार्ड को सुरक्षित रखें। फॉलो-अप के समय यही संदर्भ उपयोग किया जाएगा।",
        download: "PDF डाउनलोड करें",
        downloading: "PDF तैयार हो रही है...",
        greetingHindi: "नमस्ते, आपका परामर्श टोकन सुरक्षित कर दिया गया है। कृपया इस कार्ड को संभालकर रखें।",
        greetingEnglish: "Namaste, your consultation token has been reserved. Please keep this card safe for your booking reference.",
        detailName: "नाम",
        detailClientType: "क्लाइंट प्रकार",
        detailPhone: "फोन",
        detailCityState: "शहर / राज्य",
        detailConcern: "समस्या / सेवा",
        detailDate: "तारीख",
        detailSlot: "स्लॉट समय",
        detailGenerated: "जनरेट किया गया",
        detailStatus: "स्थिति",
        reserved: "बुक्ड / Reserved",
        note: "नोट: यह बुकिंग अभी केवल इसी डिवाइस के लोकल स्टोरेज में सुरक्षित होती है।",
        missingFields: "कृपया सभी आवश्यक जानकारी भरें।",
        slotTaken: "यह स्लॉट अभी बुक हो चुका है। कृपया दूसरा स्लॉट चुनें।",
        tokenSaved: "टोकन कार्ड तैयार है। चाहें तो इसे PDF में डाउनलोड करें।",
        selectStateFirst: "पहले राज्य चुनें",
        usePhone: "फोन पर सहायता",
        voiceButton: "हिंदी वॉइस",
        voiceRecording: "रिकॉर्डिंग...",
        voiceHint: "हिंदी में बोलें, आपकी आवाज़ अपने आप इस फ़ील्ड में लिख दी जाएगी।",
        voiceUnsupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है।",
        voicePermissionDenied: "वॉइस इनपुट के लिए माइक्रोफोन अनुमति दें।",
        voiceFailed: "आवाज़ रिकॉर्ड नहीं हो सकी। कृपया फिर से प्रयास करें।",
        voiceCaptured: "आपकी हिंदी आवाज़ इस फ़ील्ड में जोड़ दी गई है।",
        nameRequired: "पूरा नाम भरें।",
        nameInvalid: "नाम कम से कम 2 अक्षरों का होना चाहिए।",
        phoneRequired: "फोन नंबर भरें।",
        phoneInvalid: "कृपया सही फोन नंबर दर्ज करें।",
        stateRequired: "राज्य चुनें।",
        cityRequired: "शहर भरें।",
        cityInvalid: "शहर का नाम कम से कम 2 अक्षरों का होना चाहिए।",
        concernRequired: "समस्या या सेवा विवरण भरें।",
        concernInvalid: "कृपया कम से कम 10 अक्षरों में समस्या लिखें।",
        dateRequired: "तारीख चुनें।",
        slotRequired: "स्लॉट चुनें।",
        whatsappShareOpened: "PDF डाउनलोड हो गई है। आपके नंबर के लिए WhatsApp संदेश तैयार कर दिया गया है।",
        shareCancelled: "शेयरिंग रद्द हो गई। टोकन अभी यहीं उपलब्ध है।",
        shareFailed: "PDF डाउनलोड हो गई, लेकिन WhatsApp शेयर अपने आप नहीं खुल सका।",
      }
    : {
        eyebrow: "Booking and Slots",
        title: "Choose your slot and generate a Chintpurni token instantly",
        body: "This is a frontend-only booking flow. Your selected slot is reserved on this device and a branded token card is generated immediately.",
        name: "Full Name",
        clientType: "Client Type",
        clientTypeNew: "New Client",
        clientTypeOld: "Existing Client",
        state: "State",
        city: "From City",
        cityPlaceholder: "Type your city after selecting a state",
        countryCode: "Country Code",
        phone: "Phone Number",
        concern: "Service or concern",
        date: "Select date",
        slot: "Select slot",
        schedule: "Consultation Window",
        scheduleValue: "10:00 AM to 5:00 PM",
        tokensLeft: "Tokens left for this day",
        tokensBooked: "Tokens already booked",
        allBooked: "All 25 tokens for this date are reserved. Please choose another date.",
        availability: "Available slots",
        noSlot: "No slots are currently available for this date.",
        slotHelp: "A slot is reserved only after you generate the booking token below.",
        book: "Generate Booking Token",
        openCalendly: "Open Calendly",
        callNow: "Call Now",
        token: "Your token",
        tokenCardTitle: "Consultation Token / परामर्श टोकन",
        tokenSummary: "Please keep this card safe. The team can use it as your quick booking reference.",
        download: "Download PDF",
        downloading: "Preparing PDF...",
        greetingHindi: "नमस्ते, आपका परामर्श टोकन सुरक्षित कर दिया गया है। कृपया इस कार्ड को संभालकर रखें।",
        greetingEnglish: "Namaste, your consultation token has been reserved. Please keep this card safe for your booking reference.",
        detailName: "Name",
        detailClientType: "Client Type",
        detailPhone: "Phone",
        detailCityState: "City / State",
        detailConcern: "Concern",
        detailDate: "Date",
        detailSlot: "Slot Time",
        detailGenerated: "Generated On",
        detailStatus: "Status",
        reserved: "Reserved",
        note: "Note: this booking currently lives only in this device's local storage until a full backend is connected.",
        missingFields: "Please complete all required details before generating a token.",
        slotTaken: "That slot was just reserved. Please choose another available slot.",
        tokenSaved: "Your token card is ready. You can download it as a PDF now.",
        selectStateFirst: "Select state first",
        usePhone: "Need quick help by phone?",
        voiceButton: "Hindi Voice",
        voiceRecording: "Listening...",
        voiceHint: "Speak in Hindi and we will fill this field automatically.",
        voiceUnsupported: "Voice input is not supported in this browser.",
        voicePermissionDenied: "Please allow microphone access to use voice input.",
        voiceFailed: "We could not capture your voice. Please try again.",
        voiceCaptured: "Your Hindi voice note was added to the concern field.",
        nameRequired: "Please enter your full name.",
        nameInvalid: "Name should be at least 2 characters long.",
        phoneRequired: "Please enter your phone number.",
        phoneInvalid: "Please enter a valid phone number.",
        stateRequired: "Please select your state.",
        cityRequired: "Please enter your city.",
        cityInvalid: "City should be at least 2 characters long.",
        concernRequired: "Please describe your concern or service need.",
        concernInvalid: "Please enter at least 10 characters for the concern.",
        dateRequired: "Please select a date.",
        slotRequired: "Please select a slot.",
        whatsappShareOpened: "PDF downloaded. A WhatsApp message has been prepared for this number.",
        shareCancelled: "Sharing was cancelled. The token is still available on screen.",
        shareFailed: "PDF downloaded, but we could not open WhatsApp sharing automatically.",
      };

  const [bookings, setBookings] = useState(readBookings());
  const dateOptions = useMemo(() => buildDateOptions(locale, bookings), [locale, bookings]);
  const [form, setForm] = useState(() => createInitialForm(dateOptions));
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [success, setSuccess] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const tokenCardRef = useRef(null);
  const recognitionRef = useRef(null);
  const cityListId = `booking-city-options-${lang}`;


  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      recognitionRef.current = null;
      setSpeechSupported(false);
      return undefined;
    }

    setSpeechSupported(true);

    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results || [])
        .map((result) => result[0]?.transcript?.trim() ?? "")
        .filter(Boolean)
        .join(" ")
        .trim();

      if (transcript) {
        setForm((current) => ({
          ...current,
          concern: current.concern.trim() ? `${current.concern.trim()}\n${transcript}` : transcript,
        }));
        setErrors((current) => ({ ...current, concern: "" }));
        setFeedback({ type: "success", message: labels.voiceCaptured });
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "aborted") {
        return;
      }

      setFeedback({
        type: "error",
        message: event.error === "not-allowed" || event.error === "service-not-allowed"
          ? labels.voicePermissionDenied
          : labels.voiceFailed,
      });
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      try {
        recognition.stop();
      } catch {
        // no-op
      }
      if (recognitionRef.current === recognition) {
        recognitionRef.current = null;
      }
    };
  }, [labels.voiceCaptured, labels.voiceFailed, labels.voicePermissionDenied]);

  useEffect(() => {
    setForm((current) => ({
      ...current,
      date: current.date || dateOptions[0]?.value || "",
      slot: current.slot || SLOT_TIMES[0],
    }));
  }, [dateOptions]);

  const cityOptions = useMemo(() => getCitiesForState(form.state), [form.state]);
  const bookingsForDate = useMemo(
    () => bookings.filter((booking) => booking.date === form.date),
    [bookings, form.date],
  );
  const bookedSlots = useMemo(
    () => bookingsForDate.map((booking) => booking.slot),
    [bookingsForDate],
  );
  const availableSlots = useMemo(
    () => SLOT_TIMES.filter((slot) => !bookedSlots.includes(slot)),
    [bookedSlots],
  );
  const tokensLeft = Math.max(TOTAL_DAILY_TOKENS - bookingsForDate.length, 0);
  const dateLabel = form.date ? formatLongDate(form.date, locale) : "";

  useEffect(() => {
    if (!availableSlots.includes(form.slot)) {
      setForm((current) => ({
        ...current,
        slot: availableSlots[0] ?? "",
      }));
    }
  }, [availableSlots, form.slot]);

  const validateField = (field, value, draftForm) => {
    switch (field) {
      case "name": {
        const normalized = normalizeText(value);
        if (!normalized) {
          return labels.nameRequired;
        }
        if (normalized.length < 2) {
          return labels.nameInvalid;
        }
        return "";
      }
      case "phone": {
        const digits = sanitizeDigits(value);
        if (!digits) {
          return labels.phoneRequired;
        }
        if (digits.length < 7 || digits.length > 14) {
          return labels.phoneInvalid;
        }
        return "";
      }
      case "state":
        return draftForm.state ? "" : labels.stateRequired;
      case "city": {
        const normalized = normalizeText(value);
        if (!normalized) {
          return labels.cityRequired;
        }
        if (normalized.length < 2) {
          return labels.cityInvalid;
        }
        return "";
      }
      case "concern": {
        const normalized = normalizeText(value);
        if (!normalized) {
          return labels.concernRequired;
        }
        if (normalized.length < 10) {
          return labels.concernInvalid;
        }
        return "";
      }
      case "date":
        return draftForm.date ? "" : labels.dateRequired;
      case "slot":
        return draftForm.slot ? "" : labels.slotRequired;
      default:
        return "";
    }
  };

  const validateForm = (draftForm) => {
    const nextErrors = {};
    ["name", "phone", "state", "city", "concern", "date", "slot"].forEach((field) => {
      const message = validateField(field, draftForm[field], draftForm);
      if (message) {
        nextErrors[field] = message;
      }
    });
    return nextErrors;
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setForm((current) => {
      const nextForm = field === "state"
        ? { ...current, state: value, city: "" }
        : { ...current, [field]: value };
      return nextForm;
    });

    setErrors((current) => ({
      ...current,
      [field]: "",
      ...(field === "state" ? { city: "" } : {}),
    }));
    setFeedback(null);
  };

  const handleBlur = (field) => () => {
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, form[field], form),
    }));
  };

  const handleVoiceConcern = () => {
    if (!recognitionRef.current) {
      setFeedback({ type: "error", message: labels.voiceUnsupported });
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    setFeedback(null);

    try {
      recognitionRef.current.lang = "hi-IN";
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      setFeedback({ type: "error", message: labels.voiceFailed });
      setIsListening(false);
    }
  };

  const handleSubmit = () => {
    const normalizedForm = {
      ...form,
      name: normalizeText(form.name),
      city: normalizeText(form.city),
      concern: form.concern.trim(),
      phone: sanitizeDigits(form.phone),
    };
    const nextErrors = validateForm(normalizedForm);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setForm(normalizedForm);
      setFeedback({ type: "error", message: labels.missingFields });
      return;
    }

    const nextBookings = readBookings();
    const sameDayBookings = nextBookings.filter((booking) => booking.date === normalizedForm.date);
    const alreadyBooked = sameDayBookings.some((booking) => booking.slot === normalizedForm.slot);

    if (sameDayBookings.length >= TOTAL_DAILY_TOKENS) {
      setBookings(nextBookings);
      setFeedback({ type: "error", message: labels.allBooked });
      return;
    }

    if (alreadyBooked) {
      setBookings(nextBookings);
      setFeedback({ type: "error", message: labels.slotTaken });
      return;
    }

    const { token, sequence } = buildToken(nextBookings, normalizedForm.date);
    const entry = {
      ...normalizedForm,
      token,
      sequence,
      phoneFull: `${normalizedForm.countryCode} ${normalizedForm.phone}`,
      createdAt: new Date().toISOString(),
      dateLabel: formatLongDate(normalizedForm.date, locale),
      clientTypeLabel: normalizedForm.clientType === "new" ? labels.clientTypeNew : labels.clientTypeOld,
    };

    const updated = [...nextBookings, entry];
    persistBookings(updated);
    setBookings(updated);
    setSuccess(entry);
    setFeedback({ type: "success", message: labels.tokenSaved });
    setForm((current) => ({
      ...current,
      name: normalizedForm.name,
      phone: normalizedForm.phone,
      city: normalizedForm.city,
      concern: "",
      slot: SLOT_TIMES.find((slot) => !updated.some((booking) => booking.date === current.date && booking.slot === slot)) ?? "",
    }));
  };

  const handleDownload = async () => {
    if (!success || !tokenCardRef.current) {
      return;
    }

    try {
      setDownloading(true);
      await document.fonts?.ready;

      const canvas = await html2canvas(tokenCardRef.current, {
        backgroundColor: "#09111f",
        scale: Math.min(window.devicePixelRatio || 2, 2),
        useCORS: true,
      });
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 24;
      const scale = Math.min(
        (pageWidth - margin * 2) / canvas.width,
        (pageHeight - margin * 2) / canvas.height,
      );
      const renderWidth = canvas.width * scale;
      const renderHeight = canvas.height * scale;
      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;
      const fileName = `${success.token.toLowerCase()}.pdf`;

      pdf.addImage(imageData, "PNG", x, y, renderWidth, renderHeight, undefined, "FAST");

      const pdfBlob = pdf.output("blob");
      const pdfFile = new File([pdfBlob], fileName, { type: "application/pdf" });
      const shareMessage = buildWhatsappMessage(success, labels, phone);
      const whatsappNumber = `${success.countryCode}${sanitizeDigits(success.phone)}`.replace(/\D/g, "");

      pdf.save(fileName);

      let shareStarted = false;

      if (typeof navigator !== "undefined" && navigator.share && typeof navigator.canShare === "function") {
        try {
          if (navigator.canShare({ files: [pdfFile] })) {
            await navigator.share({
              files: [pdfFile],
              title: success.token,
              text: shareMessage,
            });
            shareStarted = true;
          }
        } catch (error) {
          if (error?.name === "AbortError") {
            setFeedback({ type: "error", message: labels.shareCancelled });
            return;
          }
        }
      }

      if (!shareStarted && typeof window !== "undefined") {
        const shareUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(shareMessage)}`;
        const popup = window.open(shareUrl, "_blank", "noopener,noreferrer");
        shareStarted = Boolean(popup) || /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
      }

      if (shareStarted) {
        setSuccess(null);
        setFeedback({ type: "success", message: labels.whatsappShareOpened });
      } else {
        setFeedback({ type: "error", message: labels.shareFailed });
      }
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="booking-widget-shell">
      <div className="booking-widget-header">
        <Typography className="editorial-kicker">{labels.eyebrow}</Typography>
        <Typography component="h2" variant="h4" className="text-white">
          {labels.title}
        </Typography>
        <Typography className="text-sm leading-7 text-[var(--text-soft)] sm:text-base">
          {labels.body}
        </Typography>
      </div>

      <div className="booking-capacity-grid">
        <div className={`booking-capacity-card ${tokensLeft === 0 ? "is-empty" : ""}`}>
          <div className="booking-capacity-icon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          <div>
            <Typography className="booking-capacity-label">{labels.tokensLeft}</Typography>
            <Typography className="booking-capacity-value">
              {tokensLeft} / {TOTAL_DAILY_TOKENS}
            </Typography>
            <Typography className="booking-capacity-note">{dateLabel}</Typography>
          </div>
        </div>

        <div className="booking-capacity-card">
          <div className="booking-capacity-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div>
            <Typography className="booking-capacity-label">{labels.schedule}</Typography>
            <Typography className="booking-capacity-value booking-capacity-value-sm">{labels.scheduleValue}</Typography>
            <Typography className="booking-capacity-note">
              {labels.tokensBooked}: {bookingsForDate.length}
            </Typography>
          </div>
        </div>
      </div>

      <div className="booking-widget-grid">
        <TextField
          label={labels.name}
          value={form.name}
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          error={Boolean(errors.name)}
          helperText={errors.name || " "}
        />

        <TextField
          select
          label={labels.clientType}
          value={form.clientType}
          onChange={handleChange("clientType")}
        >
          <MenuItem value="new">{labels.clientTypeNew}</MenuItem>
          <MenuItem value="old">{labels.clientTypeOld}</MenuItem>
        </TextField>

        <TextField
          select
          label={labels.state}
          value={form.state}
          onChange={handleChange("state")}
          onBlur={handleBlur("state")}
          error={Boolean(errors.state)}
          helperText={errors.state || " "}
        >
          {INDIA_STATES.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label={labels.city}
          value={form.city}
          onChange={handleChange("city")}
          onBlur={handleBlur("city")}
          disabled={!form.state}
          placeholder={form.state ? labels.cityPlaceholder : labels.selectStateFirst}
          inputProps={{ list: cityListId }}
          error={Boolean(errors.city)}
          helperText={errors.city || " "}
        />
        <datalist id={cityListId}>
          {cityOptions.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>

        <TextField
          select
          label={labels.countryCode}
          value={form.countryCode}
          onChange={handleChange("countryCode")}
        >
          {COUNTRY_CODES.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label={labels.phone}
          value={form.phone}
          onChange={handleChange("phone")}
          onBlur={handleBlur("phone")}
          type="tel"
          error={Boolean(errors.phone)}
          helperText={errors.phone || " "}
        />

        <TextField
          select
          label={labels.date}
          value={form.date}
          onChange={handleChange("date")}
          onBlur={handleBlur("date")}
          error={Boolean(errors.date)}
          helperText={errors.date || " "}
        >
          {dateOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label={labels.slot}
          value={form.slot}
          onChange={handleChange("slot")}
          onBlur={handleBlur("slot")}
          disabled={!availableSlots.length}
          error={Boolean(errors.slot)}
          helperText={errors.slot || " "}
        >
          {availableSlots.map((slot) => (
            <MenuItem key={slot} value={slot}>
              {slot}
            </MenuItem>
          ))}
        </TextField>

        <div className="booking-concern-shell booking-widget-full">
          <div className="booking-concern-toolbar">
            <Typography className="booking-concern-helper">
              {labels.voiceHint}
            </Typography>
            <button
              type="button"
              className={`booking-voice-button ${isListening ? "is-active" : ""}`}
              onClick={handleVoiceConcern}
              disabled={!speechSupported && !isListening}
              aria-label={isListening ? labels.voiceRecording : labels.voiceButton}
            >
              <span className="booking-voice-icon">
                <FontAwesomeIcon icon={isListening ? faStop : faMicrophone} />
              </span>
              <span>{isListening ? labels.voiceRecording : labels.voiceButton}</span>
            </button>
          </div>
          <TextField
            label={labels.concern}
            value={form.concern}
            onChange={handleChange("concern")}
            onBlur={handleBlur("concern")}
            multiline
            minRows={3}
            className="booking-concern-input"
            error={Boolean(errors.concern)}
            helperText={errors.concern || " "}
          />
        </div>
      </div>

      <div className="booking-slot-row">
        <div className="booking-slot-head">
          <Typography className="text-sm font-semibold text-white">{labels.availability}</Typography>
          <span className={`booking-token-pill ${tokensLeft === 0 ? "is-empty" : ""}`}>
            {tokensLeft === 0 ? labels.noSlot : `${tokensLeft} / ${TOTAL_DAILY_TOKENS}`}
          </span>
        </div>

        <div className="booking-slot-chips">
          {availableSlots.length ? (
            availableSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`booking-slot-chip ${form.slot === slot ? "is-active" : ""}`}
                onClick={() => {
                  setForm((current) => ({ ...current, slot }));
                  setErrors((current) => ({ ...current, slot: "" }));
                }}
              >
                {slot}
              </button>
            ))
          ) : (
            <Typography className="text-sm text-[var(--text-muted)]">{labels.allBooked}</Typography>
          )}
        </div>

        <Typography className="text-sm leading-6 text-[var(--text-muted)]">
          {labels.slotHelp}
        </Typography>
      </div>

      {feedback ? (
        <div className={`booking-feedback-card ${feedback.type === "error" ? "is-error" : "is-success"}`}>
          <Typography className="text-sm leading-7">{feedback.message}</Typography>
        </div>
      ) : null}

      <div className="booking-widget-actions">
        <Button variant="contained" onClick={handleSubmit} disabled={!form.slot || tokensLeft === 0 || downloading}>
          {labels.book}
        </Button>
        {calendlyUrl ? (
          <Button variant="outlined" href={calendlyUrl} target="_blank" rel="noreferrer">
            {labels.openCalendly}
          </Button>
        ) : null}
        <Button variant="text" href={`tel:${phone.replace(/\s+/g, "")}`}>
          {labels.callNow}
        </Button>
      </div>

      {success ? (
        <div className="booking-success-shell">
          <div ref={tokenCardRef} className="booking-token-card">
            <div className="booking-token-brand">
              <div className="booking-token-brandcopy">
                <div className="booking-token-seal">
                  <img src="/Chintpurni-blessings-seal.png" alt="Chintpurni Blessings seal" />
                </div>
                <div>
                  <Typography className="booking-token-brandlabel">Chintpurni Blessings</Typography>
                  <Typography component="p" className="booking-token-heading">
                    {labels.tokenCardTitle}
                  </Typography>
                </div>
              </div>
              <div className="booking-token-reference">
                <Typography className="booking-token-ref-label">{labels.token}</Typography>
                <Typography component="p" className="booking-token-ref-value">
                  {success.token}
                </Typography>
              </div>
            </div>

            <div className="booking-token-greeting">
              <Typography className="booking-token-greeting-hi">{labels.greetingHindi}</Typography>
              <Typography className="booking-token-greeting-en">{labels.greetingEnglish}</Typography>
            </div>

            <div className="booking-token-detail-grid">
              <div className="booking-token-detail">
                <span>{labels.detailName}</span>
                <strong>{success.name}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailClientType}</span>
                <strong>{success.clientTypeLabel}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailPhone}</span>
                <strong>{success.phoneFull}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailCityState}</span>
                <strong>{success.city}, {success.state}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailDate}</span>
                <strong>{success.dateLabel}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailSlot}</span>
                <strong>{success.slot}</strong>
              </div>
              <div className="booking-token-detail booking-token-detail-full">
                <span>{labels.detailConcern}</span>
                <strong>{success.concern}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailGenerated}</span>
                <strong>{formatDateTime(success.createdAt, locale)}</strong>
              </div>
              <div className="booking-token-detail">
                <span>{labels.detailStatus}</span>
                <strong>{labels.reserved}</strong>
              </div>
            </div>

            <Typography className="booking-token-summary">
              {labels.tokenSummary}
            </Typography>
          </div>

          <div className="booking-success-actions">
            <Button variant="contained" startIcon={<FontAwesomeIcon icon={faDownload} />} onClick={handleDownload} disabled={downloading}>
              {downloading ? labels.downloading : labels.download}
            </Button>
            <Button variant="text" startIcon={<FontAwesomeIcon icon={faPhoneVolume} />} href={`tel:${phone.replace(/\s+/g, "")}`}>
              {labels.usePhone}
            </Button>
          </div>
        </div>
      ) : null}

      <Typography className="text-sm leading-6 text-[var(--text-muted)]">
        {labels.note}
      </Typography>
    </div>
  );
}

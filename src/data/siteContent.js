const zodiacBase = [
  {
    name: "Aries",
    symbol: "AR",
    element: { en: "Fire", hi: "अग्नि" },
    vedicName: { en: "Mesh Rashi", hi: "मेष राशि" },
    trait: {
      en: "Courageous, pioneering, energetic, and action oriented.",
      hi: "साहसी, ऊर्जावान और आगे बढ़कर काम करने वाले।",
    },
    forecast: {
      en: "Career opportunities feel stronger when you act with focus instead of haste.",
      hi: "जल्दबाज़ी के बजाय एकाग्रता से काम करने पर करियर के अवसर मजबूत होते हैं।",
    },
    rulingPlanet: { en: "Mars (Mangal)", hi: "मंगल" },
    strengths: { en: "Natural leadership, boldness, and passion", hi: "नेतृत्व, साहस और जुनून" },
    challenges: { en: "Impatience, aggression, and impulsiveness", hi: "अधीरता, आवेग और आक्रामकता" },
    lucky: { en: "Red, Coral, Red Coral (Moonga)", hi: "लाल, कोरल, मूंगा" },
  },
  {
    name: "Taurus",
    symbol: "TA",
    element: { en: "Earth", hi: "पृथ्वी" },
    vedicName: { en: "Vrishabh Rashi", hi: "वृषभ राशि" },
    trait: { en: "Reliable, patient, practical, and grounded.", hi: "विश्वसनीय, धैर्यवान, व्यवहारिक और स्थिर।" },
    forecast: {
      en: "Financial choices improve when you slow down and avoid rushed commitments.",
      hi: "वित्तीय निर्णय तब बेहतर होते हैं जब आप ठहरकर सोचते हैं।",
    },
    rulingPlanet: { en: "Venus (Shukra)", hi: "शुक्र" },
    strengths: { en: "Stability, determination, and grounded judgment", hi: "स्थिरता, दृढ़ता और संतुलित सोच" },
    challenges: { en: "Stubbornness and possessiveness", hi: "जिद और अधिकार भाव" },
    lucky: { en: "Green, White, Diamond (Heera)", hi: "हरा, सफेद, हीरा" },
  },
  {
    name: "Gemini",
    symbol: "GE",
    element: { en: "Air", hi: "वायु" },
    vedicName: { en: "Mithun Rashi", hi: "मिथुन राशि" },
    trait: { en: "Curious, versatile, communicative, and mentally agile.", hi: "जिज्ञासु, बहुमुखी, संवादप्रिय और बुद्धिमान।" },
    forecast: { en: "Communication can open useful new connections this week.", hi: "इस सप्ताह संवाद नए अवसर खोल सकता है।" },
    rulingPlanet: { en: "Mercury (Budh)", hi: "बुध" },
    strengths: { en: "Intelligence, adaptability, and wit", hi: "बुद्धिमत्ता, अनुकूलन क्षमता और चतुराई" },
    challenges: { en: "Inconsistency and restlessness", hi: "अस्थिरता और चंचलता" },
    lucky: { en: "Yellow, Green, Emerald (Panna)", hi: "पीला, हरा, पन्ना" },
  },
  {
    name: "Cancer",
    symbol: "CA",
    element: { en: "Water", hi: "जल" },
    vedicName: { en: "Kark Rashi", hi: "कर्क राशि" },
    trait: { en: "Nurturing, intuitive, emotional, and family oriented.", hi: "संवेदनशील, सहज ज्ञानयुक्त और परिवार केंद्रित।" },
    forecast: { en: "Family harmony improves when you lead with steadiness and warmth.", hi: "स्थिरता और स्नेह से पारिवारिक सामंजस्य बढ़ता है।" },
    rulingPlanet: { en: "Moon (Chandra)", hi: "चंद्र" },
    strengths: { en: "Empathy, loyalty, and protectiveness", hi: "सहानुभूति, निष्ठा और संरक्षण भाव" },
    challenges: { en: "Moodiness and oversensitivity", hi: "भावनात्मक उतार-चढ़ाव और अति संवेदनशीलता" },
    lucky: { en: "White, Silver, Pearl (Moti)", hi: "सफेद, चाँदी, मोती" },
  },
  {
    name: "Leo",
    symbol: "LE",
    element: { en: "Fire", hi: "अग्नि" },
    vedicName: { en: "Simha Rashi", hi: "सिंह राशि" },
    trait: { en: "Confident, generous, expressive, and purpose led.", hi: "आत्मविश्वासी, उदार और प्रभावशाली।" },
    forecast: { en: "Leadership moments are available if you trust your instincts without forcing the pace.", hi: "सहज बुद्धि पर भरोसा रखें, नेतृत्व के अवसर मिलेंगे।" },
    rulingPlanet: { en: "Sun (Surya)", hi: "सूर्य" },
    strengths: { en: "Leadership, charisma, and creativity", hi: "नेतृत्व, आकर्षण और रचनात्मकता" },
    challenges: { en: "Ego and controlling tendencies", hi: "अहंकार और नियंत्रण की प्रवृत्ति" },
    lucky: { en: "Gold, Orange, Ruby (Manik)", hi: "स्वर्ण, नारंगी, माणिक" },
  },
  {
    name: "Virgo",
    symbol: "VI",
    element: { en: "Earth", hi: "पृथ्वी" },
    vedicName: { en: "Kanya Rashi", hi: "कन्या राशि" },
    trait: { en: "Analytical, precise, hardworking, and health conscious.", hi: "विश्लेषणात्मक, मेहनती और सूक्ष्म सोच वाले।" },
    forecast: { en: "Your routines matter more than usual, especially around health and consistency.", hi: "दिनचर्या और स्वास्थ्य पर ध्यान अभी अधिक जरूरी है।" },
    rulingPlanet: { en: "Mercury (Budh)", hi: "बुध" },
    strengths: { en: "Attention to detail and service orientation", hi: "सूक्ष्मता और सेवा भाव" },
    challenges: { en: "Overcriticism and anxiety", hi: "अधिक आलोचना और चिंता" },
    lucky: { en: "Green, Brown, Emerald (Panna)", hi: "हरा, भूरा, पन्ना" },
  },
  {
    name: "Libra",
    symbol: "LI",
    element: { en: "Air", hi: "वायु" },
    vedicName: { en: "Tula Rashi", hi: "तुला राशि" },
    trait: { en: "Balanced, diplomatic, charming, and justice seeking.", hi: "संतुलित, आकर्षक और न्यायप्रिय।" },
    forecast: { en: "Partnerships become smoother when balance is matched with honesty.", hi: "ईमानदारी और संतुलन साझेदारी को मजबूत करते हैं।" },
    rulingPlanet: { en: "Venus (Shukra)", hi: "शुक्र" },
    strengths: { en: "Fairness, grace, and aesthetic sense", hi: "न्यायप्रियता, सौम्यता और सौंदर्यबोध" },
    challenges: { en: "Indecisiveness and people pleasing", hi: "निर्णयहीनता और सबको खुश रखने की प्रवृत्ति" },
    lucky: { en: "Blue, White, Diamond (Heera)", hi: "नीला, सफेद, हीरा" },
  },
  {
    name: "Scorpio",
    symbol: "SC",
    element: { en: "Water", hi: "जल" },
    vedicName: { en: "Vrishchik Rashi", hi: "वृश्चिक राशि" },
    trait: { en: "Intense, powerful, private, and transformative.", hi: "गंभीर, शक्तिशाली और परिवर्तनशील।" },
    forecast: { en: "Real change starts from within and grows through discipline.", hi: "सच्चा परिवर्तन भीतर से शुरू होता है।" },
    rulingPlanet: { en: "Mars and Ketu", hi: "मंगल और केतु" },
    strengths: { en: "Depth, resilience, and investigation", hi: "गहराई, दृढ़ता और खोज की क्षमता" },
    challenges: { en: "Jealousy and vengefulness", hi: "ईर्ष्या और प्रतिशोध भाव" },
    lucky: { en: "Red, Maroon, Red Coral (Moonga)", hi: "लाल, मैरून, मूंगा" },
  },
  {
    name: "Sagittarius",
    symbol: "SG",
    element: { en: "Fire", hi: "अग्नि" },
    vedicName: { en: "Dhanu Rashi", hi: "धनु राशि" },
    trait: { en: "Philosophical, adventurous, optimistic, and freedom loving.", hi: "दार्शनिक, साहसी और आशावादी।" },
    forecast: { en: "Learning, travel, and thoughtful expansion are favored.", hi: "सीखने, यात्रा और विस्तार के अवसर अनुकूल हैं।" },
    rulingPlanet: { en: "Jupiter (Guru)", hi: "गुरु" },
    strengths: { en: "Wisdom, honesty, and enthusiasm", hi: "ज्ञान, ईमानदारी और उत्साह" },
    challenges: { en: "Tactlessness and overconfidence", hi: "अतिआत्मविश्वास और कठोर स्पष्टता" },
    lucky: { en: "Yellow, Purple, Yellow Sapphire (Pukhraj)", hi: "पीला, बैंगनी, पुखराज" },
  },
  {
    name: "Capricorn",
    symbol: "CP",
    element: { en: "Earth", hi: "पृथ्वी" },
    vedicName: { en: "Makar Rashi", hi: "मकर राशि" },
    trait: { en: "Disciplined, ambitious, patient, and traditional.", hi: "अनुशासित, महत्वाकांक्षी और धैर्यवान।" },
    forecast: { en: "Hard work and structure can bring stability in the coming days.", hi: "मेहनत और व्यवस्था से स्थिरता मिलेगी।" },
    rulingPlanet: { en: "Saturn (Shani)", hi: "शनि" },
    strengths: { en: "Responsibility, perseverance, and practicality", hi: "जिम्मेदारी, धैर्य और व्यवहारिकता" },
    challenges: { en: "Pessimism and rigidity", hi: "निराशावाद और कठोरता" },
    lucky: { en: "Black, Dark Blue, Blue Sapphire (Neelam)", hi: "काला, गहरा नीला, नीलम" },
  },
  {
    name: "Aquarius",
    symbol: "AQ",
    element: { en: "Air", hi: "वायु" },
    vedicName: { en: "Kumbh Rashi", hi: "कुंभ राशि" },
    trait: { en: "Independent, original, humanitarian, and future minded.", hi: "स्वतंत्र, मौलिक और दूरदर्शी।" },
    forecast: { en: "Community work and social connections can become important openings.", hi: "सामाजिक जुड़ाव नए अवसर दे सकता है।" },
    rulingPlanet: { en: "Saturn and Rahu", hi: "शनि और राहु" },
    strengths: { en: "Vision, originality, and unconventional thinking", hi: "दूरदृष्टि, मौलिकता और नवीन सोच" },
    challenges: { en: "Detachment and stubbornness", hi: "भावनात्मक दूरी और जिद" },
    lucky: { en: "Blue, Electric Blue, Blue Sapphire (Neelam)", hi: "नीला, इलेक्ट्रिक ब्लू, नीलम" },
  },
  {
    name: "Pisces",
    symbol: "PI",
    element: { en: "Water", hi: "जल" },
    vedicName: { en: "Meen Rashi", hi: "मीन राशि" },
    trait: { en: "Compassionate, artistic, intuitive, and spiritual.", hi: "दयालु, सहज और आध्यात्मिक।" },
    forecast: { en: "Trust your intuition while staying anchored in practical steps.", hi: "अंतरज्ञान पर भरोसा रखें, पर कदम व्यावहारिक रखें।" },
    rulingPlanet: { en: "Jupiter and Ketu", hi: "गुरु और केतु" },
    strengths: { en: "Empathy, creativity, and spiritual depth", hi: "सहानुभूति, रचनात्मकता और आध्यात्मिक गहराई" },
    challenges: { en: "Escapism and oversensitivity", hi: "वास्तविकता से बचना और अति संवेदनशीलता" },
    lucky: { en: "Sea Green, Yellow Sapphire, Pearl", hi: "सी ग्रीन, पुखराज, मोती" },
  },
];

const brandBase = {
  siteName: "Chintapurni Blessings",
  shortName: "Chintapurni Blessings",
  location: "Sitarganj, Uttarakhand",
  postalCode: "262405",
  blessing: "Blessed by Mata Chintapurni",
  phone: "+91 98765 43210",
  email: "support@rakeshbaba.com",
  whatsapp: "https://wa.me/919876543210",
  phoneCompact: "+919876543210",
};

const serviceCatalog = {
  en: [
    {
      id: "black-magic-removal",
      category: "guru",
      tag: "Guru Ji Healing",
      title: "Black Magic Removal",
      blurb:
        "Guru Chintapurni Kripa Das helps identify and neutralize destructive dark influences linked to unexplained illness, repeated losses, family conflict, fear, and spiritual heaviness.",
      benefits: [
        "Assessment of repeating negative patterns and spiritual blockages",
        "Guided remedial process rooted in devotion, mantra, and cleansing",
        "Support for home, relationship, and business-level disturbances",
      ],
    },
    {
      id: "witchcraft-removal",
      category: "guru",
      tag: "Guru Ji Healing",
      title: "Witchcraft Removal",
      blurb:
        "For jadu-tona, tona-totka, or energy-based harm linked to objects, spaces, or rituals, Guru Ji offers purification, protection, and ongoing safeguarding guidance.",
      benefits: [
        "Source-oriented diagnosis for people, homes, and affected spaces",
        "Protective rituals and cleansing steps for families",
        "Preventive guidance to reduce recurrence of harmful influence",
      ],
    },
    {
      id: "hypnosis-healing",
      category: "guru",
      tag: "Guru Ji Healing",
      title: "Hypnosis Healing",
      blurb:
        "A focused healing path for fear, subconscious burden, addiction patterns, emotional heaviness, and spiritually influenced mental unrest.",
      benefits: [
        "Gentle work around trauma, fear loops, and deep mental strain",
        "Helps break repetitive emotional and behavioral patterns",
        "Supports confidence, mental clarity, and inner steadiness",
      ],
    },
    {
      id: "paranormal-healing",
      category: "guru",
      tag: "Guru Ji Healing",
      title: "Paranormal Healing",
      blurb:
        "When a person, child, or property feels affected by unseen energy, attachment, fear, or repeated supernatural disturbance, Guru Ji offers calm, confidential intervention.",
      benefits: [
        "Guidance for haunted spaces and persistent negative energy",
        "Support for pitru-related and entity-related disturbances",
        "Family-centred healing and protection planning",
      ],
    },
    {
      id: "kundali-reading",
      category: "astrology",
      tag: "Neeraj Astrology",
      title: "Kundali Reading",
      blurb:
        "Astrologer Neeraj studies your birth chart in depth to reveal timing, strengths, karmic patterns, and practical remedies for life decisions.",
      benefits: [
        "Detailed chart interpretation with actionable direction",
        "Clear insight into current planetary periods and timing",
        "Practical remedies, not fear-based prediction",
      ],
    },
    {
      id: "marriage-compatibility",
      category: "astrology",
      tag: "Neeraj Astrology",
      title: "Marriage Compatibility",
      blurb:
        "Thoughtful kundali matching for families and couples who want clarity before commitment, including compatibility, dosha review, and remedy planning.",
      benefits: [
        "Compatibility review beyond basic gun matching",
        "Insight into temperament, stability, and timing",
        "Guidance for smoother decision-making and remedy support",
      ],
    },
    {
      id: "career-business-guidance",
      category: "astrology",
      tag: "Neeraj Astrology",
      title: "Career and Business Guidance",
      blurb:
        "For career crossroads, business growth, financial uncertainty, or timing-sensitive choices, Astrologer Neeraj offers grounded astrological direction.",
      benefits: [
        "Career timing, role change, and opportunity analysis",
        "Business cycle guidance and decision support",
        "Planetary remedies aligned with professional goals",
      ],
    },
    {
      id: "vastu-remedies",
      category: "astrology",
      tag: "Neeraj Astrology",
      title: "Vastu and Remedial Astrology",
      blurb:
        "Harmonize home, workplace, and personal energy through vastu guidance, gemstones, mantras, yantras, and chart-based remedies.",
      benefits: [
        "Space-energy review for home and office settings",
        "Remedies tailored to your chart and current concerns",
        "Balanced guidance for protection, progress, and peace",
      ],
    },
  ],
  hi: [
    {
      id: "black-magic-removal",
      category: "guru",
      tag: "गुरु जी हीलिंग",
      title: "काला जादू निवारण",
      blurb:
        "गुरु चिंतपूर्णी कृपा दास unexplained रुकावट, डर, पारिवारिक कलह, लगातार नुकसान और नकारात्मक प्रभाव जैसी स्थितियों में आध्यात्मिक मार्गदर्शन देते हैं।",
      benefits: [
        "दोहराती नकारात्मक घटनाओं और बाधाओं की आध्यात्मिक जाँच",
        "मंत्र, साधना और शुद्धिकरण आधारित उपाय",
        "घर, संबंध और व्यापार से जुड़ी ऊर्जा संबंधी समस्याओं में सहायता",
      ],
    },
    {
      id: "witchcraft-removal",
      category: "guru",
      tag: "गुरु जी हीलिंग",
      title: "जादू-टोना निवारण",
      blurb:
        "जादू-टोना, टोना-टोटका या वस्तु, स्थान और अनुष्ठान से जुड़े नकारात्मक प्रभावों के लिए गुरु जी शुद्धिकरण और सुरक्षा मार्गदर्शन देते हैं।",
      benefits: [
        "व्यक्ति, घर और प्रभावित स्थान की स्रोत-आधारित जाँच",
        "परिवार के लिए सुरक्षात्मक विधि और शुद्धिकरण",
        "पुनरावृत्ति कम करने हेतु निरंतर संरक्षण मार्गदर्शन",
      ],
    },
    {
      id: "hypnosis-healing",
      category: "guru",
      tag: "गुरु जी हीलिंग",
      title: "सम्मोहन हीलिंग",
      blurb:
        "भय, अवचेतन बोझ, लत, भावनात्मक भारीपन और मानसिक अशांति की अवस्थाओं के लिए यह एक केंद्रित उपचार मार्ग है।",
      benefits: [
        "गहरे मानसिक दबाव और भय चक्र पर काम",
        "दोहराते व्यवहार और भावनात्मक पैटर्न को तोड़ने में सहायता",
        "आत्मविश्वास, स्पष्टता और स्थिरता को बढ़ावा",
      ],
    },
    {
      id: "paranormal-healing",
      category: "guru",
      tag: "गुरु जी हीलिंग",
      title: "पैरानॉर्मल हीलिंग",
      blurb:
        "यदि व्यक्ति, बच्चा या स्थान अदृश्य ऊर्जा, डर, लगाव या अलौकिक बाधा से प्रभावित लगे, तो गुरु जी शांत और गोपनीय मार्गदर्शन देते हैं।",
      benefits: [
        "भूतिया स्थान और नकारात्मक ऊर्जा के लिए सहायता",
        "पितृ बाधा और अदृश्य प्रभावों पर आध्यात्मिक समर्थन",
        "पूरे परिवार के लिए सुरक्षा और संतुलन योजना",
      ],
    },
    {
      id: "kundali-reading",
      category: "astrology",
      tag: "नीरज ज्योतिष",
      title: "कुंडली अध्ययन",
      blurb:
        "ज्योतिषाचार्य नीरज जन्मपत्री का गहन अध्ययन कर समय, अवसर, कर्मिक संकेत और उपयोगी उपाय बताते हैं।",
      benefits: [
        "विस्तृत कुंडली व्याख्या और स्पष्ट दिशा",
        "वर्तमान ग्रह दशा और समय का विश्लेषण",
        "डर आधारित नहीं, उपयोगी और व्यावहारिक उपाय",
      ],
    },
    {
      id: "marriage-compatibility",
      category: "astrology",
      tag: "नीरज ज्योतिष",
      title: "विवाह मिलान",
      blurb:
        "परिवारों और दंपतियों के लिए विचारपूर्ण कुंडली मिलान, जिसमें अनुकूलता, दोष समीक्षा और उपाय मार्गदर्शन शामिल है।",
      benefits: [
        "सिर्फ गुण मिलान से आगे की विस्तृत अनुकूलता जाँच",
        "स्वभाव, स्थिरता और समय का विश्लेषण",
        "बेहतर निर्णय और उपाय समर्थन",
      ],
    },
    {
      id: "career-business-guidance",
      category: "astrology",
      tag: "नीरज ज्योतिष",
      title: "करियर और व्यवसाय मार्गदर्शन",
      blurb:
        "करियर बदलाव, व्यवसाय वृद्धि, आर्थिक अनिश्चितता या समय-संवेदनशील निर्णयों के लिए नीरज जी व्यावहारिक ज्योतिषीय दिशा देते हैं।",
      benefits: [
        "करियर अवसर, बदलाव और समय का विश्लेषण",
        "व्यवसाय चक्र और निर्णय सहयोग",
        "व्यावसायिक लक्ष्यों के अनुसार ग्रह उपाय",
      ],
    },
    {
      id: "vastu-remedies",
      category: "astrology",
      tag: "नीरज ज्योतिष",
      title: "वास्तु और ज्योतिषीय उपाय",
      blurb:
        "घर, कार्यस्थल और व्यक्तिगत ऊर्जा के संतुलन के लिए वास्तु, रत्न, मंत्र, यंत्र और कुंडली आधारित उपाय दिए जाते हैं।",
      benefits: [
        "घर और ऑफिस के लिए ऊर्जा संतुलन समीक्षा",
        "समस्या के अनुसार व्यक्तिगत उपाय",
        "सुरक्षा, प्रगति और शांति के लिए संतुलित मार्गदर्शन",
      ],
    },
  ],
};

function buildContent(lang = "en") {
  const isHindi = lang === "hi";
  const services = serviceCatalog[lang];

  return {
    locale: isHindi ? "hi-IN" : "en-IN",
    languageLabel: isHindi ? "हिंदी" : "English",
    languageToggle: isHindi ? "English" : "Hindi",
    brand: {
      ...brandBase,
      name: "Chintapurni Blessings",
      tagline: isHindi
        ? "गुरु जी की आध्यात्मिक हीलिंग और नीरज जी की व्यावहारिक वैदिक ज्योतिष सेवाएँ।"
        : "Spiritual healing by Guru Ji and practical Vedic astrology by Neeraj under one divine destination.",
    },
    notices: isHindi
      ? [
          "गुरु चिंतपूर्णी कृपा दास से काला जादू, जादू-टोना, सम्मोहन हीलिंग और पैरानॉर्मल बाधाओं के लिए मार्गदर्शन लें।",
          "ज्योतिषाचार्य नीरज से कुंडली, विवाह मिलान, करियर, व्यवसाय और वास्तु परामर्श बुक करें।",
          "सितारगंज में प्रत्यक्ष परामर्श और पूरे भारत के लिए कॉल व वीडियो सुविधा उपलब्ध है।",
        ]
      : [
          "Consult Guru Chintapurni Kripa Das for black magic removal, witchcraft relief, hypnosis healing, and paranormal disturbances.",
          "Book Astrologer Neeraj for kundali reading, marriage matching, vastu guidance, and life prediction sessions.",
          "In-person consultations available in Sitarganj, Uttarakhand, with call and video sessions for clients across India and abroad.",
        ],
    navLinks: [
      { to: "/", label: isHindi ? "होम" : "Home" },
      { to: "/about", label: isHindi ? "हमारे बारे में" : "About" },
      { to: "/services", label: isHindi ? "सेवाएँ" : "Services" },
      { to: "/horoscope", label: isHindi ? "राशिफल" : "Horoscope" },
      { to: "/rashi", label: isHindi ? "राशि गाइड" : "Rashi Guide" },
      { to: "/contact", label: isHindi ? "संपर्क" : "Contact" },
    ],
    common: {
      whatsappNow: isHindi ? "व्हाट्सऐप करें" : "WhatsApp Now",
      bookConsultation: isHindi ? "परामर्श बुक करें" : "Book Consultation",
      askOnWhatsApp: isHindi ? "व्हाट्सऐप पर पूछें" : "Ask on WhatsApp",
      bookNow: isHindi ? "अभी बुक करें" : "Book Now",
      bookThisService: isHindi ? "यह सेवा बुक करें" : "Book This Service",
      pages: isHindi ? "पेज" : "Pages",
      popularServices: isHindi ? "लोकप्रिय सेवाएँ" : "Popular Services",
      hours: isHindi ? "समय" : "Hours",
      mondaySunday: isHindi ? "सोमवार से रविवार" : "Monday to Sunday",
      consultationHours: isHindi ? "सुबह 7:00 से रात 10:00 तक" : "7:00 AM to 10:00 PM",
      onlineInPerson: isHindi ? "प्रत्यक्ष, फोन और वीडियो परामर्श उपलब्ध" : "In-person, phone, and video consultations available",
      call: isHindi ? "कॉल" : "Call",
      whatsapp: isHindi ? "व्हाट्सऐप" : "WhatsApp",
      book: isHindi ? "बुक" : "Book",
      sendQuery: isHindi ? "संदेश भेजें" : "Send Query",
      continueOnWhatsApp: isHindi ? "व्हाट्सऐप पर जारी रखें" : "Continue on WhatsApp",
      name: isHindi ? "आपका नाम" : "Your Name",
      phoneNumber: isHindi ? "फोन नंबर" : "Phone Number",
      issueNeeded: isHindi ? "अपनी समस्या लिखें" : "Tell us your concern",
      address: isHindi ? "पता" : "Address",
      phoneWhatsapp: isHindi ? "फोन / व्हाट्सऐप" : "Phone / WhatsApp",
      email: isHindi ? "ईमेल" : "Email",
      consultationHoursLabel: isHindi ? "परामर्श समय" : "Consultation Hours",
      selectRashi: isHindi ? "राशि चुनें" : "Select Rashi",
      focus: isHindi ? "फोकस" : "Focus",
      luckyColor: isHindi ? "शुभ रंग" : "Lucky Color",
      luckyWindow: isHindi ? "शुभ समय" : "Lucky Window",
      selectPeriod: isHindi ? "अवधि चुनें" : "Select Period",
      selectSign: isHindi ? "राशि चुनें" : "Select Sign",
      focusArea: isHindi ? "फोकस क्षेत्र" : "Focus Area",
      rulingPlanet: isHindi ? "स्वामी ग्रह" : "Ruling Planet",
      strengths: isHindi ? "विशेषताएँ" : "Strengths",
      challenges: isHindi ? "चुनौतियाँ" : "Challenges",
      luckyColorsGemstone: isHindi ? "शुभ रंग और रत्न" : "Lucky Colors & Gemstone",
      copyright: isHindi ? "कॉपीराइट 2026 चिंतपूर्णी ब्लेसिंग्स। सर्वाधिकार सुरक्षित।" : "Copyright 2026 Chintapurni Blessings. All rights reserved.",
      ask: isHindi ? "मार्गदर्शन पूछें" : "Ask Guidance",
      guruSection: isHindi ? "गुरु जी सेक्शन" : "Guru Section",
      astrologySection: isHindi ? "ज्योतिष सेक्शन" : "Astrology Section",
      exploreGuruServices: isHindi ? "गुरु जी सेवाएँ देखें" : "Explore Guru Services",
      exploreAstrologyServices: isHindi ? "नीरज ज्योतिष सेवाएँ देखें" : "Explore Neeraj Astrology",
      readAboutGuru: isHindi ? "गुरु जी के बारे में पढ़ें" : "Read About Guru Ji",
      readAboutNeeraj: isHindi ? "नीरज जी के बारे में पढ़ें" : "Read About Neeraj",
      viewHoroscope: isHindi ? "राशिफल देखें" : "View Horoscope",
      viewRashiGuide: isHindi ? "राशि गाइड देखें" : "View Rashi Guide",
      learnMore: isHindi ? "और जानें" : "Learn More",
      openGuruProfile: isHindi ? "गुरु प्रोफ़ाइल" : "Guru Profile",
      openAstrologyProfile: isHindi ? "ज्योतिष प्रोफ़ाइल" : "Astrology Profile",
    },
    footer: {
      description: isHindi
        ? "चिंतपूर्णी ब्लेसिंग्स सितारगंज में गुरु चिंतपूर्णी कृपा दास की आध्यात्मिक हीलिंग और ज्योतिषाचार्य नीरज की वैदिक ज्योतिष सेवाओं को एक साथ प्रस्तुत करता है।"
        : "Chintapurni Blessings brings together divine spiritual healing by Guru Chintapurni Kripa Das and solution-oriented Vedic astrology by Astrologer Neeraj for families seeking clarity, protection, and direction.",
    },
    greetingPopup: {
      title: isHindi ? "चिंतपूर्णी ब्लेसिंग्स में आपका स्वागत है" : "Welcome to Chintapurni Blessings",
      body: isHindi
        ? "यदि आपकी समस्या आध्यात्मिक बाधा, काला जादू, कुंडली, विवाह, करियर या किसी अदृश्य प्रभाव से जुड़ी है, तो हम सही विशेषज्ञ तक आपका मार्गदर्शन करेंगे।"
        : "If your concern is spiritual healing, kundali guidance, marriage, career, or an unexplained negative influence, we will help route you to the right expert with care and confidentiality.",
    },
    exitPopup: {
      eyebrow: isHindi ? "क्या अभी भी सही मार्गदर्शन खोज रहे हैं?" : "Still looking for the right guidance?",
      title: isHindi ? "अपनी समस्या के अनुसार सही विशेषज्ञ से जुड़ें" : "Speak to the healer or astrologer best suited to your concern",
      body: isHindi
        ? "काला जादू, पैरानॉर्मल, जादू-टोना और सम्मोहन हीलिंग के लिए गुरु जी से जुड़ें। कुंडली, विवाह, करियर, व्यवसाय और वास्तु के लिए नीरज जी से परामर्श लें।"
        : "For black magic, paranormal, witchcraft, and hypnosis healing concerns, connect with Guru Ji. For kundali, marriage, business, career, and vastu guidance, book Astrologer Neeraj.",
    },
    aiAssistant: {
      title: isHindi ? "परामर्श सहायक" : "Consultation Helper",
      subtitle: isHindi ? "त्वरित विकल्प चुनें और सही सेवा पाएँ।" : "Choose a quick prompt and we will guide you to the right service.",
      defaultMessage: isHindi
        ? "बताइए कि आपकी समस्या आध्यात्मिक हीलिंग, कुंडली, विवाह मिलान, करियर, वास्तु या अदृश्य बाधा से जुड़ी है, ताकि सही मार्गदर्शन दिया जा सके।"
        : "Tell us whether your concern is spiritual healing, kundali analysis, marriage matching, career guidance, vastu, or unexplained disturbances, and we will point you in the right direction.",
      prompts: isHindi
        ? {
            "काला जादू": "मुझे काला जादू, लगातार बदकिस्मती या नकारात्मक प्रभाव के लिए मार्गदर्शन चाहिए।",
            "कुंडली": "मुझे विवाह, करियर, व्यवसाय या परिवार के लिए विस्तृत कुंडली परामर्श चाहिए।",
            "पैरानॉर्मल": "मुझे अदृश्य बाधा, डर या नकारात्मक ऊर्जा से जुड़े मार्गदर्शन की जरूरत है।",
            "विवाह मिलान": "मैं महत्वपूर्ण निर्णय से पहले कुंडली मिलान चाहता/चाहती हूँ।",
          }
        : {
            "Black Magic": "I need guidance for black magic removal, repeated bad luck, or unexplained negative influence.",
            "Kundali Reading": "I want a detailed kundali reading for marriage, career, business, or family matters.",
            "Paranormal Help": "I need help with paranormal disturbances, spirit-related fear, or negative energy at home.",
            "Marriage Match": "I want kundali matching and marriage guidance before an important decision.",
          },
    },
    trustStats: isHindi
      ? [
          { value: 15, label: "आध्यात्मिक साधना और व्यावहारिक मार्गदर्शन का अनुभव" },
          { value: 2, label: "हीलिंग और ज्योतिष के लिए समर्पित दो विशेषज्ञ" },
          { value: 1000, label: "सितारगंज और उससे बाहर परामर्श" },
          { value: 24, label: "कॉल, व्हाट्सऐप और वीडियो सहायता" },
        ]
      : [
          { value: 15, label: "Years of spiritual discipline and practical guidance" },
          { value: 2, label: "Dedicated experts serving healing and astrology together" },
          { value: 1000, label: "Consultations across Sitarganj, Uttarakhand, and beyond" },
          { value: 24, label: "Supportive booking flow through call, WhatsApp, and video" },
        ],
    services,
    testimonials: isHindi
      ? [
          {
            name: "पूजा शर्मा, रुद्रपुर",
            rating: "5.0",
            text: "गुरु जी से जुड़ने के बाद घर का माहौल काफी शांत हुआ। मार्गदर्शन बहुत संयमित और भरोसेमंद था।",
          },
          {
            name: "अमित वर्मा, सितारगंज",
            rating: "5.0",
            text: "नीरज जी ने कुंडली को बहुत व्यावहारिक तरीके से समझाया। करियर के फैसले में बहुत मदद मिली।",
          },
          {
            name: "मीना कौर, हल्द्वानी",
            rating: "5.0",
            text: "विवाह मिलान और पारिवारिक चिंताओं के लिए परामर्श बेहद स्पष्ट और धैर्यपूर्ण रहा।",
          },
        ]
      : [
          {
            name: "Pooja Sharma, Rudrapur",
            rating: "5.0",
            text: "We reached Guru Ji during a very disturbing phase at home. The guidance was calm, respectful, and deeply reassuring. The atmosphere of the house changed within weeks.",
          },
          {
            name: "Amit Verma, Sitarganj",
            rating: "5.0",
            text: "Astrologer Neeraj explained my kundali in a practical way and gave remedies I could actually follow. His reading helped me take a clear career decision.",
          },
          {
            name: "Meena Kaur, Haldwani",
            rating: "5.0",
            text: "For marriage matching and family concerns, the consultation felt sincere and detailed. We did not feel rushed, and every question was answered with patience.",
          },
        ],
    home: {
      seo: {
        title: isHindi
          ? "चिंतपूर्णी ब्लेसिंग्स | गुरु जी हीलिंग और नीरज ज्योतिष"
          : "Chintapurni Blessings | Guru Ji Healing and Neeraj Astrology",
        description: isHindi
          ? "चिंतपूर्णी ब्लेसिंग्स का आधिकारिक वेबसाइट, जहाँ गुरु चिंतपूर्णी कृपा दास की आध्यात्मिक हीलिंग और ज्योतिषाचार्य नीरज की वैदिक ज्योतिष सेवाएँ उपलब्ध हैं।"
          : "Official website of Chintapurni Blessings for spiritual healing by Guru Chintapurni Kripa Das and Vedic astrology guidance by Astrologer Neeraj in Sitarganj, Uttarakhand.",
        keywords: isHindi
          ? ["सितारगंज ज्योतिष", "काला जादू निवारण", "कुंडली अध्ययन", "पैरानॉर्मल हीलिंग", "चिंतपूर्णी ब्लेसिंग्स"]
          : ["best astrologer in Sitarganj", "spiritual healer in Uttarakhand", "black magic removal Sitarganj", "kundali reading Sitarganj", "Chintapurni Blessings"],
      },
      heroChip: isHindi ? "आधिकारिक वेबसाइट | सितारगंज, उत्तराखंड" : "Official website | Sitarganj, Uttarakhand",
      title: isHindi
        ? "चिंतपूर्णी ब्लेसिंग्स में गुरु जी की हीलिंग और नीरज जी की ज्योतिष, दो अलग मार्ग, एक दिव्य सहारा।"
        : "At Chintapurni Blessings, Guru Ji heals the unseen while Neeraj reads the stars with practical clarity.",
      description: isHindi
        ? "यहाँ गुरु चिंतपूर्णी कृपा दास की सेवाएँ काला जादू, जादू-टोना, सम्मोहन और पैरानॉर्मल बाधाओं के लिए अलग रूप में प्रस्तुत हैं, जबकि ज्योतिषाचार्य नीरज की सेवाएँ कुंडली, विवाह, करियर, व्यवसाय और उपायों के लिए अलग अनुभाग में उपलब्ध हैं।"
        : "This home page now separates the spiritual healing path of Guru Chintapurni Kripa Das from the astrology guidance of Astrologer Neeraj, so visitors instantly understand which expert fits their concern.",
      quickNav: {
        eyebrow: isHindi ? "अपना मार्ग चुनें" : "Choose Your Path",
        title: isHindi ? "गुरु जी हीलिंग और नीरज ज्योतिष को अलग-अलग समझें" : "Explore Guru Ji Healing and Neeraj Astrology as two distinct experiences",
        body: isHindi
          ? "नीचे दिए गए बटन से सीधे गुरु जी सेक्शन या ज्योतिष सेक्शन पर जाएँ।"
          : "Use the quick links below to jump directly into the Guru Ji section or the Neeraj Astrology section.",
        guruButton: isHindi ? "गुरु जी सेक्शन" : "Go to Guru Ji",
        astrologyButton: isHindi ? "नीरज ज्योतिष सेक्शन" : "Go to Astrology",
      },
      guruSection: {
        eyebrow: isHindi ? "गुरु जी हीलिंग" : "Guru Ji Healing",
        title: isHindi ? "गुरु चिंतपूर्णी कृपा दास की सेवाएँ आध्यात्मिक, गहरी और पूर्णतः अलग हैं" : "Guru Chintapurni Kripa Das serves a distinctly spiritual and protection-focused path",
        body: isHindi
          ? "यदि समस्या अदृश्य बाधा, काला जादू, डर, घर की नकारात्मक ऊर्जा, जादू-टोना या मानसिक/ऊर्जात्मक भारीपन से जुड़ी है, तो यह अनुभाग गुरु जी की सेवाओं को स्पष्ट रूप से प्रस्तुत करता है।"
          : "If the concern involves black magic, unseen fear, witchcraft, paranormal disturbance, emotional heaviness, or spiritually rooted blockage, this section is where Guru Ji’s work should be highlighted first.",
        topics: [
          {
            key: "blessing",
            label: isHindi ? "दिव्य मार्ग" : "Divine Path",
            title: isHindi ? "माता चिंतपूर्णी की कृपा से जुड़े साधक" : "A spiritual practitioner rooted in Mata Chintapurni devotion",
            description: isHindi
              ? "गुरु जी की पहचान केवल सलाह नहीं, बल्कि श्रद्धा, साधना और आध्यात्मिक हस्तक्षेप के रूप में प्रस्तुत की जाती है।"
              : "Guru Ji should be presented not as a generic advisor, but as a spiritual healer whose work is anchored in devotion, cleansing, protection, and sacred intervention.",
          },
          {
            key: "expertise",
            label: isHindi ? "विशेषज्ञता" : "Expertise",
            title: isHindi ? "काला जादू, जादू-टोना, सम्मोहन और पैरानॉर्मल बाधाएँ" : "Black magic, witchcraft, hypnosis healing, and paranormal disturbances",
            description: isHindi
              ? "यह सेवाएँ ज्योतिष से अलग हैं और इन्हें आध्यात्मिक निदान, शुद्धिकरण और सुरक्षा दृष्टिकोण से समझाया गया है।"
        : "These are not astrology services. They need a separate healing narrative centred on spiritual diagnosis, cleansing, protection, and relief from negative influence.",
          },
          {
            key: "consultation",
            label: isHindi ? "कैसे जुड़ें" : "How to Begin",
            title: isHindi ? "अपनी समस्या बताइए, सही हीलिंग सेवा तक पहुँचिए" : "Start by describing the disturbance and we will route you to the right healing service",
            description: isHindi
              ? "गुरु जी सेक्शन को परिवार, घर, व्यक्ति और ऊर्जा से जुड़ी वास्तविक समस्याओं के साथ प्रस्तुत किया गया है।"
              : "The Guru section is built around real visitor language: house disturbance, fear, repeated losses, negativity, unseen pressure, and heavy energy.",
          },
        ],
        servicesTitle: isHindi ? "गुरु जी की मुख्य सेवाएँ" : "Core Guru Ji Services",
        servicesBody: isHindi ? "नीचे की सेवाएँ केवल गुरु जी हीलिंग अनुभाग से संबंधित हैं।" : "These services belong specifically to Guru Ji and should not be mixed with astrology copy.",
        primaryCta: isHindi ? "गुरु जी सेवाएँ देखें" : "View Guru Ji Services",
        secondaryCta: isHindi ? "गुरु जी के बारे में पढ़ें" : "Read About Guru Ji",
      },
      astrologySection: {
        eyebrow: isHindi ? "नीरज ज्योतिष" : "Neeraj Astrology",
        title: isHindi ? "यहाँ से वेबसाइट का मूड बदलता है, अब फोकस है कुंडली, समय और उपायों पर" : "The mood shifts here into astrology, timing, kundali analysis, and practical remedies",
        body: isHindi
          ? "नीरज जी का अनुभाग गुरु जी से पूरी तरह अलग अनुभव देता है। यहाँ कुंडली, विवाह, करियर, व्यवसाय और राशिफल जैसे विषय इंटरैक्टिव टॉगल के साथ प्रस्तुत हैं।"
          : "Neeraj’s section should feel like a different arrival experience. The color, tone, and interaction shift into kundali, timing, marriage, career, business, horoscope, and remedy-led astrology.",
        tabs: [
          {
            key: "kundali",
            label: isHindi ? "कुंडली" : "Kundali",
            title: isHindi ? "गहन कुंडली अध्ययन और जीवन दिशा" : "Deep kundali reading and chart-based life direction",
            body: isHindi
              ? "जन्मपत्री केवल भविष्य बताने के लिए नहीं, बल्कि निर्णय, समय और उपायों को समझने के लिए पढ़ी जाती है।"
              : "A kundali reading here is framed as insight plus action. Timing, strengths, blockages, and remedies are all explained in practical language.",
            bullets: isHindi
              ? ["विस्तृत कुंडली विश्लेषण", "दशा और गोचर पर आधारित समय मार्गदर्शन", "व्यक्तिगत उपाय"]
              : ["Detailed birth chart interpretation", "Time-sensitive guidance through dasha and transit analysis", "Remedies tailored to your current life phase"],
            ctaLabel: isHindi ? "कुंडली सेवा देखें" : "Explore Kundali Services",
            ctaTo: "/services#kundali-reading",
          },
          {
            key: "marriage",
            label: isHindi ? "विवाह" : "Marriage",
            title: isHindi ? "विवाह मिलान और संबंध मार्गदर्शन" : "Marriage matching and relationship guidance",
            body: isHindi
              ? "गुण मिलान से आगे बढ़कर स्वभाव, समय और पारिवारिक संतुलन को भी महत्व दिया जाता है।"
              : "The relationship approach goes beyond basic gun matching and speaks directly to compatibility, timing, family harmony, and corrective remedies.",
            bullets: isHindi
              ? ["कुंडली मिलान", "दोष और समय की समीक्षा", "परिवार उन्मुख सलाह"]
              : ["Compatibility review beyond just gun matching", "Dosha and timing checks", "Family-sensitive decision support"],
            ctaLabel: isHindi ? "विवाह सेवा देखें" : "Explore Marriage Guidance",
            ctaTo: "/services#marriage-compatibility",
          },
          {
            key: "career",
            label: isHindi ? "करियर" : "Career",
            title: isHindi ? "करियर, व्यवसाय और अवसरों का समय" : "Career, business, and timing-led decision support",
            body: isHindi
              ? "नीरज जी का यह भाग उन लोगों के लिए है जो करियर, व्यवसाय, आर्थिक दिशा और सही समय को समझना चाहते हैं।"
              : "This interactive mode is for visitors deciding on jobs, business growth, investments, role changes, or professional instability.",
            bullets: isHindi
              ? ["करियर बदलाव का समय", "व्यवसाय वृद्धि संकेत", "ग्रह उपाय और रणनीतिक दिशा"]
              : ["Career shift timing", "Business momentum analysis", "Remedies aligned to ambition and stability"],
            ctaLabel: isHindi ? "करियर सेवा देखें" : "Explore Career Guidance",
            ctaTo: "/services#career-business-guidance",
          },
          {
            key: "horoscope",
            label: isHindi ? "राशिफल" : "Horoscope",
            title: isHindi ? "राशिफल, राशि और दैनिक ज्योतिषीय संकेत" : "Horoscope, rashi, and daily astrological guidance",
            body: isHindi
              ? "सामान्य राशिफल से शुरुआत करें, फिर व्यक्तिगत कुंडली परामर्श के लिए आगे बढ़ें।"
              : "This tab acts like a soft entry point: visitors can start with horoscope or rashi guidance and then move deeper into a personal consultation.",
            bullets: isHindi
              ? ["दैनिक और साप्ताहिक राशिफल", "राशि गाइड", "व्यक्तिगत परामर्श की ओर आंतरिक लिंक"]
        : ["Daily and weekly guidance", "Rashi exploration", "Internal links into horoscope and personalised consultation"],
            ctaLabel: isHindi ? "राशिफल देखें" : "Open Horoscope",
            ctaTo: "/horoscope",
          },
        ],
        primaryCta: isHindi ? "नीरज जी के बारे में पढ़ें" : "Read About Neeraj",
        secondaryCta: isHindi ? "राशि गाइड देखें" : "Open Rashi Guide",
      },
      visit: {
        eyebrow: isHindi ? "प्रत्यक्ष या ऑनलाइन" : "Visit or connect remotely",
        title: isHindi ? "सितारगंज से लेकर दूरस्थ परामर्श तक" : "Serving Sitarganj locally and seekers everywhere through call and video",
        body: isHindi
          ? "गुरु जी और नीरज जी दोनों के लिए प्रत्यक्ष, फोन और वीडियो परामर्श की सुविधा उपलब्ध है।"
          : "Both Guru Ji and Astrologer Neeraj are available through in-person, phone, and video consultation formats.",
      },
      cta: {
        eyebrow: isHindi ? "सही विशेषज्ञ चुनें" : "Begin with the right expert",
        body: isHindi
          ? "यदि समस्या आध्यात्मिक है, गुरु जी से शुरुआत करें। यदि प्रश्न कुंडली, विवाह, करियर या समय से जुड़ा है, तो नीरज जी से जुड़ें।"
          : "If the issue feels spiritual, unseen, or heavy, start with Guru Ji. If the question is about kundali, timing, marriage, career, or business, start with Neeraj.",
      },
      trust: {
        eyebrow: isHindi ? "विश्वास की आवाज़ें" : "Voices of trust",
        title: isHindi ? "लोगों को यहाँ स्पष्टता, गोपनीयता और सच्चा मार्गदर्शन मिलता है" : "Families value clarity, care, and confidentiality here",
        body: isHindi
          ? "ज्यादातर लोग तनाव और उलझन में पहुँचते हैं, इसलिए अनुभव को शांत और भरोसेमंद बनाया गया है।"
          : "People often arrive under stress and uncertainty, so the experience is designed to feel calm, direct, and respectful.",
      },
      faqs: [
        {
          question: isHindi ? "गुरु जी से किस प्रकार की समस्या में जुड़ना चाहिए?" : "Who should consult Guru Chintapurni Kripa Das?",
          answer: isHindi
            ? "काला जादू, जादू-टोना, पैरानॉर्मल बाधा, डर, अदृश्य दबाव, नकारात्मक ऊर्जा या आध्यात्मिक भारीपन जैसी स्थितियों में गुरु जी से जुड़ें।"
            : "People usually consult Guru Ji for black magic removal, witchcraft concerns, paranormal disturbances, hypnosis healing, unexplained heaviness, repeated fear, and spiritually rooted family issues.",
        },
        {
          question: isHindi ? "नीरज जी से किस विषय पर परामर्श लेना चाहिए?" : "Who should consult Astrologer Neeraj?",
          answer: isHindi
            ? "कुंडली, विवाह मिलान, करियर, व्यवसाय, वास्तु, भविष्य मार्गदर्शन और उपायों के लिए नीरज जी उपयुक्त विशेषज्ञ हैं।"
            : "Astrologer Neeraj is the right choice for kundali reading, marriage matching, career and business timing, vastu guidance, child astrology, remedies, and practical decision-making support.",
        },
        {
          question: isHindi ? "क्या मैं सितारगंज के बाहर से भी बुक कर सकता/सकती हूँ?" : "Can I book from outside Sitarganj?",
          answer: isHindi
            ? "हाँ, सितारगंज में प्रत्यक्ष परामर्श के साथ कॉल और वीडियो परामर्श भी उपलब्ध है।"
        : "Yes. The centre offers in-person appointments in Sitarganj as well as phone and video consultations for clients across India and abroad.",
        },
      ],
      faqSection: {
        eyebrow: isHindi ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions",
        title: isHindi ? "बुक करने से पहले स्पष्ट उत्तर" : "Clear answers before you book",
        body: isHindi
          ? "उद्देश्य यह है कि आगंतुक जल्दी समझ सके कि उसे गुरु जी की सेवा चाहिए या नीरज जी की।"
          : "The aim is simple: help visitors quickly understand whether they need Guru Ji’s healing path or Neeraj’s astrology guidance.",
      },
    },
    about: {
      seo: {
        title: isHindi ? "हमारे बारे में | चिंतपूर्णी ब्लेसिंग्स" : "About Chintapurni Blessings",
        description: isHindi
          ? "गुरु चिंतपूर्णी कृपा दास और ज्योतिषाचार्य नीरज की अलग-अलग सेवाओं और कार्य शैली को जानें।"
          : "Learn about the separate work of Guru Chintapurni Kripa Das and Astrologer Neeraj at Chintapurni Blessings.",
        keywords: isHindi ? ["गुरु जी", "नीरज ज्योतिष", "चिंतपूर्णी ब्लेसिंग्स"] : ["Guru Chintapurni Kripa Das", "Astrologer Neeraj", "Chintapurni Blessings"],
      },
      hero: {
      eyebrow: isHindi ? "हमारे बारे में" : "About the Centre",
        title: isHindi ? "गुरु जी और नीरज जी, दोनों की भूमिका अलग और स्पष्ट" : "Guru Ji and Neeraj Astrologer, clearly separate in purpose and service",
        description: isHindi
          ? "यह पेज अब गुरु जी और नीरज जी की प्रोफ़ाइल को अलग-अलग दिखाता है, ताकि आगंतुक भ्रमित न हों।"
          : "This page separates Guru Ji’s healing identity from Neeraj’s astrology identity so visitors can understand each profile without confusion.",
      },
      sectionIntro: isHindi
        ? "नीचे दोनों प्रोफ़ाइल को अलग अनुभागों में प्रस्तुत किया गया है।"
        : "Below, both profiles are presented as separate sections with dedicated content and internal links.",
      guru: {
        eyebrow: isHindi ? "गुरु प्रोफ़ाइल" : "Guru Profile",
        title: isHindi ? "गुरु चिंतपूर्णी कृपा दास" : "Guru Chintapurni Kripa Das",
        intro: isHindi
          ? "गुरु जी का परिचय आध्यात्मिक उपचार, नकारात्मक प्रभावों के निवारण, और माता चिंतपूर्णी की भक्ति से जुड़ी साधना के रूप में रखा गया है।"
          : "Guru Ji is introduced through his spiritual healing path, his association with Mata Chintapurni devotion, and his focus on black magic removal, witchcraft relief, hypnosis healing, and paranormal support.",
        pointsTitle: isHindi ? "गुरु जी की पहचान" : "What defines Guru Ji’s work",
        points: isHindi
          ? [
              "आध्यात्मिक हस्तक्षेप और शुद्धिकरण केंद्रित दृष्टिकोण",
              "काला जादू, जादू-टोना और पैरानॉर्मल बाधाओं के लिए अलग विशेषज्ञता",
              "घर, परिवार और व्यक्ति स्तर की नकारात्मकता पर मार्गदर्शन",
            ]
          : [
              "A spiritual intervention and cleansing-led approach",
              "Separate expertise for black magic, witchcraft, hypnosis, and paranormal concerns",
              "Guidance for person, family, and property-level disturbances",
            ],
      },
      astrologer: {
        eyebrow: isHindi ? "ज्योतिष प्रोफ़ाइल" : "Astrology Profile",
        title: isHindi ? "ज्योतिषाचार्य नीरज" : "Astrologer Neeraj",
        intro: isHindi
          ? "नीरज जी का परिचय वैदिक ज्योतिष, कुंडली अध्ययन, विवाह मिलान, करियर, व्यवसाय और उपायों के विशेषज्ञ के रूप में प्रस्तुत किया गया है।"
        : "Neeraj is presented separately as the Vedic astrologer of the centre, focused on kundali, marriage compatibility, career, business, horoscope, rashi insight, and practical remedies.",
        pointsTitle: isHindi ? "नीरज जी की विशेषज्ञता" : "What defines Neeraj’s work",
        points: isHindi
          ? [
              "कुंडली, दशा, गोचर और समय विश्लेषण",
              "विवाह, करियर और व्यवसाय निर्णय मार्गदर्शन",
              "उपायों के साथ व्यावहारिक ज्योतिषीय परामर्श",
            ]
          : [
              "Birth chart, dasha, transit, and timing analysis",
              "Marriage, career, and business decision support",
              "Actionable remedies paired with practical astrology",
            ],
      },
      bridge: {
      title: isHindi ? "दो अलग सेवाएँ, एक विश्वसनीय केंद्र" : "Two Separate Services, One Trusted Centre",
        body: isHindi
          ? "चिंतपूर्णी ब्लेसिंग्स में यही स्पष्टता रखी गई है कि हीलिंग और ज्योतिष को एक जैसा न दिखाया जाए, बल्कि सही व्यक्ति को सही विशेषज्ञ तक पहुँचाया जाए।"
          : "Chintapurni Blessings is structured so healing and astrology are not blended into one vague promise. The goal is to guide the right person to the right expert.",
      },
    },
    servicesPage: {
      seo: {
        title: isHindi ? "सेवाएँ | चिंतपूर्णी ब्लेसिंग्स" : "Services | Chintapurni Blessings",
        description: isHindi
          ? "गुरु जी हीलिंग सेवाएँ और नीरज ज्योतिष सेवाएँ अलग-अलग अनुभागों में देखें।"
          : "Explore Guru Ji healing services and Neeraj astrology services in clearly separated sections.",
        keywords: isHindi ? ["गुरु सेवाएँ", "नीरज ज्योतिष", "कुंडली", "काला जादू"] : ["guru healing services", "Neeraj astrology", "kundali reading", "black magic removal"],
      },
      hero: {
        eyebrow: isHindi ? "सेवाएँ" : "Services",
        title: isHindi ? "गुरु जी और नीरज जी की सेवाएँ अब अलग-अलग व्यवस्थित" : "Guru Ji and Neeraj services, now clearly separated",
        description: isHindi
          ? "यह पेज अब गुरु जी की आध्यात्मिक सेवाओं और नीरज जी की ज्योतिष सेवाओं को अलग अनुभाग में दिखाता है।"
          : "This page now separates spiritual healing services from astrology services so internal linking and user journeys stay clearer.",
      },
      guruGroup: {
        title: isHindi ? "गुरु जी हीलिंग सेवाएँ" : "Guru Ji Healing Services",
        body: isHindi ? "इन सेवाओं को ज्योतिष सेवाओं से अलग समझें।" : "These services belong specifically to Guru Ji’s spiritual healing path.",
      },
      astrologyGroup: {
        title: isHindi ? "नीरज ज्योतिष सेवाएँ" : "Neeraj Astrology Services",
        body: isHindi ? "ये सेवाएँ कुंडली, समय, राशिफल और उपायों से संबंधित हैं।" : "These services belong to Neeraj’s astrology path, focused on charts, timing, and remedies.",
      },
      faqs: [
        {
          question: isHindi ? "मुझे कैसे पता चले कि कौन सी सेवा चाहिए?" : "How do I know which service I need?",
          answer: isHindi
            ? "यदि समस्या नकारात्मक ऊर्जा, डर, अदृश्य बाधा या आध्यात्मिक भारीपन से जुड़ी है तो गुरु जी सेक्शन चुनें। यदि प्रश्न कुंडली, विवाह, करियर या समय से जुड़ा है तो नीरज जी सेक्शन चुनें।"
            : "If the issue feels like fear, unseen heaviness, repeated disturbance, or dark influence, begin with Guru Ji. If it relates to timing, marriage, career, business, or planning, begin with Neeraj.",
        },
        {
          question: isHindi ? "क्या यह सेवाएँ केवल स्थानीय लोगों के लिए हैं?" : "Are these consultations only for local visitors?",
          answer: isHindi
            ? "नहीं, सितारगंज में प्रत्यक्ष परामर्श के साथ कॉल और वीडियो परामर्श भी उपलब्ध हैं।"
            : "No. In-person consultations are available in Sitarganj, while call and video sessions support clients from other cities, states, and countries.",
        },
      ],
    },
    horoscopePage: {
      seo: {
        title: isHindi ? "राशिफल | नीरज ज्योतिष | चिंतपूर्णी ब्लेसिंग्स" : "Horoscope | Neeraj Astrology | Chintapurni Blessings",
        description: isHindi
          ? "सामान्य राशिफल मार्गदर्शन और व्यक्तिगत कुंडली परामर्श की ओर स्पष्ट आंतरिक लिंक।"
          : "General horoscope guidance with clear internal links into personalised kundali consultation.",
        keywords: isHindi ? ["राशिफल", "नीरज ज्योतिष", "कुंडली"] : ["horoscope", "Neeraj Astrology", "kundali"],
      },
      hero: {
        eyebrow: isHindi ? "राशिफल" : "Horoscope",
        title: isHindi ? "सामान्य राशिफल से शुरुआत करें, गहराई में जाएँ कुंडली से" : "Start with general horoscope guidance, then go deeper with kundali",
        description: isHindi
          ? "यह अनुभाग नीरज जी की ज्योतिष सेवाओं का हल्का प्रवेश द्वार है।"
          : "This page acts as a soft entry point into Neeraj’s astrology path before a more personal chart reading.",
      },
      introTitle: isHindi ? "यह राशिफल पेज किस लिए है?" : "What this horoscope page is meant to do",
      introBody: isHindi
        ? "सामान्य राशिफल दिशा देता है, पर सटीक उत्तर व्यक्तिगत कुंडली में मिलते हैं।"
        : "General horoscope guidance can help you sense mood, momentum, and timing, but it cannot replace a proper kundali reading.",
      periods: isHindi ? ["दैनिक", "साप्ताहिक", "मासिक"] : ["Daily", "Weekly", "Monthly"],
      focuses: isHindi ? ["प्रेम", "करियर", "स्वास्थ्य"] : ["Love", "Career", "Health"],
      guidanceFor: isHindi ? "के लिए मार्गदर्शन" : "guidance for",
      weeklyTitle: isHindi ? "सभी 12 राशियों के लिए साप्ताहिक संकेत" : "Quick weekly signals for all 12 rashis",
      weekly: isHindi
        ? [
            ["मेष", "करियर निर्णय में संयम लाभ देगा।"],
            ["वृषभ", "वित्तीय योजना स्थिरता देगी।"],
            ["मिथुन", "संवाद नए अवसर लाएगा।"],
            ["कर्क", "परिवार में संतुलन महत्वपूर्ण रहेगा।"],
            ["सिंह", "नेतृत्व का समय है, पर विनम्रता रखें।"],
            ["कन्या", "दिनचर्या और स्वास्थ्य पर ध्यान दें।"],
            ["तुला", "साझेदारी में ईमानदारी जरूरी है।"],
            ["वृश्चिक", "भीतरी परिवर्तन बाहरी प्रगति देगा।"],
            ["धनु", "सीखने और यात्रा के अवसर मिलेंगे।"],
            ["मकर", "अनुशासन स्थिरता देगा।"],
            ["कुंभ", "सामाजिक जुड़ाव लाभ देगा।"],
            ["मीन", "अंतरज्ञान को व्यावहारिकता से जोड़ें।"],
          ]
        : [
            ["Mesh", "Career momentum builds through disciplined action and calmer decisions."],
            ["Vrishabh", "Financial planning and patience support steadier growth this week."],
            ["Mithun", "Conversations, meetings, and networking create new openings."],
            ["Kark", "Family matters improve when warmth is balanced with boundaries."],
            ["Simha", "Leadership opportunities favor confidence with humility."],
            ["Kanya", "Health, routines, and detail work deserve extra attention."],
            ["Tula", "Relationships benefit from honesty and balance in equal measure."],
            ["Vrishchik", "Inner change begins to reflect in outer progress."],
            ["Dhanu", "Learning, travel, and long-view planning feel promising."],
            ["Makar", "Consistency and structure can stabilize both work and mind."],
            ["Kumbh", "Social connections may lead to meaningful opportunities."],
            ["Meen", "Intuition is strong, but practical follow-through matters."],
          ],
      ctaTitle: isHindi ? "क्या आप अपनी वास्तविक कुंडली पर आधारित मार्गदर्शन चाहते हैं?" : "Want guidance based on your actual birth chart?",
      ctaBody: isHindi
        ? "व्यक्तिगत कुंडली परामर्श सामान्य राशिफल से अधिक सटीक दिशा देता है।"
        : "A personalised kundali consultation is far more precise than general horoscope text. Neeraj studies your chart, timing, and remedies so guidance becomes specific to your life.",
      ctaButton: isHindi ? "व्यक्तिगत राशिफल बुक करें" : "Book Personal Horoscope Consultation",
    },
    rashiPage: {
      seo: {
        title: isHindi ? "राशि गाइड | चिंतपूर्णी ब्लेसिंग्स" : "Rashi Guide | Chintapurni Blessings",
        description: isHindi
          ? "12 राशियों की समझ और आगे व्यक्तिगत कुंडली परामर्श की दिशा।"
          : "Understand the 12 rashis and move deeper with personalised kundali guidance.",
        keywords: isHindi ? ["राशि गाइड", "वैदिक राशि", "कुंडली"] : ["rashi guide", "vedic zodiac", "kundali"],
      },
      hero: {
        eyebrow: isHindi ? "राशि गाइड" : "Rashi Guide",
        title: isHindi ? "अपनी राशि समझें, फिर कुंडली से गहराई में जाएँ" : "Understand your rashi, then go deeper with your kundali",
        description: isHindi
          ? "यह गाइड राशि को समझने का प्रारंभिक कदम है।"
          : "A rashi description gives a useful starting point, but your full life path is always more accurately seen in your complete chart.",
      },
      introTitle: isHindi ? "12 वैदिक राशियाँ एक नजर में" : "The 12 Vedic rashis at a glance",
      introBody: isHindi
        ? "यह पेज सभी राशियों की सामान्य समझ देता है ताकि आगंतुक व्यक्तिगत परामर्श की ओर आगे बढ़ सके।"
        : "This guide is designed as a clean overview of the twelve rashis before moving to a full consultation.",
      outroTitle: isHindi ? "राशि शुरुआत है, कुंडली पूरा मार्ग है" : "Rashi gives a doorway, kundali gives the full map",
      outroBody: isHindi
        ? "विवाह, करियर, व्यवसाय और उपायों के लिए व्यक्तिगत कुंडली परामर्श अधिक उपयोगी रहेगा।"
        : "If you want chart-specific guidance for marriage, career, business, children, health timing, or remedies, use this page as an introduction and book a detailed kundali session.",
    },
    contactPage: {
      seo: {
        title: isHindi ? "संपर्क | चिंतपूर्णी ब्लेसिंग्स" : "Contact | Chintapurni Blessings",
        description: isHindi
          ? "गुरु जी हीलिंग या नीरज ज्योतिष परामर्श के लिए संपर्क करें।"
          : "Book spiritual healing or Vedic astrology consultations at Chintapurni Blessings.",
        keywords: isHindi ? ["संपर्क", "परामर्श", "चिंतपूर्णी ब्लेसिंग्स"] : ["contact", "consultation", "Chintapurni Blessings"],
      },
      hero: {
        eyebrow: isHindi ? "संपर्क" : "Contact",
        title: isHindi ? "अपनी समस्या के अनुसार सही विशेषज्ञ तक पहुँचें" : "Reach the right guide for your concern",
        description: isHindi
          ? "अपनी समस्या बताएँ और सही सेवा तक पहुँचें, चाहे वह गुरु जी हीलिंग हो या नीरज ज्योतिष।"
          : "Tell us whether your concern is related to spiritual healing or astrology and we will help you move toward the right session quickly and respectfully.",
      },
      reachTitle: isHindi ? "कैसे जुड़ें" : "How to connect",
      supportNote: isHindi
        ? "यदि समस्या काला जादू, जादू-टोना, पैरानॉर्मल या सम्मोहन हीलिंग से जुड़ी है तो गुरु जी तक मार्गदर्शन मिलेगा। यदि प्रश्न कुंडली, विवाह, करियर, व्यवसाय या वास्तु से जुड़ा है तो नीरज जी तक मार्गदर्शन मिलेगा।"
        : "Share your concern briefly. If the matter involves black magic, witchcraft, paranormal disturbance, or hypnosis healing, you will be guided toward Guru Ji. If it involves kundali, marriage, career, business, or vastu, you will be guided toward Neeraj.",
      bookTitle: isHindi ? "परामर्श बुक करें" : "Book your consultation",
      steps: isHindi
        ? [
            "1. अपनी समस्या साफ लिखें: आध्यात्मिक बाधा, कुंडली, विवाह, करियर, परिवार, व्यवसाय या वास्तु।",
            "2. माध्यम चुनें: सितारगंज में प्रत्यक्ष, फोन या वीडियो परामर्श।",
            "3. अगला उपलब्ध स्लॉट और पुष्टि प्राप्त करें।",
          ]
        : [
            "1. Share the concern clearly: spiritual disturbance, kundali, marriage, career, family, business, or vastu.",
            "2. Choose your mode: in-person in Sitarganj, phone, or video consultation.",
            "3. Receive the next available slot and confirmation through our team.",
          ],
    },
  };
}

const content = {
  en: buildContent("en"),
  hi: buildContent("hi"),
};

export function getLocalizedContent(lang = "en") {
  const current = content[lang] ?? content.en;

  return {
    ...current,
    zodiacSigns: zodiacBase.map((sign) => ({
      name: sign.name,
      symbol: sign.symbol,
      element: sign.element[lang] ?? sign.element.en,
      vedicName: sign.vedicName[lang] ?? sign.vedicName.en,
      trait: sign.trait[lang] ?? sign.trait.en,
      forecast: sign.forecast[lang] ?? sign.forecast.en,
      rulingPlanet: sign.rulingPlanet[lang] ?? sign.rulingPlanet.en,
      strengths: sign.strengths[lang] ?? sign.strengths.en,
      challenges: sign.challenges[lang] ?? sign.challenges.en,
      lucky: sign.lucky[lang] ?? sign.lucky.en,
    })),
  };
}

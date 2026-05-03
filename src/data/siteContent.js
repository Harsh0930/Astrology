const zodiacBase = [
  {
    name: "Aries",
    symbol: "AR",
    element: { en: "Fire", hi: "अग्नि" },
    vedicName: { en: "Mesh Rashi", hi: "मेष राशि" },
    trait: {
      en: "Courageous, energetic, and action oriented.",
      hi: "साहसी, ऊर्जावान और पहल करने वाली राशि।",
    },
    forecast: {
      en: "Career momentum improves when you act with discipline instead of haste.",
      hi: "जल्दबाजी के बजाय अनुशासन से काम करने पर प्रगति बेहतर होगी।",
    },
    rulingPlanet: { en: "Mars (Mangal)", hi: "मंगल" },
    strengths: { en: "Leadership, confidence, and passion", hi: "नेतृत्व, आत्मविश्वास और उत्साह" },
    challenges: { en: "Impatience and impulsiveness", hi: "अधीरता और आवेग" },
    lucky: { en: "Red, Coral, Red Coral (Moonga)", hi: "लाल, कोरल, मूंगा" },
  },
  {
    name: "Taurus",
    symbol: "TA",
    element: { en: "Earth", hi: "पृथ्वी" },
    vedicName: { en: "Vrishabh Rashi", hi: "वृषभ राशि" },
    trait: {
      en: "Reliable, calm, and grounded.",
      hi: "विश्वसनीय, शांत और स्थिर स्वभाव वाली राशि।",
    },
    forecast: {
      en: "Financial matters improve when you slow down and plan carefully.",
      hi: "वित्तीय मामलों में ठहरकर सोचने से लाभ मिलेगा।",
    },
    rulingPlanet: { en: "Venus (Shukra)", hi: "शुक्र" },
    strengths: { en: "Stability, patience, and consistency", hi: "स्थिरता, धैर्य और निरंतरता" },
    challenges: { en: "Stubbornness and resistance to change", hi: "जिद और बदलाव से दूरी" },
    lucky: { en: "Green, White, Diamond (Heera)", hi: "हरा, सफेद, हीरा" },
  },
  {
    name: "Gemini",
    symbol: "GE",
    element: { en: "Air", hi: "वायु" },
    vedicName: { en: "Mithun Rashi", hi: "मिथुन राशि" },
    trait: {
      en: "Curious, versatile, and communicative.",
      hi: "जिज्ञासु, बहुमुखी और संवादप्रिय राशि।",
    },
    forecast: {
      en: "Useful new opportunities arrive through conversation this week.",
      hi: "इस सप्ताह नई संभावनाएं बातचीत और संपर्कों से आएंगी।",
    },
    rulingPlanet: { en: "Mercury (Budh)", hi: "बुध" },
    strengths: { en: "Adaptability, wit, and intelligence", hi: "अनुकूलन क्षमता, बुद्धिमत्ता और चतुराई" },
    challenges: { en: "Restlessness and inconsistency", hi: "चंचलता और अस्थिरता" },
    lucky: { en: "Yellow, Green, Emerald (Panna)", hi: "पीला, हरा, पन्ना" },
  },
  {
    name: "Cancer",
    symbol: "CA",
    element: { en: "Water", hi: "जल" },
    vedicName: { en: "Kark Rashi", hi: "कर्क राशि" },
    trait: {
      en: "Protective, intuitive, and family centered.",
      hi: "संवेदनशील, सहज और परिवार केंद्रित राशि।",
    },
    forecast: {
      en: "Warmth and emotional steadiness will improve family harmony.",
      hi: "स्नेह और स्थिरता से पारिवारिक सामंजस्य बढ़ेगा।",
    },
    rulingPlanet: { en: "Moon (Chandra)", hi: "चंद्र" },
    strengths: { en: "Empathy, loyalty, and intuition", hi: "सहानुभूति, निष्ठा और अंतर्ज्ञान" },
    challenges: { en: "Mood swings and oversensitivity", hi: "भावनात्मक उतार-चढ़ाव और अति संवेदनशीलता" },
    lucky: { en: "White, Silver, Pearl (Moti)", hi: "सफेद, चांदी, मोती" },
  },
  {
    name: "Leo",
    symbol: "LE",
    element: { en: "Fire", hi: "अग्नि" },
    vedicName: { en: "Simha Rashi", hi: "सिंह राशि" },
    trait: {
      en: "Confident, expressive, and purpose led.",
      hi: "आत्मविश्वासी, प्रभावशाली और उद्देश्यपूर्ण राशि।",
    },
    forecast: {
      en: "Leadership grows stronger when confidence is balanced with humility.",
      hi: "नेतृत्व तब चमकेगा जब आत्मविश्वास के साथ विनम्रता भी हो।",
    },
    rulingPlanet: { en: "Sun (Surya)", hi: "सूर्य" },
    strengths: { en: "Charisma, creativity, and leadership", hi: "आकर्षण, रचनात्मकता और नेतृत्व" },
    challenges: { en: "Ego and control", hi: "अहंकार और नियंत्रण की प्रवृत्ति" },
    lucky: { en: "Gold, Orange, Ruby (Manik)", hi: "स्वर्ण, नारंगी, माणिक" },
  },
  {
    name: "Virgo",
    symbol: "VI",
    element: { en: "Earth", hi: "पृथ्वी" },
    vedicName: { en: "Kanya Rashi", hi: "कन्या राशि" },
    trait: {
      en: "Practical, analytical, and service minded.",
      hi: "व्यवहारिक, विश्लेषणात्मक और सेवा भाव वाली राशि।",
    },
    forecast: {
      en: "Routines and careful review will support strong results.",
      hi: "दिनचर्या और सावधानी से समीक्षा करना बेहतर परिणाम देगा।",
    },
    rulingPlanet: { en: "Mercury (Budh)", hi: "बुध" },
    strengths: { en: "Precision, discipline, and helpfulness", hi: "सूक्ष्मता, अनुशासन और उपयोगिता" },
    challenges: { en: "Overthinking and criticism", hi: "अति-विश्लेषण और आलोचनात्मक सोच" },
    lucky: { en: "Green, Brown, Emerald (Panna)", hi: "हरा, भूरा, पन्ना" },
  },
  {
    name: "Libra",
    symbol: "LI",
    element: { en: "Air", hi: "वायु" },
    vedicName: { en: "Tula Rashi", hi: "तुला राशि" },
    trait: {
      en: "Balanced, diplomatic, and graceful.",
      hi: "संतुलित, सौम्य और न्यायप्रिय राशि।",
    },
    forecast: {
      en: "Relationships become smoother when honesty and balance work together.",
      hi: "ईमानदारी और संतुलन से संबंध मजबूत होंगे।",
    },
    rulingPlanet: { en: "Venus (Shukra)", hi: "शुक्र" },
    strengths: { en: "Fairness, charm, and cooperation", hi: "न्यायप्रियता, आकर्षण और सहयोग" },
    challenges: { en: "Indecision and people pleasing", hi: "निर्णयहीनता और सबको खुश रखने की प्रवृत्ति" },
    lucky: { en: "Blue, White, Diamond (Heera)", hi: "नीला, सफेद, हीरा" },
  },
  {
    name: "Scorpio",
    symbol: "SC",
    element: { en: "Water", hi: "जल" },
    vedicName: { en: "Vrishchik Rashi", hi: "वृश्चिक राशि" },
    trait: {
      en: "Intense, private, and transformative.",
      hi: "गंभीर, रहस्यमय और परिवर्तनकारी राशि।",
    },
    forecast: {
      en: "Deep inner changes are beginning to show practical results.",
      hi: "भीतरी परिवर्तन अब बाहरी प्रगति में बदलने लगे हैं।",
    },
    rulingPlanet: { en: "Mars and Ketu", hi: "मंगल और केतु" },
    strengths: { en: "Resilience, depth, and focus", hi: "दृढ़ता, गहराई और एकाग्रता" },
    challenges: { en: "Jealousy and emotional intensity", hi: "ईर्ष्या और तीव्र भावनाएं" },
    lucky: { en: "Red, Maroon, Red Coral (Moonga)", hi: "लाल, मैरून, मूंगा" },
  },
  {
    name: "Sagittarius",
    symbol: "SG",
    element: { en: "Fire", hi: "अग्नि" },
    vedicName: { en: "Dhanu Rashi", hi: "धनु राशि" },
    trait: {
      en: "Optimistic, adventurous, and philosophical.",
      hi: "आशावादी, साहसी और विचारशील राशि।",
    },
    forecast: {
      en: "Travel, learning, and long-view planning are favored.",
      hi: "सीखने, यात्रा और दूरदृष्टि वाले फैसलों में लाभ है।",
    },
    rulingPlanet: { en: "Jupiter (Guru)", hi: "गुरु" },
    strengths: { en: "Wisdom, openness, and enthusiasm", hi: "ज्ञान, खुलापन और उत्साह" },
    challenges: { en: "Overconfidence and bluntness", hi: "अतिआत्मविश्वास और स्पष्टवादिता की कठोरता" },
    lucky: { en: "Yellow, Purple, Yellow Sapphire (Pukhraj)", hi: "पीला, बैंगनी, पुखराज" },
  },
  {
    name: "Capricorn",
    symbol: "CP",
    element: { en: "Earth", hi: "पृथ्वी" },
    vedicName: { en: "Makar Rashi", hi: "मकर राशि" },
    trait: {
      en: "Disciplined, traditional, and determined.",
      hi: "अनुशासित, गंभीर और दृढ़ निश्चयी राशि।",
    },
    forecast: {
      en: "Consistency and structure will create stability this week.",
      hi: "निरंतरता और व्यवस्था से इस सप्ताह स्थिरता मिलेगी।",
    },
    rulingPlanet: { en: "Saturn (Shani)", hi: "शनि" },
    strengths: { en: "Responsibility, patience, and persistence", hi: "जिम्मेदारी, धैर्य और दृढ़ता" },
    challenges: { en: "Rigidity and pessimism", hi: "कठोरता और निराशावाद" },
    lucky: { en: "Black, Dark Blue, Blue Sapphire (Neelam)", hi: "काला, गहरा नीला, नीलम" },
  },
  {
    name: "Aquarius",
    symbol: "AQ",
    element: { en: "Air", hi: "वायु" },
    vedicName: { en: "Kumbh Rashi", hi: "कुंभ राशि" },
    trait: {
      en: "Independent, original, and future minded.",
      hi: "स्वतंत्र, मौलिक और दूरदर्शी राशि।",
    },
    forecast: {
      en: "Fresh social and community connections may open meaningful doors.",
      hi: "सामाजिक जुड़ाव से महत्वपूर्ण अवसर खुल सकते हैं।",
    },
    rulingPlanet: { en: "Saturn and Rahu", hi: "शनि और राहु" },
    strengths: { en: "Vision, innovation, and objectivity", hi: "दूरदृष्टि, नवीनता और विवेक" },
    challenges: { en: "Detachment and stubbornness", hi: "भावनात्मक दूरी और जिद" },
    lucky: { en: "Blue, Electric Blue, Blue Sapphire (Neelam)", hi: "नीला, इलेक्ट्रिक ब्लू, नीलम" },
  },
  {
    name: "Pisces",
    symbol: "PI",
    element: { en: "Water", hi: "जल" },
    vedicName: { en: "Meen Rashi", hi: "मीन राशि" },
    trait: {
      en: "Compassionate, intuitive, and spiritual.",
      hi: "दयालु, सहज और आध्यात्मिक राशि।",
    },
    forecast: {
      en: "Trust intuition, but support it with practical steps.",
      hi: "अंतर्ज्ञान पर भरोसा रखें, पर कदम व्यवहारिक रखें।",
    },
    rulingPlanet: { en: "Jupiter and Ketu", hi: "गुरु और केतु" },
    strengths: { en: "Empathy, imagination, and spiritual depth", hi: "सहानुभूति, कल्पनाशीलता और आध्यात्मिक गहराई" },
    challenges: { en: "Escapism and oversensitivity", hi: "वास्तविकता से बचने की प्रवृत्ति और अति संवेदनशीलता" },
    lucky: { en: "Sea Green, Yellow Sapphire, Pearl", hi: "सी ग्रीन, पुखराज, मोती" },
  },
];

const serviceDefinitions = [
  {
    id: "black-magic-removal",
    category: "spiritual",
    tag: { en: "Spiritual Healing", hi: "आध्यात्मिक उपचार" },
    title: { en: "Black Magic Removal", hi: "ब्लैक मैजिक रिमूवल" },
    blurb: {
      en: "Identify, neutralize, and remove destructive dark influences affecting health, peace, relationships, and prosperity.",
      hi: "स्वास्थ्य, शांति, रिश्तों और समृद्धि को प्रभावित करने वाली नकारात्मक शक्तियों की पहचान कर उनका निवारण किया जाता है।",
    },
    benefits: {
      en: [
        "Spiritual diagnosis of repeating misfortune and fear",
        "Protective ritual process rooted in Mata Chintpurni's blessings",
        "Ongoing guidance to strengthen spiritual protection",
      ],
      hi: [
        "बार-बार हो रही बाधाओं और भय का आध्यात्मिक परीक्षण",
        "माता चिंतपूर्णी की कृपा से सुरक्षात्मक अनुष्ठान",
        "आगे की रक्षा के लिए निरंतर मार्गदर्शन",
      ],
    },
    path: "/services/black-magic-removal",
  },
  {
    id: "witchcraft-cure",
    category: "spiritual",
    tag: { en: "Spiritual Healing", hi: "आध्यात्मिक उपचार" },
    title: { en: "Witchcraft Cure", hi: "विचक्राफ्ट क्योर" },
    blurb: {
      en: "Break harmful ritual spells, remove planted objects, and restore peace to the person, family, and home.",
      hi: "हानिकारक तंत्र-मंत्र, लगाए गए वस्तुओं और नकारात्मक प्रभावों को हटाकर घर-परिवार में शांति बहाल की जाती है।",
    },
    benefits: {
      en: [
        "Detection of witchcraft linked to objects, places, or targeted harm",
        "Guidance for safe removal and cleansing of affected spaces",
        "Protective steps to reduce recurrence",
      ],
      hi: [
        "वस्तुओं, स्थानों या लक्षित हानि से जुड़े प्रभावों की पहचान",
        "प्रभावित स्थानों की सुरक्षित सफाई और शुद्धि",
        "दोबारा प्रभाव से बचाव के उपाय",
      ],
    },
    path: "/services/witchcraft-cure",
  },
  {
    id: "paranormal-healing",
    category: "spiritual",
    tag: { en: "Spiritual Healing", hi: "आध्यात्मिक उपचार" },
    title: { en: "Paranormal Healing", hi: "पैरानॉर्मल हीलिंग" },
    blurb: {
      en: "Resolve spirit disturbance, negative entity presence, ancestral unrest, and heavy energy affecting homes and families.",
      hi: "आत्मिक बाधा, नकारात्मक उपस्थिति, पितृ अशांति और भारी ऊर्जा जैसी समस्याओं का समाधान किया जाता है।",
    },
    benefits: {
      en: [
        "Assessment of spirit, entity, ancestral, or energetic disturbance",
        "Clearing and protection for homes, land, and families",
        "Ritual guidance where ancestral healing is required",
      ],
      hi: [
        "आत्मा, नकारात्मक सत्ता, पितृ या ऊर्जा संबंधी बाधा का आकलन",
        "घर, भूमि और परिवार की शुद्धि व सुरक्षा",
        "जहां आवश्यक हो वहां पितृ शांति के उपाय",
      ],
    },
    path: "/services/paranormal-healing",
  },
  {
    id: "spiritual-consultation",
    category: "spiritual",
    tag: { en: "Guidance Session", hi: "मार्गदर्शन सत्र" },
    title: { en: "Spiritual Consultation", hi: "स्पिरिचुअल कंसल्टेशन" },
    blurb: {
      en: "A one-to-one consultation with Guru Ji to understand the true root of suffering and the right spiritual path forward.",
      hi: "गुरु जी के साथ व्यक्तिगत परामर्श, जिससे समस्या की वास्तविक जड़ और आगे का सही आध्यात्मिक मार्ग समझा जा सके।",
    },
    benefits: {
      en: [
        "Clarity before starting a full healing process",
        "Compassionate explanation of the spiritual situation",
        "Personal guidance for in-person or remote support",
      ],
      hi: [
        "उपचार शुरू करने से पहले स्पष्टता",
        "स्थिति की करुणापूर्ण और स्पष्ट व्याख्या",
        "प्रत्यक्ष या दूरस्थ परामर्श के लिए व्यक्तिगत मार्गदर्शन",
      ],
    },
    path: "/services/spiritual-consultation",
  },
  {
    id: "astrology",
    category: "astrology",
    tag: { en: "Vedic Astrology", hi: "वैदिक ज्योतिष" },
    title: { en: "Astrology Services", hi: "ज्योतिष सेवाएं" },
    blurb: {
      en: "Kundali reading, predictive astrology, marriage compatibility, career guidance, vastu consultation, and auspicious timing.",
      hi: "कुंडली अध्ययन, भविष्यवाणी, विवाह मिलान, करियर मार्गदर्शन, वास्तु परामर्श और मुहूर्त चयन।",
    },
    benefits: {
      en: [
        "Personal chart analysis by a dedicated astrologer",
        "Timing guidance for marriage, career, and important decisions",
        "A complementary service alongside Guru Ji's healing work",
      ],
      hi: [
        "अनुभवी समर्पित ज्योतिषी द्वारा व्यक्तिगत कुंडली विश्लेषण",
        "विवाह, करियर और महत्वपूर्ण निर्णयों के लिए समय मार्गदर्शन",
        "गुरु जी के उपचार के साथ सहयोगी सेवा",
      ],
    },
    path: "/services/astrology",
  },
];

const testimonialEntries = {
  en: [
    {
      name: "Suman R., Rudrapur",
      rating: "5.0",
      text: "After months of fear, arguments, and unexplained illness at home, Guru Ji gave us clarity and peace. The change in our family atmosphere was profound.",
    },
    {
      name: "Harpreet K., Ludhiana",
      rating: "5.0",
      text: "We contacted Chintpurni Blessings remotely and were treated with great sincerity. Guru Ji listened patiently and guided us through every step.",
    },
    {
      name: "Anil S., Delhi",
      rating: "5.0",
      text: "The consultation did not feel rushed or commercial. It felt like someone truly understood what we were facing and gave us honest direction.",
    },
    {
      name: "Kavita M., Haldwani",
      rating: "5.0",
      text: "The astrology guidance helped me understand timing around marriage and family matters in a very practical and calming way.",
    },
    {
      name: "Rajeev T., Jaipur",
      rating: "5.0",
      text: "We had tried many places before, but this was the first time the guidance felt compassionate, grounded, and genuinely helpful.",
    },
    {
      name: "Pooja N., Chandigarh",
      rating: "5.0",
      text: "The privacy, respect, and seriousness with which our case was handled gave us confidence from the very first call.",
    },
  ],
  hi: [
    {
      name: "सुमन आर., रुद्रपुर",
      rating: "5.0",
      text: "कई महीनों से घर में डर, झगड़े और बिना कारण बीमारी का माहौल था। गुरु जी के मार्गदर्शन से हमारे घर में फिर शांति आई।",
    },
    {
      name: "हरप्रीत के., लुधियाना",
      rating: "5.0",
      text: "हमने दूर से संपर्क किया, लेकिन व्यवहार बिल्कुल आत्मीय था। गुरु जी ने धैर्य से सुना और हर कदम पर सही दिशा दी।",
    },
    {
      name: "अनिल एस., दिल्ली",
      rating: "5.0",
      text: "यह कोई सामान्य या जल्दबाजी वाला सत्र नहीं था। हमें लगा कि कोई वास्तव में हमारी समस्या समझ रहा है।",
    },
    {
      name: "कविता एम., हल्द्वानी",
      rating: "5.0",
      text: "ज्योतिष परामर्श ने विवाह और परिवार से जुड़े समय और निर्णयों को बहुत स्पष्ट और शांत तरीके से समझाया।",
    },
    {
      name: "राजीव टी., जयपुर",
      rating: "5.0",
      text: "हम कई जगह गए थे, लेकिन यहां का मार्गदर्शन सबसे अधिक ईमानदार, संतुलित और उपयोगी लगा।",
    },
    {
      name: "पूजा एन., चंडीगढ़",
      rating: "5.0",
      text: "पहली कॉल से ही गोपनीयता, सम्मान और गंभीरता का अनुभव हुआ। इससे तुरंत भरोसा बना।",
    },
  ],
};

function buildServices(lang) {
  return serviceDefinitions.map((service) => ({
    id: service.id,
    category: service.category,
    tag: service.tag[lang],
    title: service.title[lang],
    blurb: service.blurb[lang],
    benefits: service.benefits[lang],
    path: service.path,
  }));
}

function buildZodiacSigns(lang) {
  return zodiacBase.map((sign) => ({
    name: sign.name,
    symbol: sign.symbol,
    element: sign.element[lang],
    vedicName: sign.vedicName[lang],
    trait: sign.trait[lang],
    forecast: sign.forecast[lang],
    rulingPlanet: sign.rulingPlanet[lang],
    strengths: sign.strengths[lang],
    challenges: sign.challenges[lang],
    lucky: sign.lucky[lang],
  }));
}

function buildServiceDetailPages(lang) {
  const isHindi = lang === "hi";

  return {
    "black-magic-removal": {
      slug: "/services/black-magic-removal",
      seo: {
        title: isHindi ? "उत्तराखंड में ब्लैक मैजिक रिमूवल - गुरु चिंतपूर्णी कृपा दास" : "Black Magic Removal in Uttarakhand - Guru Chintpurni Kripa Das",
        description: isHindi
          ? "यदि आप काला जादू से पीड़ित हैं, तो गुरु चिंतपूर्णी कृपा दास द्वारा आध्यात्मिक पहचान, सुरक्षा और निवारण प्राप्त करें।"
          : "Suffering from black magic? Guru Chintpurni Kripa Das offers powerful, permanent black magic removal in Sitarganj, Uttarakhand with remote healing available.",
        keywords: isHindi
          ? ["ब्लैक मैजिक रिमूवल", "काला जादू निवारण", "उत्तराखंड आध्यात्मिक उपचार"]
          : ["black magic removal Uttarakhand", "kala jadu removal Sitarganj", "spiritual healer Uttarakhand"],
      },
      hero: {
        eyebrow: isHindi ? "मुख्य सेवा" : "Core Service",
        title: isHindi ? "जब कोई आपकी बनी-बनाई दुनिया तोड़ना चाहे" : "When someone wants to destroy what you have built",
        description: isHindi
          ? "काला जादू स्वास्थ्य, घर, संबंधों और समृद्धि पर गहरा असर डाल सकता है। गुरु जी इसकी पहचान कर मूल कारण को दूर करने में मार्गदर्शन देते हैं।"
          : "Black magic can target health, peace, relationships, and prosperity. Guru Ji helps identify the source, remove the influence, and restore protection.",
      },
      sections: [
        {
          title: isHindi ? "ब्लैक मैजिक रिमूवल" : "Black Magic Removal",
          paragraphs: isHindi
            ? [
                "काला जादू, जिसे आम तौर पर काला जादू या तांत्रिक आक्रमण कहा जाता है, किसी व्यक्ति या परिवार की शांति, स्वास्थ्य और उन्नति को प्रभावित करने के इरादे से किया जाता है।",
                "यदि आपको लगता है कि आप या आपका कोई प्रियजन ऐसे प्रभाव में है, तो गुरु चिंतपूर्णी कृपा दास माता चिंतपूर्णी की कृपा से इसकी पहचान और निवारण में सहायता कर सकते हैं।",
              ]
            : [
                "Black magic - kala jadu in Hindi - is one of the oldest and most insidious forms of harm that exists. It is the deliberate use of dark rituals, occult forces, and negative energies to target a specific person, with the intent to destroy their health, peace, relationships, or prosperity.",
                "If you believe you or someone you love is under the influence of black magic, Guru Chintpurni Kripa Das is uniquely equipped - by Mata Chintpurni's divine grace - to identify, neutralize, and permanently remove it.",
              ],
        },
        {
          title: isHindi ? "कब समझें कि काला जादू हो सकता है?" : "How do you know if it is black magic?",
          paragraphs: isHindi
            ? [
                "हर समस्या काला जादू नहीं होती। लेकिन जब कई नकारात्मक घटनाएं बिना किसी स्पष्ट कारण के एक साथ होने लगें, तो गहरी आध्यात्मिक जांच आवश्यक हो सकती है।",
              ]
            : [
                "Not every misfortune is caused by black magic. But when multiple misfortunes strike together, without any rational explanation, it is time to consider a deeper cause.",
              ],
          bullets: isHindi
            ? [
                "अचानक और बिना चिकित्सकीय कारण की गंभीर बीमारी",
                "स्थिरता के बाद तीव्र आर्थिक नुकसान",
                "परिवार में असामान्य और तीखे झगड़े",
                "घर में भारीपन, अंधकार या स्थायी बेचैनी",
                "बार-बार डरावने सपने या पीछा किए जाने का अनुभव",
                "नींबू, कील, राख, बाल, काला धागा या कपड़ा जैसी संदिग्ध वस्तुएं मिलना",
                "बच्चों या पालतू जानवरों का अचानक असामान्य व्यवहार",
                "व्यक्तित्व में अचानक अवसाद, क्रोध या अलगाव",
              ]
            : [
                "Sudden, severe, and medically unexplained illness",
                "Intense financial losses after a period of stability or growth",
                "Explosive, irrational conflict within the family",
                "A feeling of heaviness, darkness, or constant anxiety in your home",
                "Frequent and vivid nightmares, often involving darkness, water, or being chased",
                "Finding unusual items - lemons, nails, ash, hair, black thread, or cloth - near your home",
                "Children or pets behaving strangely or becoming unwell without cause",
                "A marked change in personality - aggression, depression, or withdrawal - in yourself or a family member",
              ],
        },
        {
          title: isHindi ? "गुरु जी की प्रक्रिया" : "Guru Ji's approach to black magic removal",
          paragraphs: isHindi
            ? [
                "हर मामला अलग होता है। इसलिए गुरु जी एक जैसा उपाय सब पर लागू नहीं करते, बल्कि स्थिति, स्रोत और प्रभाव के अनुसार मार्ग बनाते हैं।",
              ]
            : [
                "Guru Chintpurni Kripa Das does not apply a one-size-fits-all remedy. Every case of black magic is unique - it differs in origin, intent, method, and severity.",
              ],
          bullets: isHindi
            ? [
                "पहला चरण - आध्यात्मिक जांच और स्थिति की पहचान",
                "दूसरा चरण - व्यक्ति और घर के लिए सुरक्षात्मक कवच",
                "तीसरा चरण - अनुष्ठान, मंत्र और यंत्र द्वारा निवारण व शुद्धि",
                "चौथा चरण - भविष्य की रक्षा हेतु आंतरिक शक्ति और मार्गदर्शन",
                "पांचवां चरण - उपचार अवधि में निरंतर सहयोग",
              ]
            : [
                "Step 1 - Diagnosis through spiritual assessment",
                "Step 2 - Protection for the affected person and home",
                "Step 3 - Removal and purification through sacred rituals, mantras, and yantras",
                "Step 4 - Strengthening to prevent future attacks",
                "Step 5 - Follow-up support throughout the process",
              ],
        },
        {
          title: isHindi ? "रिमोट हीलिंग उपलब्ध है" : "Remote healing is available",
          paragraphs: isHindi
            ? [
                "आपको शारीरिक रूप से उपस्थित होना अनिवार्य नहीं है। गुरु जी का आध्यात्मिक कार्य दूरी से भी मार्गदर्शन और राहत प्रदान कर सकता है।",
              ]
            : [
                "You do not need to be physically present for Guru Ji's healing to reach you. His spiritual work transcends physical distance - people across India and internationally have received full relief through remote sessions.",
              ],
        },
      ],
      faqs: [
        {
          question: isHindi ? "क्या ब्लैक मैजिक रिमूवल स्थायी होता है?" : "Is black magic removal permanent?",
          answer: isHindi
            ? "गुरु जी का मार्ग मूल कारण को संबोधित करता है। कुछ मामलों में आगे की सुरक्षा भी सुझाई जा सकती है।"
            : "Yes. Guru Ji's process addresses the root cause of the affliction, not just its symptoms. In rare cases where the source of harm is persistent, continued spiritual protection may be advised.",
        },
        {
          question: isHindi ? "क्या पूरा परिवार प्रभावित हो सकता है?" : "Can black magic affect multiple family members at once?",
          answer: isHindi
            ? "हाँ। कई बार पूरा घर या परिवार एक साथ प्रभावित होता है और गुरु जी सभी प्रभावित सदस्यों का मार्गदर्शन कर सकते हैं।"
            : "Yes. Black magic can be directed at an entire household. Guru Ji can identify and support all affected members together.",
        },
        {
          question: isHindi ? "क्या यह पता चलेगा कि किसने किया?" : "Will I know who cast the black magic on me?",
          answer: isHindi
            ? "कुछ मामलों में स्रोत स्पष्ट हो सकता है, कुछ में नहीं। लेकिन इससे निवारण की प्रक्रिया रुकती नहीं है।"
            : "In some cases, Guru Ji can identify the source. In others, the identity may not be clear - but this does not prevent successful removal.",
        },
      ],
    },
    "witchcraft-cure": {
      slug: "/services/witchcraft-cure",
      seo: {
        title: isHindi ? "विचक्राफ्ट क्योर और सुरक्षा - गुरु चिंतपूर्णी कृपा दास" : "Witchcraft Cure and Protection - Guru Chintpurni Kripa Das",
        description: isHindi
          ? "विचक्राफ्ट, टोटका या नकारात्मक अनुष्ठान से जुड़े प्रभावों के लिए आध्यात्मिक पहचान, शुद्धि और सुरक्षा प्राप्त करें।"
          : "Experiencing signs of witchcraft? Guru Chintpurni Kripa Das provides powerful witchcraft cure and spiritual protection with remote healing available.",
        keywords: isHindi ? ["विचक्राफ्ट क्योर", "टोना-टोटका", "आध्यात्मिक सुरक्षा"] : ["witchcraft cure Uttarakhand", "spiritual protection from witchcraft"],
      },
      hero: {
        eyebrow: isHindi ? "मुख्य सेवा" : "Core Service",
        title: isHindi ? "जादू-टोने की पकड़ से बाहर निकलें" : "Break the spell. Reclaim your life.",
        description: isHindi
          ? "जब नकारात्मक अनुष्ठान, वस्तुएं या लक्षित ऊर्जा किसी व्यक्ति या घर को प्रभावित करें, तो गुरु जी शुद्धि और सुरक्षा का मार्ग दिखाते हैं।"
          : "When harmful ritual work, planted objects, or targeted negative energy are involved, Guru Ji helps break the spell and restore peace.",
      },
      sections: [
        {
          title: isHindi ? "विचक्राफ्ट क्योर" : "Witchcraft Cure",
          paragraphs: isHindi
            ? [
                "विचक्राफ्ट, टोटका, जादू, सोर्सरी या नकारात्मक अनुष्ठान का उद्देश्य किसी व्यक्ति, दंपत्ति या परिवार को प्रभावित करना होता है।",
                "ऐसे मामलों में गुरु जी माता चिंतपूर्णी की कृपा से गहराई में जाकर उस हानि को सुलझाने और उसके प्रभाव को हटाने में सहायता करते हैं।",
              ]
            : [
                "Witchcraft - known by many names across cultures and traditions: totke, voodoo, jadoo, sorcery - involves the targeted use of rituals, enchanted objects, spells, and dark invocations to cause harm to a specific individual, couple, or family.",
                "Guru Chintpurni Kripa Das has spent decades untangling and dissolving witchcraft afflictions. His work, empowered by Mata Chintpurni's sacred grace, reaches deep into the spiritual fabric of the harm done - and undoes it completely.",
              ],
        },
        {
          title: isHindi ? "संकेत जो विचक्राफ्ट की ओर इशारा करते हैं" : "Signs that witchcraft may be at work",
          bullets: isHindi
            ? [
                "घर के आसपास गांठ वाला धागा, दबाई गई चीजें, सुई, राख, नींबू जैसी वस्तुएं मिलना",
                "रिश्तों में अचानक आकर्षण, घृणा या टूटन",
                "बार-बार दुर्घटनाएं या बिना कारण चोट लगना",
                "अपने ही घर में घुसते समय शारीरिक बेचैनी",
                "घर का वातावरण असामान्य रूप से भारी या ठंडा लगना",
                "व्यवसाय, करियर या धन में लगातार विफलता",
                "अकेले होने पर देखे जाने, छुए जाने या पीछा किए जाने का अनुभव",
                "बिना कारण शरीर पर निशान, जलन या दाने उभरना",
              ]
            : [
                "Finding strange objects near your home such as knotted thread, buried items, needles, ash packets, or lemons",
                "Sudden, inexplicable attraction, obsession, or repulsion between family members",
                "Unusual and repetitive accidents or injuries",
                "A complete breakdown of a relationship that was previously stable and loving",
                "Feeling physically sick when entering your own home",
                "Your home feeling cold, oppressive, or spiritually heavy even in warm weather",
                "Recurring patterns of failure in business, career, or finances despite sincere effort",
                "Feeling watched, followed, or touched when alone",
                "Physical marks - bruises, burns, or rashes - appearing without explanation",
              ],
        },
        {
          title: isHindi ? "उपचार की प्रक्रिया" : "The witchcraft cure process",
          bullets: isHindi
            ? [
                "पहचान - प्रभाव, स्रोत और स्वरूप की आध्यात्मिक पहचान",
                "वस्तु शुद्धि - रखी गई वस्तुओं को सुरक्षित हटाने की दिशा",
                "अनुष्ठानिक शुद्धिकरण - मंत्र और साधना द्वारा बंधन तोड़ना",
                "गृह शांति - घर की ऊर्जा और वातावरण की पुनः स्थापना",
                "निरंतर सुरक्षा - दोबारा प्रभाव से बचाने के उपाय",
              ]
            : [
                "Identification through divine insight",
                "Object clearing for planted or enchanted items",
                "Ritual purification under Mata Chintpurni's blessings",
                "Home sanctification and energetic restoration",
                "Ongoing protection to prevent reapplication",
              ],
        },
      ],
      faqs: [],
    },
    "paranormal-healing": {
      slug: "/services/paranormal-healing",
      seo: {
        title: isHindi ? "पैरानॉर्मल हीलिंग और नकारात्मक सत्ता निवारण" : "Paranormal Healing and Entity Removal",
        description: isHindi
          ? "आत्मिक बाधा, नकारात्मक उपस्थिति, पितृ अशांति या भारी ऊर्जा से जुड़े मामलों के लिए मार्गदर्शन प्राप्त करें।"
          : "Troubled by paranormal disturbances, haunted spaces, or negative presences? Guru Chintpurni Kripa Das provides expert paranormal healing in Sitarganj, Uttarakhand.",
        keywords: isHindi ? ["पैरानॉर्मल हीलिंग", "आत्मिक बाधा", "नकारात्मक ऊर्जा"] : ["paranormal healing Uttarakhand", "entity removal", "negative energy removal"],
      },
      hero: {
        eyebrow: isHindi ? "मुख्य सेवा" : "Core Service",
        title: isHindi ? "हर परेशानी का कारण इंसान नहीं होता" : "Not all that disturbs you has a human name",
        description: isHindi
          ? "कभी-कभी समस्या काला जादू नहीं बल्कि आत्मिक, पितृ या ऊर्जा संबंधी बाधा होती है। ऐसे मामलों में विशिष्ट आध्यात्मिक दृष्टि की आवश्यकता होती है।"
          : "Some disturbances come not from people, but from spirits, ancestral unrest, or negative entities attached to a person, home, or family line.",
      },
      sections: [
        {
          title: isHindi ? "पैरानॉर्मल हीलिंग" : "Paranormal Healing",
          paragraphs: isHindi
            ? [
                "कुछ आध्यात्मिक बाधाएं मानव-जनित नहीं होतीं। वे पितृ अशांति, नकारात्मक सत्ता, अटकी हुई आत्मा या स्थान में रुकी भारी ऊर्जा से भी जुड़ी हो सकती हैं।",
                "गुरु चिंतपूर्णी कृपा दास ऐसे सूक्ष्म प्रभावों को पहचानने और शांत करने में अनुभवी हैं।",
              ]
            : [
                "Black magic and witchcraft are caused by people. But some spiritual afflictions have no human origin - they arise from energetic imbalances, ancestral unrest, spirit presences, or negative entities attached to a person, home, or family line.",
                "Guru Chintpurni Kripa Das has extensive experience in paranormal healing. His ability to perceive, engage with, and resolve non-human spiritual disturbances is a rare and precious gift.",
              ],
        },
        {
          title: isHindi ? "पैरानॉर्मल हीलिंग में क्या-क्या आता है?" : "What is paranormal healing?",
          bullets: isHindi
            ? [
                "आत्मा का लगाव - किसी व्यक्ति या स्थान से जुड़ी अशांत आत्माएं",
                "पितृ बाधा - अधूरे कर्म, वचन या पारिवारिक असंतुलन",
                "नकारात्मक सत्ता - ऐसी उपस्थिति जो हानि और बेचैनी का कारण बने",
                "ऊर्जा असंतुलन - घर, भूमि या व्यवसाय में अटकी भारी ऊर्जा",
              ]
            : [
                "Spirit attachment involving the deceased attaching to living people or locations",
                "Ancestral disturbances caused by unresolved karma, promises, or grievances",
                "Negative entity presence linked to harmful spiritual attachment",
                "Energetic imbalances in homes, businesses, or land due to past trauma or events",
              ],
        },
        {
          title: isHindi ? "संकेत कि आपको पैरानॉर्मल हीलिंग की जरूरत हो सकती है" : "Signs you may need paranormal healing",
          bullets: isHindi
            ? [
                "परिवार के कई सदस्यों को एक जैसे डरावने सपने आना",
                "बच्चों का ऐसी चीजें देखना या बताना जिन्हें और कोई न देखे",
                "पालतू जानवरों का कुछ कमरों से बचना",
                "बिना तकनीकी कारण के लाइट या उपकरणों का बार-बार गड़बड़ करना",
                "घर में देखे जाने या किसी उपस्थिति का अनुभव होना",
                "नए घर में आने के बाद अचानक बीमारी या अवसाद बढ़ना",
                "रात में आवाजें, कदमों की आहट या दस्तक सुनाई देना",
              ]
            : [
                "Recurring and vivid nightmares across multiple family members",
                "Children seeing, hearing, or speaking of things no one else can perceive",
                "Animals acting strangely or refusing to enter certain rooms",
                "Lights, electronics, or appliances behaving erratically without technical cause",
                "A persistent feeling of being watched in your own home",
                "Sudden illness or depression after moving to a new home or property",
                "Hearing footsteps, voices, or knocking without explanation",
                "Feeling a presence, especially at night or in specific rooms",
              ],
        },
        {
          title: isHindi ? "गुरु जी की उपचार प्रक्रिया" : "Guru Ji's paranormal healing process",
          bullets: isHindi
            ? [
                "आध्यात्मिक आकलन - यह समझना कि बाधा किस प्रकार की है",
                "आत्मिक शांति - जहां आत्माओं का प्रश्न हो वहां उनके लिए समाधान",
                "नकारात्मक सत्ता निवारण - विशेष अनुष्ठान द्वारा हटाना और सील करना",
                "पितृ शांति - परिवार को आवश्यक उपायों का मार्गदर्शन",
                "स्थान की शुद्धि और सुरक्षा",
              ]
            : [
                "Spiritual assessment to identify the exact nature of the disturbance",
                "Communication and resolution where spirit passage is required",
                "Entity removal through sacred protective rituals",
                "Ancestral healing through guided offerings and practices",
                "Space clearing and protection for the home or property",
              ],
        },
      ],
      faqs: [],
    },
    "spiritual-consultation": {
      slug: "/services/spiritual-consultation",
      seo: {
        title: isHindi ? "गुरु जी के साथ व्यक्तिगत आध्यात्मिक परामर्श" : "One-to-One Spiritual Consultation with Guru Chintpurni Kripa Das",
        description: isHindi
          ? "अपनी स्थिति की जड़ समझने और सही आध्यात्मिक मार्ग प्राप्त करने के लिए व्यक्तिगत परामर्श बुक करें।"
          : "Book a personal spiritual consultation with Guru Chintpurni Kripa Das. Get clarity, guidance, and a personalized healing path.",
        keywords: isHindi ? ["आध्यात्मिक परामर्श", "गुरु जी परामर्श", "ऑनलाइन आध्यात्मिक मार्गदर्शन"] : ["spiritual consultation Uttarakhand", "guru consultation online"],
      },
      hero: {
        eyebrow: isHindi ? "पहला कदम" : "First Step",
        title: isHindi ? "कभी-कभी सबसे बड़ा कदम सिर्फ सहायता मांगना होता है" : "Sometimes the greatest step is simply asking for help",
        description: isHindi
          ? "यदि आप समझ नहीं पा रहे कि समस्या काला जादू, विचक्राफ्ट, पैरानॉर्मल प्रभाव या कुछ और है, तो यह परामर्श सही प्रारंभ हो सकता है।"
          : "When you know something is deeply wrong but cannot yet name it, a personal consultation with Guru Ji offers clarity and direction.",
      },
      sections: [
        {
          title: isHindi ? "स्पिरिचुअल कंसल्टेशन" : "Spiritual Consultation",
          paragraphs: isHindi
            ? [
                "यह कोई सामान्य रीडिंग नहीं है। यह आपकी स्थिति, अनुभव और आवश्यक दिशा पर केंद्रित व्यक्तिगत संवाद है।",
              ]
            : [
                "You may not know whether what you are experiencing is black magic, witchcraft, a paranormal disturbance, or something else entirely. A personal spiritual consultation with Guru Chintpurni Kripa Das is the ideal starting point.",
              ],
          bullets: isHindi
            ? [
                "गुरु जी आपकी बात ध्यान से सुनते हैं",
                "आध्यात्मिक कारण और प्रकृति को पहचानते हैं",
                "स्थिति को स्पष्ट और करुणा से समझाते हैं",
                "उपयुक्त दिशा - उपचार, अनुष्ठान या आगे का मार्ग - बताते हैं",
                "आपके प्रश्नों का ईमानदारी से उत्तर देते हैं",
              ]
            : [
                "Listen deeply to your situation without judgement or dismissal",
                "Use spiritual discernment to identify the nature and source of what you are experiencing",
                "Explain what he sees clearly and compassionately",
                "Recommend the most appropriate course of action",
                "Answer your questions honestly, even if the answers are difficult",
              ],
        },
        {
          title: isHindi ? "किसे यह परामर्श लेना चाहिए?" : "Who should book a spiritual consultation?",
          bullets: isHindi
            ? [
                "जब आप बिना कारण के दुख या बाधा का अनुभव कर रहे हों",
                "पूर्ण उपचार शुरू करने से पहले स्पष्टता चाहते हों",
                "कहीं और उपचार करवा चुके हों लेकिन राहत न मिली हो",
                "परिवार के किसी सदस्य की समस्या को समझना चाहते हों",
                "महत्वपूर्ण जीवन निर्णय से पहले आध्यात्मिक स्थिति जानना चाहते हों",
              ]
            : [
                "You are experiencing unexplained suffering and want to understand its true cause",
                "You want Guru Ji's guidance before committing to a full healing program",
                "You have undergone healing elsewhere but have not experienced relief",
                "A family member is suffering and you want clarity on how to help them",
                "You want to understand your spiritual situation before an important life decision",
              ],
        },
        {
          title: isHindi ? "प्रत्यक्ष और दूरस्थ परामर्श" : "In-person and remote consultations",
          paragraphs: isHindi
            ? [
                "सितारगंज में प्रत्यक्ष सत्र उपलब्ध हैं, साथ ही फोन और वीडियो के माध्यम से दूरस्थ परामर्श भी संभव है। दोनों ही व्यक्तिगत और गंभीर रूप से किए जाते हैं।",
              ]
            : [
                "Guru Ji offers both in-person consultations at his practice in Sitarganj, Uttarakhand, and remote consultations via phone or video call. Both are equally personal and sincere.",
              ],
        },
      ],
      faqs: [],
    },
    astrology: {
      slug: "/services/astrology",
      seo: {
        title: isHindi ? "वैदिक ज्योतिष सेवाएं - कुंडली, राशिफल और वास्तु" : "Vedic Astrology Services - Horoscope, Kundali and Vastu",
        description: isHindi
          ? "कुंडली अध्ययन, विवाह मिलान, करियर मार्गदर्शन, वास्तु और शुभ मुहूर्त के लिए अनुभवी वैदिक ज्योतिष सेवाएं।"
          : "Explore Vedic astrology services at Chintpurni Blessings - horoscope readings, kundali analysis, marriage compatibility, career guidance, and vastu consultation.",
        keywords: isHindi ? ["वैदिक ज्योतिष", "कुंडली रीडिंग", "वास्तु परामर्श"] : ["vedic astrology Uttarakhand", "kundali reading Sitarganj", "astrologer Uttarakhand"],
      },
      hero: {
        eyebrow: isHindi ? "ज्योतिष सेवा" : "Astrology Service",
        title: isHindi ? "वैदिक ज्ञान से जीवन की रूपरेखा समझें" : "Understanding your life's blueprint through Vedic wisdom",
        description: isHindi
          ? "हमारे समर्पित वैदिक ज्योतिषी द्वारा कुंडली, समय, विवाह, करियर और वास्तु से जुड़ी दिशाएं दी जाती हैं।"
          : "Alongside Guru Ji's healing work, a dedicated Vedic astrologer offers chart-based guidance for timing, compatibility, career, and life direction.",
      },
      sections: [
        {
          title: isHindi ? "ज्योतिष सेवाएं" : "Astrology Services",
          paragraphs: isHindi
            ? [
                "ज्योतिष का उद्देश्य भाग्य को डर के साथ देखना नहीं, बल्कि समय, प्रवृत्ति और जीवन की दिशा को समझना है।",
                "चिंतपूर्णी ब्लेसिंग्स में एक अनुभवी और समर्पित वैदिक ज्योतिषी व्यक्तिगत मार्गदर्शन प्रदान करते हैं।",
              ]
            : [
                "While Guru Chintpurni Kripa Das focuses on spiritual healing, Chintpurni Blessings is also home to an experienced and dedicated Vedic astrologer who provides a rich range of astrological services.",
                "Astrology, when practiced with integrity and deep knowledge, is not about predicting a fixed fate - it is about understanding the energies at work in your life so that you can navigate them with wisdom, timing, and purpose.",
              ],
        },
        {
          title: isHindi ? "हमारी ज्योतिष सेवाओं में शामिल है" : "Our astrology services include",
          bullets: isHindi
            ? [
                "जन्म कुंडली अध्ययन - स्वभाव, क्षमता, चुनौतियां और जीवन दिशा",
                "प्रेडिक्टिव ज्योतिष - दशा, गोचर और आने वाले समय की दिशा",
                "विवाह संगति - 36 गुण और गहरी संगति का विश्लेषण",
                "करियर और वित्त मार्गदर्शन - अवसर, रुकावट और सही दिशा",
                "वास्तु परामर्श - घर या व्यवसाय की ऊर्जा संतुलन",
                "मुहूर्त चयन - विवाह, व्यवसाय, खरीद या बड़े निर्णय का सही समय",
              ]
            : [
                "Birth Chart (Kundali) Reading",
                "Predictive Astrology through dasha systems, transits, and yogas",
                "Marriage Compatibility (Kundali Milan)",
                "Career and Finance Guidance",
                "Vastu Consultation",
                "Muhurta (Auspicious Timing)",
              ],
        },
        {
          title: isHindi ? "ज्योतिष और गुरु जी की हीलिंग साथ कैसे काम करती है" : "How astrology and Guru Ji's healing work together",
          paragraphs: isHindi
            ? [
                "जहां गुरु जी का उपचार सक्रिय आध्यात्मिक बाधाओं को कम करने पर केंद्रित है, वहीं ज्योतिष आपके व्यापक कर्मिक और समयगत परिदृश्य को समझने में मदद करता है।",
                "कई साधक दोनों सेवाओं को साथ लेकर राहत के साथ-साथ गहरी समझ भी प्राप्त करते हैं।",
              ]
            : [
                "Astrology and spiritual healing are deeply complementary. While Guru Ji's work removes the active spiritual afflictions affecting your life, astrology helps you understand the broader karmic landscape - why certain challenges have arisen, when conditions will shift, and how to align your actions with the most favorable energies available to you.",
                "Many of our clients find that combining both services brings not just relief, but genuine understanding.",
              ],
        },
      ],
      faqs: [],
    },
  };
}

function buildLegalPages(lang) {
  const isHindi = lang === "hi";

  return {
    terms: {
      slug: "/terms-of-service",
      seo: {
        title: isHindi ? "सेवा की शर्तें" : "Terms of Service",
        description: isHindi
          ? "चिंतपूर्णी ब्लेसिंग्स की वेबसाइट और सेवाओं के उपयोग की शर्तें पढ़ें।"
          : "Read the Terms of Service for Chintpurni Blessings. By using our website or engaging our spiritual healing services, you agree to these terms.",
      },
      hero: {
        eyebrow: isHindi ? "नीति" : "Policy",
        title: isHindi ? "सेवा की शर्तें" : "Terms of Service",
        description: isHindi
          ? "वेबसाइट और परामर्श सेवाओं के उपयोग से पहले इन शर्तों को ध्यान से पढ़ें।"
          : "Please read these terms carefully before using the website or engaging any consultation or healing service.",
      },
      meta: [
        { label: isHindi ? "अंतिम अपडेट" : "Last updated", value: "1 May 2025" },
        { label: isHindi ? "प्रभावी तिथि" : "Effective from", value: "1 May 2025" },
      ],
      intro: isHindi
        ? "वेबसाइट का उपयोग या कोई सेवा बुक करने पर आप इन शर्तों से बंधे माने जाएंगे।"
        : "By accessing this website or booking a consultation or healing service, you agree to be bound by these terms.",
      sections: [
        {
          title: isHindi ? "1. हमारे बारे में" : "1. About Us",
          paragraphs: [
            isHindi
              ? "चिंतपूर्णी ब्लेसिंग्स सितारगंज, उत्तराखंड, भारत में स्थित एक आध्यात्मिक सेवा मंच है। यहां गुरु चिंतपूर्णी कृपा दास द्वारा आध्यात्मिक उपचार और समर्पित ज्योतिषी द्वारा ज्योतिष सेवाएं उपलब्ध हैं।"
              : "Chintpurni Blessings is a spiritual services platform based in Sitarganj, Uttarakhand, India. We offer spiritual healing consultations through Guru Chintpurni Kripa Das, and astrology services through our dedicated astrologer.",
          ],
        },
        {
          title: isHindi ? "2. सेवाओं की प्रकृति" : "2. Nature of Services",
          paragraphs: [
            isHindi
              ? "हमारी सभी सेवाएं आस्था और आध्यात्मिक परंपरा पर आधारित हैं। इन्हें चिकित्सकीय, मनोवैज्ञानिक, कानूनी या वित्तीय सलाह का विकल्प नहीं माना जाना चाहिए।"
              : "All services offered by Chintpurni Blessings are spiritual and faith-based in nature. They are not medical, psychological, legal, or financial services, and should not be treated as a substitute for professional advice in those domains.",
          ],
          bullets: isHindi
            ? [
                "आध्यात्मिक उपचार आस्था, संकल्प और परंपरा पर आधारित है",
                "परिणाम व्यक्ति-विशेष के अनुसार बदल सकते हैं",
                "हमारी सेवाएं किसी चिकित्सा या मानसिक स्थिति का निदान या उपचार नहीं हैं",
                "आप अपनी स्वतंत्र इच्छा से सेवाएं ले रहे हैं",
              ]
            : [
                "Spiritual healing is based on faith, intention, and the practitioner's belief system",
                "Results may vary between individuals and cannot be guaranteed",
                "Our services are not intended to diagnose, treat, cure, or prevent any medical or psychological condition",
                "You are engaging these services of your own free will",
              ],
        },
        {
          title: isHindi ? "3. पात्रता" : "3. Eligibility",
          bullets: isHindi
            ? [
                "आप कम से कम 18 वर्ष के हों, या अभिभावक की सहमति के साथ किसी नाबालिग की ओर से संपर्क कर रहे हों",
                "आप कानूनी रूप से समझौता करने में सक्षम हों",
                "बुकिंग या परामर्श के समय सही जानकारी प्रदान करें",
              ]
            : [
                "You are at least 18 years of age, or are engaging on behalf of a minor with full parental or legal guardian consent",
                "You are legally capable of entering into a binding agreement",
                "You will provide accurate and honest information when booking or consulting",
              ],
        },
        {
          title: isHindi ? "4. बुकिंग और भुगतान" : "4. Booking and Payment",
          bullets: isHindi
            ? [
                "सेवा शुल्क बुकिंग के समय साझा किए जाते हैं",
                "सेवा शुरू होने से पहले भुगतान आवश्यक हो सकता है",
                "हम अपने विवेक से सेवा देने से इनकार कर सकते हैं",
                "जब तक अलग से न बताया जाए, मूल्य भारतीय रुपये में माने जाएंगे",
              ]
            : [
                "Service fees are communicated at the time of consultation booking",
                "Payment must be completed before services commence, unless otherwise agreed",
                "We reserve the right to refuse service to any individual at our sole discretion",
                "All prices are quoted in Indian Rupees (INR) unless otherwise stated",
              ],
        },
        {
          title: isHindi ? "5. गोपनीयता" : "5. Confidentiality",
          paragraphs: [
            isHindi
              ? "हम क्लाइंट की जानकारी को उच्चतम गोपनीयता के साथ संभालते हैं। अधिक जानकारी के लिए हमारी प्राइवेसी पॉलिसी देखें।"
              : "We treat all client information with the highest level of confidentiality. Please refer to our Privacy Policy for full details on how your information is collected, stored, and used.",
          ],
        },
        {
          title: isHindi ? "6. बौद्धिक संपत्ति" : "6. Intellectual Property",
          paragraphs: [
            isHindi
              ? "इस वेबसाइट पर उपलब्ध सामग्री, चित्र, डिज़ाइन और पाठ चिंतपूर्णी ब्लेसिंग्स की संपत्ति हैं, जब तक अलग से न बताया गया हो।"
              : "All content on this website - including text, images, graphics, and design - is the property of Chintpurni Blessings unless otherwise stated.",
          ],
        },
        {
          title: isHindi ? "7. दायित्व की सीमा" : "7. Limitation of Liability",
          bullets: isHindi
            ? [
                "हम सेवाओं के उपयोग से उत्पन्न प्रत्यक्ष या अप्रत्यक्ष हानि के लिए जिम्मेदार नहीं होंगे",
                "परामर्श या उपचार के आधार पर लिए गए निर्णयों की जिम्मेदारी उपयोगकर्ता की होगी",
                "आध्यात्मिक या ज्योतिषीय मार्गदर्शन के परिणामों की गारंटी नहीं है",
              ]
            : [
                "Any direct, indirect, incidental, or consequential loss arising from the use of our services",
                "Any reliance placed on information provided through consultations or healing sessions",
                "Any outcome - positive or negative - arising from spiritual healing or astrological guidance",
              ],
          paragraphs: [
            isHindi
              ? "जहां लागू हो, हमारी जिम्मेदारी संबंधित सेवा के लिए दिए गए भुगतान तक सीमित होगी।"
              : "Our liability, where it exists, shall not exceed the amount paid by you for the specific service in question.",
          ],
        },
        {
          title: isHindi ? "8. शर्तों में परिवर्तन" : "8. Changes to These Terms",
          paragraphs: [
            isHindi
              ? "हम समय-समय पर इन शर्तों को अपडेट कर सकते हैं। परिवर्तन इसी पृष्ठ पर अपडेट तिथि के साथ प्रकाशित किए जाएंगे।"
              : "We reserve the right to update or modify these Terms of Service at any time. Changes will be published on this page with an updated effective date.",
          ],
        },
        {
          title: isHindi ? "9. लागू कानून" : "9. Governing Law",
          paragraphs: [
            isHindi
              ? "ये शर्तें भारत के कानूनों के अनुसार संचालित होंगी और किसी विवाद की स्थिति में उत्तराखंड की न्यायिक सीमा लागू होगी।"
              : "These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts in Uttarakhand, India.",
          ],
        },
        {
          title: isHindi ? "10. संपर्क" : "10. Contact",
          paragraphs: [
            isHindi ? "इन शर्तों से संबंधित किसी भी प्रश्न के लिए कृपया हमसे संपर्क करें।" : "For any queries regarding these terms, please contact us.",
          ],
        },
      ],
    },
    privacy: {
      slug: "/privacy-policy",
      seo: {
        title: isHindi ? "प्राइवेसी पॉलिसी" : "Privacy Policy",
        description: isHindi
          ? "जानें कि चिंतपूर्णी ब्लेसिंग्स आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित रखता है।"
          : "Chintpurni Blessings is committed to protecting your privacy. Read our full Privacy Policy to understand how we collect, use, and safeguard your personal information.",
      },
      hero: {
        eyebrow: isHindi ? "नीति" : "Policy",
        title: isHindi ? "प्राइवेसी पॉलिसी" : "Privacy Policy",
        description: isHindi
          ? "आपकी जानकारी हमारे लिए केवल कानूनी दायित्व नहीं, बल्कि एक विश्वास है।"
          : "Your privacy is a core value. This page explains how we handle the information you share with us.",
      },
      meta: [{ label: isHindi ? "अंतिम अपडेट" : "Last updated", value: "1 May 2025" }],
      intro: isHindi
        ? "आपके द्वारा साझा की गई हर जानकारी को गंभीरता और गोपनीयता से संभाला जाता है।"
        : "Every detail you share with Chintpurni Blessings and Guru Chintpurni Kripa Das is held sacred.",
      sections: [
        {
          title: isHindi ? "1. हम कौन हैं" : "1. Who We Are",
          paragraphs: [
            isHindi
              ? "चिंतपूर्णी ब्लेसिंग्स सितारगंज, उत्तराखंड, भारत में स्थित एक आध्यात्मिक सेवा मंच है। हम आध्यात्मिक उपचार और ज्योतिष सेवाएं प्रदान करते हैं।"
              : "Chintpurni Blessings is a spiritual services platform located in Sitarganj, Uttarakhand, India. We offer spiritual healing and astrology services.",
            isHindi ? "गोपनीयता से जुड़े किसी भी प्रश्न के लिए कृपया हमसे संपर्क करें।" : "For any privacy-related questions, please contact us.",
          ],
        },
        {
          title: isHindi ? "2. हम कौन-सी जानकारी एकत्र करते हैं" : "2. What Information We Collect",
          paragraphs: [isHindi ? "हम निम्न प्रकार की जानकारी एकत्र कर सकते हैं:" : "We may collect the following types of personal information:"],
          bullets: isHindi
            ? [
                "आपका नाम",
                "संपर्क विवरण - फोन नंबर, ईमेल, व्हाट्सऐप",
                "स्थान - शहर या देश",
                "समस्या या स्थिति का संक्षिप्त विवरण",
                "भुगतान संबंधी जानकारी, यदि लागू हो",
                "IP पता, ब्राउज़र प्रकार, देखे गए पृष्ठ और डिवाइस जानकारी",
              ]
            : [
                "Your name",
                "Your contact details such as phone number, email address, and WhatsApp number",
                "Your location such as city or country",
                "A description of your situation as shared during enquiries or bookings",
                "Payment information processed securely through our payment provider",
                "IP address, browser type, pages visited, time spent, device type, and referring source where applicable",
              ],
        },
        {
          title: isHindi ? "3. जानकारी का उपयोग कैसे किया जाता है" : "3. How We Use Your Information",
          bullets: isHindi
            ? [
                "आपकी पूछताछ का उत्तर देने के लिए",
                "सेवा समन्वय और रिकॉर्ड बनाए रखने के लिए",
                "बुकिंग, पुष्टि और फॉलो-अप संदेश भेजने के लिए",
                "वेबसाइट और सेवा गुणवत्ता सुधारने के लिए",
                "कानूनी दायित्व पूरा करने के लिए",
              ]
            : [
                "Respond to your enquiries and provide the services you have requested",
                "Maintain records necessary for the delivery of our services",
                "Send service-related communications such as confirmations and follow-ups",
                "Improve our website and service quality",
                "Comply with legal obligations",
              ],
          paragraphs: [
            isHindi ? "हम आपकी अनुमति के बिना अनचाहे मार्केटिंग संदेश नहीं भेजते।" : "We do not use your information for unsolicited marketing without your consent.",
          ],
        },
        {
          title: isHindi ? "4. आपकी जानकारी की सुरक्षा" : "4. How We Protect Your Information",
          paragraphs: [
            isHindi
              ? "हम तकनीकी और संगठनात्मक उपाय अपनाते हैं ताकि आपकी जानकारी को नुकसान, चोरी या अनधिकृत पहुंच से बचाया जा सके।"
              : "We take reasonable technical and organizational measures to protect your personal data against loss, theft, and unauthorized access.",
          ],
        },
        {
          title: isHindi ? "5. जानकारी साझा करना" : "5. Sharing of Information",
          paragraphs: [
            isHindi ? "हम आपकी व्यक्तिगत जानकारी को बेचते, किराए पर देते या व्यापार नहीं करते।" : "We do not sell, rent, or trade your personal information to any third party.",
          ],
          bullets: isHindi
            ? [
                "केवल आंतरिक टीम के सदस्यों के साथ जहां सेवा देने के लिए आवश्यक हो",
                "भुगतान प्रोसेसर के साथ, यदि भुगतान प्रक्रिया में आवश्यकता हो",
                "कानून या नियामक आवश्यकता होने पर संबंधित प्राधिकरण के साथ",
              ]
            : [
                "With internal team members who need it to deliver the service you have requested",
                "With payment processors for the purpose of completing your transaction",
                "With law enforcement or regulatory bodies where required by law",
              ],
        },
        {
          title: isHindi ? "6. डेटा संग्रह की अवधि" : "6. Retention of Data",
          paragraphs: [
            isHindi
              ? "हम आपकी जानकारी उतनी ही अवधि तक रखते हैं जितनी सेवा देने, रिकॉर्ड रखने या कानूनन आवश्यक हो।"
              : "We retain your personal information for as long as necessary to fulfill the purpose for which it was collected, or as required by law.",
          ],
        },
        {
          title: isHindi ? "7. आपके अधिकार" : "7. Your Rights",
          bullets: isHindi
            ? [
                "हमारे पास रखी आपकी जानकारी तक पहुंच का अधिकार",
                "गलत जानकारी के सुधार का अधिकार",
                "व्यक्तिगत डेटा हटाने का अनुरोध करने का अधिकार",
                "जहां सहमति आधारित प्रक्रिया हो वहां सहमति वापस लेने का अधिकार",
                "संबंधित प्राधिकरण के समक्ष शिकायत दर्ज करने का अधिकार",
              ]
            : [
                "Access the personal information we hold about you",
                "Request correction of inaccurate information",
                "Request deletion of your personal data",
                "Withdraw consent at any time where processing is based on consent",
                "Lodge a complaint with a relevant supervisory authority",
              ],
          paragraphs: [isHindi ? "इन अधिकारों के उपयोग के लिए कृपया हमसे संपर्क करें।" : "To exercise any of these rights, please contact us."],
        },
        {
          title: isHindi ? "8. थर्ड-पार्टी लिंक" : "8. Third-Party Links",
          paragraphs: [
            isHindi
              ? "वेबसाइट पर कुछ बाहरी लिंक हो सकते हैं। उन साइटों की गोपनीयता नीतियां उनकी अपनी होंगी।"
              : "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.",
          ],
        },
        {
          title: isHindi ? "9. नीति में परिवर्तन" : "9. Changes to This Policy",
          paragraphs: [
            isHindi
              ? "हम समय-समय पर इस नीति को अपडेट कर सकते हैं। संशोधित संस्करण इसी पृष्ठ पर प्रकाशित किया जाएगा।"
              : "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.",
          ],
        },
      ],
    },
    disclaimer: {
      slug: "/disclaimer",
      seo: {
        title: isHindi ? "डिस्क्लेमर" : "Disclaimer",
        description: isHindi
          ? "हमारी आध्यात्मिक और ज्योतिष सेवाओं की सीमा और प्रकृति को समझने के लिए यह डिस्क्लेमर पढ़ें।"
          : "Read the disclaimer for Chintpurni Blessings. Our spiritual healing and astrology services are faith-based and do not replace professional advice.",
      },
      hero: {
        eyebrow: isHindi ? "सूचना" : "Notice",
        title: isHindi ? "डिस्क्लेमर" : "Disclaimer",
        description: isHindi
          ? "कृपया वेबसाइट या सेवाओं का उपयोग करने से पहले इस सूचना को पढ़ें।"
          : "Please read this disclaimer carefully before using the website or engaging any of our services.",
      },
      meta: [{ label: isHindi ? "अंतिम अपडेट" : "Last updated", value: "1 May 2025" }],
      intro: isHindi
        ? "यह पृष्ठ हमारी सेवाओं की प्रकृति और परिणामों से संबंधित महत्वपूर्ण सीमाएं बताता है।"
        : "This page explains the nature of our services and the limits that apply to them.",
      sections: [
        {
          title: isHindi ? "1. सेवाओं की प्रकृति" : "1. Nature of Services",
          paragraphs: [
            isHindi
              ? "चिंतपूर्णी ब्लेसिंग्स की सेवाएं - आध्यात्मिक उपचार, ब्लैक मैजिक रिमूवल, विचक्राफ्ट क्योर, पैरानॉर्मल हीलिंग, स्पिरिचुअल कंसल्टेशन और ज्योतिष - पूरी तरह आस्था और आध्यात्मिक परंपरा पर आधारित हैं।"
              : "The services provided by Chintpurni Blessings - including spiritual healing, black magic removal, witchcraft cure, paranormal healing, spiritual consultations, and astrology services - are entirely faith-based and spiritual in nature.",
          ],
          bullets: isHindi
            ? [
                "ये चिकित्सकीय, मनोवैज्ञानिक, कानूनी या वित्तीय सलाह नहीं हैं",
                "ये किसी शारीरिक या मानसिक स्थिति का निदान, उपचार या रोकथाम नहीं हैं",
                "इनका उपयोग योग्य पेशेवर सहायता के विकल्प के रूप में नहीं किया जाना चाहिए",
                "ये सेवाएं गुरु जी और ज्योतिषी की आध्यात्मिक परंपरा और विश्वासों पर आधारित हैं",
              ]
            : [
                "Are not a form of medical, psychological, psychiatric, legal, or financial advice",
                "Are not intended to diagnose, treat, cure, or prevent any physical, mental, or emotional condition",
                "Should not be used as a substitute for seeking qualified professional help in any of the above domains",
                "Are provided based on the spiritual beliefs, traditions, and practices of Guru Chintpurni Kripa Das and our astrologer",
              ],
        },
        {
          title: isHindi ? "2. परिणामों की गारंटी नहीं" : "2. No Guarantee of Results",
          paragraphs: [
            isHindi
              ? "गुरु जी और हमारी टीम पूरी निष्ठा से कार्य करती है, लेकिन किसी निश्चित परिणाम की गारंटी नहीं दी जा सकती।"
              : "While Guru Chintpurni Kripa Das and our team work with complete sincerity and dedication, we cannot and do not guarantee specific outcomes from our services.",
          ],
          bullets: isHindi
            ? [
                "अपना चिकित्सकीय या थेरेपी संबंधी उपचार जारी रखें",
                "आपात स्थिति में तुरंत पेशेवर सहायता लें",
                "स्वास्थ्य, धन और संबंधों से जुड़े निर्णय स्वतंत्र रूप से लें",
              ]
            : [
                "Continue any medical or therapeutic treatment you are currently undergoing",
                "Seek emergency professional help if you or a loved one are in immediate danger",
                "Make independent decisions regarding your health, finances, and relationships",
              ],
        },
        {
          title: isHindi ? "3. प्रशंसापत्र और अनुभव" : "3. Testimonials and Client Experiences",
          paragraphs: [
            isHindi
              ? "वेबसाइट पर साझा अनुभव व्यक्तिगत हैं। वे किसी समान परिणाम की गारंटी नहीं माने जाएंगे।"
              : "Any testimonials or accounts of healing outcomes shared on this website represent individual experiences. They are not guarantees that you will achieve the same or similar results.",
          ],
        },
        {
          title: isHindi ? "4. दायित्व की सीमा" : "4. Limitation of Liability",
          paragraphs: [
            isHindi
              ? "वेबसाइट के उपयोग या सेवाओं से जुड़े निर्णयों और परिणामों के लिए चिंतपूर्णी ब्लेसिंग्स, गुरु जी और सहयोगी व्यक्तियों पर दायित्व नहीं होगा।"
              : "Chintpurni Blessings, Guru Chintpurni Kripa Das, and all associated individuals accept no liability for any decisions made, actions taken, or consequences arising from use of our website or engagement of our services.",
          ],
        },
        {
          title: isHindi ? "5. बाहरी लिंक" : "5. External Links",
          paragraphs: [
            isHindi
              ? "यदि वेबसाइट किसी बाहरी संसाधन से लिंक करती है, तो वह केवल सुविधा के लिए है और उसका समर्थन नहीं माना जाएगा।"
              : "Where this website links to third-party websites or resources, those links are provided for convenience only. We do not endorse or accept responsibility for the content of external sites.",
          ],
        },
        {
          title: isHindi ? "6. प्रश्न" : "6. Questions",
          paragraphs: [isHindi ? "इस डिस्क्लेमर से संबंधित किसी भी प्रश्न के लिए हमसे संपर्क करें।" : "If you have any questions about this disclaimer, please contact us."],
        },
      ],
    },
    refund: {
      slug: "/refund-policy",
      seo: {
        title: isHindi ? "रिफंड पॉलिसी" : "Refund Policy",
        description: isHindi
          ? "आध्यात्मिक उपचार और ज्योतिष सेवाओं के लिए भुगतान, रद्दीकरण और रिफंड संबंधी नीति पढ़ें।"
          : "Read Chintpurni Blessings' refund policy and understand the terms that apply to payments made for spiritual healing and astrology services.",
      },
      hero: {
        eyebrow: isHindi ? "नीति" : "Policy",
        title: isHindi ? "रिफंड पॉलिसी" : "Refund Policy",
        description: isHindi
          ? "भुगतान करने से पहले कृपया यह नीति ध्यान से पढ़ें।"
          : "Please read this Refund Policy carefully before making any payment for our services.",
      },
      meta: [{ label: isHindi ? "अंतिम अपडेट" : "Last updated", value: "1 May 2025" }],
      intro: isHindi
        ? "हम सेवाएं ईमानदारी और देखभाल के साथ प्रदान करते हैं। इसीलिए रिफंड के नियम स्पष्ट रूप से बताए जा रहे हैं।"
        : "We are committed to providing services with genuine care and integrity. This page explains when refunds may and may not apply.",
      sections: [
        {
          title: isHindi ? "1. सेवाओं की प्रकृति और रिफंड सीमा" : "1. Nature of Our Services and Refund Limitations",
          paragraphs: [
            isHindi
              ? "हमारी सेवाएं आध्यात्मिक, आस्था-आधारित और परामर्श प्रकृति की हैं। एक बार सत्र पूरा हो जाने पर समय, ज्ञान और आध्यात्मिक प्रयास प्रयुक्त हो चुके होते हैं।"
              : "The services offered by Chintpurni Blessings are spiritual, faith-based, and consultative in nature. Once a consultation or healing session has been conducted, the practitioner's time, knowledge, and spiritual effort have been expended.",
          ],
          bullets: isHindi
            ? [
                "पूर्ण हो चुके परामर्श सत्रों की फीस सामान्यतः नॉन-रिफंडेबल है",
                "पूर्ण हो चुके हीलिंग सत्रों की फीस सामान्यतः नॉन-रिफंडेबल है",
              ]
            : [
                "Fees paid for completed consultations are non-refundable",
                "Fees paid for completed healing sessions are non-refundable",
              ],
        },
        {
          title: isHindi ? "2. किन परिस्थितियों में रिफंड संभव है" : "2. Eligibility for Refunds",
          bullets: isHindi
            ? [
                "डुप्लिकेट भुगतान - तकनीकी त्रुटि के कारण दो बार भुगतान होने पर",
                "सेवा न मिलना - भुगतान और बुकिंग होने के बावजूद हमारी ओर से सत्र न होना",
                "पर्याप्त पूर्व सूचना के साथ रद्दीकरण - कम से कम 48 घंटे पहले",
              ]
            : [
                "Duplicate payment due to a technical error",
                "Service not delivered on our side without rescheduling or notice",
                "Client cancellation with at least 48 hours' notice",
              ],
        },
        {
          title: isHindi ? "3. 48 घंटे से कम सूचना पर रद्दीकरण" : "3. Cancellations with Less Than 48 Hours' Notice",
          paragraphs: [
            isHindi
              ? "यदि रद्दीकरण 48 घंटे से कम समय में किया जाता है, तो पूरी फीस रोकी जा सकती है क्योंकि वह समय किसी अन्य क्लाइंट को नहीं दिया जा सकता।"
              : "If you cancel a booking with fewer than 48 hours' notice, we reserve the right to retain the full session fee, as this time may not be allocated to another client.",
            isHindi
              ? "फिर भी वास्तविक आपात स्थिति में कृपया हमसे संपर्क करें; हम सहानुभूति के साथ मामले पर विचार करेंगे।"
              : "We understand that genuine emergencies arise. In exceptional circumstances, please contact us and we will consider your situation with compassion.",
          ],
        },
        {
          title: isHindi ? "4. रिफंड कैसे मांगें" : "4. How to Request a Refund",
          bullets: isHindi
            ? [
                "अपना नाम और संपर्क विवरण",
                "बुक की गई या पूर्ण हुई सेवा की तिथि",
                "भुगतान राशि और भुगतान का माध्यम",
                "रिफंड का कारण",
              ]
            : [
                "Your name and contact details",
                "The date of the service booked or conducted",
                "The amount paid and method of payment",
                "The reason for your refund request",
              ],
          paragraphs: [
            isHindi ? "हम सामान्यतः 5 कार्य दिवसों के भीतर उत्तर देने का प्रयास करते हैं।" : "We aim to respond to all refund requests within 5 working days.",
          ],
        },
        {
          title: isHindi ? "5. रिफंड प्रक्रिया" : "5. Processing of Refunds",
          paragraphs: [
            isHindi
              ? "स्वीकृत रिफंड मूल भुगतान माध्यम में सामान्यतः 7 से 14 कार्य दिवसों के भीतर भेजे जाएंगे।"
              : "Approved refunds will be processed to the original payment method within 7-14 business days, depending on your bank or payment provider.",
          ],
        },
        {
          title: isHindi ? "6. नीति में परिवर्तन" : "6. Changes to This Policy",
          paragraphs: [
            isHindi
              ? "हम इस नीति को समय-समय पर संशोधित कर सकते हैं। संशोधित संस्करण इसी पृष्ठ पर प्रकाशित होगा।"
              : "We reserve the right to amend this Refund Policy at any time. Changes will be posted on this page with an updated effective date.",
          ],
        },
        {
          title: isHindi ? "7. संपर्क" : "7. Contact",
          paragraphs: [isHindi ? "इस नीति से संबंधित किसी भी प्रश्न के लिए कृपया हमसे संपर्क करें।" : "For any questions about this policy, please contact us."],
        },
      ],
    },
  };
}

function buildContent(lang) {
  const isHindi = lang === "hi";
  const services = buildServices(lang);
  const spiritualServices = services.filter((service) => service.category === "spiritual");
  const astrologyServices = services.filter((service) => service.category === "astrology");

  return {
    languageToggle: isHindi ? "English" : "हिंदी",
    brand: {
      siteName: "Chintpurni Blessings",
      shortName: isHindi ? "चिंतपूर्णी ब्लेसिंग्स" : "Chintpurni Blessings",
      tagline: isHindi
        ? "माता चिंतपूर्णी की कृपा से आध्यात्मिक उपचार, संरक्षण और दिशा"
        : "Spiritual healing, protection, and guidance blessed by Mata Chintpurni",
      guruName: isHindi ? "गुरु चिंतपूर्णी कृपा दास" : "Guru Chintpurni Kripa Das",
      location: isHindi ? "सितारगंज, उत्तराखंड" : "Sitarganj, Uttarakhand",
      locationLine: isHindi ? "सितारगंज, उत्तराखंड, भारत" : "Sitarganj, Uttarakhand, India",
      fullAddress: "Ram Ji Medical, near Turna Hospital, Sitaraganj, 262405",
      postalCode: "262405",
      phone: "+91 9456165462",
      phoneCompact: "+919456165462",
      email: "chintpurniblessings@gmail.com",
      whatsapp: "https://wa.me/919456165462",
      instagram: "https://instagram.com/chintpurniblessings",
      facebook: "https://www.facebook.com/share/1B8DV6119J/?mibextid=wwXIfr",
      calendly: "",
      availability: isHindi ? "सोमवार से रविवार, सुबह 8 बजे - रात 8 बजे IST" : "Monday to Sunday, 8 AM - 8 PM IST",
    },
    notices: isHindi
      ? [
          "दूरस्थ परामर्श भारत और विदेश दोनों के लिए उपलब्ध",
          "गोपनीयता और सम्मान के साथ आध्यात्मिक मार्गदर्शन",
          "ब्लैक मैजिक, विचक्राफ्ट, पैरानॉर्मल और ज्योतिष सेवाएं",
        ]
      : [
          "Remote consultations available across India and abroad",
          "Confidential spiritual guidance with respect and compassion",
          "Black magic removal, witchcraft cure, paranormal healing, and astrology services",
        ],
    navLinks: [
      { to: "/", label: isHindi ? "होम" : "Home" },
      { to: "/about", label: isHindi ? "गुरु जी के बारे में" : "About Guru Ji" },
      { to: "/services", label: isHindi ? "सेवाएं" : "Services" },
      { to: "/testimonials", label: isHindi ? "प्रशंसापत्र" : "Testimonials" },
      { to: "/contact", label: isHindi ? "संपर्क" : "Contact" },
    ],
    common: {
      book: isHindi ? "बुक करें" : "Book",
      bookNow: isHindi ? "अभी बुक करें" : "Book Now",
      bookConsultation: isHindi ? "परामर्श बुक करें" : "Book Consultation",
      bookThisService: isHindi ? "यह सेवा बुक करें" : "Book This Service",
      exploreServices: isHindi ? "सेवाएं देखें" : "Explore Services",
      learnMore: isHindi ? "और जानें" : "Learn More",
      viewAllServices: isHindi ? "सभी सेवाएं देखें" : "View All Services",
      viewTestimonials: isHindi ? "सभी प्रशंसापत्र देखें" : "View All Testimonials",
      viewHoroscope: isHindi ? "राशिफल देखें" : "View Horoscope",
      viewRashiGuide: isHindi ? "राशि गाइड देखें" : "View Rashi Guide",
      readAboutGuru: isHindi ? "गुरु जी के बारे में पढ़ें" : "Read About Guru Ji",
      askOnWhatsApp: isHindi ? "व्हाट्सऐप पर पूछें" : "Ask on WhatsApp",
      whatsappNow: isHindi ? "व्हाट्सऐप करें" : "WhatsApp Now",
      continueOnWhatsApp: isHindi ? "व्हाट्सऐप पर जारी रखें" : "Continue on WhatsApp",
      ask: isHindi ? "पूछें" : "Ask",
      whatsapp: "WhatsApp",
      call: isHindi ? "कॉल" : "Call",
      pages: isHindi ? "पेज" : "Pages",
      spiritualServices: isHindi ? "आध्यात्मिक सेवाएं" : "Spiritual Services",
      astrologyServicesLabel: isHindi ? "ज्योतिष सेवाएं" : "Astrology Services",
      legal: isHindi ? "नीतियां" : "Policies",
      hours: isHindi ? "समय" : "Hours",
      mondaySunday: isHindi ? "सोमवार से रविवार" : "Monday to Sunday",
      consultationHours: isHindi ? "सुबह 8 बजे - रात 8 बजे IST" : "8 AM - 8 PM IST",
      onlineInPerson: isHindi ? "प्रत्यक्ष और दूरस्थ दोनों" : "In-person and remote consultations",
      address: isHindi ? "पता" : "Address",
      email: "Email",
      phoneWhatsapp: isHindi ? "फोन / व्हाट्सऐप" : "Phone / WhatsApp",
      name: isHindi ? "नाम" : "Name",
      phoneNumber: isHindi ? "फोन नंबर" : "Phone Number",
      issueNeeded: isHindi ? "अपनी समस्या या आवश्यकता लिखें" : "Tell us about your concern",
      sendQuery: isHindi ? "संदेश भेजें" : "Send Query",
      quickLinks: isHindi ? "त्वरित लिंक" : "Quick Links",
      selectPeriod: isHindi ? "अवधि चुनें" : "Select Period",
      selectSign: isHindi ? "राशि चुनें" : "Select Sign",
      selectRashi: isHindi ? "राशि चुनें" : "Select Rashi",
      focusArea: isHindi ? "विषय चुनें" : "Select Focus",
      focus: isHindi ? "विषय" : "Focus",
      luckyColor: isHindi ? "शुभ रंग" : "Lucky Color",
      luckyWindow: isHindi ? "शुभ समय" : "Lucky Window",
      rulingPlanet: isHindi ? "स्वामी ग्रह" : "Ruling Planet",
      strengths: isHindi ? "ताकत" : "Strengths",
      challenges: isHindi ? "चुनौतियां" : "Challenges",
      luckyColorsGemstone: isHindi ? "शुभ रंग / रत्न" : "Lucky Colors / Gemstone",
      copyright: isHindi
        ? "© 2025 चिंतपूर्णी ब्लेसिंग्स। सभी अधिकार सुरक्षित।"
        : "© 2025 Chintpurni Blessings. All rights reserved.",
      serviceCategorySpiritual: isHindi ? "आध्यात्मिक सेवा" : "Spiritual Service",
      serviceCategoryAstrology: isHindi ? "ज्योतिष सेवा" : "Astrology Service",
    },
    footer: {
      description: isHindi
        ? "चिंतपूर्णी ब्लेसिंग्स में गुरु चिंतपूर्णी कृपा दास द्वारा आध्यात्मिक उपचार और समर्पित ज्योतिषी द्वारा वैदिक ज्योतिष मार्गदर्शन उपलब्ध है।"
        : "Chintpurni Blessings connects seekers with Guru Chintpurni Kripa Das for spiritual healing and with a dedicated astrologer for Vedic astrology guidance.",
      legalLinks: [
        { to: "/privacy-policy", label: isHindi ? "प्राइवेसी पॉलिसी" : "Privacy Policy" },
        { to: "/terms-of-service", label: isHindi ? "सेवा की शर्तें" : "Terms of Service" },
        { to: "/refund-policy", label: isHindi ? "रिफंड पॉलिसी" : "Refund Policy" },
        { to: "/disclaimer", label: isHindi ? "डिस्क्लेमर" : "Disclaimer" },
      ],
    },
    greetingPopup: {
      title: isHindi ? "आप अकेले नहीं हैं" : "You are not alone",
      body: isHindi
        ? "यदि आपकी समस्या साधारण उत्तरों से परे है, तो गुरु जी का मार्गदर्शन आपके लिए पहला सही कदम हो सकता है।"
        : "If what you are facing feels beyond ordinary answers, Guru Ji's guidance may be the first meaningful step toward relief.",
    },
    exitPopup: {
      eyebrow: isHindi ? "जाने से पहले" : "Before You Leave",
      title: isHindi ? "अपनी स्थिति को अकेले मत ढोइए" : "Do not carry this burden alone",
      body: isHindi
        ? "यदि आप अनिश्चित हैं कि कौन-सी सेवा आपके लिए सही है, तो बस संक्षेप में अपनी स्थिति बताइए। हम सही दिशा में ले जाएंगे।"
        : "If you are unsure which service fits your situation, send a brief note. We will help guide you toward the right next step with honesty and care.",
    },
    aiAssistant: {
      title: isHindi ? "सेवा मार्गदर्शक" : "Service Guide",
      subtitle: isHindi ? "सही दिशा चुनने में सहायता" : "Help choosing the right path",
      defaultMessage: isHindi
        ? "यदि आपकी समस्या ब्लैक मैजिक, विचक्राफ्ट, डर, भारीपन या आध्यात्मिक बाधा से जुड़ी है तो गुरु जी की सेवाओं से शुरुआत करें। यदि प्रश्न कुंडली, विवाह, करियर या शुभ समय से जुड़ा है, तो ज्योतिष सेवा देखें।"
        : "If your concern feels linked to black magic, witchcraft, fear, heaviness, or spiritual disturbance, start with Guru Ji's healing services. If it relates to kundali, marriage, career, or timing, start with astrology services.",
      prompts: isHindi
        ? {
            "ब्लैक मैजिक": "यदि बार-बार बीमारी, भय, आर्थिक गिरावट या घर में भारीपन महसूस हो रहा है, तो ब्लैक मैजिक रिमूवल सेवा देखें।",
            "विचक्राफ्ट": "यदि घर के आसपास अजीब वस्तुएं मिल रही हैं, रिश्तों में अचानक टूटन है, या टोटका का संदेह है, तो विचक्राफ्ट क्योर उपयुक्त हो सकता है।",
            "ज्योतिष": "यदि आप कुंडली, विवाह, करियर, वित्त, वास्तु या शुभ समय जानना चाहते हैं, तो Astrology Services से शुरुआत करें।",
          }
        : {
            "Black Magic": "If you are dealing with repeated illness, fear, sudden losses, or heaviness at home, begin with Black Magic Removal.",
            "Witchcraft": "If you suspect targeted ritual harm, planted objects, or a curse-like pattern, Witchcraft Cure may be the right path.",
            "Astrology": "If your concern is about kundali, marriage, career, finance, vastu, or timing, start with Astrology Services.",
          },
    },
    trustStats: [
      { value: 20, label: isHindi ? "वर्षों का आध्यात्मिक अनुभव" : "Years of spiritual experience" },
      { value: 1000, label: isHindi ? "मार्गदर्शन से लाभान्वित परिवार" : "Families guided with care" },
      { value: 2, label: isHindi ? "परामर्श माध्यम - प्रत्यक्ष और दूरस्थ" : "Consultation modes - in person and remote" },
    ],
    testimonials: testimonialEntries[lang],
    services,
    zodiacSigns: buildZodiacSigns(lang),
    home: {
      seo: {
        title: isHindi ? "गुरु चिंतपूर्णी कृपा दास - आध्यात्मिक उपचार और ब्लैक मैजिक रिमूवल" : "Guru Chintpurni Kripa Das - Spiritual Healer and Black Magic Removal in Uttarakhand",
        description: isHindi
          ? "माता चिंतपूर्णी की कृपा से ब्लैक मैजिक रिमूवल, विचक्राफ्ट क्योर, पैरानॉर्मल हीलिंग और आध्यात्मिक मार्गदर्शन।"
          : "Seek the divine blessings of Guru Chintpurni Kripa Das - a Mahapurush blessed by Mata Chintpurni. Trusted spiritual healer for black magic removal, witchcraft cure, and paranormal healing in Sitarganj, Uttarakhand.",
        keywords: isHindi
          ? ["ब्लैक मैजिक रिमूवल", "आध्यात्मिक उपचार", "गुरु चिंतपूर्णी कृपा दास"]
          : ["black magic removal Uttarakhand", "spiritual healer Sitarganj", "Guru Chintpurni Kripa Das"],
      },
      hero: {
        eyebrow: isHindi ? "माता चिंतपूर्णी की कृपा" : "Blessed by Mata Chintpurni",
        title: isHindi ? "जब साधारण उत्तर पर्याप्त न हों" : "When suffering has no ordinary answer",
        body: isHindi
          ? [
              "कुछ समस्याएं दवा, धन या साधारण सलाह से नहीं सुलझतीं। जब बीमारी बिना कारण बनी रहे, संबंध अचानक टूटने लगें, या दुर्भाग्य लगातार पीछा करे, तो अक्सर मामला कहीं अधिक गहरा होता है।",
              "गुरु चिंतपूर्णी कृपा दास, सितारगंज, उत्तराखंड के एक दिव्य महापुरुष, दशकों से ऐसे लोगों को राहत, स्पष्टता और आध्यात्मिक संरक्षण की दिशा देते आए हैं।",
              "आप अकेले नहीं हैं। और आपको यह सब अकेले नहीं झेलना चाहिए।",
            ]
          : [
              "Some problems cannot be solved by medicine, money, or human counsel alone. When your household is gripped by unrest that defies all logic - when illness lingers without cause, when relationships collapse without reason, when misfortune seems to follow you like a shadow - it is often a sign that something far deeper is at work.",
              "Guru Chintpurni Kripa Das, a divinely blessed Mahapurush from Sitarganj, Uttarakhand, has walked this path for decades. Bestowed with the sacred grace of Mata Chintpurni, he has guided thousands of souls out of darkness and into lives of peace, clarity, and renewed purpose.",
              "You are not alone. And you do not have to suffer any longer.",
            ],
        primaryCta: isHindi ? "गुरु जी से मार्गदर्शन लें" : "Seek Guru Ji's Guidance Today",
        secondaryCta: isHindi ? "सेवाएं देखें" : "View All Services",
      },
      guruIntro: {
        eyebrow: isHindi ? "गुरु जी कौन हैं?" : "Who Is Guru Ji?",
        title: isHindi ? "दिव्य माता के आशीष से चुने गए महापुरुष" : "A Mahapurush blessed by the Divine Mother herself",
        body: isHindi
          ? [
              "हर आध्यात्मिक मार्गदर्शक चुना नहीं जाता; कुछ को दिव्य शक्ति स्वयं बुलाती है। गुरु चिंतपूर्णी कृपा दास का जीवन उसी पुकार का उत्तर है।",
              "वे हर व्यक्ति को करुणा, गोपनीयता और सच्चे आध्यात्मिक विवेक के साथ देखते हैं। उनका उद्देश्य अंधविश्वास नहीं, बल्कि राहत, परिवर्तन और शांति है।",
            ]
          : [
              "Not every spiritual teacher is chosen. Some are called. Guru Chintpurni Kripa Das was not simply drawn to the spiritual path - he was placed on it by Mata Chintpurni, the revered Shakti deity whose blessings are known to dissolve deeply rooted suffering.",
              "His life is one of selfless service. Every person who comes to him is treated with compassion, privacy, and the full force of his divine insight. He does not deal in superstition - he deals in truth, transformation, and the enduring power of spiritual grace.",
            ],
        cta: isHindi ? "गुरु जी के बारे में और जानें" : "Learn More About Guru Ji",
      },
      signs: {
        eyebrow: isHindi ? "क्या आप प्रभावित हैं?" : "Are You Affected?",
        title: isHindi ? "क्या ये अनुभव आपके जीवन से मिलते हैं?" : "Do these experiences sound familiar?",
        body: isHindi
          ? "आध्यात्मिक बाधाएं अक्सर साधारण दुर्भाग्य की तरह दिखती हैं। यदि इनमें से कुछ भी आपके जीवन से मेल खाता है, तो सहायता लेने में देर न करें।"
          : "Spiritual afflictions rarely announce themselves clearly. They often disguise themselves as ordinary misfortune. If even one or two of these experiences feel familiar, do not wait too long to seek guidance.",
        items: isHindi
          ? [
              "बिना कारण लगातार बीमारी",
              "अचानक आर्थिक गिरावट या रुकावट",
              "घर में तीखे झगड़े या अलगाव",
              "डरावने सपने, बेचैनी या पीछा किए जाने का अनुभव",
              "बिना स्पष्ट कारण मानसिक तनाव या अवसाद",
              "बच्चों या परिवार के सदस्यों का असामान्य व्यवहार",
              "व्यवसाय, नौकरी या कानूनी मामलों में लगातार टूटन",
              "घर के बाहर बाल, राख, नींबू, कील या कपड़ा जैसी चीजें मिलना",
            ]
          : [
              "Persistent and unexplained illness that doctors cannot diagnose",
              "A sudden reversal of fortune or financial ruin without apparent cause",
              "Severe discord in the household - arguments, separation, and emotional breakdown",
              "Recurring nightmares, sleep disturbances, or a feeling of being watched or followed",
              "Mental anguish, anxiety, or depression without a clear explanation",
              "Children or family members behaving strangely or suffering without reason",
              "Business failures, legal troubles, or professional collapse despite honest effort",
              "Finding suspicious objects such as hair, ash, lemon, nails, or cloth at your home",
            ],
        cta: isHindi ? "अभी बात करें" : "Speak to Guru Ji Now",
      },
      servicesSection: {
        eyebrow: isHindi ? "मुख्य सेवाएं" : "Core Services",
        title: isHindi ? "गुरु जी किस प्रकार सहायता कर सकते हैं" : "How Guru Ji can help you",
        body: isHindi
          ? "हर सेवा माता चिंतपूर्णी की कृपा, साधना और वर्षों के अनुभव पर आधारित है।"
          : "Guru Chintpurni Kripa Das offers a range of spiritually grounded services - each one rooted in the power of Mata Chintpurni's divine grace and decades of devoted practice.",
      },
      trust: {
        eyebrow: isHindi ? "लोग विश्वास क्यों करते हैं" : "Why Thousands Trust Guru Ji",
        title: isHindi ? "विश्वास का आधार जीवन में दिखने वाला परिवर्तन है" : "The proof is in the lives he has changed",
        items: isHindi
          ? [
              "दशकों का आध्यात्मिक अनुभव और साधना",
              "हजारों मामलों में राहत और दिशा",
              "पूर्ण गोपनीयता और सम्मान",
              "झूठे वादों के बिना ईमानदार मार्गदर्शन",
              "दूरस्थ उपचार और परामर्श की सुविधा",
              "विनम्र, सहज और करुणामय व्यवहार",
              "हर उपाय का आधार माता चिंतपूर्णी की कृपा",
            ]
          : [
              "Decades of experience in spiritual healing rooted in sacred devotion",
              "Thousands of cases resolved - from black magic to ancestral and paranormal disturbances",
              "Absolute confidentiality and respect for your situation",
              "No false promises - only honest guidance about what may help",
              "Remote healing available across distance",
              "Approachable, humble, and deeply compassionate support",
              "Every ritual and remedy begins and ends with devotion to Mata Chintpurni",
            ],
      },
      note: {
        eyebrow: isHindi ? "गुरु जी का संदेश" : "A Note from Guru Ji",
        title: isHindi ? "गुरु जी के शब्दों में" : "In Guru Ji's words",
        quote: isHindi
          ? "जो भी मेरे पास आता है, वह केवल समस्या नहीं लाता - वह अपने भीतर पीड़ा, डर और आशा भी लेकर आता है। माता चिंतपूर्णी ने यह शक्ति मेरी महिमा के लिए नहीं, बल्कि अपने बच्चों के दुःख हरने के लिए दी है। जो हुआ है, उसका समाधान संभव है। भय से नहीं, विश्वास से आइए। बाकी उनका काम है।"
          : "Every soul that comes to me comes carrying pain I can feel before they speak. Mata Chintpurni did not give me this gift for my own glory - she gave it to me so that her children would not suffer needlessly. Whatever has happened to you, whatever has been done to you - it can be undone. Come to me not with fear, but with faith. The rest is Her work.",
        attribution: isHindi ? "गुरु चिंतपूर्णी कृपा दास, सितारगंज, उत्तराखंड" : "Guru Chintpurni Kripa Das, Sitarganj, Uttarakhand",
      },
      faqSection: {
        eyebrow: isHindi ? "सामान्य प्रश्न" : "Frequently Asked Questions",
        title: isHindi ? "आध्यात्मिक उपचार के बारे में अक्सर पूछे जाने वाले प्रश्न" : "Frequently asked questions about spiritual healing",
        body: isHindi
          ? "यदि आप पहली बार संपर्क कर रहे हैं, तो ये उत्तर आपको एक स्पष्ट प्रारंभ दे सकते हैं।"
          : "These answers offer a helpful starting point if you are reaching out for the first time.",
      },
      faqs: [
        {
          question: isHindi ? "क्या गुरु जी का उपचार सुरक्षित है?" : "Is Guru Ji's healing safe?",
          answer: isHindi
            ? "हाँ। गुरु जी के सभी उपाय परंपरा, साधना और माता चिंतपूर्णी की कृपा पर आधारित हैं।"
            : "Yes. Every healing practice Guru Ji performs is rooted in sacred tradition and Mata Chintpurni's divine blessings.",
        },
        {
          question: isHindi ? "क्या मुझे व्यक्तिगत रूप से आना होगा?" : "Do I need to visit in person, or can I receive healing remotely?",
          answer: isHindi
            ? "दूरस्थ मार्गदर्शन भी उपलब्ध है और कई लोग भारत व विदेश से इसी तरह सहायता लेते हैं।"
            : "Remote healing is available and equally meaningful. Guru Ji regularly works with people across India and abroad.",
        },
        {
          question: isHindi ? "ब्लैक मैजिक रिमूवल में कितना समय लग सकता है?" : "How long does black magic removal take?",
          answer: isHindi
            ? "यह स्थिति की गहराई और स्वरूप पर निर्भर करता है। प्रारंभिक परामर्श में गुरु जी ईमानदारी से दिशा बताएंगे।"
            : "This depends on the nature and severity of the affliction. Some cases show results within days; others may require sustained healing over time.",
        },
        {
          question: isHindi ? "क्या मेरी बात गोपनीय रखी जाएगी?" : "Is my consultation kept private?",
          answer: isHindi
            ? "पूरी तरह। साझा की गई हर बात गोपनीय मानी जाती है।"
            : "Completely. Everything shared with Guru Ji is held in the strictest confidence.",
        },
        {
          question: isHindi ? "ब्लैक मैजिक और पैरानॉर्मल हीलिंग में क्या अंतर है?" : "What is the difference between black magic removal and paranormal healing?",
          answer: isHindi
            ? "ब्लैक मैजिक किसी व्यक्ति द्वारा किए गए नकारात्मक प्रभाव से जुड़ा होता है, जबकि पैरानॉर्मल हीलिंग आत्मिक, पितृ या ऊर्जा बाधाओं से।"
            : "Black magic involves deliberate harmful intent from a person, whereas paranormal healing addresses spirits, entities, or energetic imbalances without a human perpetrator.",
        },
        {
          question: isHindi ? "क्या ज्योतिष सेवा भी साथ ली जा सकती है?" : "Can astrology help alongside Guru Ji's healing?",
          answer: isHindi
            ? "हाँ। ज्योतिष आपकी जीवन-दिशा, समय और कर्मिक पैटर्न समझने में सहायक हो सकता है।"
            : "Yes. Astrology services work beautifully alongside Guru Ji's healing, helping you understand karmic patterns and timing with greater awareness.",
        },
      ],
      contactStrip: {
        eyebrow: isHindi ? "पहला कदम" : "First Step",
        title: isHindi ? "मुक्ति की दिशा यहीं से शुरू होती है" : "Your first step toward freedom begins here",
        body: isHindi
          ? "यदि आप निश्चित हैं कि कुछ आध्यात्मिक रूप से गलत है, या केवल समझ नहीं पा रहे कि क्या हो रहा है - संपर्क कीजिए।"
          : "Whether you are certain something is spiritually wrong or simply cannot explain what you are going through, reach out. Guru Ji will listen, assess, and guide you with sincerity.",
      },
    },
    about: {
      seo: {
        title: isHindi ? "गुरु चिंतपूर्णी कृपा दास के बारे में" : "About Guru Chintpurni Kripa Das",
        description: isHindi
          ? "गुरु चिंतपूर्णी कृपा दास के जीवन, सेवा और माता चिंतपूर्णी की कृपा से जुड़े आध्यात्मिक मार्ग के बारे में जानें।"
          : "Learn about Guru Chintpurni Kripa Das - a God-gifted Mahapurush in Sitarganj, Uttarakhand, blessed by Mata Chintpurni to heal black magic, witchcraft, and paranormal afflictions.",
        keywords: isHindi ? ["गुरु चिंतपूर्णी कृपा दास", "आध्यात्मिक उपचार", "सितारगंज"] : ["Guru Chintpurni Kripa Das", "spiritual healer Uttarakhand"],
      },
      hero: {
        eyebrow: isHindi ? "गुरु जी के बारे में" : "About Guru Ji",
        title: isHindi ? "भक्ति में जन्मा, दिव्य माता द्वारा पुकारा गया जीवन" : "Born into devotion, called by the Divine Mother",
        description: isHindi
          ? "गुरु जी की यात्रा केवल साधना की नहीं, बल्कि सेवा, करुणा और दिव्य उत्तरदायित्व की यात्रा है।"
          : "Guru Ji's journey is one of devotion, humility, and sacred service carried through the grace of Mata Chintpurni.",
      },
      intro: isHindi
        ? "कुछ लोग आध्यात्मिक मार्ग चुनते हैं, और कुछ लोगों को आध्यात्मिक मार्ग स्वयं चुन लेता है। गुरु चिंतपूर्णी कृपा दास दूसरे प्रकार के साधक हैं।"
        : "There are people who choose the spiritual path. And then there are people the spiritual path chooses. Guru Chintpurni Kripa Das belongs to the second kind.",
      sections: [
        {
          title: isHindi ? "दिव्य माता की पुकार" : "Born Into Devotion, Called by the Divine Mother",
          paragraphs: isHindi
            ? [
                "बहुत प्रारंभिक उम्र से ही गुरु जी में ऐसी सूक्ष्म अनुभूति थी जिसे साधारण समझ से नहीं समझाया जा सकता। समुदाय के बुजुर्गों ने भी यह बात पहचानी, और माता चिंतपूर्णी की कृपा ने उस पुकार को दिशा दी।",
                "उन्होंने कभी शक्ति की खोज नहीं की; उन्होंने केवल सेवा का मार्ग चुना। यही विनम्रता उनके कार्य को असाधारण बनाती है।",
              ]
            : [
                "From the earliest years of his life, Guru Ji showed an unusual depth of perception - an ability to sense what others could not see, feel what others could not feel, and know what could not be explained by ordinary understanding.",
                "Guru Ji did not seek power. He sought only to serve. And that humility, that absolute surrender to the Divine Mother, is precisely what makes him so extraordinarily effective.",
              ],
        },
        {
          title: isHindi ? "माता चिंतपूर्णी की कृपा" : "The Blessing of Mata Chintpurni",
          paragraphs: isHindi
            ? [
                "माता चिंतपूर्णी, जिन्हें कुछ परंपराओं में छिन्नमस्ता भी कहा जाता है, दुख और चिंता हरने वाली दिव्य शक्ति मानी जाती हैं।",
                "गुरु जी के नाम में ही उनकी भूमिका है - कृपा का सेवक। उनके हर उपाय, परामर्श और करुणा का स्रोत वही दिव्य शक्ति है।",
              ]
            : [
                "Mata Chintpurni - also known as Chhinna-masta or Chhinnamastika in some traditions - is one of the most powerful manifestations of the Divine Mother. She removes worry and suffering from her devotees.",
                "Guru Chintpurni Kripa Das carries her name in his very identity. Everything he does - every healing ritual, every spiritual consultation, every act of compassion - flows from that one source.",
              ],
        },
        {
          title: isHindi ? "सितारगंज में सेवा का केंद्र" : "A Life of Service in Sitarganj, Uttarakhand",
          paragraphs: isHindi
            ? [
                "गुरु जी का कार्यक्षेत्र सितारगंज, उत्तराखंड में है - हिमालय की आध्यात्मिक धारा के निकट स्थित एक ऐसा स्थान जहां साधना और शांति की गूंज सहज अनुभव होती है।",
                "लोग यहां बड़े प्रचार से नहीं, बल्कि भरोसे से आते हैं - क्योंकि किसी ने कभी कहा होता है, गुरु जी मदद करेंगे।",
              ]
            : [
                "Guru Ji is based in Sitarganj, Uttarakhand - a town that sits at the foot of the sacred Himalayas, a region long known as a corridor of spiritual power.",
                "There are no theatrical displays. People come because someone they trust told them: Go to Guru Ji. He will help you.",
              ],
        },
        {
          title: isHindi ? "गुरु जी को अलग क्या बनाता है?" : "What Makes Guru Ji Different",
          paragraphs: isHindi
            ? [
                "उनकी आध्यात्मिक परंपरा प्रामाणिक है; उनका उद्देश्य निर्भरता नहीं, स्वतंत्रता है; उनका मार्ग ईमानदार है; और उनका आधार करुणा है।",
                "असली प्रमाण उनके शब्द नहीं, बल्कि उन लोगों के जीवन हैं जिनमें शांति और परिवर्तन वापस आया।",
              ]
            : [
                "Guru Ji's healing is not a skill learned from a book. It is a divine inheritance - a living tradition passed down through sacred devotion and confirmed by Mata Chintpurni herself.",
                "He does not exploit fear or create dependency. His goal is always your peace, your independence, and truthful guidance.",
              ],
        },
      ],
      mission: {
        title: isHindi ? "चिंतपूर्णी ब्लेसिंग्स का उद्देश्य" : "Our Mission at Chintpurni Blessings",
        paragraphs: isHindi
          ? [
              "इस मंच का उद्देश्य गुरु जी की हीलिंग और मार्गदर्शन को हर उस व्यक्ति तक पहुंचाना है जिसे इसकी आवश्यकता है।",
              "इसके साथ एक समर्पित ज्योतिषी द्वारा वैदिक ज्योतिष सेवाएं भी उपलब्ध हैं, ताकि साधक अपने जीवन-पथ को व्यापक रूप से समझ सके।",
            ]
          : [
              "Chintpurni Blessings was established with one simple purpose: to make Guru Ji's healing and guidance accessible to every person who needs it, wherever they are.",
              "We also offer astrology services through a dedicated, experienced astrologer, providing a complementary layer of guidance for those seeking to understand their life path through Vedic wisdom.",
            ],
      },
    },
    servicesHub: {
      seo: {
        title: isHindi ? "आध्यात्मिक उपचार और ज्योतिष सेवाएं" : "Spiritual Healing Services by Guru Chintpurni Kripa Das",
        description: isHindi
          ? "ब्लैक मैजिक रिमूवल, विचक्राफ्ट क्योर, पैरानॉर्मल हीलिंग, स्पिरिचुअल कंसल्टेशन और ज्योतिष सेवाएं देखें।"
          : "Explore all spiritual healing services at Chintpurni Blessings - black magic removal, witchcraft cure, paranormal healing, spiritual consultation, and astrology services in Uttarakhand.",
        keywords: isHindi ? ["आध्यात्मिक सेवाएं", "ब्लैक मैजिक", "ज्योतिष"] : ["spiritual healing services Uttarakhand"],
      },
      hero: {
        eyebrow: isHindi ? "हमारी सेवाएं" : "Our Services",
        title: isHindi ? "जहां साधारण उपचार रुक जाए, वहां से यह मार्ग शुरू होता है" : "Healing that goes where medicine cannot",
        description: isHindi
          ? "चिंतपूर्णी ब्लेसिंग्स में हर सेवा माता चिंतपूर्णी की कृपा, गुरु जी की साधना और समर्पित ज्योतिष मार्गदर्शन से जुड़ी है।"
          : "At Chintpurni Blessings, every service flows from a single source - the divine grace of Mata Chintpurni, carried through Guru Ji's healing path and supported by astrology guidance.",
      },
      intro: isHindi
        ? "यदि आप सुनिश्चित नहीं हैं कि कौन-सी सेवा आपके लिए सही है, तो हमसे संपर्क करें। हम बिना दबाव और बिना निर्णय के सही दिशा में मार्गदर्शन देंगे।"
        : "Browse our core services below, or contact us directly if you are unsure which service is right for you. Guru Ji will help you find your way.",
      spiritualTitle: isHindi ? "आध्यात्मिक उपचार" : "Spiritual Healing Services",
      astrologyTitle: isHindi ? "ज्योतिष मार्गदर्शन" : "Astrology Guidance",
    },
    serviceDetailPages: buildServiceDetailPages(lang),
    contactPage: {
      seo: {
        title: isHindi ? "गुरु चिंतपूर्णी कृपा दास से संपर्क करें" : "Contact Guru Chintpurni Kripa Das",
        description: isHindi
          ? "चिंतपूर्णी ब्लेसिंग्स, सितारगंज से संपर्क करें। प्रत्यक्ष और दूरस्थ परामर्श उपलब्ध है।"
          : "Reach out to Guru Chintpurni Kripa Das at Chintpurni Blessings, Sitarganj, Uttarakhand. In-person and remote consultations are available.",
        keywords: isHindi ? ["संपर्क", "गुरु जी", "चिंतपूर्णी ब्लेसिंग्स"] : ["contact Guru Chintpurni Kripa Das", "spiritual consultation Sitarganj"],
      },
      hero: {
        eyebrow: isHindi ? "संपर्क" : "Contact",
        title: isHindi ? "आपने सबसे महत्वपूर्ण कदम उठा लिया है" : "You have already taken the most important step",
        description: isHindi
          ? "जो भी आप अनुभव कर रहे हैं, उसे अकेले न झेलें। यहां आपकी बात सम्मान, गोपनीयता और गंभीरता से सुनी जाएगी।"
          : "Whatever you are going through, you do not have to face it alone. Guru Ji and the Chintpurni Blessings team are here with sincerity, compassion, and confidence.",
      },
      intro: isHindi
        ? "कृपया नीचे दिए गए किसी भी माध्यम से संपर्क करें। हर पूछताछ को पूर्ण गोपनीयता के साथ संभाला जाता है।"
        : "Please reach out using any of the methods below. All enquiries are treated with absolute confidentiality.",
      getInTouchTitle: isHindi ? "संपर्क विवरण" : "Get in Touch",
      expectationsTitle: isHindi ? "संपर्क करने पर क्या होगा" : "What to Expect When You Contact Us",
      expectations: isHindi
        ? [
            "आपका संदेश गोपनीय रूप से प्राप्त किया जाएगा।",
            "कार्य समय के भीतर यथाशीघ्र उत्तर देने का प्रयास किया जाएगा।",
            "संपर्क करने से आप किसी बाध्यता में नहीं आते।",
            "हर व्यक्ति के साथ सम्मान और धैर्य से व्यवहार किया जाएगा।",
          ]
        : [
            "Your message is received in confidence.",
            "You will receive a response promptly during working hours.",
            "There is no obligation - speaking with us does not commit you to anything.",
            "You are treated with respect, no matter the nature of your situation.",
          ],
      remoteTitle: isHindi ? "दूरस्थ परामर्श" : "Remote Consultations",
      remoteBody: isHindi
        ? "यदि आप सितारगंज नहीं आ सकते, तो फोन या वीडियो कॉल के माध्यम से भी मार्गदर्शन प्राप्त किया जा सकता है।"
        : "If you cannot travel to Sitarganj, please do not let that stop you. Guru Ji's healing is available remotely via phone or video call.",
      remoteItems: isHindi
        ? ["अपना नाम और स्थान", "जो आप अनुभव कर रहे हैं उसका संक्षिप्त विवरण", "फोन या वीडियो में आपकी पसंद"]
        : ["Your name and location", "A brief description of what you are experiencing", "Whether you would prefer phone or video"],
      astrologyTitle: isHindi ? "ज्योतिष सेवाओं के लिए" : "For Astrology Services",
      astrologyBody: isHindi
        ? "यदि आपकी पूछताछ विशेष रूप से ज्योतिष सेवा से जुड़ी है, तो कृपया संदेश में यह उल्लेख करें ताकि आपको समर्पित ज्योतिषी से जोड़ा जा सके।"
        : "If you are enquiring specifically about astrology services, please mention this in your message so we can connect you with our dedicated astrologer directly.",
      formTitle: isHindi ? "अपनी पूछताछ भेजें" : "Send Your Enquiry",
      privacyNote: isHindi ? "आपकी जानकारी गोपनीय रखी जाएगी।" : "Your details are treated with confidentiality.",
    },
    testimonialsPage: {
      seo: {
        title: isHindi ? "प्रशंसापत्र" : "Testimonials",
        description: isHindi
          ? "गुरु जी के आध्यात्मिक मार्गदर्शन और ज्योतिष सेवाओं से जुड़े वास्तविक अनुभव पढ़ें।"
          : "Read client experiences from Guru Ji healing consultations and astrology guidance at Chintpurni Blessings.",
        keywords: isHindi ? ["प्रशंसापत्र", "गुरु जी", "चिंतपूर्णी ब्लेसिंग्स"] : ["testimonials", "Guru Ji", "spiritual healing reviews"],
      },
      hero: {
        eyebrow: isHindi ? "प्रशंसापत्र" : "Testimonials",
        title: isHindi ? "विश्वास, राहत और दिशा की कहानियां" : "Stories of trust, relief, and clarity",
        description: isHindi
          ? "ये अनुभव उन लोगों की आवाज हैं जिन्होंने कठिन समय में यहां से मार्गदर्शन लिया।"
          : "These are voices from people who reached out in difficult times and found calm, direction, and support here.",
      },
      intro: isHindi
        ? "हर प्रशंसापत्र इस बात की याद दिलाता है कि सम्मानजनक मार्गदर्शन, गोपनीयता और सच्ची नीयत लोगों के लिए कितना मायने रखती है।"
        : "Each testimonial reflects the confidence people place in Guru Ji and the Chintpurni Blessings team when they need help with difficult life questions.",
      ctaTitle: isHindi ? "क्या आप भी अपनी स्थिति पर मार्गदर्शन चाहते हैं?" : "Ready to begin your own consultation?",
      ctaBody: isHindi
        ? "यदि आप भी अपनी परिस्थिति के अनुसार सही दिशा चाहते हैं, तो संपर्क करें।"
        : "If you would like guidance tailored to your situation, reach out and we will help you take the next step with confidence.",
    },
    horoscopePage: {
      seo: {
        title: isHindi ? "राशिफल" : "Horoscope",
        description: isHindi
          ? "सामान्य राशिफल संकेतों से शुरुआत करें और फिर व्यक्तिगत कुंडली परामर्श की ओर बढ़ें।"
          : "Start with general horoscope guidance and then go deeper with a personalized kundali consultation.",
        keywords: isHindi ? ["राशिफल", "कुंडली", "ज्योतिष"] : ["horoscope", "kundali", "astrology consultation"],
      },
      hero: {
        eyebrow: isHindi ? "राशिफल" : "Horoscope",
        title: isHindi ? "सामान्य संकेतों से शुरुआत, गहराई के लिए व्यक्तिगत कुंडली" : "Start with general guidance, then go deeper with your kundali",
        description: isHindi
          ? "यह अनुभाग आपको समय, प्रवृत्ति और दिशा का एक प्रारंभिक संकेत देता है।"
          : "This section gives a soft entry point into astrology before moving to detailed, personalized chart guidance.",
      },
      introTitle: isHindi ? "यह राशिफल पृष्ठ किस लिए है?" : "What this horoscope page is meant to do",
      introBody: isHindi
        ? "सामान्य राशिफल दिशा देता है, लेकिन सटीक उत्तर हमेशा आपकी व्यक्तिगत कुंडली में मिलते हैं।"
        : "General horoscope guidance can help you sense mood, momentum, and timing, but it cannot replace a proper kundali reading.",
      periods: isHindi ? ["दैनिक", "साप्ताहिक", "मासिक"] : ["Daily", "Weekly", "Monthly"],
      focuses: isHindi ? ["प्रेम", "करियर", "स्वास्थ्य"] : ["Love", "Career", "Health"],
      guidanceFor: isHindi ? "के लिए मार्गदर्शन" : "guidance for",
      weeklyTitle: isHindi ? "सभी 12 राशियों के लिए त्वरित संकेत" : "Quick weekly signals for all 12 rashis",
      weekly: isHindi
        ? [
            ["मेष", "अनुशासित निर्णय करियर में लाभ देंगे।"],
            ["वृषभ", "धैर्य और योजना आर्थिक स्थिरता लाएंगे।"],
            ["मिथुन", "संवाद और संपर्क नए अवसर देंगे।"],
            ["कर्क", "घर और परिवार में संतुलन बनाए रखें।"],
            ["सिंह", "नेतृत्व के साथ विनम्रता आवश्यक रहेगी।"],
            ["कन्या", "दिनचर्या और स्वास्थ्य पर ध्यान दें।"],
            ["तुला", "रिश्तों में ईमानदारी लाभकारी रहेगी।"],
            ["वृश्चिक", "भीतरी परिवर्तन बाहरी प्रगति देगा।"],
            ["धनु", "सीखने और योजना बनाने के अवसर बढ़ेंगे।"],
            ["मकर", "नियमितता से स्थिरता मिलेगी।"],
            ["कुंभ", "सामाजिक जुड़ाव से लाभ होगा।"],
            ["मीन", "अंतर्ज्ञान के साथ व्यवहारिकता रखें।"],
          ]
        : [
            ["Mesh", "Career momentum builds through disciplined action."],
            ["Vrishabh", "Patience and financial planning support stability."],
            ["Mithun", "Conversations and networking create new openings."],
            ["Kark", "Warmth and boundaries improve family harmony."],
            ["Simha", "Leadership is strongest when paired with humility."],
            ["Kanya", "Routines and details deserve extra care."],
            ["Tula", "Partnerships benefit from honesty and balance."],
            ["Vrishchik", "Inner change begins to show practical results."],
            ["Dhanu", "Learning and long-view planning are favored."],
            ["Makar", "Consistency strengthens work and mind."],
            ["Kumbh", "Social links may open meaningful opportunities."],
            ["Meen", "Trust intuition, but keep your steps practical."],
          ],
      ctaTitle: isHindi ? "क्या आप अपनी वास्तविक जन्मकुंडली पर आधारित मार्गदर्शन चाहते हैं?" : "Want guidance based on your actual birth chart?",
      ctaBody: isHindi
        ? "व्यक्तिगत कुंडली परामर्श सामान्य राशिफल की तुलना में अधिक सटीक दिशा देता है।"
        : "A personalized astrology consultation is far more precise than general horoscope text. Your chart, timing, and remedies can be studied in much greater depth.",
      ctaButton: isHindi ? "ज्योतिष परामर्श बुक करें" : "Book Astrology Consultation",
    },
    rashiPage: {
      seo: {
        title: isHindi ? "राशि गाइड" : "Rashi Guide",
        description: isHindi
          ? "12 राशियों को समझें और फिर आवश्यकता होने पर व्यक्तिगत कुंडली परामर्श की ओर बढ़ें।"
          : "Understand the 12 rashis and move deeper with personalized kundali guidance.",
        keywords: isHindi ? ["राशि गाइड", "वैदिक राशि", "कुंडली"] : ["rashi guide", "vedic zodiac", "kundali"],
      },
      hero: {
        eyebrow: isHindi ? "राशि गाइड" : "Rashi Guide",
        title: isHindi ? "अपनी राशि को समझें, फिर गहराई के लिए कुंडली देखें" : "Understand your rashi, then go deeper with your kundali",
        description: isHindi
          ? "राशि एक प्रारंभिक संकेत देती है, जबकि आपकी पूर्ण जीवन-दिशा संपूर्ण जन्मकुंडली में दिखाई देती है।"
          : "A rashi description offers a useful starting point, but your full life path is always more accurately seen in your complete chart.",
      },
      introTitle: isHindi ? "12 वैदिक राशियां एक नजर में" : "The 12 Vedic rashis at a glance",
      introBody: isHindi
        ? "यह पृष्ठ आगंतुकों को सभी राशियों की मूल प्रवृत्ति समझने के लिए बनाया गया है।"
        : "This guide is designed as a clean overview of the twelve rashis before moving to a full consultation.",
      outroTitle: isHindi ? "राशि दरवाजा है, कुंडली पूरा मानचित्र" : "Rashi gives a doorway, kundali gives the full map",
      outroBody: isHindi
        ? "विवाह, करियर, व्यवसाय, स्वास्थ्य समय या उपायों के लिए व्यक्तिगत ज्योतिष परामर्श अधिक उपयोगी रहेगा।"
        : "If you want chart-specific guidance for marriage, career, business, health timing, or remedies, use this page as an introduction and then book a detailed astrology session.",
    },
    legalPages: buildLegalPages(lang),
    serviceGroups: {
      spiritual: spiritualServices,
      astrology: astrologyServices,
    },
  };
}

export function getLocalizedContent(lang = "en") {
  return buildContent(lang === "hi" ? "hi" : "en");
}

/* ==========================================================================
   MAHARASHTRIAN ROYAL GANESHOTSAV 2026 - JAVASCRIPT
   Bilingual Royal Invitation Portal (Marathi & English)
   Zero Emojis • Zero Audio • Fully Responsive
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. AUTHENTIC MAHARASHTRIAN SURNAMES & REVERSE MAPS
     -------------------------------------------------------------------------- */
  const MARATHI_SURNAMES_MAP = {
    // Gadge & variations
    'gadge': 'गाडगे', 'gadage': 'गाडगे',
    // Savle & variations
    'savle': 'सावळे', 'sawle': 'सावळे', 'savale': 'सावळे', 'sawale': 'सावळे',
    // Kalbande & variations
    'kalbande': 'कळबांडे', 'kalabande': 'कळबांडे',
    // Avadhoot & variations
    'avadhoot': 'अवधूत', 'avadhut': 'अवधूत',
    // Maharashtrian & Indian Surnames
    'patil': 'पाटील', 'kadam': 'कदम', 'deshmukh': 'देशमुख', 'shinde': 'शिंदे',
    'pawar': 'पवार', 'joshi': 'जोशी', 'kulkarni': 'कुलकर्णी', 'bhosale': 'भोसले',
    'bhosle': 'भोसले', 'more': 'मोरे', 'jadhav': 'जाधव', 'chavan': 'चव्हाण',
    'gaikwad': 'गायकवाड', 'salunkhe': 'साळुंखे', 'salunke': 'साळुंखे', 'ghadge': 'घाडगे',
    'mane': 'माने', 'rane': 'राणे', 'sawant': 'सावंत', 'savant': 'सावंत',
    'thakur': 'ठाकूर', 'shelke': 'शेळके', 'wagh': 'वाघ', 'tambde': 'तांबडे',
    'khot': 'खोत', 'bapat': 'बापट', 'apte': 'आपटे', 'kelkar': 'केळकर',
    'deshpande': 'देशपांडे', 'godbole': 'गोडबोले', 'mhatre': 'म्हात्रे', 'tare': 'तारे',
    'patankar': 'पाटणकर', 'tendulkar': 'तेंडुलकर', 'gavaskar': 'गावस्कर', 'prabhu': 'प्रभू',
    'nadkarni': 'नाडकर्णी', 'parab': 'परब', 'shirodkar': 'शिरोडकर', 'surve': 'सुर्वे',
    'sable': 'साबळे', 'kamble': 'कांबळे', 'ghadigaonkar': 'घाडीगावकर', 'sathe': 'साठे',
    'thorat': 'थोरात', 'kolhe': 'कोल्हे', 'bhide': 'भिडे', 'gokhale': 'गोखले',
    'modak': 'मोडक', 'karve': 'कर्वे', 'limaye': 'लिमये', 'chitnis': 'चिटणीस',
    'sahasrabuddhe': 'सहस्रबुद्धे', 'purandare': 'पुरंदरे', 'ranade': 'रानडे',
    'gadgil': 'गाडगीळ', 'pendse': 'पेंडसे', 'nerurkar': 'नेरुरकर', 'sonawane': 'सोनवणे',
    'sonwane': 'सोनवणे', 'dhoble': 'धोबळे', 'mhaske': 'म्हासके', 'chaugule': 'चौगुले',
    'chougule': 'चौगुले', 'ingole': 'इंगोले', 'raut': 'राऊत', 'bendre': 'बेंद्रे',
    'gore': 'गोरे', 'kokate': 'कोकाटे', 'navale': 'नवळे', 'nawale': 'नवळे',
    'phadke': 'फडके', 'abhyankar': 'अभ्यंकर', 'kanitkar': 'कानिटकर', 'talpade': 'तळपदे',
    'chitale': 'चितळे', 'dandekar': 'दांडेकर', 'nerlekar': 'नेर्लेकर', 'baviskar': 'बाविस्कर',
    'bavaskar': 'बावस्कर', 'shewale': 'शेवाळे', 'shevale': 'शेवाळे', 'shirke': 'शिर्के',
    'gholap': 'घोलप', 'nagarkar': 'नगरकर', 'kolte': 'कोलते', 'ambedkar': 'आंबेडकर',
    'borse': 'बोरसे', 'kharat': 'खरात', 'nikam': 'निकम', 'zagade': 'झागडे',
    'jagtap': 'जगताप', 'mohite': 'मोहिते', 'nalawade': 'नलवडे', 'nalavade': 'नलवडे',
    'bhalerao': 'भालेराव', 'dhumal': 'धुमाळ', 'ghare': 'घारे', 'bhise': 'भिसे',
    'gavhane': 'गव्हाणे', 'gawhane': 'गव्हाणे', 'lonkar': 'लोणकर', 'katkar': 'कातकर',
    'gavali': 'गवळी', 'gawali': 'गवळी', 'dhamale': 'धमाळे', 'padwal': 'पडवळ',
    'kasar': 'कासार', 'bhuvad': 'भुवड', 'sakpal': 'सकपाळ', 'mayekar': 'मायेकर',
    'vaze': 'वझे', 'waze': 'वझे', 'divekar': 'दिवेकर', 'kumbhar': 'कुंभार',
    'sutar': 'सुतार', 'sonar': 'सोनार', 'lohar': 'लोहार', 'shimpi': 'शिंपी',
    'gurav': 'गुरव', 'tamboli': 'तांबोळी', 'teli': 'तेली', 'mali': 'माळी',
    'koshti': 'कोष्टी', 'dhangar': 'धनगर', 'gawande': 'गवांडे', 'gavande': 'गवांडे',
    'ingale': 'इंगळे', 'ingle': 'इंगळे', 'borkar': 'बोरकर', 'pednekar': 'पेडणेकर',
    'malvankar': 'मालवणकर', 'sawardekar': 'सावर्डेकर', 'bandodkar': 'बांदोडकर',
    'kandalkar': 'कांदळकर', 'khandagale': 'खंडागळे', 'khopkar': 'खोपकर',
    'narvekar': 'नार्वेकर', 'masurkar': 'मसूरकर', 'palekar': 'पालेकर', 'pundlik': 'पुंडलिक',
    'dive': 'दिवे', 'khedekar': 'खेडेकर', 'dandvate': 'दंडवते', 'dharmadhikari': 'धर्माधिकारी',
    'agnihotri': 'अग्निहोत्री', 'vaidya': 'वैद्य', 'pandit': 'पंडित', 'shastri': 'शास्त्री',
    'upadhyay': 'उपाध्याय', 'diwan': 'दिवाण', 'fadnavis': 'फडणवीस', 'fadanvis': 'फडणवीस',
    'muzumdar': 'मुजुमदार', 'potdar': 'पोतदार', 'munshi': 'मुन्शी', 'sabnis': 'सबनीस',
    'karkhanis': 'कारखानीस', 'sharma': 'शर्मा', 'verma': 'वर्मा', 'singh': 'सिंह',
    'gupta': 'गुप्ता', 'shah': 'शाह', 'mehta': 'मेहता', 'jain': 'जैन',
    'agarwal': 'अगरवाल', 'agrawal': 'अग्रवाल', 'bansal': 'बन्सल', 'mittal': 'मित्तल',
    'goyal': 'गोयल', 'kapoor': 'कपूर', 'khanna': 'खन्ना', 'malhotra': 'मल्होत्रा',
    'chopra': 'चोप्रा', 'saxena': 'सक्सेना', 'srivastava': 'श्रीवास्तव', 'dubey': 'दुबे',
    'chaubey': 'चौबे', 'tiwari': 'तिवारी', 'mishra': 'मिश्रा', 'pandey': 'पांडे',
    'yadav': 'यादव', 'bhatt': 'भट्ट', 'bhat': 'भट', 'tripathi': 'त्रिपाठी',
    'shukla': 'शुक्ल', 'nair': 'नायर', 'menon': 'मेनन', 'pillai': 'पिल्लई',
    'reddy': 'रेड्डी', 'rao': 'राव', 'shetty': 'शेट्टी', 'hegde': 'हेगडे',
    'pai': 'पै', 'kamath': 'कामत', 'nayak': 'नायक', 'naik': 'नाईक',
    'dhar': 'धर', 'mukherjee': 'मुखर्जी', 'banerjee': 'बॅनर्जी', 'chatterjee': 'चॅटर्जी',
    'sen': 'सेन', 'das': 'दास', 'bose': 'बोस', 'ghosh': 'घोष',
    'datta': 'दत्त', 'dutta': 'दत्त', 'roy': 'रॉय', 'desai': 'देसाई',
    'naidu': 'नायडू', 'iyer': 'अय्यर', 'iyengar': 'अय्यंगार'
  };

  // Reverse mapping for Devanagari input -> Clean English name
  const DEVANAGARI_TO_ENGLISH_MAP = {};
  for (const [eng, dev] of Object.entries(MARATHI_SURNAMES_MAP)) {
    if (!DEVANAGARI_TO_ENGLISH_MAP[dev]) {
      DEVANAGARI_TO_ENGLISH_MAP[dev] = eng.charAt(0).toUpperCase() + eng.slice(1);
    }
  }

  // Universal Phonetic Transliteration: English -> Devanagari (Marathi)
  function transliterateToDevanagari(text) {
    if (!text) return '';
    let str = text.toLowerCase().trim();

    const SUFFIX_MAP = [
      [/gaonkar$/i, 'गावकर'],
      [/dkar$/i, 'डकर'],
      [/tkar$/i, 'तकर'],
      [/nkar$/i, 'णकर'],
      [/lkar$/i, 'ळकर'],
      [/kar$/i, 'कर'],
      [/war$/i, 'वार'],
      [/wad$/i, 'वाड'],
      [/wale$/i, 'वाले'],
      [/vale$/i, 'वाले']
    ];

    let suffix = '';
    for (const [re, rep] of SUFFIX_MAP) {
      if (re.test(str)) {
        suffix = rep;
        str = str.replace(re, '');
        break;
      }
    }

    const CONSONANTS = [
      ['khy', 'ख्य'], ['ghy', 'घ्य'], ['chy', 'च्य'], ['jhy', 'झ्य'],
      ['ty', 'त्य'], ['dy', 'द्य'], ['ny', 'न्य'], ['py', 'प्य'],
      ['by', 'ब्य'], ['my', 'म्य'], ['ly', 'ल्य'], ['vy', 'व्य'],
      ['sy', 'स्य'], ['shy', 'श्य'],
      ['shh', 'ष'], ['ksh', 'क्ष'], ['gny', 'ज्ञ'], ['dny', 'ज्ञ'], ['dnya', 'ज्ञा'],
      ['kh', 'ख'], ['gh', 'घ'], ['chh', 'छ'], ['ch', 'च'],
      ['jh', 'झ'], ['th', 'थ'], ['dh', 'ध'], ['ph', 'फ'],
      ['bh', 'भ'], ['sh', 'श'], ['wh', 'व्ह'], ['rh', 'ऱ्ह'],
      ['k', 'क'], ['g', 'ग'], ['c', 'क'], ['j', 'ज'],
      ['z', 'झ'], ['t', 'त'], ['d', 'द'], ['n', 'न'],
      ['p', 'प'], ['f', 'फ'], ['b', 'ब'], ['m', 'म'],
      ['y', 'य'], ['r', 'र'], ['l', 'ल'], ['v', 'व'],
      ['w', 'व'], ['s', 'स'], ['h', 'ह'], ['x', 'क्स'],
      ['q', 'क']
    ];

    const VOWELS = [
      ['aai', 'ाई', 'आई'], ['aau', 'ाऊ', 'आऊ'],
      ['ee', 'ी', 'ई'], ['oo', 'ू', 'ऊ'],
      ['aa', 'ा', 'आ'], ['ai', 'ै', 'ऐ'],
      ['au', 'ौ', 'औ'], ['ou', 'ौ', 'औ'],
      ['ay', 'े', 'ए'], ['ey', 'े', 'ए'],
      ['e', 'े', 'ए'],
      ['i', 'ी', 'इ'],
      ['o', 'ो', 'ओ'],
      ['u', 'ू', 'उ'],
      ['a', '', 'अ']
    ];

    let res = '';
    let i = 0;
    let prevIsConsonant = false;

    while (i < str.length) {
      if (!/[a-z]/.test(str[i])) {
        res += str[i];
        i++;
        prevIsConsonant = false;
        continue;
      }

      // Anusvara test: n/m followed by consonant
      if (prevIsConsonant && (str[i] === 'n' || str[i] === 'm') && i + 1 < str.length && !/[aeiou]/.test(str[i + 1])) {
        res += 'ं';
        i++;
        continue;
      }

      // Vowel check
      let matchedV = false;
      for (const [v, matra, standalone] of VOWELS) {
        if (str.startsWith(v, i)) {
          if (v === 'a') {
            if (!prevIsConsonant) {
              res += standalone;
            } else if (i === str.length - 1 && str.length > 2) {
              res += 'ा';
            }
          } else {
            res += prevIsConsonant ? matra : standalone;
          }
          i += v.length;
          prevIsConsonant = false;
          matchedV = true;
          break;
        }
      }
      if (matchedV) continue;

      // Consonant check
      let matchedC = false;
      for (const [c, dev] of CONSONANTS) {
        if (str.startsWith(c, i)) {
          if (prevIsConsonant) {
            res += '्' + dev;
          } else {
            res += dev;
          }
          i += c.length;
          prevIsConsonant = true;
          matchedC = true;
          break;
        }
      }

      if (!matchedC) {
        res += str[i];
        i++;
        prevIsConsonant = false;
      }
    }

    return res + suffix;
  }

  function resolveFamilyNames() {
    let raw = '';

    // 1. Check URL pathname slug (e.g. /kalbande, /avadhoot, /patil)
    if (window.location.protocol !== 'file:') {
      const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const pathParts = pathname.split('/').filter(p => p && !p.endsWith('.html') && p !== 'index' && p !== 'ganp');
      if (pathParts.length > 0) {
        raw = decodeURIComponent(pathParts[pathParts.length - 1]);
      }
    }

    // 2. Query parameter fallback (e.g., ?name=kalbande or ?family=कळबांडे)
    if (!raw) {
      const params = new URLSearchParams(window.location.search);
      raw = params.get('name') || params.get('family') || params.get('f') || '';
      if (raw) raw = decodeURIComponent(raw);
    }

    // 3. Hash fallback (e.g., #kalbande or #/kalbande)
    if (!raw && window.location.hash) {
      raw = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
    }

    raw = raw.trim();
    if (!raw) {
      return {
        mr: 'गाडगे परिवार',
        en: 'Gadge Family'
      };
    }

    // Check if input is already in Devanagari
    const hasDevanagari = /[\u0900-\u097F]/.test(raw);
    if (hasDevanagari) {
      let cleanDev = raw.replace(/\s*(व|आणि)?\s*(परिवार|कुटुंब)\s*$/g, '').trim();
      let engName = DEVANAGARI_TO_ENGLISH_MAP[cleanDev] || cleanDev;
      return {
        mr: `${cleanDev} व परिवार`,
        en: `${engName} & Family`
      };
    }

    // English slug processing
    let cleanEng = raw.replace(/\s*(&|and|-|_)?\s*(parivar|family|kutumb)\s*$/i, '').trim();
    let slugKey = cleanEng.toLowerCase().replace(/[^a-z0-9]/g, '');
    let displayEng = cleanEng.charAt(0).toUpperCase() + cleanEng.slice(1);

    let marathiRoot = '';
    if (MARATHI_SURNAMES_MAP[slugKey]) {
      marathiRoot = MARATHI_SURNAMES_MAP[slugKey];
    } else {
      marathiRoot = transliterateToDevanagari(cleanEng);
      if (!marathiRoot) marathiRoot = displayEng;
    }

    return {
      mr: `${marathiRoot} व परिवार`,
      en: `${displayEng} & Family`
    };
  }

  // Current family names for both languages (URL slug / query param affects hostDynastyName in 'आपले स्नेहांकित:' section)
  const familyNames = resolveFamilyNames();
  const surnameMr = 'गाडगे';
  const surnameEn = 'Gadge';

  /* --------------------------------------------------------------------------
     2. CULTURALLY APPROPRIATE BILINGUAL TRANSLATION DICTIONARY
     -------------------------------------------------------------------------- */
  const TRANSLATIONS = {
    mr: {
      langCode: 'mr',
      splashSurnameTitle: () => 'गाडगे यांचे गौरी-गणपती',
      splashYearNum: '२१ वे',
      splashYearLabel: 'वर्ष',
      splashEnterText: 'शुभ आगमन • पुढे जा',
      pageTitle: (f) => `॥ श्री गणेशाय नमः ॥ गणपती बाप्पा मोरया — ${f.mr} गणेशोत्सव आमंत्रण २०२६`,
      brandTitle: () => 'गाडगे यांचे गौरी-गणपती',
      brandSubtitle: (f) => `${f.mr} • शाही आमंत्रण`,
      lblBgm: 'संगीत',
      lblWhatsapp: 'आमंत्रण पाठवा',
      lblMap: 'नकाशा',
      lblCalendar: 'कॅलेंडर',
      lblDownloadPng: 'डाउनलोड PNG',
      countdownHeading: 'गौरी-गणपती पावन आगमनासाठी उर्वरित वेळ (१७ सप्टेंबर २०२६):',
      lblDays: 'दिवस',
      lblHours: 'तास',
      lblMins: 'मिनिटे',
      lblSecs: 'सेकंद',
      royalSloka: '॥ श्री गणेशाय नमः ॥',
      plaqueTitle: () => 'गाडगे यांचे गौरी-गणपती',
      titleBappa: 'गणपती बाप्पा',
      titleMorya: 'मोरया!',
      verseLead: 'सुखकर्ता दुःखहर्ता श्री गौरी-गणपती यंदाही<br>आमच्या घरी आगमन होत आहे.',
      verseBody: 'या पावन प्रसंगी आपण सहकुटुंब दर्शनासाठी यावे<br>व पूजेचा आणि महाप्रसादाचा लाभ घेऊन<br>आमच्या आनंदात सहभागी व्हावे,<br><span class="verse-vinanti-text">ही मनःपूर्वक विनंती.</span>',
      lblDateLabel: 'दिनांक:',
      valDate: '१७, १८ व १९ सप्टेंबर २०२६',
      cueDate: 'नोंद करा →',
      lblVenueLabel: 'स्थळ:',
      valVenue: 'रामकुंज, कीर्ती नगर, गौरक्षण रोड, प्रजापिता ब्रह्माकुमारी आश्रमाजवळ, अकोला-४४४००१',
      cueVenue: 'नकाशा →',
      ribbonText: 'उत्सव कार्यक्रम पत्रिका',
      day1Badge: 'पहिला दिवस • १७ सप्टेंबर २०२६',
      day1Title: 'ज्येष्ठा गौरी आवाहन',
      day1Time: 'सकाळी १०:०० वाजल्यापासून',
      day2Badge: 'दुसरा दिवस • १८ सप्टेंबर २०२६',
      day2Title: 'महापूजा व आरती (पूजेनंतर महाप्रसाद)',
      day2Time: 'सायंकाळी ५:०० वाजल्यापासून',
      day3Badge: 'तिसरा दिवस • १९ सप्टेंबर २०२६',
      day3Title: 'उत्तरपूजा व विसर्जन सोहळा',
      day3Time: 'सकाळी १०:०० वाजल्यापासून',
      blessingText: 'आपली उपस्थिती हीच आमच्यासाठी<br><span class="blessing-sentence-bold">प्रेमाचा आणि आनंदाचा आशीर्वाद!</span>',
      hostSalutation: 'आपले स्नेहांकित:',
      hostDynasty: (f) => f.mr,
      dockDateTitle: '१७, १८ व १९ सप्टेंबर २०२६',
      dockDateSub: 'कॅलेंडरमध्ये नोंदवा →',
      dockMapTitle: 'कीर्ती नगर, अकोला',
      dockMapSub: 'गुगल मॅप्सवर दिशा →',
      dockPoojaTitle: 'महापूजा व आरती',
      dockPoojaSub: '१८ सप्टेंबर, सायंकाळी ५:०० वा. (पूजेनंतर महाप्रसाद)',
      pngPreviewTitle: 'शाही निमंत्रण पत्रिका',
      pngPreviewInstruction: "आयफोनवर फोटो सेव्ह करण्यासाठी खालील प्रतिमेवर दाबून धरून 'Save to Photos' निवडा:",
      lblPngModalShare: 'गॅलरीत सेव्ह करा',
      lblPushparpan: 'पुष्पार्पण करा',
      toastPushparpan: 'श्री गणरायाला पुष्पार्पण व आरती संपन्न!',
      toastPetalsOn: 'पुष्पवृष्टी सुरू झाली',
      toastPetalsOff: 'पुष्पवृष्टी थांबवली',
      toastBgmOn: 'पार्श्वसंगीत सुरू झाले',
      toastBgmOff: 'पार्श्वसंगीत थांबवले',
      toastCalendar: 'कॅलेंडर फाइल (.ics) डाउनलोड झाली!',
      toastCopied: 'आमंत्रण संदेश कॉपी झाला!',
      toastPngGenerating: 'शाही निमंत्रण PNG तयार होत आहे...',
      toastPngSuccess: 'निमंत्रण पत्रिका PNG डाउनलोड झाली!',
      toastWaSharing: 'WhatsApp साठी निमंत्रण PNG तयार होत आहे...',
      toastWaSuccess: 'WhatsApp वर यशस्वीरीत्या शेअर झाले!',
      toastWaFallback: 'निमंत्रण पत्रिका PNG डाउनलोड झाली! WhatsApp उघडत आहे...',
      waMessage: (f) =>
`॥ श्री गणेशाय नमः ॥
महालक्ष्मी माता प्रसन्न!

स्नेहीजन,
सुखकर्ता दुःखहर्ता श्री गौरी-गणपती यंदाही आमच्या घरी आगमन होत आहे. या पावन प्रसंगी आपण सहकुटुंब दर्शनासाठी यावे व पूजेचा आणि महाप्रसादाचा लाभ घेऊन आमच्या आनंदात सहभागी व्हावे, ही मनःपूर्वक विनंती.

दिनांक: १७, १८ व १९ सप्टेंबर २०२६
स्थळ: रामकुंज, कीर्ती नगर, गौरक्षण रोड, प्रजापिता ब्रह्माकुमारी आश्रमाजवळ, अकोला-४४४००१

कार्यक्रम:
• १७ सप्टेंबर: ज्येष्ठा गौरी आवाहन – सकाळी १०:०० वाजल्यापासून
• १८ सप्टेंबर: महापूजा व आरती – सायंकाळी ५:०० वाजल्यापासून (पूजेनंतर महाप्रसाद)
• १९ सप्टेंबर: उत्तरपूजा व विसर्जन सोहळा – सकाळी १०:०० वाजल्यापासून

आपली उपस्थिती हीच आमच्यासाठी प्रेमाचा आणि आनंदाचा आशीर्वाद!

- आपले स्नेहांकित: ${f.mr}`
    },
    en: {
      langCode: 'en',
      splashSurnameTitle: (s) => `${surnameMr} यांचे गौरी-गणपती`,
      splashYearNum: '२१ वे',
      splashYearLabel: 'वर्ष',
      splashEnterText: 'Auspicious Arrival • Enter',
      pageTitle: (f) => `॥ Shri Ganeshay Namah ॥ Ganpati Bappa Morya — ${f.en} Ganeshotsav Invitation 2026`,
      brandTitle: (f) => `${surnameMr} यांचे गौरी-गणपती`,
      brandSubtitle: (f) => `${f.en} • Royal Invitation`,
      lblBgm: 'Music',
      lblWhatsapp: 'Share Invite',
      lblMap: 'Directions',
      lblCalendar: 'Calendar',
      lblDownloadPng: 'Download PNG',
      countdownHeading: "Awaiting Gauri-Ganpati Auspicious Arrival (17th September 2026):",
      lblDays: 'Days',
      lblHours: 'Hours',
      lblMins: 'Mins',
      lblSecs: 'Secs',
      royalSloka: '॥ Shri Ganeshay Namah ॥',
      plaqueTitle: (f) => `${surnameMr} यांचे गौरी-गणपती`,
      titleBappa: 'Ganpati Bappa',
      titleMorya: 'Morya!',
      verseLead: 'With the divine blessings of Lord Ganesha,<br>we joyously welcome Bappa and Mahalakshmi to our home',
      verseBody: 'We cordially invite you and your family to join us<br>for sacred darshan, pooja, and mahaprasad,<br>and grace this celebration with your presence.<br><span class="verse-vinanti-text">Warm regards & heartiest invitation.</span>',
      lblDateLabel: 'Date:',
      valDate: '17th, 18th & 19th September 2026',
      cueDate: 'Save Date →',
      lblVenueLabel: 'Venue:',
      valVenue: 'Ramkunj, Kirti Nagar, Gaurakshan Road, Near Prajapita Brahmakumari Ashram, Akola-444001',
      cueVenue: 'View Map →',
      ribbonText: 'Ceremonial Schedule',
      day1Badge: 'Day 1 • 17th September 2026',
      day1Title: 'Jyeshtha Gauri Awahan',
      day1Time: '10:00 AM onwards',
      day2Badge: 'Day 2 • 18th September 2026',
      day2Title: 'Mahapooja & Aarti (Mahaprasad after pooja)',
      day2Time: '5:00 PM onwards',
      day3Badge: 'Day 3 • 19th September 2026',
      day3Title: 'Uttarpooja & Visarjan Sohala',
      day3Time: '10:00 AM onwards',
      blessingText: 'Your gracious presence is the sweetest blessing<br><span class="blessing-sentence-bold">of love, joy, and celebration for us!</span>',
      hostSalutation: 'Cordially Invited By:',
      hostDynasty: (f) => f.en,
      dockDateTitle: '17th, 18th & 19th September 2026',
      dockDateSub: 'Add to Calendar →',
      dockMapTitle: 'Kirti Nagar, Akola, Maharashtra',
      dockMapSub: 'View Directions on Google Maps →',
      dockPoojaTitle: 'Mahapooja & Aarti',
      dockPoojaSub: '18th September, 5:00 PM onwards (Mahaprasad after pooja)',
      pngPreviewTitle: 'Royal Invitation Card',
      pngPreviewInstruction: "To save on iPhone, press and hold the image below and select 'Save to Photos':",
      lblPngModalShare: 'Save to Gallery',
      lblPushparpan: 'Offer Flowers & Aarti',
      toastPushparpan: 'Flowers & Aarti offered to Lord Ganesha!',
      toastPetalsOn: 'Flower shower enabled',
      toastPetalsOff: 'Flower shower paused',
      toastBgmOn: 'Background music playing',
      toastBgmOff: 'Background music paused',
      toastCalendar: 'Calendar event (.ics) downloaded!',
      toastCopied: 'Invitation message copied to clipboard!',
      toastPngGenerating: 'Generating high-resolution invitation image...',
      toastPngSuccess: 'Invitation card PNG downloaded!',
      toastWaSharing: 'Preparing invitation PNG for WhatsApp...',
      toastWaSuccess: 'Shared to WhatsApp successfully!',
      toastWaFallback: 'Invitation PNG card downloaded! Opening WhatsApp...',
      waMessage: (f) =>
`॥ Shri Ganeshay Namah ॥
Mahalakshmi Mata Prasanna!

Dear Family & Friends,
With the divine grace and blessings of Lord Ganesha and Mahalakshmi, we joyously welcome Bappa and Mahalakshmi to our home. We cordially invite you and your family to join us for sacred darshan, pooja, and mahaprasad, and grace our celebration with your warm presence.

Date: 17, 18 & 19 September 2026
Venue: Ramkunj, Kirti Nagar, Gaurakshan Road, Near Prajapita Brahmakumari Ashram, Akola-444001

Schedule:
• 17 Sept: Jyeshtha Gauri Awahan – 10:00 AM onwards
• 18 Sept: Mahapooja & Aarti – 5:00 PM onwards (Mahaprasad after pooja)
• 19 Sept: Uttarpooja & Visarjan Sohala – 10:00 AM onwards

Your gracious presence is the sweetest blessing of love and celebration for us!

- Cordially Invited By: ${f.en}`
    }
  };

  /* --------------------------------------------------------------------------
     3. LANGUAGE TOGGLE STATE & SWITCHER
     -------------------------------------------------------------------------- */
  function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || langParam === 'mr') {
      return langParam;
    }
    const saved = localStorage.getItem('ganpati_invitation_lang');
    if (saved === 'en' || saved === 'mr') {
      return saved;
    }
    return 'mr'; // Default Marathi
  }

  let currentLang = getInitialLanguage();

  window.getCurrentFamilyName = function() {
    return currentLang === 'en' ? familyNames.en : familyNames.mr;
  };

  function updateElement(id, content, isHtml = false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (isHtml) el.innerHTML = content;
    else el.textContent = content;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('ganpati_invitation_lang', lang);

    const t = TRANSLATIONS[lang];

    // Toggle button active states
    const btnMr = document.getElementById('langMrBtn');
    const btnEn = document.getElementById('langEnBtn');
    if (btnMr && btnEn) {
      if (lang === 'mr') {
        btnMr.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnMr.classList.remove('active');
      }
    }

    // Page Title
    document.title = t.pageTitle(familyNames);

    // Header brand
    updateElement('brandTitleText', typeof t.brandTitle === 'function' ? t.brandTitle(familyNames) : t.brandTitle);
    updateElement('brandSubtitleText', t.brandSubtitle(familyNames));

    // Nav labels
    updateElement('lblBgm', t.lblBgm);
    updateElement('lblWhatsapp', t.lblWhatsapp);
    updateElement('lblMap', t.lblMap);
    updateElement('lblCalendar', t.lblCalendar);
    updateElement('lblDownloadPng', t.lblDownloadPng);

    // Countdown
    updateElement('countdownHeadingText', t.countdownHeading);
    updateElement('lblDays', t.lblDays);
    updateElement('lblHours', t.lblHours);
    updateElement('lblMins', t.lblMins);
    updateElement('lblSecs', t.lblSecs);

    // Centerpiece
    updateElement('royalSloka', t.royalSloka);
    updateElement('plaqueTitle', typeof t.plaqueTitle === 'function' ? t.plaqueTitle(familyNames) : t.plaqueTitle);
    updateElement('lblPushparpan', t.lblPushparpan);
    const btnPushparpan = document.getElementById('btnPushparpan');
    if (btnPushparpan) {
      const titleText = lang === 'mr' ? 'श्री गौरी-गणपती पुष्पार्पण करा' : 'Offer Flowers & Aarti to Lord Ganesha and Mahalakshmi';
      btnPushparpan.setAttribute('title', titleText);
      btnPushparpan.setAttribute('aria-label', titleText);
    }
    updateElement('titleBappa', t.titleBappa);
    updateElement('titleMorya', t.titleMorya);

    // Verses
    updateElement('verseLeadText', t.verseLead, true);
    updateElement('verseBodyText', t.verseBody, true);

    // Event cards
    updateElement('lblDateLabel', t.lblDateLabel);
    updateElement('valDate', t.valDate);
    updateElement('cueDate', t.cueDate);
    updateElement('lblVenueLabel', t.lblVenueLabel);
    updateElement('valVenue', t.valVenue);
    updateElement('cueVenue', t.cueVenue);

    // Special program: Two Separate Days
    updateElement('ribbonText', t.ribbonText);
    updateElement('day1Badge', t.day1Badge);
    updateElement('day1Title', t.day1Title);
    updateElement('day1Time', t.day1Time);
    updateElement('day2Badge', t.day2Badge);
    updateElement('day2Title', t.day2Title);
    updateElement('day2Time', t.day2Time);
    updateElement('day3Badge', t.day3Badge);
    updateElement('day3Title', t.day3Title);
    updateElement('day3Time', t.day3Time);

    // Blessing & Host
    updateElement('blessingText', t.blessingText, true);
    updateElement('hostSalutationText', t.hostSalutation);
    updateElement('hostDynastyName', t.hostDynasty(familyNames));

    // Bottom Quick Dock
    updateElement('dockDateTitle', t.dockDateTitle);
    updateElement('dockDateSub', t.dockDateSub);
    updateElement('dockMapTitle', t.dockMapTitle);
    updateElement('dockMapSub', t.dockMapSub);
    updateElement('dockPoojaTitle', t.dockPoojaTitle);
    updateElement('dockPoojaSub', t.dockPoojaSub);

    // Modal elements
    updateElement('pngPreviewTitle', t.pngPreviewTitle);
    updateElement('pngPreviewInstruction', t.pngPreviewInstruction, true);
    updateElement('lblPngModalShare', t.lblPngModalShare);

    // Splash screen elements
    const activeSurname = lang === 'en' ? surnameEn : surnameMr;
    updateElement('splashSurnameTitle', t.splashSurnameTitle(activeSurname));
    updateElement('splashYearNum', t.splashYearNum);
    updateElement('splashYearLabel', t.splashYearLabel);
    updateElement('splashEnterText', t.splashEnterText);

    // WhatsApp Message Box
    const waBox = document.getElementById('waMessageText');
    if (waBox) {
      waBox.textContent = t.waMessage(familyNames);
    }

    // Update countdown immediately
    updateCountdown();
  }

  // Setup language toggle buttons
  const langMrBtn = document.getElementById('langMrBtn');
  const langEnBtn = document.getElementById('langEnBtn');
  if (langMrBtn) {
    langMrBtn.addEventListener('click', () => applyLanguage('mr'));
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => applyLanguage('en'));
  }

  /* --------------------------------------------------------------------------
     4. FALLING FLOWER PETALS (पुष्पवृष्टी) CANVAS
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('flowerCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let isPetalsActive = true;
  let particles = [];

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const petalVariants = [
    // 1. Deep Rose (गुलाब)
    { type: 'rose', innerColor: '#7a0016', outerColor: '#d90429', tipColor: '#ff4d6d', veinColor: 'rgba(255, 180, 195, 0.4)' },
    // 2. Crimson Rose (गुलाबी-लाल)
    { type: 'rose', innerColor: '#9e0018', outerColor: '#e6194b', tipColor: '#ff758f', veinColor: 'rgba(255, 200, 210, 0.4)' },
    // 3. Saffron Marigold (केशरी झेंडू)
    { type: 'marigold', innerColor: '#b53d00', outerColor: '#ff6b00', tipColor: '#ffaa00', veinColor: 'rgba(255, 220, 120, 0.4)' },
    // 4. Golden Marigold (पिवळा झेंडू)
    { type: 'marigold', innerColor: '#d46000', outerColor: '#ff9e00', tipColor: '#ffe066', veinColor: 'rgba(255, 240, 160, 0.4)' },
    // 5. Jasmine Blossom (मोगरा)
    { type: 'mogra', innerColor: '#f7d070', outerColor: '#ffffff', tipColor: '#fff9e6', veinColor: 'rgba(212, 175, 55, 0.35)' }
  ];

  class Petal {
    constructor(spawnFromBurst = false, burstX = null, burstY = null) {
      this.isGoldDust = Math.random() > 0.75;
      this.reset(true, spawnFromBurst, burstX, burstY);
    }

    reset(initial = false, fromBurst = false, burstX = null, burstY = null) {
      const cWidth = canvas ? canvas.width : window.innerWidth;
      const cHeight = canvas ? canvas.height : window.innerHeight;

      if (fromBurst) {
        this.x = (burstX !== null ? burstX : cWidth * 0.5) + (Math.random() - 0.5) * 220;
        this.y = (burstY !== null ? burstY : cHeight * 0.3) + (Math.random() - 0.5) * 80;
      } else {
        this.x = Math.random() * cWidth;
        this.y = initial ? Math.random() * cHeight : -20;
      }

      if (this.isGoldDust) {
        this.size = 1.5 + Math.random() * 2.5;
        this.speedY = 0.4 + Math.random() * 0.6;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = 0.4 + Math.random() * 0.5;
        this.pulsate = Math.random() * Math.PI;
      } else {
        this.size = 7 + Math.random() * 6;
        this.speedY = 0.75 + Math.random() * 0.75;
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.variant = petalVariants[Math.floor(Math.random() * petalVariants.length)];
        this.opacity = 0.7 + Math.random() * 0.3;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.015 + Math.random() * 0.02;
        this.flipSpeed = 0.02 + Math.random() * 0.025;
        this.flipAngle = Math.random() * Math.PI;
      }
    }

    update() {
      this.y += this.speedY;

      if (this.isGoldDust) {
        this.pulsate += 0.04;
        this.x += this.speedX + Math.sin(this.pulsate) * 0.4;
      } else {
        this.wobble += this.wobbleSpeed;
        this.flipAngle += this.flipSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.8;
        this.rotation += this.rotationSpeed;
      }

      const cHeight = canvas ? canvas.height : window.innerHeight;
      if (this.y > cHeight + 25) {
        this.reset(false);
      }
    }

    draw(context) {
      context.save();

      const cHeight = canvas ? canvas.height : window.innerHeight;
      let alphaFade = 1;
      if (this.y > cHeight * 0.55) {
        alphaFade = Math.max(0, 1 - (this.y - cHeight * 0.55) / (cHeight * 0.38));
      }

      if (this.isGoldDust) {
        const currentAlpha = this.opacity * alphaFade * (0.8 + 0.3 * Math.sin(this.pulsate));
        context.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = '#ffea75';
        context.shadowColor = '#dfb04e';
        context.shadowBlur = 6;
        context.fill();
      } else {
        context.translate(this.x, this.y);
        context.rotate(this.rotation);

        // 3D Air Tumbling (Perspective Scale)
        const scaleX = Math.cos(this.flipAngle);
        const scaleY = 0.75 + 0.25 * Math.sin(this.wobble);
        context.scale(scaleX, scaleY);

        context.globalAlpha = Math.min(1, this.opacity * alphaFade);

        const v = this.variant;
        const s = this.size;

        if (v.type === 'rose') {
          // --- REALISTIC ROSE PETAL (गुलाब) ---
          const grad = context.createRadialGradient(0, s * 0.3, 1, 0, 0, s * 1.2);
          grad.addColorStop(0, v.innerColor);
          grad.addColorStop(0.6, v.outerColor);
          grad.addColorStop(1, v.tipColor);

          context.beginPath();
          context.moveTo(0, s * 0.9);
          context.bezierCurveTo(s * 0.85, s * 0.5, s * 0.95, -s * 0.3, 0, -s * 0.95);
          context.bezierCurveTo(-s * 0.95, -s * 0.3, -s * 0.85, s * 0.5, 0, s * 0.9);
          context.closePath();

          context.fillStyle = grad;
          context.shadowColor = 'rgba(0, 0, 0, 0.3)';
          context.shadowBlur = 4;
          context.shadowOffsetY = 2;
          context.fill();

          // Organic Central Vein
          context.beginPath();
          context.moveTo(0, s * 0.75);
          context.quadraticCurveTo(s * 0.1, 0, 0, -s * 0.7);
          context.strokeStyle = v.veinColor;
          context.lineWidth = 0.7;
          context.stroke();

        } else if (v.type === 'marigold') {
          // --- REALISTIC MARIGOLD PETAL (झेंडू) ---
          const grad = context.createLinearGradient(0, s * 0.8, 0, -s * 0.9);
          grad.addColorStop(0, v.innerColor);
          grad.addColorStop(0.5, v.outerColor);
          grad.addColorStop(1, v.tipColor);

          context.beginPath();
          context.moveTo(0, s * 0.85);
          context.bezierCurveTo(s * 0.4, s * 0.4, s * 0.6, -s * 0.4, s * 0.3, -s * 0.85);
          context.bezierCurveTo(s * 0.1, -s * 0.95, -s * 0.1, -s * 0.95, -s * 0.3, -s * 0.85);
          context.bezierCurveTo(-s * 0.6, -s * 0.4, -s * 0.4, s * 0.4, 0, s * 0.85);
          context.closePath();

          context.fillStyle = grad;
          context.shadowColor = 'rgba(180, 80, 0, 0.25)';
          context.shadowBlur = 3;
          context.fill();

          // Fluted Petal Texture
          context.beginPath();
          context.moveTo(0, s * 0.7);
          context.lineTo(0, -s * 0.75);
          context.moveTo(-s * 0.15, s * 0.5);
          context.lineTo(-s * 0.15, -s * 0.65);
          context.moveTo(s * 0.15, s * 0.5);
          context.lineTo(s * 0.15, -s * 0.65);
          context.strokeStyle = v.veinColor;
          context.lineWidth = 0.6;
          context.stroke();

        } else {
          // --- REALISTIC MOGRA / JASMINE BLOSSOM (मोगरा) ---
          context.fillStyle = '#fffdf5';
          context.shadowColor = 'rgba(212, 175, 55, 0.3)';
          context.shadowBlur = 4;

          const numPetals = 5;
          const r = s * 0.65;
          for (let p = 0; p < numPetals; p++) {
            const angle = (p * 2 * Math.PI) / numPetals;
            context.save();
            context.rotate(angle);
            context.beginPath();
            context.ellipse(0, -r, r * 0.45, r * 0.85, 0, 0, Math.PI * 2);
            context.fillStyle = (p % 2 === 0) ? '#ffffff' : '#fff9e8';
            context.fill();
            context.restore();
          }

          // Golden Flower Core
          context.beginPath();
          context.arc(0, 0, r * 0.32, 0, Math.PI * 2);
          context.fillStyle = '#f7d070';
          context.fill();
          context.beginPath();
          context.arc(0, 0, r * 0.16, 0, Math.PI * 2);
          context.fillStyle = '#d46000';
          context.fill();
        }
      }

      context.restore();
    }
  }

  function initPetals() {
    if (!canvas || !ctx) return;
    particles = [];
    const count = window.innerWidth < 768 ? 14 : 24;
    for (let i = 0; i < count; i++) {
      particles.push(new Petal());
    }
  }

  function burstPetals(count = 14) {
    if (!isPetalsActive || !canvas) return;
    const bappaTrigger = document.getElementById('bappaPhotoTrigger');
    let burstX = canvas.width * 0.5;
    let burstY = canvas.height * 0.35;
    if (bappaTrigger) {
      const rect = bappaTrigger.getBoundingClientRect();
      burstX = rect.left + rect.width / 2;
      burstY = rect.top + rect.height * 0.25;
    }
    for (let i = 0; i < count; i++) {
      particles.push(new Petal(true, burstX, burstY));
    }
    const maxParticles = window.innerWidth < 768 ? 36 : 60;
    if (particles.length > maxParticles) {
      particles.splice(0, particles.length - maxParticles);
    }
  }

  function renderPetals() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isPetalsActive) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
    }
    requestAnimationFrame(renderPetals);
  }

  initPetals();
  renderPetals();

  /* --------------------------------------------------------------------------
     4B. INTERACTIVE PUSHPARTPAN (FLOWER & AARTI OFFERING)
     -------------------------------------------------------------------------- */
  const bellAudio = new Audio('bell.mp3');
  bellAudio.volume = 0.5;

  function offerFlowersAndAarti(e) {
    if (e) e.stopPropagation();

    // 1. Particle flower burst over Bappa photo frame
    burstPetals(35);

    // 2. Play temple bell chime
    try {
      bellAudio.currentTime = 0;
      const playPromise = bellAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log('Bell audio play prevented:', err);
        });
      }
    } catch (err) {
      console.log('Bell audio error:', err);
    }

    // 3. Golden aura glow effect
    const aura = document.querySelector('.art-golden-aura');
    if (aura) {
      aura.classList.add('aura-active');
      setTimeout(() => {
        aura.classList.remove('aura-active');
      }, 1800);
    }

    // 4. Show devotional toast
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.mr;
    if (t && t.toastPushparpan) {
      showToast(t.toastPushparpan);
    }
  }

  /* --------------------------------------------------------------------------
     4C. AMBIENT DEVOTIONAL BACKGROUND MUSIC (BGM)
     Gentle, soothing volume across iOS Safari, Android, and Desktop (~0.10 - 0.12).
     Bypasses iOS volume lock via pre-scaled bgm.m4a + Web Audio GainNode.
     -------------------------------------------------------------------------- */
  const BGM_DEFAULT_VOLUME = 0.16;
  const bgmAudio = document.getElementById('bgmAudio') || new Audio();
  bgmAudio.autoplay = true;
  bgmAudio.setAttribute('autoplay', '');
  bgmAudio.setAttribute('playsinline', '');
  bgmAudio.setAttribute('webkit-playsinline', '');
  if (!bgmAudio.src) {
    if (bgmAudio.canPlayType && (bgmAudio.canPlayType('audio/mp4') || bgmAudio.canPlayType('audio/x-m4a') || bgmAudio.canPlayType('audio/aac'))) {
      bgmAudio.src = 'bgm.m4a';
    } else {
      bgmAudio.src = 'bgm.mp3';
    }
  }
  // Fallback: if bgm.m4a is missing, try bgm.mp3 instead
  bgmAudio.addEventListener('error', function onBgmErr() {
    if (bgmAudio.src && bgmAudio.src.indexOf('bgm.m4a') !== -1) {
      bgmAudio.removeEventListener('error', onBgmErr);
      bgmAudio.src = 'bgm.mp3';
      bgmAudio.load();
    }
  });
  bgmAudio.loop = true;
  bgmAudio.volume = BGM_DEFAULT_VOLUME;
  bgmAudio.preload = 'auto';

  let isBgmPlaying = false;
  let isBgmManuallyPaused = false;
  let bgmAudioCtx = null;
  let bgmGainNode = null;

  function initWebAudioGain() {
    // Web Audio routing is blocked for file:// pages; plain <audio> playback still works
    if (window.location.protocol === 'file:') return;
    if (bgmAudioCtx) {
      if (bgmAudioCtx.state === 'suspended') {
        bgmAudioCtx.resume().catch(() => {});
      }
      return;
    }
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        bgmAudioCtx = new AudioCtxClass();
        const source = bgmAudioCtx.createMediaElementSource(bgmAudio);
        bgmGainNode = bgmAudioCtx.createGain();
        bgmGainNode.gain.value = BGM_DEFAULT_VOLUME;
        source.connect(bgmGainNode);
        bgmGainNode.connect(bgmAudioCtx.destination);
      }
    } catch (e) {
      // Audio element already routed or Web Audio restricted
    }
  }

  function unlockWebAudioOnGesture() {
    if (bgmAudioCtx && bgmAudioCtx.state === 'suspended') {
      bgmAudioCtx.resume().catch(() => {});
    }
    // Play silent buffer to unlock iOS Safari Web Audio policy
    if (bgmAudioCtx) {
      try {
        const buffer = bgmAudioCtx.createBuffer(1, 1, 22050);
        const source = bgmAudioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(bgmAudioCtx.destination);
        source.start(0);
      } catch (e) {}
    }
  }

  function setBgmVolume(level) {
    try {
      bgmAudio.volume = Math.max(0, Math.min(1, level));
    } catch (e) {}
    if (bgmGainNode && bgmAudioCtx) {
      try {
        bgmGainNode.gain.cancelScheduledValues(bgmAudioCtx.currentTime);
        bgmGainNode.gain.setValueAtTime(level, bgmAudioCtx.currentTime);
      } catch (e) {}
    }
  }

  function updateBgmUI(playing) {
    const btn = document.getElementById('bgmToggleBtn');
    if (!btn) return;
    if (playing) {
      btn.classList.add('playing');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('playing');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  function startBgm() {
    if (isBgmManuallyPaused) return;
    initWebAudioGain();
    unlockWebAudioOnGesture();
    setBgmVolume(BGM_DEFAULT_VOLUME);
    const playPromise = bgmAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isBgmPlaying = true;
          updateBgmUI(true);
        })
        .catch(() => {
          isBgmPlaying = false;
          updateBgmUI(false);
        });
    }
  }

  function setupBgmFirstInteractionTrigger() {
    const onUserInteraction = () => {
      if (!isBgmManuallyPaused && !isBgmPlaying) {
        startBgm();
      }
    };

    const events = ['touchstart', 'touchend', 'pointerdown', 'pointerup', 'mousedown', 'click', 'scroll', 'keydown'];
    events.forEach(evt => {
      window.addEventListener(evt, onUserInteraction, { capture: true, passive: true });
      document.addEventListener(evt, onUserInteraction, { capture: true, passive: true });
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !isBgmManuallyPaused && !isBgmPlaying) {
        startBgm();
      }
    });

    window.addEventListener('pageshow', () => {
      if (!isBgmManuallyPaused && !isBgmPlaying) {
        startBgm();
      }
    });
  }

  setupBgmFirstInteractionTrigger();

  function toggleBgm() {
    const t = TRANSLATIONS[currentLang];
    if (isBgmPlaying) {
      bgmAudio.pause();
      isBgmPlaying = false;
      isBgmManuallyPaused = true;
      updateBgmUI(false);
      showToast(t.toastBgmOff);
    } else {
      isBgmManuallyPaused = false;
      initWebAudioGain();
      setBgmVolume(BGM_DEFAULT_VOLUME);
      bgmAudio.play()
        .then(() => {
          isBgmPlaying = true;
          updateBgmUI(true);
          showToast(t.toastBgmOn);
        })
        .catch((err) => console.warn('BGM play error:', err));
    }
  }

  const bgmToggleBtn = document.getElementById('bgmToggleBtn');
  if (bgmToggleBtn) {
    bgmToggleBtn.addEventListener('click', toggleBgm);
  }

  // Attempt gentle background playback immediately on site arrival
  startBgm();

  /* --------------------------------------------------------------------------
     5. COUNTDOWN TIMER WITH DUAL NUMBER SUPPORT
     -------------------------------------------------------------------------- */
  function toMarathiDigits(num) {
    const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return String(num).padStart(2, '0').replace(/[0-9]/g, d => marathiDigits[Number(d)]);
  }

  function updateCountdown() {
    const targetDate = new Date('2026-09-17T10:00:00+05:30').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    const daysEl = document.getElementById('daysNum');
    const hoursEl = document.getElementById('hoursNum');
    const minsEl = document.getElementById('minsNum');
    const secsEl = document.getElementById('secsNum');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (diff <= 0) {
      const zero = currentLang === 'mr' ? '००' : '00';
      daysEl.textContent = zero;
      hoursEl.textContent = zero;
      minsEl.textContent = zero;
      secsEl.textContent = zero;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    if (currentLang === 'mr') {
      daysEl.textContent = toMarathiDigits(days);
      hoursEl.textContent = toMarathiDigits(hours);
      minsEl.textContent = toMarathiDigits(mins);
      secsEl.textContent = toMarathiDigits(secs);
    } else {
      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(mins).padStart(2, '0');
      secsEl.textContent = String(secs).padStart(2, '0');
    }
  }

  setInterval(updateCountdown, 1000);

  /* --------------------------------------------------------------------------
     6. CLEAN TOAST NOTIFICATION UTILITY (ZERO EMOJIS)
     -------------------------------------------------------------------------- */
  let toastTimer = null;
  function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    container.innerHTML = '';
    const toast = document.createElement('div');
    toast.className = 'royal-toast-item show';
    toast.textContent = msg;
    container.appendChild(toast);

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (container.contains(toast)) container.removeChild(toast);
      }, 300);
    }, 2800);
  }

  /* --------------------------------------------------------------------------
     7. CALENDAR (.ICS) DOWNLOAD (LOCALIZED)
     -------------------------------------------------------------------------- */
  function triggerCalendarDownload() {
    const isEn = currentLang === 'en';
    const fam = isEn ? familyNames.en : familyNames.mr;
    const safeFileName = fam.replace(/[^a-zA-Z0-9\u0900-\u097F]/g, '_');

    const summary = isEn
      ? `Shri Ganeshotsav 2026 - ${fam}`
      : `श्री गणेशोत्सव २०२६ - ${fam}`;

    const description = isEn
      ? '17 Sept: Jyeshtha Gauri Awahan 10:00 AM onwards | 18 Sept: Mahapooja & Aarti 5:00 PM onwards (Mahaprasad after pooja) | 19 Sept: Uttarpooja & Visarjan Sohala 10:00 AM onwards'
      : '१७ सप्टेंबर: ज्येष्ठा गौरी आवाहन सकाळी १०:०० वाजल्यापासून | १८ सप्टेंबर: महापूजा व आरती सायंकाळी ५:०० वाजल्यापासून (पूजेनंतर महाप्रसाद) | १९ सप्टेंबर: उत्तरपूजा व विसर्जन सोहळा सकाळी १०:०० वाजल्यापासून';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      `PRODID:-//${safeFileName}//Ganeshotsav 2026//EN`,
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:ganeshotsav-2026-${Date.now()}@ganpati.local`,
      'DTSTAMP:20260915T000000Z',
      'DTSTART;TZID=Asia/Kolkata:20260917T100000',
      'DTEND;TZID=Asia/Kolkata:20260919T130000',
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      'LOCATION:Ramkunj, Kirti Nagar, Gaurakshan Road, Near Prajapita Brahmakumari Ashram, Akola-444001',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${safeFileName}_Ganeshotsav_2026.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(TRANSLATIONS[currentLang].toastCalendar);
  }

  const calendarBtn = document.getElementById('calendarBtn');
  const dateCardClickable = document.getElementById('dateCardClickable');
  const quickCalCard = document.getElementById('quickCalCard');

  if (calendarBtn) calendarBtn.addEventListener('click', triggerCalendarDownload);
  if (dateCardClickable) dateCardClickable.addEventListener('click', triggerCalendarDownload);
  if (quickCalCard) quickCalCard.addEventListener('click', triggerCalendarDownload);

  const btnPushparpan = document.getElementById('btnPushparpan');
  const bappaPhotoTrigger = document.getElementById('bappaPhotoTrigger');

  if (btnPushparpan) {
    btnPushparpan.addEventListener('click', offerFlowersAndAarti);
  }
  if (bappaPhotoTrigger) {
    bappaPhotoTrigger.addEventListener('click', (e) => {
      if (!e.target.closest('#btnPushparpan')) {
        offerFlowersAndAarti(e);
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. WHATSAPP SHARE MODAL & DIRECT SEND
     -------------------------------------------------------------------------- */
  const waModal = document.getElementById('waModal');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const fabShare = document.getElementById('fabShare');
  const quickWaCard = document.getElementById('quickWaCard');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const copyInviteBtn = document.getElementById('copyInviteBtn');
  const openWaDirectBtn = document.getElementById('openWaDirectBtn');
  const waMessageText = document.getElementById('waMessageText');

  function openModal() {
    if (waModal) {
      waModal.classList.add('open', 'active');
    }
  }

  function closeModal() {
    if (waModal) {
      waModal.classList.remove('open', 'active');
    }
  }

  if (whatsappBtn) whatsappBtn.addEventListener('click', openModal);
  if (fabShare) fabShare.addEventListener('click', openModal);
  if (quickWaCard) quickWaCard.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (waModal) {
    waModal.addEventListener('click', (e) => {
      if (e.target === waModal) closeModal();
    });
  }

  if (openWaDirectBtn) {
    openWaDirectBtn.addEventListener('click', shareCardToWhatsApp);
  }

  if (copyInviteBtn) {
    copyInviteBtn.addEventListener('click', () => {
      const msg = waMessageText ? waMessageText.textContent.trim() : '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(msg).then(() => {
          showToast(TRANSLATIONS[currentLang].toastCopied);
        }).catch(() => {
          showToast(TRANSLATIONS[currentLang].toastCopied);
        });
      } else {
        showToast(TRANSLATIONS[currentLang].toastCopied);
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. HIGH-RESOLUTION PNG INVITATION CARD GENERATOR & EXPORTER
     -------------------------------------------------------------------------- */
  let cachedPngBlob = null;
  let cachedBlobTimestamp = 0;

  async function ensureHtml2CanvasLoaded() {
    if (typeof html2canvas !== 'undefined') return;
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      script.crossOrigin = 'anonymous';
      script.onload = () => resolve();
      script.onerror = () => {
        const localScript = document.createElement('script');
        localScript.src = '/assets/html2canvas.min.js';
        localScript.onload = () => resolve();
        localScript.onerror = () => reject(new Error('html2canvas could not be loaded'));
        document.head.appendChild(localScript);
      };
      document.head.appendChild(script);
    });
  }

  async function generateCardPngBlob(forceFresh = false) {
    const now = Date.now();
    if (!forceFresh && cachedPngBlob && (now - cachedBlobTimestamp < 15000)) {
      return cachedPngBlob;
    }

    const cardEl = document.getElementById('printableCard');
    if (!cardEl) throw new Error('Printable card element not found');

    await ensureHtml2CanvasLoaded();

    cardEl.classList.add('capturing-card');

    try {
      // iOS Safari has strict canvas memory limits (~16M pixels total).
      // iPhone 14 card at scale 2 ≈ 390×1300 * 2 = 780×2600 = ~2M px (safe).
      // But html2canvas sometimes captures more than visible; use 1.5x on iOS to be safe.
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isMobile = isIOS || /Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      // iOS: 1.5x scale; Android: 2x; desktop: 2.5x
      const renderScale = isIOS ? 1.5 : (isMobile ? 2 : 2.5);

      const canvas = await html2canvas(cardEl, {
        scale: renderScale,
        useCORS: true,
        allowTaint: false, // CRITICAL: NEVER taint canvas, so toBlob & toDataURL succeed!
        backgroundColor: '#fcf8ef',
        scrollX: 0,
        scrollY: 0,
        logging: false,
        imageTimeout: 20000,
        onclone: (clonedDoc) => {
          // Set crossOrigin on cloned images so WebKit doesn't taint the canvas.
          // Do NOT change src — reloading causes black box (fetch hasn't finished).
          // The HTML img already has crossorigin="anonymous" so the browser cache
          // already has a CORS-valid copy; just propagate the attribute to the clone.
          clonedDoc.querySelectorAll('img').forEach((img) => {
            img.crossOrigin = 'anonymous';
          });
          const clonedCard = clonedDoc.getElementById('printableCard');
          if (clonedCard) {
            clonedCard.classList.add('capturing-card');
          }
        }
      });

      cardEl.classList.remove('capturing-card');

      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob((b) => {
          if (b) {
            resolve(b);
          } else {
            // Fallback via dataURL if toBlob returns null on older WebKit engines
            try {
              const dataUrl = canvas.toDataURL('image/png');
              const arr = dataUrl.split(',');
              const mime = arr[0].match(/:(.*?);/)[1];
              const bstr = atob(arr[1]);
              let n = bstr.length;
              const u8arr = new Uint8Array(n);
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              resolve(new Blob([u8arr], { type: mime }));
            } catch (dataUrlErr) {
              reject(new Error('Canvas image conversion failed: ' + dataUrlErr.message));
            }
          }
        }, 'image/png', 0.95);
      });

      cachedPngBlob = blob;
      cachedBlobTimestamp = Date.now();
      return blob;
    } catch (err) {
      cardEl.classList.remove('capturing-card');
      // Surface the real error for debugging (visible in iOS Safari Web Inspector)
      console.error('[PNG] Generation failed:', err.name, '|', err.message, '\n', err.stack);
      throw err;
    }
  }

  /* --------------------------------------------------------------------------
     9B. PNG PREVIEW & SAVE MODAL FOR IOS SAFARI & MOBILE
     -------------------------------------------------------------------------- */
  const pngPreviewModal = document.getElementById('pngPreviewModal');
  const pngPreviewImg = document.getElementById('pngPreviewImg');
  const closePngModalBtn = document.getElementById('closePngModalBtn');
  const pngModalShareBtn = document.getElementById('pngModalShareBtn');
  const pngModalWaBtn = document.getElementById('pngModalWaBtn');

  function openPngModal(imgUrl) {
    if (pngPreviewModal) {
      if (imgUrl && pngPreviewImg) {
        pngPreviewImg.src = imgUrl;
      }
      pngPreviewModal.classList.add('open', 'active');
    }
  }

  function closePngModal() {
    if (pngPreviewModal) {
      pngPreviewModal.classList.remove('open', 'active');
    }
  }

  if (closePngModalBtn) closePngModalBtn.addEventListener('click', closePngModal);
  if (pngPreviewModal) {
    pngPreviewModal.addEventListener('click', (e) => {
      if (e.target === pngPreviewModal) closePngModal();
    });
  }

  async function downloadCardAsPng() {
    const t = TRANSLATIONS[currentLang];
    showToast(t.toastPngGenerating);

    const isEn = currentLang === 'en';
    const fam = isEn ? familyNames.en : familyNames.mr;
    const safeName = fam.replace(/[^a-zA-Z0-9\u0900-\u097F]/g, '_');
    const fileName = `Ganpati_Bappa_Nimantran_${safeName}_2026.png`;

    try {
      const blob = await generateCardPngBlob(true);
      const url = URL.createObjectURL(blob);
      const file = new File([blob], fileName, { type: 'image/png' });

      // Detect iOS / mobile devices
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isMobile = isIOS || /Android/i.test(navigator.userAgent) || window.innerWidth < 768;

      // Always open preview modal so the image is immediately visible & saveable
      openPngModal(url);

      // On iOS Safari & supported mobile browsers, also invoke native share sheet for "Save Image" to Photos
      if (isMobile && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file]
          });
          showToast(t.toastPngSuccess);
          return;
        } catch (shareErr) {
          // If user cancels native share dialog, modal remains open for long-press "Save to Photos"
          if (shareErr.name === 'AbortError') return;
        }
      }

      // On desktop browsers: trigger direct automatic download
      if (!isIOS) {
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      showToast(t.toastPngSuccess);
    } catch (err) {
      console.error('Error exporting card PNG:', err);
      showToast(isEn ? 'Failed to generate PNG image' : 'PNG फोटो तयार करताना त्रुटी आली');
    }
  }

  const downloadPngBtn = document.getElementById('downloadPngBtn');
  if (downloadPngBtn) {
    downloadPngBtn.addEventListener('click', downloadCardAsPng);
  }

  /* --------------------------------------------------------------------------
     10. WHATSAPP PNG INVITATION SHARING (STRICTLY ONLY PNG FILE, NO TEXT)
     Shares the high-resolution PNG invitation card directly to WhatsApp
     without appending any text message.
     -------------------------------------------------------------------------- */
  async function shareCardToWhatsApp() {
    closeModal();
    closePngModal();
    const t = TRANSLATIONS[currentLang];
    const isEn = currentLang === 'en';
    const fam = isEn ? familyNames.en : familyNames.mr;
    const safeName = fam.replace(/[^a-zA-Z0-9\u0900-\u097F]/g, '_');
    const fileName = `Ganpati_Bappa_Nimantran_${safeName}_2026.png`;

    showToast(t.toastWaSharing);

    try {
      const blob = await generateCardPngBlob();
      const file = new File([blob], fileName, { type: 'image/png' });

      // Native Web Share API (iOS Safari, Android Chrome, mobile devices)
      // STRICTLY ONLY PNG file: no 'text' or 'title' so WhatsApp receives ONLY the image
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file]
        });
        showToast(t.toastWaSuccess);
        return;
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        return; // User cancelled share sheet
      }
      console.warn('Native share error, falling back:', err);
    }

    // Fallback for desktop browsers without Web Share file support:
    try {
      const blob = await generateCardPngBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (e) {
      console.warn('Fallback download failed:', e);
    }

    showToast(isEn ? 'Invitation PNG downloaded! Please attach to WhatsApp.' : 'निमंत्रण पत्रिका PNG डाउनलोड झाली! WhatsApp मध्ये जोडा.');
    setTimeout(() => {
      window.open('https://web.whatsapp.com/', '_blank');
    }, 1000);
  }

  // PNG Modal Action Buttons
  if (pngModalShareBtn) {
    pngModalShareBtn.addEventListener('click', async () => {
      const isEn = currentLang === 'en';
      const fam = isEn ? familyNames.en : familyNames.mr;
      const safeName = fam.replace(/[^a-zA-Z0-9\u0900-\u097F]/g, '_');
      const fileName = `Ganpati_Bappa_Nimantran_${safeName}_2026.png`;
      try {
        const blob = await generateCardPngBlob();
        const file = new File([blob], fileName, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file] });
          return;
        }
      } catch (e) {
        if (e.name === 'AbortError') return;
      }
      // Fallback direct download
      try {
        const blob = await generateCardPngBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      } catch (e) {}
    });
  }

  if (pngModalWaBtn) {
    pngModalWaBtn.addEventListener('click', () => {
      shareCardToWhatsApp();
    });
  }

  /* --------------------------------------------------------------------------
     10B. ROYAL FESTIVE SPLASH SCREEN CONTROLLER
     -------------------------------------------------------------------------- */
  const splashOverlay = document.getElementById('royalSplashScreen');
  let splashDismissed = false;

  function dismissSplashScreen() {
    if (splashDismissed || !splashOverlay) return;
    splashDismissed = true;
    // Ensure BGM plays smoothly
    startBgm();
    splashOverlay.classList.add('fade-out');
    setTimeout(() => {
      splashOverlay.style.display = 'none';
    }, 700);
  }

  if (splashOverlay) {
    const handleSplashTouch = () => {
      startBgm();
      dismissSplashScreen();
    };

    splashOverlay.addEventListener('click', handleSplashTouch);
    splashOverlay.addEventListener('touchstart', handleSplashTouch, { passive: true });
    splashOverlay.addEventListener('touchend', handleSplashTouch, { passive: true });
    splashOverlay.addEventListener('pointerdown', handleSplashTouch, { passive: true });
    splashOverlay.addEventListener('pointerup', handleSplashTouch, { passive: true });

    // Try starting music immediately as soon as splash screen is shown
    startBgm();

    // Automatically transition to website after 3 seconds if not dismissed
    setTimeout(() => {
      startBgm();
      dismissSplashScreen();
    }, 3000);
  }

  /* --------------------------------------------------------------------------
     11. INITIALIZE CURRENT LANGUAGE ON PAGE LOAD
     -------------------------------------------------------------------------- */
  applyLanguage(currentLang);

})();

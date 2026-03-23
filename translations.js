// Multi-language translations
const translations = {
    en: {
        appTitle: "Baby Vaccination Tracker",
        appSubtitle: "Track your baby's vaccination schedule with ease",
        setupProfile: "Setup Baby Profile",
        babyName: "Baby's Name",
        enterBabyName: "Enter baby's name",
        dateOfBirth: "Date of Birth",
        vaccinePreference: "Vaccine Type Preference",
        pentaxim: "Pentaxim (Less pain, fewer injections)",
        pentavalent: "Pentavalent (More affordable)",
        saveProfile: "Save Profile",
        editProfile: "Edit Profile",
        dob: "DOB",
        preference: "Preference",
        exportCalendar: "Export to Calendar (ICS)",
        exportData: "Export Data (JSON)",
        importData: "Import Data",
        clearData: "Clear All Data",
        addCustomVaccine: "Add Custom Vaccine",
        vaccinationSchedule: "Vaccination Schedule",
        timelineView: "Timeline View",
        listView: "List View",
        all: "All",
        pending: "Pending",
        completed: "Completed",
        upcoming: "Upcoming (7 days)",
        mandatory: "Mandatory",
        optional: "Optional",
        dueSoon: "Due Soon!",
        vaccines: "Vaccines",
        completed_date: "Completed",
        addNotes: "Add notes (e.g., doctor name, reactions, next appointment)...",
        tip: "Tip: Vaccines can be taken ±5–7 days safely. Always consult your pediatrician.",
        vaccineDetails: "Vaccine Details",
        purpose: "Purpose",
        language: "Language",
        customVaccineTitle: "Add Custom Vaccine",
        vaccineName: "Vaccine Name",
        vaccineAge: "Age/Time",
        vaccineDescription: "Description/Purpose",
        addVaccine: "Add Vaccine",
        cancel: "Cancel",
        deleteVaccine: "Delete",
        viewDetails: "View Details"
    },
    hi: {
        appTitle: "शिशु टीकाकरण ट्रैकर",
        appSubtitle: "अपने बच्चे के टीकाकरण कार्यक्रम को आसानी से ट्रैक करें",
        setupProfile: "बच्चे की प्रोफ़ाइल सेटअप करें",
        babyName: "बच्चे का नाम",
        enterBabyName: "बच्चे का नाम दर्ज करें",
        dateOfBirth: "जन्म तिथि",
        vaccinePreference: "टीका प्रकार वरीयता",
        pentaxim: "पेंटाक्सिम (कम दर्द, कम इंजेक्शन)",
        pentavalent: "पेंटावैलेंट (अधिक किफायती)",
        saveProfile: "प्रोफ़ाइल सहेजें",
        editProfile: "प्रोफ़ाइल संपादित करें",
        dob: "जन्म तिथि",
        preference: "वरीयता",
        exportCalendar: "कैलेंडर में निर्यात करें (ICS)",
        exportData: "डेटा निर्यात करें (JSON)",
        importData: "डेटा आयात करें",
        clearData: "सभी डेटा साफ़ करें",
        addCustomVaccine: "कस्टम टीका जोड़ें",
        vaccinationSchedule: "टीकाकरण कार्यक्रम",
        timelineView: "समयरेखा दृश्य",
        listView: "सूची दृश्य",
        all: "सभी",
        pending: "लंबित",
        completed: "पूर्ण",
        upcoming: "आगामी (7 दिन)",
        mandatory: "अनिवार्य",
        optional: "वैकल्पिक",
        dueSoon: "जल्द आने वाला!",
        vaccines: "टीके",
        completed_date: "पूर्ण",
        addNotes: "नोट्स जोड़ें (जैसे डॉक्टर का नाम, प्रतिक्रियाएं, अगली नियुक्ति)...",
        tip: "सुझाव: टीके ±5-7 दिनों में सुरक्षित रूप से लगाए जा सकते हैं। हमेशा अपने बाल रोग विशेषज्ञ से परामर्श करें।",
        vaccineDetails: "टीका विवरण",
        purpose: "उद्देश्य",
        language: "भाषा",
        customVaccineTitle: "कस्टम टीका जोड़ें",
        vaccineName: "टीका का नाम",
        vaccineAge: "उम्र/समय",
        vaccineDescription: "विवरण/उद्देश्य",
        addVaccine: "टीका जोड़ें",
        cancel: "रद्द करें",
        deleteVaccine: "हटाएं",
        viewDetails: "विवरण देखें"
    },
    mr: {
        appTitle: "बाळ लसीकरण ट्रॅकर",
        appSubtitle: "तुमच्या बाळाचे लसीकरण वेळापत्रक सहजपणे ट्रॅक करा",
        setupProfile: "बाळाची प्रोफाइल सेटअप करा",
        babyName: "बाळाचे नाव",
        enterBabyName: "बाळाचे नाव प्रविष्ट करा",
        dateOfBirth: "जन्मतारीख",
        vaccinePreference: "लस प्रकार प्राधान्य",
        pentaxim: "पेंटाक्सिम (कमी वेदना, कमी इंजेक्शन)",
        pentavalent: "पेंटाव्हॅलेंट (अधिक परवडणारे)",
        saveProfile: "प्रोफाइल जतन करा",
        editProfile: "प्रोफाइल संपादित करा",
        dob: "जन्मतारीख",
        preference: "प्राधान्य",
        exportCalendar: "कॅलेंडरमध्ये निर्यात करा (ICS)",
        exportData: "डेटा निर्यात करा (JSON)",
        importData: "डेटा आयात करा",
        clearData: "सर्व डेटा साफ करा",
        addCustomVaccine: "सानुकूल लस जोडा",
        vaccinationSchedule: "लसीकरण वेळापत्रक",
        timelineView: "टाइमलाइन दृश्य",
        listView: "यादी दृश्य",
        all: "सर्व",
        pending: "प्रलंबित",
        completed: "पूर्ण",
        upcoming: "आगामी (7 दिवस)",
        mandatory: "अनिवार्य",
        optional: "ऐच्छिक",
        dueSoon: "लवकरच येणार!",
        vaccines: "लसी",
        completed_date: "पूर्ण",
        addNotes: "नोट्स जोडा (उदा. डॉक्टरचे नाव, प्रतिक्रिया, पुढील भेट)...",
        tip: "टीप: लसी ±5-7 दिवसांत सुरक्षितपणे घेतल्या जाऊ शकतात. नेहमी तुमच्या बालरोगतज्ञाचा सल्ला घ्या.",
        vaccineDetails: "लस तपशील",
        purpose: "उद्देश",
        language: "भाषा",
        customVaccineTitle: "सानुकूल लस जोडा",
        vaccineName: "लसीचे नाव",
        vaccineAge: "वय/वेळ",
        vaccineDescription: "वर्णन/उद्देश",
        addVaccine: "लस जोडा",
        cancel: "रद्द करा",
        deleteVaccine: "हटवा",
        viewDetails: "तपशील पहा"
    }
};

// Vaccine details with purposes
const vaccineInfo = {
    en: {
        "BCG": {
            name: "BCG (Bacillus Calmette-Guérin)",
            purpose: "Protects against tuberculosis (TB), a serious lung infection"
        },
        "OPV": {
            name: "OPV (Oral Polio Vaccine)",
            purpose: "Protects against polio, which can cause paralysis"
        },
        "IPV": {
            name: "IPV (Inactivated Polio Vaccine)",
            purpose: "Injectable polio vaccine, safer alternative to OPV"
        },
        "Hepatitis B": {
            name: "Hepatitis B Vaccine",
            purpose: "Protects against Hepatitis B virus that affects the liver"
        },
        "DTWP": {
            name: "DTWP (Diphtheria, Tetanus, Whole-cell Pertussis)",
            purpose: "Protects against diphtheria, tetanus, and whooping cough (may cause fever)"
        },
        "DTap": {
            name: "DTaP (Diphtheria, Tetanus, acellular Pertussis)",
            purpose: "Protects against diphtheria, tetanus, and whooping cough (painless version)"
        },
        "Hib": {
            name: "Hib (Haemophilus influenzae type b)",
            purpose: "Protects against bacterial infections causing meningitis and pneumonia"
        },
        "Pentaxim": {
            name: "Pentaxim (5-in-1 Vaccine)",
            purpose: "Combination vaccine: DTaP + IPV + Hib. Painless with fewer injections"
        },
        "Pentavalent": {
            name: "Pentavalent (5-in-1 Vaccine)",
            purpose: "Combination vaccine: DTWP + Hep B + Hib. More affordable option"
        },
        "Rotavirus": {
            name: "Rotavirus Vaccine (Rotarix/Rotateq)",
            purpose: "Protects against rotavirus causing severe diarrhea and dehydration"
        },
        "PCV": {
            name: "PCV (Pneumococcal Conjugate Vaccine/Prevnar)",
            purpose: "Protects against pneumococcal bacteria causing pneumonia, meningitis, and ear infections"
        },
        "MMR": {
            name: "MMR (Measles, Mumps, Rubella)",
            purpose: "Protects against measles, mumps, and rubella (German measles)"
        },
        "Typhoid": {
            name: "Typhoid Conjugate Vaccine",
            purpose: "Protects against typhoid fever, a serious bacterial infection"
        },
        "Hepatitis A": {
            name: "Hepatitis A Vaccine",
            purpose: "Protects against Hepatitis A virus affecting the liver"
        },
        "Varicella": {
            name: "Varicella (Chickenpox Vaccine)",
            purpose: "Protects against chickenpox, a highly contagious viral infection"
        },
        "HPV": {
            name: "HPV (Human Papillomavirus Vaccine)",
            purpose: "Protects against HPV that can cause cervical and other cancers"
        },
        "Tdap": {
            name: "Tdap (Tetanus, Diphtheria, Pertussis Booster)",
            purpose: "Booster dose for continued protection against tetanus, diphtheria, and pertussis"
        },
        "MR": {
            name: "MR (Measles-Rubella Booster)",
            purpose: "Booster dose for continued protection against measles and rubella"
        }
    },
    hi: {
        "BCG": {
            name: "बीसीजी (बैसिलस कैलमेट-गुएरिन)",
            purpose: "तपेदिक (टीबी) से बचाता है, जो एक गंभीर फेफड़ों का संक्रमण है"
        },
        "OPV": {
            name: "ओपीवी (मौखिक पोलियो टीका)",
            purpose: "पोलियो से बचाता है, जो पक्षाघात का कारण बन सकता है"
        },
        "IPV": {
            name: "आईपीवी (निष्क्रिय पोलियो टीका)",
            purpose: "इंजेक्शन पोलियो टीका, ओपीवी का सुरक्षित विकल्प"
        },
        "Hepatitis B": {
            name: "हेपेटाइटिस बी टीका",
            purpose: "हेपेटाइटिस बी वायरस से बचाता है जो यकृत को प्रभावित करता है"
        },
        "DTWP": {
            name: "डीटीडब्ल्यूपी (डिप्थीरिया, टेटनस, पूर्ण-कोशिका पर्टुसिस)",
            purpose: "डिप्थीरिया, टेटनस और काली खांसी से बचाता है (बुखार हो सकता है)"
        },
        "DTap": {
            name: "डीटीएपी (डिप्थीरिया, टेटनस, एसेलुलर पर्टुसिस)",
            purpose: "डिप्थीरिया, टेटनस और काली खांसी से बचाता है (दर्द रहित संस्करण)"
        },
        "Hib": {
            name: "हिब (हीमोफिलस इन्फ्लुएंजा टाइप बी)",
            purpose: "मेनिनजाइटिस और निमोनिया पैदा करने वाले बैक्टीरिया संक्रमण से बचाता है"
        },
        "Pentaxim": {
            name: "पेंटाक्सिम (5-इन-1 टीका)",
            purpose: "संयोजन टीका: डीटीएपी + आईपीवी + हिब। कम इंजेक्शन के साथ दर्द रहित"
        },
        "Pentavalent": {
            name: "पेंटावैलेंट (5-इन-1 टीका)",
            purpose: "संयोजन टीका: डीटीडब्ल्यूपी + हेप बी + हिब। अधिक किफायती विकल्प"
        },
        "Rotavirus": {
            name: "रोटावायरस टीका (रोटारिक्स/रोटाटेक)",
            purpose: "गंभीर दस्त और निर्जलीकरण पैदा करने वाले रोटावायरस से बचाता है"
        },
        "PCV": {
            name: "पीसीवी (न्यूमोकोकल कंजुगेट वैक्सीन/प्रीवनार)",
            purpose: "निमोनिया, मेनिनजाइटिस और कान के संक्रमण पैदा करने वाले न्यूमोकोकल बैक्टीरिया से बचाता है"
        },
        "MMR": {
            name: "एमएमआर (खसरा, कण्ठमाला, रूबेला)",
            purpose: "खसरा, कण्ठमाला और रूबेला (जर्मन खसरा) से बचाता है"
        },
        "Typhoid": {
            name: "टाइफाइड कंजुगेट वैक्सीन",
            purpose: "टाइफाइड बुखार से बचाता है, जो एक गंभीर बैक्टीरियल संक्रमण है"
        },
        "Hepatitis A": {
            name: "हेपेटाइटिस ए टीका",
            purpose: "यकृत को प्रभावित करने वाले हेपेटाइटिस ए वायरस से बचाता है"
        },
        "Varicella": {
            name: "वैरिसेला (चिकनपॉक्स टीका)",
            purpose: "चिकनपॉक्स से बचाता है, जो एक अत्यधिक संक्रामक वायरल संक्रमण है"
        },
        "HPV": {
            name: "एचपीवी (ह्यूमन पैपिलोमावायरस टीका)",
            purpose: "एचपीवी से बचाता है जो गर्भाशय ग्रीवा और अन्य कैंसर का कारण बन सकता है"
        },
        "Tdap": {
            name: "टीडैप (टेटनस, डिप्थीरिया, पर्टुसिस बूस्टर)",
            purpose: "टेटनस, डिप्थीरिया और पर्टुसिस के खिलाफ निरंतर सुरक्षा के लिए बूस्टर खुराक"
        },
        "MR": {
            name: "एमआर (खसरा-रूबेला बूस्टर)",
            purpose: "खसरा और रूबेला के खिलाफ निरंतर सुरक्षा के लिए बूस्टर खुराक"
        }
    },
    mr: {
        "BCG": {
            name: "बीसीजी (बॅसिलस कॅल्मेट-ग्वेरिन)",
            purpose: "क्षयरोग (टीबी) पासून संरक्षण देते, जो एक गंभीर फुफ्फुसाचा संसर्ग आहे"
        },
        "OPV": {
            name: "ओपीव्ही (तोंडी पोलिओ लस)",
            purpose: "पोलिओपासून संरक्षण देते, जे अर्धांगवायू होऊ शकते"
        },
        "IPV": {
            name: "आयपीव्ही (निष्क्रिय पोलिओ लस)",
            purpose: "इंजेक्शन पोलिओ लस, ओपीव्हीचा सुरक्षित पर्याय"
        },
        "Hepatitis B": {
            name: "हिपॅटायटिस बी लस",
            purpose: "यकृतावर परिणाम करणाऱ्या हिपॅटायटिस बी विषाणूपासून संरक्षण देते"
        },
        "DTWP": {
            name: "डीटीडब्ल्यूपी (डिप्थीरिया, टिटॅनस, संपूर्ण-पेशी पर्ट्युसिस)",
            purpose: "डिप्थीरिया, टिटॅनस आणि डांग्या खोकल्यापासून संरक्षण देते (ताप येऊ शकतो)"
        },
        "DTap": {
            name: "डीटीएपी (डिप्थीरिया, टिटॅनस, एसेल्युलर पर्ट्युसिस)",
            purpose: "डिप्थीरिया, टिटॅनस आणि डांग्या खोकल्यापासून संरक्षण देते (वेदनारहित आवृत्ती)"
        },
        "Hib": {
            name: "हिब (हिमोफिलस इन्फ्लुएंझा प्रकार बी)",
            purpose: "मेंदुज्वर आणि न्यूमोनिया निर्माण करणाऱ्या जीवाणू संसर्गापासून संरक्षण देते"
        },
        "Pentaxim": {
            name: "पेंटाक्सिम (5-इन-1 लस)",
            purpose: "संयोजन लस: डीटीएपी + आयपीव्ही + हिब। कमी इंजेक्शनसह वेदनारहित"
        },
        "Pentavalent": {
            name: "पेंटाव्हॅलेंट (5-इन-1 लस)",
            purpose: "संयोजन लस: डीटीडब्ल्यूपी + हेप बी + हिब। अधिक परवडणारा पर्याय"
        },
        "Rotavirus": {
            name: "रोटाव्हायरस लस (रोटारिक्स/रोटाटेक)",
            purpose: "गंभीर अतिसार आणि निर्जलीकरण निर्माण करणाऱ्या रोटाव्हायरसपासून संरक्षण देते"
        },
        "PCV": {
            name: "पीसीव्ही (न्यूमोकोकल कॉन्जुगेट व्हॅक्सीन/प्रीव्हनार)",
            purpose: "न्यूमोनिया, मेंदुज्वर आणि कानाचे संसर्ग निर्माण करणाऱ्या न्यूमोकोकल जीवाणूंपासून संरक्षण देते"
        },
        "MMR": {
            name: "एमएमआर (गोवर, गालगुंड, रुबेला)",
            purpose: "गोवर, गालगुंड आणि रुबेला (जर्मन गोवर) पासून संरक्षण देते"
        },
        "Typhoid": {
            name: "टायफॉइड कॉन्जुगेट व्हॅक्सीन",
            purpose: "टायफॉइड तापापासून संरक्षण देते, जो एक गंभीर जीवाणू संसर्ग आहे"
        },
        "Hepatitis A": {
            name: "हिपॅटायटिस ए लस",
            purpose: "यकृतावर परिणाम करणाऱ्या हिपॅटायटिस ए विषाणूपासून संरक्षण देते"
        },
        "Varicella": {
            name: "व्हॅरिसेला (कांजिण्या लस)",
            purpose: "कांजिण्यांपासून संरक्षण देते, जो एक अत्यंत संसर्गजन्य विषाणूजन्य संसर्ग आहे"
        },
        "HPV": {
            name: "एचपीव्ही (ह्यूमन पॅपिलोमाव्हायरस लस)",
            purpose: "एचपीव्हीपासून संरक्षण देते जो गर्भाशयाच्या मुखाचा आणि इतर कर्करोग होऊ शकतो"
        },
        "Tdap": {
            name: "टीडॅप (टिटॅनस, डिप्थीरिया, पर्ट्युसिस बूस्टर)",
            purpose: "टिटॅनस, डिप्थीरिया आणि पर्ट्युसिसविरुद्ध सतत संरक्षणासाठी बूस्टर डोस"
        },
        "MR": {
            name: "एमआर (गोवर-रुबेला बूस्टर)",
            purpose: "गोवर आणि रुबेलाविरुद्ध सतत संरक्षणासाठी बूस्टर डोस"
        }
    }
};

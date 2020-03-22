// Script for getting BibleGateway bible list

/*
let langKey;
let bibles = {};

$(".search-translation-select").find("option:not(.spacer)").each((i, opt) => {
    opt = $(opt);
    let text = opt.text();

    if (opt.is(".lang")) {
        let lang = text.substring(1, text.length - 1);
        langKey = `[BibleGatewayLanguageKey.${lang.match(/.*\((.*)\)/)[1]}]`;
        bibles[langKey] = {
            language: {
                key: langKey,
                name: lang.match(/[^( ]+/)[0],
            },
            bibles: [],
        };
    } else {
        bibles[langKey].bibles.push({
            key: opt.val(),
            name: text,
        });
    }
});

console.log(bibles);
console.log(Object.keys(bibles).map((bible) => `${bible} = "${bible}"`).join(', '));

// "(.*)": => $1:
// "\[(.*)\]", => $1,
// "\[BibleGatewayLanguageKey.([^,]*)\]"([,\n]) => $1"$2
// \[BibleGatewayLanguageKey.([^,]*)\] = => $1 =
*/

export enum BibleGatewayLanguageKey {
    AMU = "AMU", AR = "AR", AWA = "AWA", BG = "BG", CCO = "CCO", CEB = "CEB", CHR = "CHR", CKB = "CKB", CKW = "CKW", CS = "CS", CY = "CY", DA = "DA", DE = "DE", EN = "EN", ES = "ES", FI = "FI", FR = "FR", GRC = "GRC", HE = "HE", HI = "HI", HIL = "HIL", HNE = "HNE", HR = "HR", HT = "HT", HU = "HU", HWC = "HWC", IS = "IS", IT = "IT", JA = "JA", JAC = "JAC", KEK = "KEK", KO = "KO", LA = "LA", LG = "LG", MI = "MI", MK = "MK", MR = "MR", MVC = "MVC", MVJ = "MVJ", NDS = "NDS", NE = "NE", NGU = "NGU", NL = "NL", NO = "NO", NY = "NY", OR = "OR", PA = "PA", PL = "PL", PPL = "PPL", PT = "PT", QU = "QU", QUT = "QUT", RO = "RO", RU = "RU", SK = "SK", SO = "SO", SQ = "SQ", SR = "SR", SV = "SV", SW = "SW", TA = "TA", TH = "TH", TL = "TL", TWI = "TWI", UK = "UK", UR = "UR", USP = "USP", VI = "VI", YO = "YO", ZH = "ZH"
}

export interface BibleGatewayLanguage {
    key: BibleGatewayLanguageKey;
    name: string;
}

export interface BibleGatewayTranslation {
    key: string;
    name: string;
}

export interface BibleGatewayLanguageTranslationGroup {
    language: BibleGatewayLanguage;
    bibles: BibleGatewayTranslation[];
}

export type BibleGatewayTranslationLanguageMap = { [key in BibleGatewayLanguageKey]: BibleGatewayLanguageTranslationGroup};

export const BG_BIBLES: BibleGatewayTranslationLanguageMap = {
    [BibleGatewayLanguageKey.AMU]: {
        language: {
            key: BibleGatewayLanguageKey.AMU,
            name: "Amuzgo"
        },
        bibles: [
            {
                key: "AMU",
                name: "Amuzgo de Guerrero (AMU)"
            }
        ]
    },
    [BibleGatewayLanguageKey.AR]: {
        language: {
            key: BibleGatewayLanguageKey.AR,
            name: "العربية"
        },
        bibles: [
            {
                key: "ERV-AR",
                name: "Arabic Bible: Easy-to-Read Version (ERV-AR)"
            },
            {
                key: "NAV",
                name: "Ketab El Hayat (NAV)"
            }
        ]
    },
    [BibleGatewayLanguageKey.AWA]: {
        language: {
            key: BibleGatewayLanguageKey.AWA,
            name: "अवधी"
        },
        bibles: [
            {
                key: "ERV-AWA",
                name: "Awadhi Bible: Easy-to-Read Version (ERV-AWA)"
            }
        ]
    },
    [BibleGatewayLanguageKey.BG]: {
        language: {
            key: BibleGatewayLanguageKey.BG,
            name: "Български"
        },
        bibles: [
            {
                key: "BG1940",
                name: "1940 Bulgarian Bible (BG1940)"
            },
            {
                key: "BULG",
                name: "Bulgarian Bible (BULG)"
            },
            {
                key: "ERV-BG",
                name: "Bulgarian New Testament: Easy-to-Read Version (ERV-BG)"
            },
            {
                key: "CBT",
                name: "Библия, нов превод от оригиналните езици (с неканоничните книги) (CBT)"
            },
            {
                key: "BOB",
                name: "Библия, синодално издание (BOB)"
            },
            {
                key: "BPB",
                name: "Библия, ревизирано издание (BPB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CCO]: {
        language: {
            key: BibleGatewayLanguageKey.CCO,
            name: "Chinanteco"
        },
        bibles: [
            {
                key: "CCO",
                name: "Chinanteco de Comaltepec (CCO)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CEB]: {
        language: {
            key: BibleGatewayLanguageKey.CEB,
            name: "Cebuano"
        },
        bibles: [
            {
                key: "APSD-CEB",
                name: "Ang Pulong Sa Dios (APSD-CEB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CHR]: {
        language: {
            key: BibleGatewayLanguageKey.CHR,
            name: "ᏣᎳᎩ"
        },
        bibles: [
            {
                key: "CHR",
                name: "Cherokee New Testament (CHR)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CKB]: {
        language: {
            key: BibleGatewayLanguageKey.CKB,
            name: "كوردی"
        },
        bibles: [
            {
                key: "KSS",
                name: "Kurdi Sorani Standard (KSS)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CKW]: {
        language: {
            key: BibleGatewayLanguageKey.CKW,
            name: "Cakchiquel"
        },
        bibles: [
            {
                key: "CKW",
                name: "Cakchiquel Occidental (CKW)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CS]: {
        language: {
            key: BibleGatewayLanguageKey.CS,
            name: "Čeština"
        },
        bibles: [
            {
                key: "B21",
                name: "Bible 21 (B21)"
            },
            {
                key: "SNC",
                name: "Slovo na cestu (SNC)"
            }
        ]
    },
    [BibleGatewayLanguageKey.CY]: {
        language: {
            key: BibleGatewayLanguageKey.CY,
            name: "Cymraeg"
        },
        bibles: [
            {
                key: "BWM",
                name: "Beibl William Morgan (BWM)"
            }
        ]
    },
    [BibleGatewayLanguageKey.DA]: {
        language: {
            key: BibleGatewayLanguageKey.DA,
            name: "Dansk"
        },
        bibles: [
            {
                key: "BPH",
                name: "Bibelen på hverdagsdansk (BPH)"
            },
            {
                key: "DN1933",
                name: "Dette er Biblen på dansk (DN1933)"
            }
        ]
    },
    [BibleGatewayLanguageKey.DE]: {
        language: {
            key: BibleGatewayLanguageKey.DE,
            name: "Deutsch"
        },
        bibles: [
            {
                key: "HOF",
                name: "Hoffnung für Alle (HOF)"
            },
            {
                key: "LUTH1545",
                name: "Luther Bibel 1545 (LUTH1545)"
            },
            {
                key: "NGU-DE",
                name: "Neue Genfer Übersetzung (NGU-DE)"
            },
            {
                key: "SCH1951",
                name: "Schlachter 1951 (SCH1951)"
            },
            {
                key: "SCH2000",
                name: "Schlachter 2000 (SCH2000)"
            }
        ]
    },
    [BibleGatewayLanguageKey.EN]: {
        language: {
            key: BibleGatewayLanguageKey.EN,
            name: "English"
        },
        bibles: [
            {
                key: "KJ21",
                name: "21st Century King James Version (KJ21)"
            },
            {
                key: "ASV",
                name: "American Standard Version (ASV)"
            },
            {
                key: "AMP",
                name: "Amplified Bible (AMP)"
            },
            {
                key: "AMPC",
                name: "Amplified Bible, Classic Edition (AMPC)"
            },
            {
                key: "BRG",
                name: "BRG Bible (BRG)"
            },
            {
                key: "CSB",
                name: "Christian Standard Bible (CSB)"
            },
            {
                key: "CEB",
                name: "Common English Bible (CEB)"
            },
            {
                key: "CJB",
                name: "Complete Jewish Bible (CJB)"
            },
            {
                key: "CEV",
                name: "Contemporary English Version (CEV)"
            },
            {
                key: "DARBY",
                name: "Darby Translation (DARBY)"
            },
            {
                key: "DLNT",
                name: "Disciples’ Literal New Testament (DLNT)"
            },
            {
                key: "DRA",
                name: "Douay-Rheims 1899 American Edition (DRA)"
            },
            {
                key: "ERV",
                name: "Easy-to-Read Version (ERV)"
            },
            {
                key: "EHV",
                name: "Evangelical Heritage Version (EHV)"
            },
            {
                key: "ESV",
                name: "English Standard Version (ESV)"
            },
            {
                key: "ESVUK",
                name: "English Standard Version Anglicised (ESVUK)"
            },
            {
                key: "EXB",
                name: "Expanded Bible (EXB)"
            },
            {
                key: "GNV",
                name: "1599 Geneva Bible (GNV)"
            },
            {
                key: "GW",
                name: "GOD’S WORD Translation (GW)"
            },
            {
                key: "GNT",
                name: "Good News Translation (GNT)"
            },
            {
                key: "HCSB",
                name: "Holman Christian Standard Bible (HCSB)"
            },
            {
                key: "ICB",
                name: "International Children’s Bible (ICB)"
            },
            {
                key: "ISV",
                name: "International Standard Version (ISV)"
            },
            {
                key: "PHILLIPS",
                name: "J.B. Phillips New Testament (PHILLIPS)"
            },
            {
                key: "KJV",
                name: "King James Version (KJV)"
            },
            {
                key: "AKJV",
                name: "Authorized (King James) Version (AKJV)"
            },
            {
                key: "LEB",
                name: "Lexham English Bible (LEB)"
            },
            {
                key: "TLB",
                name: "Living Bible (TLB)"
            },
            {
                key: "MSG",
                name: "The Message (MSG)"
            },
            {
                key: "MEV",
                name: "Modern English Version (MEV)"
            },
            {
                key: "MOUNCE",
                name: "Mounce Reverse-Interlinear New Testament (MOUNCE)"
            },
            {
                key: "NOG",
                name: "Names of God Bible (NOG)"
            },
            {
                key: "NABRE",
                name: "New American Bible (Revised Edition) (NABRE)"
            },
            {
                key: "NASB",
                name: "New American Standard Bible (NASB)"
            },
            {
                key: "NCV",
                name: "New Century Version (NCV)"
            },
            {
                key: "NET",
                name: "New English Translation (NET Bible)"
            },
            {
                key: "NIRV",
                name: "New International Reader's Version (NIRV)"
            },
            {
                key: "NIV",
                name: "New International Version (NIV)"
            },
            {
                key: "NIVUK",
                name: "New International Version - UK (NIVUK)"
            },
            {
                key: "NKJV",
                name: "New King James Version (NKJV)"
            },
            {
                key: "NLV",
                name: "New Life Version (NLV)"
            },
            {
                key: "NLT",
                name: "New Living Translation (NLT)"
            },
            {
                key: "NMB",
                name: "New Matthew Bible (NMB)"
            },
            {
                key: "NRSV",
                name: "New Revised Standard Version (NRSV)"
            },
            {
                key: "NRSVA",
                name: "New Revised Standard Version, Anglicised (NRSVA)"
            },
            {
                key: "NRSVACE",
                name: "New Revised Standard Version, Anglicised Catholic Edition (NRSVACE)"
            },
            {
                key: "NRSVCE",
                name: "New Revised Standard Version Catholic Edition (NRSVCE)"
            },
            {
                key: "NTE",
                name: "New Testament for Everyone (NTE)"
            },
            {
                key: "OJB",
                name: "Orthodox Jewish Bible (OJB)"
            },
            {
                key: "TPT",
                name: "The Passion Translation (TPT)"
            },
            {
                key: "RGT",
                name: "Revised Geneva Translation (RGT)"
            },
            {
                key: "RSV",
                name: "Revised Standard Version (RSV)"
            },
            {
                key: "RSVCE",
                name: "Revised Standard Version Catholic Edition (RSVCE)"
            },
            {
                key: "TLV",
                name: "Tree of Life Version (TLV)"
            },
            {
                key: "VOICE",
                name: "The Voice (VOICE)"
            },
            {
                key: "WEB",
                name: "World English Bible (WEB)"
            },
            {
                key: "WE",
                name: "Worldwide English (New Testament) (WE)"
            },
            {
                key: "WYC",
                name: "Wycliffe Bible (WYC)"
            },
            {
                key: "YLT",
                name: "Young's Literal Translation (YLT)"
            }
        ]
    },
    [BibleGatewayLanguageKey.ES]: {
        language: {
            key: BibleGatewayLanguageKey.ES,
            name: "Español"
        },
        bibles: [
            {
                key: "LBLA",
                name: "La Biblia de las Américas (LBLA)"
            },
            {
                key: "DHH",
                name: "Dios Habla Hoy (DHH)"
            },
            {
                key: "NBLA",
                name: "Nueva Biblia de las Américas (NBLA)"
            },
            {
                key: "NBV",
                name: "Nueva Biblia Viva (NBV)"
            },
            {
                key: "NTV",
                name: "Nueva Traducción Viviente (NTV)"
            },
            {
                key: "NVI",
                name: "Nueva Versión Internacional (NVI)"
            },
            {
                key: "CST",
                name: "Nueva Versión Internacional (Castilian) (CST)"
            },
            {
                key: "PDT",
                name: "Palabra de Dios para Todos (PDT)"
            },
            {
                key: "BLP",
                name: "La Palabra (España) (BLP)"
            },
            {
                key: "BLPH",
                name: "La Palabra (Hispanoamérica) (BLPH)"
            },
            {
                key: "RVA-2015",
                name: "Reina Valera Actualizada (RVA-2015)"
            },
            {
                key: "RVC",
                name: "Reina Valera Contemporánea (RVC)"
            },
            {
                key: "RVR1960",
                name: "Reina-Valera 1960 (RVR1960)"
            },
            {
                key: "RVR1977",
                name: "Reina Valera Revisada (RVR1977)"
            },
            {
                key: "RVR1995",
                name: "Reina-Valera 1995 (RVR1995)"
            },
            {
                key: "RVA",
                name: "Reina-Valera Antigua (RVA)"
            },
            {
                key: "SRV-BRG",
                name: "Spanish Blue Red and Gold Letter Edition (SRV-BRG)"
            },
            {
                key: "TLA",
                name: "Traducción en lenguaje actual (TLA)"
            }
        ]
    },
    [BibleGatewayLanguageKey.FI]: {
        language: {
            key: BibleGatewayLanguageKey.FI,
            name: "Suomi"
        },
        bibles: [
            {
                key: "R1933",
                name: "Raamattu 1933/38 (R1933)"
            }
        ]
    },
    [BibleGatewayLanguageKey.FR]: {
        language: {
            key: BibleGatewayLanguageKey.FR,
            name: "Français"
        },
        bibles: [
            {
                key: "BDS",
                name: "La Bible du Semeur (BDS)"
            },
            {
                key: "LSG",
                name: "Louis Segond (LSG)"
            },
            {
                key: "NEG1979",
                name: "Nouvelle Edition de Genève – NEG1979 (NEG1979)"
            },
            {
                key: "SG21",
                name: "Segond 21 (SG21)"
            }
        ]
    },
    [BibleGatewayLanguageKey.GRC]: {
        language: {
            key: BibleGatewayLanguageKey.GRC,
            name: "Κοινη"
        },
        bibles: [
            {
                key: "TR1550",
                name: "1550 Stephanus New Testament (TR1550)"
            },
            {
                key: "WHNU",
                name: "1881 Westcott-Hort New Testament (WHNU)"
            },
            {
                key: "TR1894",
                name: "1894 Scrivener New Testament (TR1894)"
            },
            {
                key: "SBLGNT",
                name: "SBL Greek New Testament (SBLGNT)"
            },
            {
                key: "THGNT",
                name: "Tyndale House Greek New Testament (THGNT)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HE]: {
        language: {
            key: BibleGatewayLanguageKey.HE,
            name: "עברית"
        },
        bibles: [
            {
                key: "HHH",
                name: "Habrit Hakhadasha/Haderekh (HHH)"
            },
            {
                key: "WLC",
                name: "The Westminster Leningrad Codex (WLC)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HI]: {
        language: {
            key: BibleGatewayLanguageKey.HI,
            name: "हिन्दी"
        },
        bibles: [
            {
                key: "ERV-HI",
                name: "Hindi Bible: Easy-to-Read Version (ERV-HI)"
            },
            {
                key: "SHB",
                name: "Saral Hindi Bible (SHB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HIL]: {
        language: {
            key: BibleGatewayLanguageKey.HIL,
            name: "Ilonggo"
        },
        bibles: [
            {
                key: "HLGN",
                name: "Ang Pulong Sang Dios (HLGN)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HNE]: {
        language: {
            key: BibleGatewayLanguageKey.HNE,
            name: "Chhattisgarhi"
        },
        bibles: [
            {
                key: "NCA",
                name: "New Chhattisgarhi Translation (नवां नियम छत्तीसगढ़ी) (NCA)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HR]: {
        language: {
            key: BibleGatewayLanguageKey.HR,
            name: "Hrvatski"
        },
        bibles: [
            {
                key: "HNZ-RI",
                name: "Hrvatski Novi Zavjet – Rijeka 2001 (HNZ-RI)"
            },
            {
                key: "CRO",
                name: "Knijga O Kristu (CRO)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HT]: {
        language: {
            key: BibleGatewayLanguageKey.HT,
            name: "Kreyòl"
        },
        bibles: [
            {
                key: "HCV",
                name: "Haitian Creole Version (HCV)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HU]: {
        language: {
            key: BibleGatewayLanguageKey.HU,
            name: "Magyar"
        },
        bibles: [
            {
                key: "KAR",
                name: "Hungarian Károli (KAR)"
            },
            {
                key: "ERV-HU",
                name: "Hungarian Bible: Easy-to-Read Version (ERV-HU)"
            },
            {
                key: "NT-HU",
                name: "Hungarian New Translation (NT-HU)"
            }
        ]
    },
    [BibleGatewayLanguageKey.HWC]: {
        language: {
            key: BibleGatewayLanguageKey.HWC,
            name: "Hawai‘i"
        },
        bibles: [
            {
                key: "HWP",
                name: "Hawai‘i Pidgin (HWP)"
            }
        ]
    },
    [BibleGatewayLanguageKey.IS]: {
        language: {
            key: BibleGatewayLanguageKey.IS,
            name: "Íslenska"
        },
        bibles: [
            {
                key: "ICELAND",
                name: "Icelandic Bible (ICELAND)"
            }
        ]
    },
    [BibleGatewayLanguageKey.IT]: {
        language: {
            key: BibleGatewayLanguageKey.IT,
            name: "Italiano"
        },
        bibles: [
            {
                key: "BDG",
                name: "La Bibbia della Gioia (BDG)"
            },
            {
                key: "CEI",
                name: "Conferenza Episcopale Italiana (CEI)"
            },
            {
                key: "LND",
                name: "La Nuova Diodati (LND)"
            },
            {
                key: "NR1994",
                name: "Nuova Riveduta 1994 (NR1994)"
            },
            {
                key: "NR2006",
                name: "Nuova Riveduta 2006 (NR2006)"
            }
        ]
    },
    [BibleGatewayLanguageKey.JA]: {
        language: {
            key: BibleGatewayLanguageKey.JA,
            name: "日本語"
        },
        bibles: [
            {
                key: "JLB",
                name: "Japanese Living Bible (JLB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.JAC]: {
        language: {
            key: BibleGatewayLanguageKey.JAC,
            name: "Jacalteco,"
        },
        bibles: [
            {
                key: "JAC",
                name: "Jacalteco, Oriental (JAC)"
            }
        ]
    },
    [BibleGatewayLanguageKey.KEK]: {
        language: {
            key: BibleGatewayLanguageKey.KEK,
            name: "Kekchi"
        },
        bibles: [
            {
                key: "KEK",
                name: "Kekchi (KEK)"
            }
        ]
    },
    [BibleGatewayLanguageKey.KO]: {
        language: {
            key: BibleGatewayLanguageKey.KO,
            name: "한국어"
        },
        bibles: [
            {
                key: "KLB",
                name: "Korean Living Bible (KLB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.LA]: {
        language: {
            key: BibleGatewayLanguageKey.LA,
            name: "Latina"
        },
        bibles: [
            {
                key: "VULGATE",
                name: "Biblia Sacra Vulgata (VULGATE)"
            }
        ]
    },
    [BibleGatewayLanguageKey.LG]: {
        language: {
            key: BibleGatewayLanguageKey.LG,
            name: "Luganda"
        },
        bibles: [
            {
                key: "LCB",
                name: "Endagaano Enkadde nʼEndagaano Empya (LCB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.MI]: {
        language: {
            key: BibleGatewayLanguageKey.MI,
            name: "Māori"
        },
        bibles: [
            {
                key: "MAORI",
                name: "Maori Bible (MAORI)"
            }
        ]
    },
    [BibleGatewayLanguageKey.MK]: {
        language: {
            key: BibleGatewayLanguageKey.MK,
            name: "Македонски"
        },
        bibles: [
            {
                key: "MNT",
                name: "Macedonian New Testament (MNT)"
            }
        ]
    },
    [BibleGatewayLanguageKey.MR]: {
        language: {
            key: BibleGatewayLanguageKey.MR,
            name: "मराठी"
        },
        bibles: [
            {
                key: "ERV-MR",
                name: "Marathi Bible: Easy-to-Read Version (ERV-MR)"
            }
        ]
    },
    [BibleGatewayLanguageKey.MVC]: {
        language: {
            key: BibleGatewayLanguageKey.MVC,
            name: "Mam,"
        },
        bibles: [
            {
                key: "MVC",
                name: "Mam, Central (MVC)"
            }
        ]
    },
    [BibleGatewayLanguageKey.MVJ]: {
        language: {
            key: BibleGatewayLanguageKey.MVJ,
            name: "Mam,"
        },
        bibles: [
            {
                key: "MVJ",
                name: "Mam de Todos Santos Chuchumatán (MVJ)"
            }
        ]
    },
    [BibleGatewayLanguageKey.NDS]: {
        language: {
            key: BibleGatewayLanguageKey.NDS,
            name: "Plautdietsch"
        },
        bibles: [
            {
                key: "REIMER",
                name: "Reimer 2001 (REIMER)"
            }
        ]
    },
    [BibleGatewayLanguageKey.NE]: {
        language: {
            key: BibleGatewayLanguageKey.NE,
            name: "नेपाली"
        },
        bibles: [
            {
                key: "ERV-NE",
                name: "Nepali Bible: Easy-to-Read Version (ERV-NE)"
            }
        ]
    },
    [BibleGatewayLanguageKey.NGU]: {
        language: {
            key: BibleGatewayLanguageKey.NGU,
            name: "Náhuatl"
        },
        bibles: [
            {
                key: "NGU",
                name: "Náhuatl de Guerrero (NGU)"
            }
        ]
    },
    [BibleGatewayLanguageKey.NL]: {
        language: {
            key: BibleGatewayLanguageKey.NL,
            name: "Nederlands"
        },
        bibles: [
            {
                key: "BB",
                name: "BasisBijbel (BB)"
            },
            {
                key: "HTB",
                name: "Het Boek (HTB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.NO]: {
        language: {
            key: BibleGatewayLanguageKey.NO,
            name: "Norsk"
        },
        bibles: [
            {
                key: "DNB1930",
                name: "Det Norsk Bibelselskap 1930 (DNB1930)"
            },
            {
                key: "LB",
                name: "En Levende Bok (LB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.NY]: {
        language: {
            key: BibleGatewayLanguageKey.NY,
            name: "Chichewa"
        },
        bibles: [
            {
                key: "CCL",
                name: "Mawu a Mulungu mu Chichewa Chalero (CCL)"
            }
        ]
    },
    [BibleGatewayLanguageKey.OR]: {
        language: {
            key: BibleGatewayLanguageKey.OR,
            name: "ଓଡ଼ିଆ"
        },
        bibles: [
            {
                key: "ERV-OR",
                name: "Oriya Bible: Easy-to-Read Version (ERV-OR)"
            }
        ]
    },
    [BibleGatewayLanguageKey.PA]: {
        language: {
            key: BibleGatewayLanguageKey.PA,
            name: "ਪੰਜਾਬੀ"
        },
        bibles: [
            {
                key: "ERV-PA",
                name: "Punjabi Bible: Easy-to-Read Version (ERV-PA)"
            }
        ]
    },
    [BibleGatewayLanguageKey.PL]: {
        language: {
            key: BibleGatewayLanguageKey.PL,
            name: "Polski"
        },
        bibles: [
            {
                key: "NP",
                name: "Nowe Przymierze (NP)"
            },
            {
                key: "SZ-PL",
                name: "Słowo Życia (SZ-PL)"
            },
            {
                key: "UBG",
                name: "Updated Gdańsk Bible (UBG)"
            }
        ]
    },
    [BibleGatewayLanguageKey.PPL]: {
        language: {
            key: BibleGatewayLanguageKey.PPL,
            name: "Nawat"
        },
        bibles: [
            {
                key: "NBTN",
                name: "Ne Bibliaj Tik Nawat (NBTN)"
            }
        ]
    },
    [BibleGatewayLanguageKey.PT]: {
        language: {
            key: BibleGatewayLanguageKey.PT,
            name: "Português"
        },
        bibles: [
            {
                key: "ARC",
                name: "Almeida Revista e Corrigida 2009 (ARC)"
            },
            {
                key: "NTLH",
                name: "Nova Traduҫão na Linguagem de Hoje 2000 (NTLH)"
            },
            {
                key: "NVT",
                name: "Nova Versão Transformadora (NVT)"
            },
            {
                key: "NVI-PT",
                name: "Nova Versão Internacional (NVI-PT)"
            },
            {
                key: "OL",
                name: "O Livro (OL)"
            },
            {
                key: "VFL",
                name: "Portuguese New Testament: Easy-to-Read Version (VFL)"
            }
        ]
    },
    [BibleGatewayLanguageKey.QU]: {
        language: {
            key: BibleGatewayLanguageKey.QU,
            name: "Quichua"
        },
        bibles: [
            {
                key: "MTDS",
                name: "Mushuj Testamento Diospaj Shimi (MTDS)"
            }
        ]
    },
    [BibleGatewayLanguageKey.QUT]: {
        language: {
            key: BibleGatewayLanguageKey.QUT,
            name: "Quiché,"
        },
        bibles: [
            {
                key: "QUT",
                name: "Quiché, Centro Occidental (QUT)"
            }
        ]
    },
    [BibleGatewayLanguageKey.RO]: {
        language: {
            key: BibleGatewayLanguageKey.RO,
            name: "Română"
        },
        bibles: [
            {
                key: "RMNN",
                name: "Cornilescu 1924 - Revised 2010, 2014 (RMNN)"
            },
            {
                key: "NTLR",
                name: "Nouă Traducere În Limba Română (NTLR)"
            }
        ]
    },
    [BibleGatewayLanguageKey.RU]: {
        language: {
            key: BibleGatewayLanguageKey.RU,
            name: "Русский"
        },
        bibles: [
            {
                key: "NRT",
                name: "New Russian Translation (NRT)"
            },
            {
                key: "CARS",
                name: "Священное Писание (Восточный Перевод) (CARS)"
            },
            {
                key: "CARST",
                name: "Священное Писание (Восточный перевод), версия для Таджикистана (CARST)"
            },
            {
                key: "CARSA",
                name: "Священное Писание (Восточный перевод), версия с «Аллахом» (CARSA)"
            },
            {
                key: "ERV-RU",
                name: "Russian New Testament: Easy-to-Read Version (ERV-RU)"
            },
            {
                key: "RUSV",
                name: "Russian Synodal Version (RUSV)"
            }
        ]
    },
    [BibleGatewayLanguageKey.SK]: {
        language: {
            key: BibleGatewayLanguageKey.SK,
            name: "Slovenčina"
        },
        bibles: [
            {
                key: "NPK",
                name: "Nádej pre kazdého (NPK)"
            }
        ]
    },
    [BibleGatewayLanguageKey.SO]: {
        language: {
            key: BibleGatewayLanguageKey.SO,
            name: "Somali"
        },
        bibles: [
            {
                key: "SOM",
                name: "Somali Bible (SOM)"
            }
        ]
    },
    [BibleGatewayLanguageKey.SQ]: {
        language: {
            key: BibleGatewayLanguageKey.SQ,
            name: "Shqip"
        },
        bibles: [
            {
                key: "ALB",
                name: "Albanian Bible (ALB)"
            }
        ]
    },
    [BibleGatewayLanguageKey.SR]: {
        language: {
            key: BibleGatewayLanguageKey.SR,
            name: "Српски"
        },
        bibles: [
            {
                key: "NSP",
                name: "New Serbian Translation (NSP)"
            },
            {
                key: "ERV-SR",
                name: "Serbian New Testament: Easy-to-Read Version (ERV-SR)"
            }
        ]
    },
    [BibleGatewayLanguageKey.SV]: {
        language: {
            key: BibleGatewayLanguageKey.SV,
            name: "Svenska"
        },
        bibles: [
            {
                key: "NUB",
                name: "nuBibeln (Swedish Contemporary Bible) (NUB)"
            },
            {
                key: "SV1917",
                name: "Svenska 1917 (SV1917)"
            },
            {
                key: "SFB",
                name: "Svenska Folkbibeln (SFB)"
            },
            {
                key: "SFB15",
                name: "Svenska Folkbibeln 2015 (SFB15)"
            },
            {
                key: "SVL",
                name: "Swedish New Living Bible (Nya Levande Bibeln) (SVL)"
            }
        ]
    },
    [BibleGatewayLanguageKey.SW]: {
        language: {
            key: BibleGatewayLanguageKey.SW,
            name: "Kiswahili"
        },
        bibles: [
            {
                key: "SNT",
                name: "Neno: Bibilia Takatifu (SNT)"
            }
        ]
    },
    [BibleGatewayLanguageKey.TA]: {
        language: {
            key: BibleGatewayLanguageKey.TA,
            name: "தமிழ்"
        },
        bibles: [
            {
                key: "ERV-TA",
                name: "Tamil Bible: Easy-to-Read Version (ERV-TA)"
            }
        ]
    },
    [BibleGatewayLanguageKey.TH]: {
        language: {
            key: BibleGatewayLanguageKey.TH,
            name: "ภาษาไทย"
        },
        bibles: [
            {
                key: "TNCV",
                name: "Thai New Contemporary Bible (TNCV)"
            },
            {
                key: "ERV-TH",
                name: "Thai New Testament: Easy-to-Read Version (ERV-TH)"
            }
        ]
    },
    [BibleGatewayLanguageKey.TL]: {
        language: {
            key: BibleGatewayLanguageKey.TL,
            name: "Tagalog"
        },
        bibles: [
            {
                key: "FSV",
                name: "Ang Bagong Tipan: Filipino Standard Version (FSV)"
            },
            {
                key: "ABTAG1978",
                name: "Ang Biblia (1978) (ABTAG1978)"
            },
            {
                key: "ABTAG2001",
                name: "Ang Biblia, 2001 (ABTAG2001)"
            },
            {
                key: "ADB1905",
                name: "Ang Dating Biblia (1905) (ADB1905)"
            },
            {
                key: "ASND",
                name: "Ang Salita ng Dios (Tagalog Contemporary Bible) (ASND)"
            },
            {
                key: "SND",
                name: "Ang Salita ng Diyos (SND)"
            },
            {
                key: "MBBTAG",
                name: "Magandang Balita Biblia (MBBTAG)"
            },
            {
                key: "MBBTAG-DC",
                name: "Magandang Balita Biblia (with Deuterocanon) (MBBTAG-DC)"
            }
        ]
    },
    [BibleGatewayLanguageKey.TWI]: {
        language: {
            key: BibleGatewayLanguageKey.TWI,
            name: "Twi"
        },
        bibles: [
            {
                key: "NA-TWI",
                name: "Nkwa Asem (NA-TWI)"
            }
        ]
    },
    [BibleGatewayLanguageKey.UK]: {
        language: {
            key: BibleGatewayLanguageKey.UK,
            name: "Українська"
        },
        bibles: [
            {
                key: "UKR",
                name: "Ukrainian Bible (UKR)"
            },
            {
                key: "ERV-UK",
                name: "Ukrainian New Testament: Easy-to-Read Version (ERV-UK)"
            }
        ]
    },
    [BibleGatewayLanguageKey.UR]: {
        language: {
            key: BibleGatewayLanguageKey.UR,
            name: "اردو"
        },
        bibles: [
            {
                key: "ERV-UR",
                name: "Urdu Bible: Easy-to-Read Version (ERV-UR)"
            }
        ]
    },
    [BibleGatewayLanguageKey.USP]: {
        language: {
            key: BibleGatewayLanguageKey.USP,
            name: "Uspanteco"
        },
        bibles: [
            {
                key: "USP",
                name: "Uspanteco (USP)"
            }
        ]
    },
    [BibleGatewayLanguageKey.VI]: {
        language: {
            key: BibleGatewayLanguageKey.VI,
            name: "Tiêng"
        },
        bibles: [
            {
                key: "BD2011",
                name: "Bản Dịch 2011 (BD2011)"
            },
            {
                key: "NVB",
                name: "New Vietnamese Bible (NVB)"
            },
            {
                key: "BPT",
                name: "Vietnamese Bible: Easy-to-Read Version (BPT)"
            }
        ]
    },
    [BibleGatewayLanguageKey.YO]: {
        language: {
            key: BibleGatewayLanguageKey.YO,
            name: "Yorùbá"
        },
        bibles: [
            {
                key: "BYO",
                name: "Bíbélì Mímọ́ Yorùbá Òde Òn (BYO)"
            }
        ]
    },
    [BibleGatewayLanguageKey.ZH]: {
        language: {
            key: BibleGatewayLanguageKey.ZH,
            name: "汉语"
        },
        bibles: [
            {
                key: "CCB",
                name: "Chinese Contemporary Bible (Simplified) (CCB)"
            },
            {
                key: "CCBT",
                name: "Chinese Contemporary Bible (Traditional) (CCBT)"
            },
            {
                key: "ERV-ZH",
                name: "Chinese New Testament: Easy-to-Read Version (ERV-ZH)"
            },
            {
                key: "CNVS",
                name: "Chinese New Version (Simplified) (CNVS)"
            },
            {
                key: "CNVT",
                name: "Chinese New Version (Traditional) (CNVT)"
            },
            {
                key: "CSBS",
                name: "Chinese Standard Bible (Simplified) (CSBS)"
            },
            {
                key: "CSBT",
                name: "Chinese Standard Bible (Traditional) (CSBT)"
            },
            {
                key: "CUVS",
                name: "Chinese Union Version (Simplified) (CUVS)"
            },
            {
                key: "CUV",
                name: "Chinese Union Version (Traditional) (CUV)"
            },
            {
                key: "CUVMPS",
                name: "Chinese Union Version Modern Punctuation (Simplified) (CUVMPS)"
            },
            {
                key: "CUVMPT",
                name: "Chinese Union Version Modern Punctuation (Traditional) (CUVMPT)"
            },
            {
                key: "RCU17SS",
                name: "Revised Chinese Union Version (Simplified Script) Shen Edition (RCU17SS)"
            },
            {
                key: "RCU17TS",
                name: "Revised Chinese Union Version (Traditional Script) Shen Edition (RCU17TS)"
            }
        ]
    }
};
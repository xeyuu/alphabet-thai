export interface ThaiConsonant {
  character: string; // The letter itself, e.g., 'ก'
  name: string; // The representation, e.g., 'ไก่'
  fullname: string; // The complete memorization phrase, e.g., 'ก เอ๋ย ก ไก่'
  pronunciation: string; // The pronunciation phonetic text, e.g., 'กอ'
  emoji: string; // Cute emoji representation, e.g., '🐔'
  englishName: string; // English transcription, e.g., 'Ko Kai'
  englishPhonetic: string; // English raw pronunciation, e.g., 'k'
  meaning: string; // English translation of the noun, e.g., 'Chicken'
}

export const THAI_ALPHABET: ThaiConsonant[] = [
  {
    character: "ก",
    name: "ไก่",
    fullname: "ก เอ๋ย ก ไก่",
    pronunciation: "กอ-เอ๋ย-กอ-ไก่",
    emoji: "🐔",
    englishName: "Ko Kai",
    englishPhonetic: "k-",
    meaning: "Chicken"
  },
  {
    character: "ข",
    name: "ไข่",
    fullname: "ข ไข่ ใน เล้า",
    pronunciation: "ขอ-ไข่",
    emoji: "🥚",
    englishName: "Kho Khai",
    englishPhonetic: "kh-",
    meaning: "Egg"
  },
  {
    character: "ฃ",
    name: "ขวด",
    fullname: "ฃ ขวด ของ เรา",
    pronunciation: "ขอ-ขวด",
    emoji: "🍾",
    englishName: "Kho Khuat",
    englishPhonetic: "kh-",
    meaning: "Bottle"
  },
  {
    character: "ค",
    name: "ควาย",
    fullname: "ค ควาย เข้า นา",
    pronunciation: "คอ-ควาย",
    emoji: "🐃",
    englishName: "Kho Khwai",
    englishPhonetic: "kh-",
    meaning: "Buffalo"
  },
  {
    character: "ฅ",
    name: "คน",
    fullname: "ฅ คน ขึง ขัง",
    pronunciation: "คอ-คน",
    emoji: "🧑",
    englishName: "Kho Khon",
    englishPhonetic: "kh-",
    meaning: "Person"
  },
  {
    character: "ฆ",
    name: "ระฆัง",
    fullname: "ฆ ระฆัง ข้าง ฝา",
    pronunciation: "คอ-ระ-ฆัง",
    emoji: "🔔",
    englishName: "Kho Rakhang",
    englishPhonetic: "kh-",
    meaning: "Bell"
  },
  {
    character: "ง",
    name: "งู",
    fullname: "ง งู ใจ กล้า",
    pronunciation: "งอ-งู",
    emoji: "🐍",
    englishName: "Ngo Ngu",
    englishPhonetic: "ng-",
    meaning: "Snake"
  },
  {
    character: "จ",
    name: "จาน",
    fullname: "จ จาน ใช้ ดี",
    pronunciation: "จอ-จาน",
    emoji: "🍽️",
    englishName: "Cho Chan",
    englishPhonetic: "ch-",
    meaning: "Plate"
  },
  {
    character: "ฉ",
    name: "ฉิ่ง",
    fullname: "ฉ ฉิ่ง ตี ดัง",
    pronunciation: "ฉอ-ฉิ่ง",
    emoji: "🥁",
    englishName: "Cho Ching",
    englishPhonetic: "ch-",
    meaning: "Cymbals"
  },
  {
    character: "ช",
    name: "ช้าง",
    fullname: "ช ช้าง วิ่ง หนี",
    pronunciation: "ชอ-ช้าง",
    emoji: "🐘",
    englishName: "Cho Chang",
    englishPhonetic: "ch-",
    meaning: "Elephant"
  },
  {
    character: "ซ",
    name: "โซ่",
    fullname: "ซ โซ่ ล่าม ที",
    pronunciation: "ซอ-โซ่",
    emoji: "⛓️",
    englishName: "So So",
    englishPhonetic: "s-",
    meaning: "Chain"
  },
  {
    character: "ฌ",
    name: "เฌอ",
    fullname: "ฌ เฌอ คู่ กัน",
    pronunciation: "ชอ-เฌอ",
    emoji: "🌳",
    englishName: "Cho Choe",
    englishPhonetic: "ch-",
    meaning: "Tree"
  },
  {
    character: "ญ",
    name: "หญิง",
    fullname: "ญ หญิง โสภา",
    pronunciation: "ยอ-หญิง",
    emoji: "👩",
    englishName: "Yo Ying",
    englishPhonetic: "y-",
    meaning: "Woman"
  },
  {
    character: "ฎ",
    name: "ชฎา",
    fullname: "ฎ ชฎา สวม พลัน",
    pronunciation: "ดอ-ชะ-ดา",
    emoji: "👑",
    englishName: "Do Chada",
    englishPhonetic: "d-",
    meaning: "Crown (Chada)"
  },
  {
    character: "ฏ",
    name: "ปฏัก",
    fullname: "ฏ ปฏัก หุนหัน",
    pronunciation: "ตอ-ปะ-ตัก",
    emoji: "🔱",
    englishName: "To Patak",
    englishPhonetic: "t-",
    meaning: "Trident/Harpoon"
  },
  {
    character: "ฐ",
    name: "ฐาน",
    fullname: "ฐ ฐาน เข้า มา รอง",
    pronunciation: "ถอ-ฐาน",
    emoji: "⛩️",
    englishName: "Tho Than",
    englishPhonetic: "th-",
    meaning: "Pedestal Base"
  },
  {
    character: "ฑ",
    name: "มณโฑ",
    fullname: "ฑ นางมณโฑ หน้า ขาว",
    pronunciation: "ทอ-มน-โท",
    emoji: "👸",
    englishName: "Tho Montho",
    englishPhonetic: "th-",
    meaning: "Giant Queen"
  },
  {
    character: "ฒ",
    name: "ผู้เฒ่า",
    fullname: "ฒ ผู้เฒ่า เดิน ย่อง",
    pronunciation: "ทอ-ผู้-เฒ่า",
    emoji: "👴",
    englishName: "Tho Phuthao",
    englishPhonetic: "th-",
    meaning: "Elderly Person"
  },
  {
    character: "ณ",
    name: "เณร",
    fullname: "ณ เณร ไม่ มอง",
    pronunciation: "นอ-เณร",
    emoji: "👦",
    englishName: "No Nen",
    englishPhonetic: "n-",
    meaning: "Novice Monk"
  },
  {
    character: "ด",
    name: "เด็ก",
    fullname: "ด เด็ก ต้อง นิมนต์",
    pronunciation: "ดอ-เด็ก",
    emoji: "👶",
    englishName: "Do Dek",
    englishPhonetic: "d-",
    meaning: "Child"
  },
  {
    character: "ต",
    name: "เต่า",
    fullname: "ต เต่า หลัง ตุง",
    pronunciation: "ตอ-เต่า",
    emoji: "🐢",
    englishName: "To Tao",
    englishPhonetic: "t-",
    meaning: "Turtle"
  },
  {
    character: "ถ",
    name: "ถุง",
    fullname: "ถ ถุง แบก ขน",
    pronunciation: "ถอ-ถุง",
    emoji: "🎒",
    englishName: "Tho Thung",
    englishPhonetic: "th-",
    meaning: "Bag"
  },
  {
    character: "ท",
    name: "ทหาร",
    fullname: "ท ทหาร อดทน",
    pronunciation: "ทอ-ทะ-หาร",
    emoji: "💂",
    englishName: "Tho Thahan",
    englishPhonetic: "th-",
    meaning: "Soldier"
  },
  {
    character: "ธ",
    name: "ธง",
    fullname: "ธ ธง คน นิยม",
    pronunciation: "ทอ-ธง",
    emoji: "🇹🇭",
    englishName: "Tho Thong",
    englishPhonetic: "th-",
    meaning: "Flag"
  },
  {
    character: "น",
    name: "หนู",
    fullname: "น หนู ขวักไขว่",
    pronunciation: "นอ-หนู",
    emoji: "🐭",
    englishName: "No Nhu",
    englishPhonetic: "n-",
    meaning: "Mouse"
  },
  {
    character: "บ",
    name: "ใบไม้",
    fullname: "บ ใบไม้ ทับถม",
    pronunciation: "บอ-ใบ-ไม้",
    emoji: "🍃",
    englishName: "Bo Baimai",
    englishPhonetic: "b-",
    meaning: "Leaf"
  },
  {
    character: "ป",
    name: "ปลา",
    fullname: "ป ปลา ตากลม",
    pronunciation: "ปอ-ปลา",
    emoji: "🐟",
    englishName: "Po Pla",
    englishPhonetic: "p-",
    meaning: "Fish"
  },
  {
    character: "ผ",
    name: "ผึ้ง",
    fullname: "ผ ผึ้ง ทำ รัง",
    pronunciation: "ผอ-ผึ้ง",
    emoji: "🐝",
    englishName: "Pho Phueng",
    englishPhonetic: "ph-",
    meaning: "Bee"
  },
  {
    character: "ฝ",
    name: "ฝา",
    fullname: "ฝ ฝา ทนทาน",
    pronunciation: "ฝอ-ฝา",
    emoji: "🍳",
    englishName: "Fo Fa",
    englishPhonetic: "f-",
    meaning: "Lid/Cover"
  },
  {
    character: "พ",
    name: "พาน",
    fullname: "พ พาน วาง ตั้ง",
    pronunciation: "พอ-พาน",
    emoji: "🧺",
    englishName: "Pho Phan",
    englishPhonetic: "ph-",
    meaning: "Tray with pedestal"
  },
  {
    character: "ฟ",
    name: "ฟัน",
    fullname: "ฟ ฟัน สะอาด จัง",
    pronunciation: "ฟอ-ฟัน",
    emoji: "🦷",
    englishName: "Fo Fan",
    englishPhonetic: "f-",
    meaning: "Teeth"
  },
  {
    character: "ภ",
    name: "สำเภา",
    fullname: "ภ สำเภา กาง ใบ",
    pronunciation: "พอ-สำ-เภา",
    emoji: "⛵",
    englishName: "Pho Samphao",
    englishPhonetic: "ph-",
    meaning: "Sailing Junk Boat"
  },
  {
    character: "ม",
    name: "ม้า",
    fullname: "ม ม้า คึกคัก",
    pronunciation: "มอ-ม้า",
    emoji: "🐎",
    englishName: "Mo Ma",
    englishPhonetic: "m-",
    meaning: "Horse"
  },
  {
    character: "ย",
    name: "ยักษ์",
    fullname: "ย ยักษ์ เขี้ยว ใหญ่",
    pronunciation: "ยอ-ยักษ์",
    emoji: "👹",
    englishName: "Yo Yak",
    englishPhonetic: "y-",
    meaning: "Giant/ Ogre"
  },
  {
    character: "ร",
    name: "เรือ",
    fullname: "ร เรือ พาย ไป",
    pronunciation: "รอ-เรือ",
    emoji: "🛶",
    englishName: "Ro Ruea",
    englishPhonetic: "r-",
    meaning: "Sailing Boat"
  },
  {
    character: "ล",
    name: "ลิง",
    fullname: "ล ลิง ไต่ ราว",
    pronunciation: "ลอ-ลิง",
    emoji: "🐒",
    englishName: "Lo Ling",
    englishPhonetic: "l-",
    meaning: "Monkey"
  },
  {
    character: "ว",
    name: "แหวน",
    fullname: "ว แหวน ลง ยา",
    pronunciation: "วอ-แหวน",
    emoji: "💍",
    englishName: "Wo Waen",
    englishPhonetic: "w-",
    meaning: "Ring"
  },
  {
    character: "ศ",
    name: "ศาลา",
    fullname: "ศ ศาลา เงียบเหงา",
    pronunciation: "สอ-สา-ลา",
    emoji: "🛕",
    englishName: "So Sala",
    englishPhonetic: "s-",
    meaning: "Pavilion"
  },
  {
    character: "ษ",
    name: "ฤๅษี",
    fullname: "ษ ษ ฤๅษี หนวด ยาว",
    pronunciation: "สอ-รือ-สี",
    emoji: "🧙‍♂️",
    englishName: "So Ruesi",
    englishPhonetic: "s-",
    meaning: "Hermit"
  },
  {
    character: "ส",
    name: "เสือ",
    fullname: "ส เสือ ดาวคะนอง",
    pronunciation: "สอ-เสือ",
    emoji: "🐯",
    englishName: "So Suea",
    englishPhonetic: "s-",
    meaning: "Tiger"
  },
  {
    character: "ห",
    name: "หีบ",
    fullname: "ห หีบ ใส่ ผ้า",
    pronunciation: "หอ-หีบ",
    emoji: "📦",
    englishName: "Ho Hip",
    englishPhonetic: "h-",
    meaning: "Treasure Chest"
  },
  {
    character: "ฬ",
    name: "จุฬา",
    fullname: "ฬ จุฬา ท่าผยอง",
    pronunciation: "ลอ-จุ-ลา",
    emoji: "🪁",
    englishName: "Lo Chula",
    englishPhonetic: "l-",
    meaning: "Chula Kite"
  },
  {
    character: "อ",
    name: "อ่าง",
    fullname: "อ อ่าง เนืองนอง",
    pronunciation: "ออ-อ่าง",
    emoji: "🥣",
    englishName: "O Ang",
    englishPhonetic: "o-",
    meaning: "Basin/Tub"
  },
  {
    character: "ฮ",
    name: "นกฮูก",
    fullname: "ฮ นกฮูก ตาโต",
    pronunciation: "ฮอ-นก-ฮูก",
    emoji: "🦉",
    englishName: "Ho Nokhuk",
    englishPhonetic: "h-",
    meaning: "Owl"
  }
];

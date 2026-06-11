/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useRef } from "react";
import { 
  Printer, 
  Download, 
  Palette, 
  Sparkles, 
  Check, 
  CheckSquare, 
  Square, 
  Search, 
  Trash2, 
  Edit, 
  Sliders, 
  BookOpen, 
  Scissors, 
  CheckCircle, 
  Info, 
  Heart, 
  Star,
  RefreshCw,
  Plus,
  Minus,
  HelpCircle,
  Eye
} from "lucide-react";
import { THAI_ALPHABET, ThaiConsonant } from "./data/thaiAlphabet";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
  const userEmail = "titleza2@hotmail.com";
  // --- States ---
  const [selectedLayout, setSelectedLayout] = useState<"2" | "3" | "4">("3"); // Consonants per page
  const [worksheetStyle, setWorksheetStyle] = useState<"reading" | "coloring" | "flashcard">("reading");
  const [selectedFont, setSelectedFont] = useState<"itim" | "mali" | "pridi" | "sarabun">("itim");
  const [themeColor, setThemeColor] = useState<"pink" | "blue" | "green" | "yellow" | "purple" | "mono">("pink");
  const [headerText, setHeaderText] = useState("ใบงานฝึกอ่านและคัดลายมือภาษาไทย (ชั้นประถมศึกษาปีที่ 1)");
  const [studentNameTemplate, setStudentNameTemplate] = useState("ชื่อ: .............................................................. ชั้น: ............. เลขที่: ............");
  
  // Customization Toggles
  const [showTraditionalPhrases, setShowTraditionalPhrases] = useState(true);
  const [showTracingGuides, setShowTracingGuides] = useState(true);
  const [guidelineRows, setGuidelineRows] = useState(3); // lines of dotted guide box
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState<"all" | "high" | "mid" | "low">("all");
  
  // Advanced selection state: User can enable/disable individual characters to customize their print queue!
  const [consonantStates, setConsonantStates] = useState<Record<string, boolean>>(() => {
    const states: Record<string, boolean> = {};
    THAI_ALPHABET.forEach((item) => {
      states[item.character] = true;
    });
    return states;
  });

  // UI zoom state for the preview pages
  const [zoomPercent, setZoomPercent] = useState<number>(75); 

  // PDF Export States
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportTotal, setExportTotal] = useState(0);
  const [showPdfInstructions, setShowPdfInstructions] = useState(false);

  // --- Theme configuration mapping ---
  const THEME_STYLES = {
    mono: {
      bg: "bg-white",
      border: "border-slate-300",
      text: "text-slate-800",
      accent: "bg-slate-100/60 border-slate-300 text-slate-800",
      accentText: "text-slate-700",
      badge: "bg-slate-100 text-slate-800 border-slate-200",
      headerBg: "bg-slate-50 border-b border-slate-200",
      dotColor: "#b2bec3",
      primaryBtn: "bg-slate-800 hover:bg-slate-900 text-white",
      tint: "slate"
    },
    pink: {
      bg: "bg-pink-50/50",
      border: "border-pink-200",
      text: "text-pink-600",
      accent: "bg-pink-100/60 border-pink-200 text-pink-700",
      accentText: "text-pink-600",
      badge: "bg-pink-100 text-pink-700 border-pink-200",
      headerBg: "bg-pink-50 border-b border-pink-100",
      dotColor: "#f472b6",
      primaryBtn: "bg-pink-500 hover:bg-pink-600 text-white",
      tint: "pink"
    },
    blue: {
      bg: "bg-sky-50/50",
      border: "border-sky-200",
      text: "text-sky-600",
      accent: "bg-sky-100/60 border-sky-200 text-sky-700",
      accentText: "text-sky-600",
      badge: "bg-sky-100 text-sky-700 border-sky-200",
      headerBg: "bg-sky-50 border-b border-sky-100",
      dotColor: "#38bdf8",
      primaryBtn: "bg-sky-500 hover:bg-sky-600 text-white",
      tint: "sky"
    },
    green: {
      bg: "bg-emerald-50/50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      accent: "bg-emerald-100/60 border-emerald-200 text-emerald-700",
      accentText: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      headerBg: "bg-emerald-50 border-b border-emerald-100",
      dotColor: "#34d399",
      primaryBtn: "bg-emerald-500 hover:bg-emerald-600 text-white",
      tint: "emerald"
    },
    yellow: {
      bg: "bg-amber-50/50",
      border: "border-amber-200",
      text: "text-amber-700",
      accent: "bg-amber-100/60 border-amber-200 text-amber-700",
      accentText: "text-amber-700",
      badge: "bg-amber-100 text-amber-700 border-amber-200",
      headerBg: "bg-amber-50 border-b border-amber-100",
      dotColor: "#fbbf24",
      primaryBtn: "bg-amber-500 hover:bg-amber-600 text-white",
      tint: "amber"
    },
    purple: {
      bg: "bg-purple-50/50",
      border: "border-purple-200",
      text: "text-purple-700",
      accent: "bg-purple-100/60 border-purple-200 text-purple-700",
      accentText: "text-purple-700",
      badge: "bg-purple-100 text-purple-700 border-purple-200",
      headerBg: "bg-purple-50 border-b border-purple-100",
      dotColor: "#c084fc",
      primaryBtn: "bg-purple-500 hover:bg-purple-600 text-white",
      tint: "purple"
    }
  };

  const activeTheme = THEME_STYLES[themeColor];

  // Cute card themes configuration mapping for flashcards
  const CUTE_CARD_THEMES = {
    mono: {
      border: "border-slate-300",
      cardBg: "bg-slate-50",
      letterColor: "text-slate-800",
      badge: "bg-slate-100 text-slate-800 border-slate-300",
      illustBg: "bg-gradient-to-br from-slate-100 to-white border-slate-200",
      bannerBg: "bg-slate-200 text-slate-800 border-slate-300",
      poetryColor: "text-slate-650",
      starColor: "text-slate-400"
    },
    pink: {
      border: "border-pink-300",
      cardBg: "bg-gradient-to-b from-pink-50/40 to-white",
      letterColor: "text-pink-600",
      badge: "bg-pink-100 text-pink-700 border-pink-200",
      illustBg: "bg-gradient-to-br from-pink-100/60 to-rose-50 border-pink-200",
      bannerBg: "bg-pink-100 text-pink-700 border-pink-300",
      poetryColor: "text-pink-800",
      starColor: "text-pink-400"
    },
    blue: {
      border: "border-sky-300",
      cardBg: "bg-gradient-to-b from-sky-50/40 to-white",
      letterColor: "text-sky-600",
      badge: "bg-sky-100 text-sky-700 border-sky-200",
      illustBg: "bg-gradient-to-br from-sky-100/60 to-cyan-50 border-sky-200",
      bannerBg: "bg-sky-100 text-sky-700 border-sky-300",
      poetryColor: "text-sky-800",
      starColor: "text-sky-400"
    },
    green: {
      border: "border-emerald-300",
      cardBg: "bg-gradient-to-b from-emerald-50/40 to-white",
      letterColor: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      illustBg: "bg-gradient-to-br from-emerald-100/60 to-teal-50 border-emerald-200",
      bannerBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
      poetryColor: "text-emerald-850",
      starColor: "text-emerald-400"
    },
    yellow: {
      border: "border-amber-300",
      cardBg: "bg-gradient-to-b from-amber-50/40 to-white",
      letterColor: "text-amber-700",
      badge: "bg-amber-100 text-amber-700 border-amber-200",
      illustBg: "bg-gradient-to-br from-amber-100/60 to-yellow-50 border-amber-200",
      bannerBg: "bg-amber-100 text-amber-700 border-amber-300",
      poetryColor: "text-amber-850",
      starColor: "text-amber-500"
    },
    purple: {
      border: "border-purple-300",
      cardBg: "bg-gradient-to-b from-purple-50/40 to-white",
      letterColor: "text-purple-700",
      badge: "bg-purple-100 text-purple-700 border-purple-200",
      illustBg: "bg-gradient-to-br from-purple-100/60 to-fuchsia-50 border-purple-200",
      bannerBg: "bg-purple-100 text-purple-700 border-purple-300",
      poetryColor: "text-purple-800",
      starColor: "text-purple-400"
    }
  };

  // Font class mapping representing imported fonts
  const FONT_CLASSES = {
    itim: "font-itim",
    mali: "font-mali",
    pridi: "font-pridi",
    sarabun: "font-sarabun"
  };

  const activeFontClass = FONT_CLASSES[selectedFont as "itim" | "mali" | "pridi" | "sarabun"] || "font-itim";

  // Helper to render high quality vector cartoon illustration using Twemoji CDN with text/emoji fallback
  const renderCuteIllustration = (emoji: string, sizeClass: string, altText: string) => {
    const codePoints = Array.from(emoji)
      .map(char => char.codePointAt(0)!.toString(16))
      .filter(hex => hex !== "fe0f");
    const hex = codePoints.join("-");
    const url = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${hex}.svg`;

    return (
      <div className={`relative flex items-center justify-center ${sizeClass}`}>
        <img 
          src={url} 
          alt={altText} 
          className="w-full h-full object-contain select-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }}
        />
        <span className="hidden select-none font-sans text-center leading-none" style={{ fontSize: 'inherit' }}>
          {emoji}
        </span>
      </div>
    );
  };

  // List of Thai Consonants classified by Traditional Consonant Classes (Triclass - ไตรยางศ์)
  // High: ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห
  // Mid: ก จ ฎ ฏ ด ต บ ป อ
  // Low: ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ
  const highConsonants = ["ข", "ฃ", "ฉ", "ฐ", "ถ", "ผ", "ฝ", "ศ", "ษ", "ส", "ห"];
  const midConsonants = ["ก", "จ", "ฎ", "ฏ", "ด", "ต", "บ", "ป", "อ"];
  
  const getTriclass = (char: string) => {
    if (highConsonants.includes(char)) return { label: "อักษรสูง", color: "bg-rose-100 text-rose-800" };
    if (midConsonants.includes(char)) return { label: "อักษรกลาง", color: "bg-amber-100 text-amber-800" };
    return { label: "อักษรต่ำ", color: "bg-cyan-100 text-cyan-800" };
  };

  // --- Computed Character Lists & Filter Lists ---
  const filteredSelectionAlphabet = useMemo(() => {
    return THAI_ALPHABET.filter((consonant) => {
      // Name or char search match
      const searchMatch = 
        consonant.character.includes(searchTerm) || 
        consonant.name.includes(searchTerm) ||
        consonant.fullname.includes(searchTerm);
      
      if (!searchMatch) return false;

      // Class match
      if (selectedClass === "all") return true;
      const isHigh = highConsonants.includes(consonant.character);
      const isMid = midConsonants.includes(consonant.character);
      const isLow = !isHigh && !isMid;

      if (selectedClass === "high") return isHigh;
      if (selectedClass === "mid") return isMid;
      if (selectedClass === "low") return isLow;

      return true;
    });
  }, [searchTerm, selectedClass]);

  // Consonants that will actually be generated as sheets
  const activeConsonants = useMemo(() => {
    return THAI_ALPHABET.filter(item => consonantStates[item.character]);
  }, [consonantStates]);

  // Divide the active consonants into pages based on the layout choice (2, 3, or 4 per page)
  const paginatedAlphabet = useMemo(() => {
    const size = parseInt(selectedLayout, 10);
    const result: ThaiConsonant[][] = [];
    for (let i = 0; i < activeConsonants.length; i += size) {
      result.push(activeConsonants.slice(i, i + size));
    }
    return result;
  }, [activeConsonants, selectedLayout]);

  // Toggle helper
  const handleToggleAll = (val: boolean) => {
    const updated = { ...consonantStates };
    THAI_ALPHABET.forEach((char) => {
      updated[char.character] = val;
    });
    setConsonantStates(updated);
  };

  const handleToggleConsonant = (char: string) => {
    setConsonantStates(prev => ({
      ...prev,
      [char]: !prev[char]
    }));
  };

  // Trigger web native print (which uses the custom high-quality print container)
  const triggerNativePrint = () => {
    window.print();
  };

  // Client-side automated PDF compile using html2canvas & jsPDF
  const exportPdfDirectly = async () => {
    setIsExporting(true);
    setExportProgress(0);
    
    // Find all rendered preview page elements
    const pageElements = document.querySelectorAll(".preview-page-container");
    if (pageElements.length === 0) {
      alert("ไม่พบใบงานสำหรับส่งออก กรุณาเลือกตัวอักษรอย่างน้อย 1 ตัว");
      setIsExporting(false);
      return;
    }

    setExportTotal(pageElements.length);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    try {
      for (let i = 0; i < pageElements.length; i++) {
        setExportProgress(i + 1);
        const element = pageElements[i] as HTMLElement;

        // Force heavy scale multiplier for print-level resolution
        const canvas = await html2canvas(element, {
          scale: 2, 
          useCORS: true,
          logging: false,
          allowTaint: true,
          backgroundColor: "#ffffff"
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        
        // Add page if isn't the first page
        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      }

      pdf.save("ใบงานฝีกหัดพยัญชนะไทย_A4.pdf");
      setShowPdfInstructions(true);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดาวน์โหลด PDF:", error);
      alert("ระบบดาวน์โหลด PDF ขัดข้อง ชั่วคราว แนะนำให้กดปุ่ม 'สั่งพิมพ์ใบงาน (A4)' แล้วเลือกบันทึกเป็น PDF ของระบบเบราว์เซอร์เพื่อให้ได้ความชัดสูงกว่า!");
    } finally {
      setIsExporting(false);
    }
  };

  // Count helper
  const selectedCount = Object.values(consonantStates).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      
      {/* HEADER SECTION (Top Navigation - Hidden in Print Mode entirely) */}
      <header className="no-print bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-pink-200">
              ก
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                ใบงานคัดไทยประถม 1 <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 animate-pulse">A4 PDF Creator</span>
              </h1>
              <p className="text-xs text-slate-500">สร้างกระดาษฝึกอ่าน คัด และเขียนพยัญชนะไทยทั้ง 44 ตัว จัดหน้าง่าย ปริ้นฟรี</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={triggerNativePrint}
              disabled={selectedCount === 0}
              id="btn-trigger-print"
              className="px-4 py-2 bg-gradient-to-r from-indigo-505 to-slate-900 hover:opacity-90 text-white font-medium rounded-lg text-sm flex items-center gap-2 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{ backgroundColor: "#2d3748" }}
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ใบงาน (A4) / บันทึก PDF เวกเตอร์ซีแลปส์</span>
            </button>

            <button
              onClick={exportPdfDirectly}
              disabled={selectedCount === 0 || isExporting}
              id="btn-trigger-pdf"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-95 font-medium rounded-lg text-sm flex items-center gap-2 transition shadow-md shadow-pink-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? `กำลังดาวน์โหลด PDF (${exportProgress}/${exportTotal})...` : "ดาวน์โหลดด่วน (ไฟล์ PDF)"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* BODY CONTENT MAP */}
      <div className="no-print flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        
        {/* LEFT COLUMN: EDITING CONTROL DASHBOARD (no-print) */}
        <div className="no-print lg:w-[380px] w-full flex flex-col gap-6 bg-slate-100 shrink-0">
          
          {/* Card 1: Main Presets */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Sliders className="w-4 h-4 text-pink-500" />
              <span>ปรับแต่งใบงาน</span>
            </h3>

            {/* Layout Division (2-4 Per Sheet) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500">การจัดหน้า (จำนวนพยัญชนะต่อแผ่น A4)</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "2", label: "2 ตัวอักษร", desc: "คัลแลนด์จัมโบ้" },
                  { key: "3", label: "3 ตัวอักษร", desc: "มาตรฐานพอดี" },
                  { key: "4", label: "4 ตัวอักษร", desc: "ประหยัด 2x2" }
                ].map((layout) => (
                  <button
                    key={layout.key}
                    onClick={() => setSelectedLayout(layout.key as any)}
                    className={`p-2 rounded-xl text-xs font-medium border text-center transition flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                      selectedLayout === layout.key 
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs" 
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <span>{layout.label}</span>
                    <span className={`text-[10px] opacity-75 ${selectedLayout === layout.key ? "text-slate-200" : "text-slate-400"}`}>
                      {layout.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Variant selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500">รูปแบบการนำเสนอ</label>
              <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-xl">
                {[
                  { key: "reading", label: "ฝึกอ่านคัดไทย", icon: "✏️" },
                  { key: "coloring", label: "ระบายสีแสนสนุก", icon: "🎨" },
                  { key: "flashcard", label: "การ์ดพกพา", icon: "🃏" }
                ].map((style) => (
                  <button
                    key={style.key}
                    onClick={() => setWorksheetStyle(style.key as any)}
                    className={`py-1.5 px-1 rounded-lg text-xs font-medium text-center transition flex flex-col items-center gap-1 cursor-pointer ${
                      worksheetStyle === style.key 
                        ? "bg-white text-slate-900 shadow-2xs font-semibold" 
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <span className="text-base">{style.icon}</span>
                    <span className="text-[10px] tracking-tight">{style.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Selector */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-slate-500">แบบตัวอักษรกลวง/ลายปะ</label>
                <span className="text-[10px] text-slate-400">ขนาดตัวอักษรเปลี่ยนตามกลุ่ม</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { key: "itim", label: "Itim (ตัวมนน่ารัก)", font: "font-itim" },
                  { key: "mali", label: "Mali (เขียนมืออักษรมน)", font: "font-mali" },
                  { key: "pridi", label: "Pridi (มีหัวกลม อ่านง่ายมาก)", font: "font-pridi" },
                  { key: "sarabun", label: "Sarabun (มาตรฐาน ป.1)", font: "font-sarabun" },
                ].map((font) => (
                  <button
                    key={font.key}
                    onClick={() => setSelectedFont(font.key as any)}
                    className={`p-2 rounded-lg text-xs border text-left flex flex-col transition cursor-pointer ${
                      selectedFont === font.key 
                        ? "bg-gradient-to-l from-indigo-50/10 to-pink-50/30 border-pink-400 ring-2 ring-pink-100 font-semibold" 
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <span className={`${font.font} text-sm font-semibold text-slate-900`}>พยัญชนะไทย</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{font.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Colors mapping */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500">โทนสีหลักและขอบรูปการ์ตูน</label>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { key: "mono", colorClass: "bg-slate-700 border-slate-900", label: "ประหยัดหมึก" },
                  { key: "pink", colorClass: "bg-pink-400 border-pink-500", label: "ชมพูหวาน" },
                  { key: "blue", colorClass: "bg-sky-400 border-sky-500", label: "ฟ้าใส" },
                  { key: "green", colorClass: "bg-emerald-400 border-emerald-500", label: "เขียวมิ้นต์" },
                  { key: "yellow", colorClass: "bg-amber-400 border-amber-500", label: "ส้มเหลือง" },
                  { key: "purple", colorClass: "bg-purple-400 border-purple-500", label: "ม่วงละมุน" }
                ].map((col) => (
                  <button
                    key={col.key}
                    onClick={() => setThemeColor(col.key as any)}
                    title={col.label}
                    className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition hover:scale-110 cursor-pointer ${col.colorClass} ${
                      themeColor === col.key ? "ring-4 ring-slate-300 scale-105" : "opacity-85"
                    }`}
                  >
                    {themeColor === col.key && (
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                *เลือก <span className="font-semibold text-slate-600">ประหยัดหมึก</span> เพื่อพิมพ์พิมพ์แบบขาว-ดำแบบเกรย์สเกล หลีกเลี่ยงหมึกสีหมดเร็ว
              </p>
            </div>
          </div>

          {/* Toggle checklist customizable details */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>ข้อมูลตัวอักษรย่อย</span>
            </h3>

            {/* Text header edits */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">ข้อความหัวกระดาษ (Header)</label>
              <input
                type="text"
                value={headerText}
                onChange={(e) => setHeaderText(e.target.value)}
                placeholder="ชื่อเด็ก..."
                className="w-full text-xs p-2 border border-slate-200 rounded-lg outline-none focus:border-pink-300"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500">ส่วนกรอกชื่อนักเรียน</label>
              <input
                type="text"
                value={studentNameTemplate}
                onChange={(e) => setStudentNameTemplate(e.target.value)}
                placeholder="กรอกชื่อ...."
                className="w-full text-xs p-2 border border-slate-200 rounded-lg outline-none focus:border-pink-300"
              />
            </div>

            {/* Custom Checkboxes options */}
            <div className="flex flex-col gap-3 pt-1">

              <label className="flex items-center gap-2 text-xs text-slate-700 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={showTraditionalPhrases}
                  onChange={(e) => setShowTraditionalPhrases(e.target.checked)}
                  className="rounded text-pink-500 focus:ring-pink-300 w-4 h-4 accent-pink-500"
                />
                <span>แสดงกลอนท่องจำพยัญชนะไทยเต็มวรรค</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-700 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={showTracingGuides}
                  onChange={(e) => setShowTracingGuides(e.target.checked)}
                  className="rounded text-pink-500 focus:ring-pink-300 w-4 h-4 accent-pink-500"
                />
                <span>แสดงเส้นประนำสายตาพยัญชนะลายปะตัวอย่าง</span>
              </label>

              {worksheetStyle === "reading" && showTracingGuides && (
                <div className="flex flex-col gap-1.5 pl-6">
                  <span className="text-[11px] text-slate-400">แถวเส้นตารางสำหรับหัดคัดต่อ 1 อักษร:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGuidelineRows(Math.max(1, guidelineRows - 1))}
                      className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-slate-700 px-2">{guidelineRows} แถว</span>
                    <button
                      onClick={() => setGuidelineRows(Math.min(5, guidelineRows + 1))}
                      className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Select Character Filter */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-slate-800 flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-500" />
                <span>ตัวอักษรที่ต้องการพิมพ์</span>
              </div>
              <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-bold">
                {selectedCount}/44 อักษร
              </span>
            </h3>

            {/* Selection quick menu */}
            <div className="flex flex-wrap gap-1">
              <button 
                onClick={() => handleToggleAll(true)}
                className="text-[10px] px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
              >
                เลือกทั้งหมด
              </button>
              <button 
                onClick={() => handleToggleAll(false)}
                className="text-[10px] px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
              >
                ล้างทั้งหมด
              </button>
              <button 
                onClick={() => {
                  const updated = { ...consonantStates };
                  THAI_ALPHABET.forEach((char) => {
                    updated[char.character] = highConsonants.includes(char.character);
                  });
                  setConsonantStates(updated);
                }}
                className="text-[10px] px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-md font-medium cursor-pointer"
              >
                อักษรสูงอย่างเดียว
              </button>
              <button 
                onClick={() => {
                  const updated = { ...consonantStates };
                  THAI_ALPHABET.forEach((char) => {
                    updated[char.character] = midConsonants.includes(char.character);
                  });
                  setConsonantStates(updated);
                }}
                className="text-[10px] px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-md font-medium cursor-pointer"
              >
                อักษรกลางอย่างเดียว
              </button>
              <button 
                onClick={() => {
                  const updated = { ...consonantStates };
                  THAI_ALPHABET.forEach((char) => {
                    updated[char.character] = !highConsonants.includes(char.character) && !midConsonants.includes(char.character);
                  });
                  setConsonantStates(updated);
                }}
                className="text-[10px] px-2 py-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 rounded-md font-medium cursor-pointer"
              >
                อักษรต่ำอย่างเดียว
              </button>
            </div>

            {/* Filter Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="ค้นหาพยัญชนะด่วน เช่น ไก่, ค, ยักษ์..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 border border-slate-200 text-xs rounded-lg outline-none focus:border-pink-300"
              />
            </div>

            {/* Class filter options */}
            <div className="flex gap-1.5 text-[10px]">
              <button 
                onClick={() => setSelectedClass("all")} 
                className={`flex-1 py-1 rounded text-center cursor-pointer ${selectedClass === "all" ? "bg-slate-800 text-white font-semibold" : "bg-slate-50 text-slate-500 hover:text-slate-700"}`}
              >
                ทั้งหมด
              </button>
              <button 
                onClick={() => setSelectedClass("high")} 
                className={`flex-1 py-1 rounded text-center cursor-pointer ${selectedClass === "high" ? "bg-rose-100 text-rose-800 font-medium" : "bg-slate-50 text-slate-500 hover:text-rose-700"}`}
              >
                อักษรสูง
              </button>
              <button 
                onClick={() => setSelectedClass("mid")} 
                className={`flex-1 py-1 rounded text-center cursor-pointer ${selectedClass === "mid" ? "bg-amber-100 text-amber-800 font-medium" : "bg-slate-50 text-slate-500 hover:text-amber-700"}`}
              >
                อักษรกลาง
              </button>
              <button 
                onClick={() => setSelectedClass("low")} 
                className={`flex-1 py-1 rounded text-center cursor-pointer ${selectedClass === "low" ? "bg-cyan-100 text-cyan-800 font-medium" : "bg-slate-50 text-slate-500 hover:text-cyan-700"}`}
              >
                อักษรต่ำ
              </button>
            </div>

            {/* Individual consonants grid checklist */}
            <div className="grid grid-cols-6 gap-1 max-h-[170px] overflow-y-auto pr-1 pb-1">
              {filteredSelectionAlphabet.map((consonant) => {
                const isSelected = consonantStates[consonant.character];
                const triClass = getTriclass(consonant.character);
                return (
                  <button
                    key={consonant.character}
                    onClick={() => handleToggleConsonant(consonant.character)}
                    title={`${consonant.character} ${consonant.name} (${triClass.label})`}
                    className={`p-1.5 rounded-lg border text-center relative flex flex-col items-center justify-center transition cursor-pointer select-none ${
                      isSelected 
                        ? "bg-slate-900 text-white border-slate-900 shadow-3xs" 
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <span className="text-sm font-bold block">{consonant.character}</span>
                    <span className="text-[10px] opacity-75 mt-0.5">{consonant.name}</span>
                    <span className={`absolute top-0.5 right-0.5 w-1 h-1 rounded-full ${
                      triClass.label === "อักษรสูง" ? "bg-red-400" : triClass.label === "อักษรกลาง" ? "bg-amber-400" : "bg-cyan-400"
                    }`} />
                  </button>
                );
              })}
              {filteredSelectionAlphabet.length === 0 && (
                <div className="col-span-6 text-center text-xs text-slate-400 py-4">ไม่พบตัวอักษรทีี่ค้นหา</div>
              )}
            </div>
            
            <div className="text-[9px] text-slate-400 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 bg-red-400 rounded-full" />อักษรสูง
              <span className="inline-block w-1.5 h-1.5 bg-amber-400 rounded-full" />อักษรกลาง
              <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full" />อักษรต่ำ
              <span className="text-slate-300">|</span> ผู้ใช้คลิกเพื่อเปิด-ปิดอักษรได้อิสระ
            </div>
          </div>

          {/* User Guide Card */}
          <div className="bg-indigo-900 text-indigo-50 rounded-2xl p-5 border border-indigo-950 shadow-md">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1 bg-indigo-950/40 p-1 rounded-md mb-2">
              <Info className="w-3.5 h-3.5" />
              <span>พิมพ์แบบจับคู่ความเหมาะสม</span>
            </h4>
            <ul className="text-[11px] list-disc list-inside space-y-1 opacity-90 font-sarabun">
              <li>ใช้เว็บจัดวาง 2-4 ตัวเพื่อความสวยงาม</li>
              <li>แบบ <strong>2 ตัวต่อแผ่น</strong> เหมาะสำหรับเด็กเริ่มจับดินสอ มีพยัญชนะขนาดใหญ่ 12 เซนติเมตร</li>
              <li>หลังกด <span className="underline">สั่งพิมพ์</span> ให้เลือกปลายทางเป็น <strong>"บันทึกเป็น PDF"</strong> ในหน้าดาวน์โหลดของเบราว์เซอร์ เพื่อให้ระบบเขียนเส้นปะคมชัดที่สุด</li>
            </ul>
          </div>

        </div>

        {/* RIGHT COLUMN: WORKSPACE PAPER PREVIEW (with scale/zoom) */}
        <div className="flex-1 flex flex-col gap-4 no-print">
          
          {/* Top Panel Controls */}
          <div className="no-print bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-pink-500" />
              <span>พื้นที่พรีวิวใบงานก่อนแผ่นพิมพ์จริง ({paginatedAlphabet.length} หน้ากระดาษ A4 ทั้งหมด)</span>
            </div>

            {/* Slider to Zoom in/out of the preview */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span>ขนาดพรีวิว:</span>
              <button 
                onClick={() => setZoomPercent(prev => Math.max(40, prev - 10))} 
                className="p-1 rounded bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5 text-slate-600" />
              </button>
              <span className="font-mono text-xs w-10 text-center font-bold text-slate-700">{zoomPercent}%</span>
              <button 
                onClick={() => setZoomPercent(prev => Math.min(130, prev + 10))} 
                className="p-1 rounded bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-slate-600" />
              </button>
              <button 
                onClick={() => setZoomPercent(75)} 
                className="text-[10px] px-1.5 py-0.5 bg-slate-150 rounded border hover:bg-slate-200 ml-1 text-slate-600 cursor-pointer"
              >
                รีเซ็ต
              </button>
            </div>
          </div>

          {/* IF NO CONSONANT SELECTED */}
          {selectedCount === 0 ? (
            <div className="no-print flex-1 bg-white min-h-[400px] border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 text-3xl mb-3">
                ✏️
              </div>
              <p className="font-semibold text-slate-800 text-sm">ไม่พบพยัญชนะที่ถูกเลือกสำหรับพิมพ์ใบงาน</p>
              <p className="text-xs text-slate-400 mt-1 max-w-[280px]">กรุณากดเลือกพยัญชนะไทยอย่างน้อย 1 ตัวในแผงควบคุมด้านซ้ายเพื่อเป็นใบงาน</p>
              <button
                onClick={() => handleToggleAll(true)}
                className="px-4 py-1.5 mt-4 bg-pink-500 text-white rounded-lg text-xs font-semibold hover:bg-pink-600 transition cursor-pointer"
              >
                คลิกเพื่อเลือกพยัญชนะทั้งหมด 44 ตัว
              </button>
            </div>
          ) : (
            
            /* WRAPPER RENDER ALL A4 PAGES (with CSS scaling based on zoom state) */
            <div className="flex flex-col items-center gap-8 overflow-x-auto py-4">
              {paginatedAlphabet.map((pageGroup, pageIndex) => (
                <div 
                  key={pageIndex} 
                  className="relative origin-top transition-transform shadow-xl"
                  style={{
                    transform: `scale(${zoomPercent / 100})`,
                    marginBottom: `calc((297mm * (${zoomPercent / 100} - 1)) + 24px)`
                  }}
                >
                  
                  {/* Dynamic Page Header Tag for Editor mode */}
                  <div className="no-print absolute -top-6 left-0 right-0 flex items-center justify-between text-[11px] text-slate-400 px-2 select-none">
                    <span className="font-semibold text-pink-500">หน้าใบงาน A4 แผ่นที่ {pageIndex + 1}/{paginatedAlphabet.length}</span>
                    <span>ขนาดหน้ากระดาษ: 210 มม. × 297 มม. (สัดส่วนพิมพ์จริง)</span>
                  </div>

                  {/* ACTUAL RENDERED A4 CARD */}
                  <div 
                    className="web-a4-page border border-slate-300 print-page rounded-2xl cute-dots-bg"
                    // Add distinct ID for automated canvas PDF collection
                    id={`page-target-${pageIndex}`}
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                  >
                    
                    {/* Page Header (Teacher customize-able) */}
                    <div className="w-full flex justify-between items-start border-b-2 border-slate-300 pb-2 mb-2 select-none">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-800 leading-tight">{headerText}</h4>
                        <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-2">
                          <span className="font-semibold text-pink-600 bg-pink-100/50 px-1.5 py-0.2 rounded">วิชาภาษาไทย</span>
                        </div>
                      </div>
                    </div>

                    {/* Student Name Information Block */}
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 mb-2 select-none text-[11px] text-slate-600 font-semibold tracking-wide flex justify-between">
                      <span>{studentNameTemplate}</span>
                    </div>

                    {/* DYNAMIC CARD GRID DEPENDING ON SELECTED LAYOUT (2, 3, or 4 consonants per page) */}
                    <div className={`flex-1 flex gap-4 ${
                      selectedLayout === "2" 
                        ? "flex-col justify-around py-2" 
                        : selectedLayout === "3" 
                        ? "flex-col justify-between py-1"
                        : "grid grid-cols-2 grid-rows-2 gap-3 p-1"
                    }`}>
                      {pageGroup.map((consonant, consIdx) => {
                        const triClass = getTriclass(consonant.character);
                        
                        // Style 1: reading style (ฝึกอ่าน เขียนเส้นประ)
                        if (worksheetStyle === "reading") {
                          return (
                            <div 
                              key={consonant.character}
                              className={`flex flex-1 border-2 rounded-2xl p-4 bg-white/95 relative shadow-3xs transition-all ${activeTheme.border} ${
                                selectedLayout === "4" ? "flex-col justify-between p-3" : "flex-row items-center justify-between"
                              }`}
                            >
                              
                              {/* Left/Upper info area containing main characters */}
                              <div className={`flex items-center gap-4 ${
                                selectedLayout === "4" ? "w-full justify-between" : ""
                              }`}>
                                {/* Huge Consonant rendering styled with custom font */}
                                <div className="flex flex-col items-center select-none font-bold">
                                  <span className={`${activeFontClass} leading-none ${
                                    selectedLayout === "2" 
                                      ? "text-[180px] mb-2" 
                                      : selectedLayout === "3" 
                                      ? "text-[135px] mb-1" 
                                      : "text-[105px]"
                                  }`}>
                                    {consonant.character}
                                  </span>
                                  {/* Consonant description sound bubble */}
                                  <span className="bg-slate-900 text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                                    {consonant.pronunciation}
                                  </span>
                                </div>

                                {/* Divider dotted */}
                                <div className={`w-0.5 h-16 border-l-2 border-dashed ${activeTheme.border} ${selectedLayout === "4" ? "hidden" : ""}`} />

                                {/* Illustration Symbol & text */}
                                <div className="flex flex-col select-none">
                                  {/* Mnemonic bubble title */}
                                  <div className="flex items-center gap-2">
                                    <span className={`text-sm font-extrabold px-3 py-0.5 rounded-lg border-2 ${activeTheme.accent}`}>
                                      {consonant.character} {consonant.name}
                                    </span>
                                  </div>

                                  {/* Traditional memorization poetryphrase */}
                                  {showTraditionalPhrases && (
                                    <span className="text-xs font-bold text-slate-500 mt-1">
                                      {consonant.fullname}
                                    </span>
                                  )}

                                  {/* High Mid Low class badge */}
                                  <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                                    <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full border ${triClass.color}`}>
                                      {triClass.label}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Right illustration / Tracing Guide Area */}
                              <div className={`flex items-center gap-4 ${
                                selectedLayout === "4" ? "w-full flex-col mt-2 pt-2 border-t border-dashed border-slate-200" : "flex-1 ml-6 justify-end"
                              }`}>
                                
                                {/* Right Cute illustration Box */}
                                <div className={`flex flex-col items-center justify-center p-2 bg-slate-50/50 rounded-xl border border-dashed select-none relative ${activeTheme.border} ${
                                  selectedLayout === "2" ? "w-28 h-28 text-6xl" : selectedLayout === "3" ? "w-22 h-22 text-5xl" : "hidden"
                                }`}>
                                  <div className="relative z-10 transition-transform active:scale-125 select-none">
                                    {renderCuteIllustration(
                                      consonant.emoji,
                                      selectedLayout === "2" ? "w-14 h-14 animate-pulse" : "w-10 h-10 animate-pulse",
                                      consonant.name
                                    )}
                                  </div>
                                  <span className="text-xs font-bold text-slate-500 block mt-1">{consonant.name}</span>
                                </div>

                                {/* Dash Guidelines Tracing Rows */}
                                {showTracingGuides ? (
                                  <div className="flex-1 flex flex-col gap-2 w-full">
                                    {Array.from({ length: selectedLayout === "4" ? 2 : guidelineRows }).map((_, rowIdx) => (
                                      <div key={rowIdx} className="h-6 w-full relative border-b border-dashed border-slate-300 flex items-center">
                                        {/* Guide Lines */}
                                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dotted border-slate-200 w-full" />
                                        
                                        {/* Row with repeated characters tracer */}
                                        <div className="absolute inset-0 flex justify-around items-center px-1">
                                          {Array.from({ length: selectedLayout === "2" ? 7 : selectedLayout === "3" ? 5 : 4 }).map((_, charIdx) => (
                                            <span 
                                              key={charIdx} 
                                              className={`${activeFontClass} font-bold select-none text-transparent leading-none text-center ${
                                                selectedLayout === "2" ? "text-xl" : "text-base"
                                              }`}
                                              style={{ 
                                                WebkitTextStroke: "1px #cbd5e1"
                                              }}
                                            >
                                              {consonant.character}
                                            </span>
                                          ))}
                                          {/* Mini start pencil indicator */}
                                          <span className="text-[9px] opacity-25 select-none">✏️</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  /* Large Custom Blank Writing Box for teachers */
                                  <div className="flex-1 h-20 border-2 border-dashed border-slate-300 rounded-xl bg-white flex items-center justify-center text-xs text-slate-400 font-medium select-none">
                                    [พื้นที่ฝึกวาดรูป หรือคัดตัวอักษรเพิ่มเติม 🎨]
                                  </div>
                                )}
                              </div>
                              
                            </div>
                          );
                        }

                        // Style 2: Coloring style (ระบายสีใหญ่ๆ)
                        if (worksheetStyle === "coloring") {
                          return (
                            <div 
                              key={consonant.character}
                              className={`flex flex-1 border-2 rounded-2xl p-4 bg-white/95 relative shadow-3xs transition-all ${activeTheme.border} ${
                                selectedLayout === "4" ? "flex-col justify-between p-3" : "flex-row items-center justify-between gap-6"
                              }`}
                            >
                              {/* Left Hollow letter for coloring */}
                              <div className="flex flex-col items-center flex-1 justify-center relative select-none">
                                <span className="absolute -top-2 -left-2 text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1 group-hover:block bg-white">
                                  ระบายสีอักษร
                                </span>
                                
                                <span 
                                  className={`${activeFontClass} font-extrabold text-transparent leading-none z-10 select-none ${
                                    selectedLayout === "2" 
                                      ? "text-[210px]" 
                                      : selectedLayout === "3" 
                                      ? "text-[150px]" 
                                      : "text-[120px]"
                                  }`}
                                  style={{ 
                                    WebkitTextStroke: "3px #0f172a",
                                    letterSpacing: "0.05em"
                                  }}
                                >
                                  {consonant.character}
                                </span>
                                <span className="text-xs font-bold text-slate-500 mt-2">ระบายสี พยัญชนะ "{consonant.character}"</span>
                              </div>

                              {/* Middle divide line */}
                              <div className={`w-0.5 h-20 border-l-2 border-dotted ${activeTheme.border} ${selectedLayout === "4" ? "hidden" : ""}`} />

                              {/* Right blank creative drawing box based on representational objects */}
                              <div className="flex-1 flex flex-col gap-2 justify-center h-full w-full">
                                <div className="flex justify-between items-center select-none">
                                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                                    <span>ระบายสี {consonant.name}</span>
                                    {renderCuteIllustration(consonant.emoji, "w-5 h-5", consonant.name)}
                                  </span>
                                  <span className="text-[10px] text-slate-400">{consonant.fullname}</span>
                                </div>
                                
                                {/* Large blank frame with dashed edge for children to sketch drawing */}
                                <div className="border-2 border-dashed border-slate-300 rounded-xl flex-1 min-h-[70px] bg-slate-50/50 flex flex-col items-center justify-center p-3 text-center select-none relative overflow-hidden">
                                  <div className="opacity-15">
                                    {renderCuteIllustration(consonant.emoji, "w-14 h-14", consonant.name)}
                                  </div>
                                  <span className="text-[9px] text-slate-400 font-bold mt-1 block group">
                                    ฝึกวาดรูปหรือระบายสี '{consonant.name}' ตรงนี้ 🎨
                                  </span>
                                  <span className="absolute bottom-1 right-2 text-slate-300 text-[9.5px]">หนูรักภาษาไทย</span>
                                </div>
                              </div>
                            </div>
                          );
                        }

                        // Style 3: Portable Flashcards style
                        if (worksheetStyle === "flashcard") {
                          const cardTheme = CUTE_CARD_THEMES[themeColor] || CUTE_CARD_THEMES.pink;
                          const isLayout4 = selectedLayout === "4";
                          const isLayout2 = selectedLayout === "2";
                          const isLayout3 = selectedLayout === "3";

                          return (
                            <div 
                              key={consonant.character}
                              className="flex-1 bg-white relative rounded-3xl p-1 overflow-hidden transition-all duration-300"
                            >
                              {/* Scissor dotted cut line boundary outside the card */}
                              <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-3xl pointer-events-none" />
                              
                              {/* Card Body */}
                              <div className={`m-1.5 h-[calc(100%-12px)] rounded-2xl border-4 ${cardTheme.border} ${cardTheme.cardBg} p-3.5 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition`}>
                                
                                {/* Background Decorative Elements */}
                                <div className="absolute top-8 left-4 w-12 h-12 bg-yellow-100 rounded-full opacity-20 filter blur-xs" />
                                <div className="absolute bottom-12 right-6 w-16 h-16 bg-pink-100 rounded-full opacity-20 filter blur-xs" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sky-100 rounded-full opacity-10 filter blur-sm" />
                                
                                {/* Card Header Block */}
                                <div className="flex items-center justify-between z-10 select-none pb-1.5 border-b border-dashed border-slate-200">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-md font-bold text-slate-500">
                                      ลำดับที่ {THAI_ALPHABET.findIndex(item => item.character === consonant.character) + 1}
                                    </span>
                                    <span className="text-xs font-bold text-slate-700">
                                      บัตรคำพยัญชนะไทยสุดคิ้วท์ 🎪
                                    </span>
                                  </div>
                                  
                                  {/* Multi-Stars decorative or Triclass indicator */}
                                  <div className="flex items-center gap-1">
                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shadow-3xs ${triClass.color}`}>
                                      {triClass.label}
                                    </span>
                                  </div>
                                </div>

                                {/* Card Centerpiece Grid Layout matching selected spacing */}
                                <div className={`flex items-center gap-4 py-2 my-auto z-10 ${
                                  isLayout4 ? "flex-col justify-center text-center gap-1.5" : "flex-row justify-around"
                                }`}>
                                  
                                  {/* Left: Giant playful consonant box */}
                                  <div className="flex flex-col items-center justify-center">
                                    <div className="relative group">
                                      {/* Playful drop background bubble */}
                                      <div className={`absolute -inset-1.5 bg-${themeColor === 'mono' ? 'slate-100' : themeColor + '-100'} bg-opacity-70 rounded-2xl opacity-75 blur-xs transition-all duration-300 group-hover:opacity-100`} />
                                      <div className={`relative bg-white border border-slate-200 shadow-2xs rounded-2xl px-5 py-2 flex flex-col items-center justify-center ${
                                        isLayout2 ? "min-w-[195px] px-6 py-3" : isLayout3 ? "min-w-[155px]" : "min-w-[115px]"
                                      }`}>
                                        <span className={`${activeFontClass} font-black tracking-tight leading-none text-slate-900 ${
                                          isLayout2 
                                            ? "text-[210px]" 
                                            : isLayout3 
                                            ? "text-[160px]" 
                                            : "text-[115px]"
                                        }`}>
                                          {consonant.character}
                                        </span>
                                        <div className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white bg-slate-900 shadow-4xs mt-1">
                                          {consonant.pronunciation.split('-')[0]}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right: Adorable cartoon animal badge */}
                                  <div className="flex flex-col items-center">
                                    <div className={`relative flex items-center justify-center transition hover:scale-105 ${
                                      isLayout2 ? "w-28 h-28 text-6xl" : isLayout3 ? "w-22 h-22 text-5xl" : "w-18 h-18 text-4xl"
                                    }`}>
                                      <div className="filter drop-shadow-md">
                                        {renderCuteIllustration(
                                          consonant.emoji,
                                          isLayout2 ? "w-28 h-28 animate-pulse" : isLayout3 ? "w-22 h-22 animate-pulse" : "w-18 h-18 animate-pulse",
                                          consonant.name
                                        )}
                                      </div>
                                    </div>
                                    
                                    {/* Traditional mnemonic sub banner */}
                                    <div className="mt-2 text-center select-none">
                                      <h5 className="text-xs font-black text-slate-800 tracking-wide">
                                        {consonant.character} {consonant.name}
                                      </h5>
                                      <span className="text-[9px] bg-pink-50 text-pink-700 border border-pink-200/60 font-bold px-1.5 py-0.2 rounded mt-0.5 inline-block">
                                        คำศัพท์: {consonant.name}
                                      </span>
                                    </div>
                                  </div>

                                </div>

                                {/* Card Footer Poetry / Spelling Guide */}
                                <div className="border-t-2 border-dashed border-slate-200 pt-2 z-10 select-none">
                                  {showTraditionalPhrases && (
                                    <p className={`text-center font-extrabold leading-title tracking-wide text-slate-700 bg-white/70 backdrop-blur-3xs py-1 px-2 rounded-lg border border-slate-150 ${
                                      isLayout4 ? "text-[11px]" : "text-xs"
                                    }`}>
                                      🌻 "{consonant.fullname}"
                                    </p>
                                  )}
                                  
                                  <div className="flex items-center justify-between text-[9px] text-slate-400 mt-1.5 px-1 font-semibold">
                                    <span className="text-slate-500 bg-slate-50 px-1.5 py-0.2 rounded">เสียง: {consonant.pronunciation.split('-')[0]}</span>
                                    <span className="font-extrabold text-[#f472b6] flex items-center gap-1">
                                      <span>เรียนสนุก คัดสนุก</span>
                                      <span>💖</span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                          );
                        }

                        return null;
                      })}
                    </div>

                    {/* A4 Page Footer (Including page numbering) */}
                    <div className="w-full flex justify-end items-center text-[10px] text-slate-400 border-t border-slate-200 mt-2 pt-2 select-none font-sans">
                      <div className="flex items-center gap-2 font-semibold text-slate-700">
                        <span>หน้า {pageIndex + 1} / {paginatedAlphabet.length}</span>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* FIXED PRINT ONLY AREA CONTAINING FULL HIGH RESOLUTION VECTOR PRINT PAGES */}
      {/* (This stays perfectly quiet in web mode but handles window.print() beautifully with pixel-perfect sizes) */}
      <div className="print-area hidden print:block bg-white">
        {paginatedAlphabet.map((pageGroup, pageIndex) => (
          <div 
            key={pageIndex} 
            className="print-page w-[210mm] h-[297mm] flex flex-col justify-between bg-white overflow-hidden p-[12mm] box-border"
            style={{ fontFamily: "Sarabun, sans-serif" }}
          >
            {/* Page Header */}
            <div className="w-full flex justify-between items-start border-b-2 border-slate-300 pb-2 mb-2">
              <div className="flex-1">
                <h4 className="text-base font-bold text-slate-800 leading-tight">{headerText}</h4>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                  <span className="font-semibold text-pink-600 bg-pink-100/50 px-1.5 py-0.2 rounded">วิชาภาษาไทย</span>
                </div>
              </div>
            </div>

            {/* Student metadata */}
            <div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 mb-2 text-[11px] text-slate-600 font-semibold flex justify-between">
              <span>{studentNameTemplate}</span>
            </div>

            {/* Consonants list */}
            <div className={`flex-1 flex gap-4 ${
              selectedLayout === "2" 
                ? "flex-col justify-around py-2" 
                : selectedLayout === "3" 
                ? "flex-col justify-between py-1"
                : "grid grid-cols-2 grid-rows-2 gap-3 p-1"
            }`}>
              {pageGroup.map((consonant) => {
                const triClass = getTriclass(consonant.character);

                if (worksheetStyle === "reading") {
                  return (
                    <div 
                      key={consonant.character}
                      className={`flex flex-1 border-2 rounded-2xl p-4 bg-white relative ${activeTheme.border} ${
                        selectedLayout === "4" ? "flex-col justify-between p-3" : "flex-row items-center justify-between"
                      }`}
                    >
                      <div className={`flex items-center gap-4 ${selectedLayout === "4" ? "w-full justify-between" : ""}`}>
                        <div className="flex flex-col items-center">
                          <span className={`${activeFontClass} font-bold text-slate-900 leading-none ${
                            selectedLayout === "2" ? "text-[180px] mb-2" : selectedLayout === "3" ? "text-[135px] mb-1" : "text-[105px]"
                          }`}>
                            {consonant.character}
                          </span>
                          <span className="bg-slate-900 text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                            {consonant.pronunciation}
                          </span>
                        </div>

                        <div className={`w-0.5 h-16 border-l-2 border-dashed ${activeTheme.border} ${selectedLayout === "4" ? "hidden" : ""}`} />

                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-extrabold px-3 py-0.5 rounded-lg border-2 ${activeTheme.accent}`}>
                              {consonant.character} {consonant.name}
                            </span>
                          </div>

                          {showTraditionalPhrases && (
                            <span className="text-xs font-bold text-slate-500 mt-1">
                              {consonant.fullname}
                            </span>
                          )}

                          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full border ${triClass.color}`}>
                              {triClass.label}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`flex items-center gap-4 ${selectedLayout === "4" ? "w-full flex-col mt-2 pt-2 border-t border-dashed border-slate-200" : "flex-1 ml-6 justify-end"}`}>
                        <div className={`flex flex-col items-center justify-center p-2 bg-slate-50 rounded-xl border border-dashed relative ${activeTheme.border} ${
                          selectedLayout === "2" ? "w-28 h-28 text-6xl" : selectedLayout === "3" ? "w-22 h-22 text-5xl" : "hidden"
                        }`}>
                          <div className="relative z-10 select-none">
                            {renderCuteIllustration(
                              consonant.emoji,
                              selectedLayout === "2" ? "w-14 h-14" : "w-10 h-10",
                              consonant.name
                            )}
                          </div>
                          <span className="text-xs font-bold text-slate-500 block mt-1">{consonant.name}</span>
                        </div>

                        {showTracingGuides ? (
                          <div className="flex-1 flex flex-col gap-2 w-full">
                            {Array.from({ length: selectedLayout === "4" ? 2 : guidelineRows }).map((_, rowIdx) => (
                              <div key={rowIdx} className="h-6 w-full relative border-b border-dashed border-slate-300 flex items-center">
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dotted border-slate-200 w-full" />
                                <div className="absolute inset-0 flex justify-around items-center px-1">
                                  {Array.from({ length: selectedLayout === "2" ? 7 : selectedLayout === "3" ? 5 : 4 }).map((_, charIdx) => (
                                    <span 
                                      key={charIdx} 
                                      className={`${activeFontClass} font-bold text-transparent leading-none text-center ${
                                        selectedLayout === "2" ? "text-xl" : "text-base"
                                      }`}
                                      style={{ WebkitTextStroke: "1px #cbd5e1" }}
                                    >
                                      {consonant.character}
                                    </span>
                                  ))}
                                  <span className="text-[9px] opacity-25">✏️</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex-1 h-20 border-2 border-dashed border-slate-300 rounded-xl bg-white flex items-center justify-center text-xs text-slate-400 font-medium">
                            [พื้นที่ฝึกวาดรูป หรือคัดตัวอักษรเพิ่มเติม 🎨]
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                if (worksheetStyle === "coloring") {
                  return (
                    <div 
                      key={consonant.character}
                      className={`flex flex-1 border-2 rounded-2xl p-4 bg-white relative ${activeTheme.border} ${
                        selectedLayout === "4" ? "flex-col justify-between p-3" : "flex-row items-center justify-between gap-6"
                      }`}
                    >
                      <div className="flex flex-col items-center flex-1 justify-center relative">
                        <span className="absolute -top-2 -left-2 text-xs font-bold text-slate-300 border border-slate-200 rounded px-1 uppercase bg-white">
                          Color Me!
                        </span>
                        <span 
                          className={`${activeFontClass} font-extrabold text-transparent leading-none z-10 ${
                            selectedLayout === "2" ? "text-[210px]" : selectedLayout === "3" ? "text-[150px]" : "text-[120px]"
                          }`}
                          style={{ WebkitTextStroke: "3px #0f172a" }}
                        >
                          {consonant.character}
                        </span>
                        <span className="text-xs font-bold text-slate-500 mt-2">ระบายสี พยัญชนะ "{consonant.character}"</span>
                      </div>

                      <div className={`w-0.5 h-20 border-l-2 border-dotted ${activeTheme.border} ${selectedLayout === "4" ? "hidden" : ""}`} />

                      <div className="flex-1 flex flex-col gap-2 justify-center h-full w-full">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                            <span>ระบายสี {consonant.name}</span>
                            {renderCuteIllustration(consonant.emoji, "w-5 h-5", consonant.name)}
                          </span>
                          <span className="text-[10px] text-slate-400">{consonant.fullname}</span>
                        </div>
                        
                        <div className="border-2 border-dashed border-slate-300 rounded-xl flex-1 min-h-[70px] bg-slate-50 flex flex-col items-center justify-center p-3 text-center relative overflow-hidden">
                          <div className="opacity-15">
                            {renderCuteIllustration(consonant.emoji, "w-14 h-14", consonant.name)}
                          </div>
                          <span className="text-[9px] text-slate-400 font-bold mt-1 block">
                            ฝึกวาดรูปหรือระบายสี '{consonant.name}' ตรงนี้ 🎨
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (worksheetStyle === "flashcard") {
                  const cardTheme = CUTE_CARD_THEMES[themeColor] || CUTE_CARD_THEMES.pink;
                  const isLayout4 = selectedLayout === "4";
                  const isLayout2 = selectedLayout === "2";
                  const isLayout3 = selectedLayout === "3";

                  return (
                    <div 
                      key={consonant.character}
                      className="flex-1 bg-white relative rounded-3xl p-1 overflow-hidden"
                    >
                      {/* Scissor dotted cut line boundary outside the card */}
                      <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-3xl pointer-events-none" />
                      
                      {/* Card Body */}
                      <div className={`m-1.5 h-[calc(100%-12px)] rounded-2xl border-4 ${cardTheme.border} ${cardTheme.cardBg} p-3.5 flex flex-col justify-between relative overflow-hidden shadow-xs hover:shadow-md transition`}>
                        
                        {/* Background Decorative Elements */}
                        <div className="absolute top-8 left-4 w-12 h-12 bg-yellow-105 rounded-full opacity-20 filter blur-xs" />
                        <div className="absolute bottom-12 right-6 w-16 h-16 bg-pink-105 rounded-full opacity-20 filter blur-xs" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sky-105 rounded-full opacity-10 filter blur-sm" />
                        
                        {/* Card Header Block */}
                        <div className="flex items-center justify-between z-10 pb-1.5 border-b border-dashed border-slate-200/80">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-md font-bold text-slate-500">
                              ลำดับที่ {THAI_ALPHABET.findIndex(item => item.character === consonant.character) + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-700">
                              บัตรคำพยัญชนะไทยสุดคิ้วท์ 🎪
                            </span>
                          </div>
                          
                          {/* Multi-Stars decorative or Triclass indicator */}
                          <div className="flex items-center gap-1">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shadow-3xs ${triClass.color}`}>
                              {triClass.label}
                            </span>
                          </div>
                        </div>

                        {/* Card Centerpiece Grid Layout matching selected spacing */}
                        <div className={`flex items-center gap-4 py-2 my-auto z-10 ${
                          isLayout4 ? "flex-col justify-center text-center gap-1.5" : "flex-row justify-around"
                        }`}>
                          
                          {/* Left: Giant playful consonant box */}
                          <div className="flex flex-col items-center justify-center">
                            <div className="relative group">
                              {/* Playful drop background bubble */}
                              <div className={`absolute -inset-1.5 bg-${themeColor === 'mono' ? 'slate-100' : themeColor + '-100'} bg-opacity-70 rounded-2xl opacity-75 blur-xs transition-all duration-300 group-hover:opacity-100`} />
                              <div className={`relative bg-white border border-slate-200/80 shadow-2xs rounded-2xl px-5 py-2 flex flex-col items-center justify-center ${
                                isLayout2 ? "min-w-[195px] px-6 py-3" : isLayout3 ? "min-w-[155px]" : "min-w-[115px]"
                              }`}>
                                <span className={`${activeFontClass} font-black tracking-tight leading-none text-slate-900 ${
                                  isLayout2 
                                    ? "text-[210px]" 
                                    : isLayout3
                                    ? "text-[160px]" 
                                    : "text-[115px]"
                                }`}>
                                  {consonant.character}
                                </span>
                                <div className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white bg-slate-900 shadow-4xs mt-1">
                                  {consonant.pronunciation.split('-')[0]}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right: Adorable cartoon animal badge */}
                          <div className="flex flex-col items-center">
                            <div className={`relative flex items-center justify-center transition hover:scale-105 ${
                              isLayout2 ? "w-28 h-28 text-6xl" : isLayout3 ? "w-22 h-22 text-5xl" : "w-18 h-18 text-4xl"
                            }`}>
                              <div className="filter drop-shadow-md">
                                {renderCuteIllustration(
                                  consonant.emoji,
                                  isLayout2 ? "w-28 h-28" : isLayout3 ? "w-22 h-22" : "w-18 h-18",
                                  consonant.name
                                )}
                              </div>
                            </div>
                            
                            {/* Traditional mnemonic sub banner */}
                            <div className="mt-2 text-center">
                              <h5 className="text-xs font-black text-slate-800 tracking-wide">
                                {consonant.character} {consonant.name}
                              </h5>
                              <span className="text-[9px] bg-pink-50 text-pink-700 border border-pink-200/60 font-bold px-1.5 py-0.2 rounded mt-0.5 inline-block">
                                คำศัพท์: {consonant.name}
                              </span>
                            </div>
                          </div>

                        </div>

                        {/* Card Footer Poetry / Spelling Guide */}
                        <div className="border-t-2 border-dashed border-slate-200/80 pt-2 z-10">
                          {showTraditionalPhrases && (
                            <p className={`text-center font-extrabold leading-title tracking-wide text-slate-700 bg-white/70 backdrop-blur-3xs py-1 px-2 rounded-lg border border-slate-150 ${
                              isLayout4 ? "text-[11px]" : "text-xs"
                            }`}>
                              🌻 "{consonant.fullname}"
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between text-[9px] text-slate-400 mt-1.5 px-1 font-semibold">
                            <span className="text-slate-500 bg-slate-50 px-1.5 py-0.2 rounded">เสียง: {consonant.pronunciation.split('-')[0]}</span>
                            <span className="font-extrabold text-[#f472b6] flex items-center gap-1">
                              <span>เรียนสนุก คัดสนุก</span>
                              <span>💖</span>
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* A4 Page Footer */}
            <div className="w-full flex justify-end items-center text-[10px] text-slate-400 border-t border-slate-200 mt-2 pt-2">
              <div className="flex items-center gap-2 font-semibold text-slate-700">
                <span>หน้า {pageIndex + 1} / {paginatedAlphabet.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL OVERLAY: RENDERING PROCESS LOADER */}
      {isExporting && (
        <div className="no-print fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border flex flex-col items-center text-center">
            
            {/* Spinning Indicator */}
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
              <RefreshCw className="w-10 h-10 text-pink-550 animate-spin text-pink-500" />
            </div>

            <h3 className="font-bold text-slate-900 text-base">กำลังส่งออกไฟล์ PDF ของคุณ...</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-[280px]">
              แอปพลิเคชันกำลังนำเข้าหน้าใบงานแผ่นพับเพื่อรวมเข้าเป็นหน้าเดียว กรุณาอย่าปิดหน้าต่างนี้...
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-4">
              <div 
                className="bg-pink-500 h-full transition-all duration-300" 
                style={{ width: `${(exportProgress / exportTotal) * 100}%` }}
              />
            </div>
            
            <span className="text-xs font-mono font-bold text-slate-700 mt-2">
              ประมวลผลแล้ว {exportProgress} จาก {exportTotal} แผ่นงาน
            </span>
          </div>
        </div>
      )}

      {/* PDF SAVING MODAL INSTRUCTIONS TOOLTIP */}
      {showPdfInstructions && (
        <div className="no-print fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border flex flex-col gap-4">
            <div className="flex items-center gap-2.5 pb-2 border-b">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <h3 className="font-bold text-slate-900">ดาวน์โหลด PDF ของคุณสำเร็จแล้ว!</h3>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              ขอขอบคุณสำหรับการใช้งาน 🥳 คุณสามารถพิมพ์สิ่งกระดาษขนาด <strong>A4</strong> ที่ดาวน์โหลดมานี้เพื่อฝึกสอนตัวอักษรไทยให้เด็กๆ ทันที
            </p>

            <div className="bg-slate-50 border rounded-xl p-3 text-[11px] text-slate-500 flex flex-col gap-1.5">
              <span className="font-bold text-slate-700 flex items-center gap-1">💡 เคล็ดลับเพิ่มเติมในการส่งออก:</span>
              <span>เพื่อคุณภาพเวกเตอร์ 100% (ตัวอักษรไม่แตกเมื่อซูมลึกๆ) แนะนำให้กดปุ่ม <strong>"พิมพ์ใบงาน (A4) / บันทึก PDF เวกเตอร์ซีแลปส์"</strong></span>
              <span>จากนั้นเปลี่ยนหัวข้อปลายทาง (Printer Target Area) เป็น <strong>"บันทึกเป็น PDF / Save as PDF"</strong> ในหน้าเบราว์เซอร์หลักของคุณ</span>
            </div>

            <button
              onClick={() => setShowPdfInstructions(false)}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              รับทราบ และปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}

      {/* SUB FOOTER */}
      <footer className="no-print bg-slate-800 text-slate-400 py-6 px-4 text-center text-xs mt-auto font-sarabun border-t border-slate-700">
        <p className="opacity-90">สร้างสรรค์เพื่อการกุศลและโรงเรียนประถมในประเทศไทย สนับสนุนการศึกษาภาษาไทยครบ 44 ตัวพยัญชนะ</p>
        <p className="text-[10px] text-slate-500 mt-1">© 2026 Titleza. All rights reserved. พัฒนาโดย AI Studio Build.</p>
      </footer>

    </div>
  );
}

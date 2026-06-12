import React from "react";

interface ThaiIllustrationProps {
  character: string;
  className?: string;
}

export const ThaiIllustration: React.FC<ThaiIllustrationProps> = ({ character, className = "w-full h-full" }) => {
  // Common container with responsive aspect ratio
  const wrapperClass = `inline-block select-none ${className}`;

  switch (character) {
    case "ก": // ไก่ - Chicken
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="53" r="38" fill="#FFFBE6" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="50" cy="46" r="28" fill="#FDE047" />
          {/* Beak */}
          <path d="M 50 48 L 44 54 L 50 60 Z" fill="#EA580C" />
          <path d="M 50 48 L 56 54 L 50 60 Z" fill="#F97316" />
          {/* Comb (หงอนไก่) */}
          <path d="M 40 18 Q 50 8 50 18 Q 60 8 60 18 Q 50 14 40 18" fill="#EF4444" />
          {/* Eyes */}
          <circle cx="42" cy="42" r="3.5" fill="#1E293B" />
          <circle cx="58" cy="42" r="3.5" fill="#1E293B" />
          <circle cx="43" cy="40" r="1.2" fill="#FFFFFF" />
          <circle cx="59" cy="40" r="1.2" fill="#FFFFFF" />
          {/* Cheeks */}
          <circle cx="37" cy="47" r="4" fill="#FCA5A5" opacity="0.8" />
          <circle cx="63" cy="47" r="4" fill="#FCA5A5" opacity="0.8" />
          {/* Wings */}
          <path d="M 22 46 Q 16 46 22 56 Z" fill="#FACC15" />
          <path d="M 78 46 Q 84 46 78 56 Z" fill="#FACC15" />
        </svg>
      );

    case "ข": // ไข่ - Egg
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#EEF2F6" stroke="#94A3B8" strokeWidth="3" />
          {/* Back yolk background */}
          <circle cx="50" cy="55" r="20" fill="#F59E0B" />
          <circle cx="48" cy="53" r="17" fill="#FBBF24" />
          {/* Yolk face */}
          <circle cx="44" cy="49" r="2" fill="#1E293B" />
          <circle cx="52" cy="49" r="2" fill="#1E293B" />
          <path d="M 45 54 Q 48 57 51 54" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Cracked Shell Tops */}
          <path d="M 22 60 L 32 45 L 42 55 L 50 40 L 62 50 L 70 38 L 78 60 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 22 60 A 28 28 0 0 0 78 60 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
        </svg>
      );

    case "ฃ": // ขวด - Bottle
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0FDF4" stroke="#4ADE80" strokeWidth="3" />
          {/* Bottle body */}
          <rect x="36" y="34" width="28" height="38" rx="8" fill="#FFFFFF" stroke="#22C55E" strokeWidth="2" />
          <rect x="42" y="24" width="16" height="10" rx="2" fill="#FFFFFF" stroke="#22C55E" strokeWidth="2" />
          {/* Inside liquid */}
          <rect x="39" y="46" width="22" height="22" rx="4" fill="#86EFAC" />
          {/* Straw */}
          <path d="M 50 16 L 50 30" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <path d="M 50 16 L 44 12" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          {/* Cute Face */}
          <circle cx="45" cy="40" r="2" fill="#1E293B" />
          <circle cx="55" cy="40" r="2" fill="#1E293B" />
          <path d="M 47 44 Q 50 47 53 44" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "ค": // ควาย - Buffalo
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F1F5F9" stroke="#64748B" strokeWidth="3" />
          {/* Horns */}
          <path d="M 26 36 Q 22 18 42 24 Q 32 26 31 36 Z" fill="#475569" />
          <path d="M 74 36 Q 78 18 58 24 Q 68 26 69 36 Z" fill="#475569" />
          {/* Buffalo Head */}
          <ellipse cx="50" cy="48" rx="22" ry="18" fill="#94A3B8" />
          <ellipse cx="50" cy="54" rx="16" ry="12" fill="#E2E8F0" />
          {/* Eyes */}
          <circle cx="42" cy="42" r="3" fill="#1E293B" />
          <circle cx="58" cy="42" r="3" fill="#1E293B" />
          {/* Nostrils */}
          <circle cx="45" cy="54" r="2" fill="#64748B" />
          <circle cx="55" cy="54" r="2" fill="#64748B" />
          {/* Smile */}
          <path d="M 46 60 Q 50 63 54 60" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Pink cheeks */}
          <circle cx="33" cy="48" r="3" fill="#FDA4AF" />
          <circle cx="67" cy="48" r="3" fill="#FDA4AF" />
        </svg>
      );

    case "ฅ": // คน - Person
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FDF2F8" stroke="#EC4899" strokeWidth="3" />
          {/* Face */}
          <circle cx="50" cy="46" r="20" fill="#FFEDD5" />
          {/* Wearing Cute Green Hat */}
          <path d="M 28 42 C 28 25 72 25 72 42 Z" fill="#22C55E" />
          <path d="M 24 42 L 76 42 L 72 45 L 28 45 Z" fill="#16A34A" />
          {/* Eyes */}
          <circle cx="44" cy="44" r="2.5" fill="#1E293B" />
          <circle cx="56" cy="44" r="2.5" fill="#1E293B" />
          {/* Cheeks */}
          <circle cx="38" cy="48" r="3.5" fill="#FCA5A5" />
          <circle cx="62" cy="48" r="3.5" fill="#FCA5A5" />
          {/* Smile */}
          <path d="M 46 51 Q 50 55 54 51" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          {/* Collar/Shirt */}
          <path d="M 38 65 Q 50 72 62 65 L 65 78 L 35 78 Z" fill="#3B82F6" />
        </svg>
      );

    case "ฆ": // ระฆัง - Bell
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#D97706" strokeWidth="3" />
          {/* Bell Top Link */}
          <circle cx="50" cy="22" r="7" stroke="#F59E0B" strokeWidth="3" fill="none" />
          {/* Bell Body */}
          <path d="M 35 60 C 35 32 65 32 65 60 L 68 64 C 69 66 67 68 64 68 L 36 68 C 33 68 31 66 32 64 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
          {/* Bell Clapper */}
          <circle cx="50" cy="72" r="5" fill="#B45309" />
          {/* Shiny Star Sparkle */}
          <path d="M 72 26 L 74 30 L 78 31 L 74 32 L 72 36 L 70 32 L 66 31 L 70 30 Z" fill="#FBBF24" />
          {/* Smile on Bell */}
          <circle cx="44" cy="48" r="2" fill="#78350F" />
          <circle cx="56" cy="48" r="2" fill="#78350F" />
          <path d="M 46 53 Q 50 56 54 53" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "ง": // งู - Snake
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#ECFDF5" stroke="#10B981" strokeWidth="3" />
          {/* Coiled Body */}
          <path d="M 28 66 C 24 55 40 45 40 38 C 40 28 64 28 64 42 C 64 54 44 58 44 64 C 44 72 74 72 74 62" stroke="#34D399" strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* Snake head detail */}
          <circle cx="64" cy="42" r="10" fill="#34D399" />
          {/* Face */}
          <circle cx="61" cy="40" r="1.5" fill="#064E3B" />
          <circle cx="67" cy="40" r="1.5" fill="#064E3B" />
          {/* Blushing */}
          <circle cx="58" cy="44" r="2" fill="#F87171" opacity="0.8" />
          {/* Cute pink tongue */}
          <path d="M 64 48 L 64 54 L 62 56 M 64 54 L 66 56" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "จ": // จาน - Plate
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="3" />
          {/* Outer Ring Plate */}
          <circle cx="50" cy="50" r="26" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" />
          {/* Inner Rim */}
          <circle cx="50" cy="50" r="18" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Cute smile on plate */}
          <circle cx="44" cy="46" r="2.5" fill="#0284C7" />
          <circle cx="56" cy="46" r="2.5" fill="#0284C7" />
          <path d="M 45 53 Q 50 58 55 53" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          {/* Fork & Spoon */}
          <path d="M 18 36 L 18 58 M 15 36 M 21 36 L 21 44" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="80" cy="40" rx="4" fill="#0EA5E9" />
          <path d="M 80 44 L 80 58" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "ฉ": // ฉิ่ง - Cymbals
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#D97706" strokeWidth="3" />
          {/* Connecting Red Thread */}
          <path d="M 32 44 Q 50 20 68 44" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Left Cymbal */}
          <g transform="translate(14, 34) rotate(-15)">
            <ellipse cx="14" cy="22" rx="14" ry="7" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
            <path d="M 0 22 C 0 -12 28 -12 28 22" fill="#FCD34D" stroke="#B45309" strokeWidth="2" />
            <circle cx="14" cy="10" r="4" fill="#B45309" />
          </g>
          {/* Right Cymbal */}
          <g transform="translate(54, 30) rotate(15)">
            <ellipse cx="14" cy="22" rx="14" ry="7" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
            <path d="M 0 22 C 0 -12 28 -12 28 22" fill="#FCD34D" stroke="#B45309" strokeWidth="2" />
            <circle cx="14" cy="10" r="4" fill="#B45309" />
          </g>
        </svg>
      );

    case "ช": // ช้าง - Elephant
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" />
          {/* Big ears */}
          <ellipse cx="32" cy="46" rx="16" ry="16" fill="#93C5FD" />
          <ellipse cx="32" cy="46" rx="10" ry="10" fill="#DBEAFE" />
          <ellipse cx="68" cy="46" rx="16" ry="16" fill="#93C5FD" />
          <ellipse cx="68" cy="46" rx="10" ry="10" fill="#DBEAFE" />
          {/* Head */}
          <circle cx="50" cy="48" r="19" fill="#60A5FA" />
          {/* Eyes */}
          <circle cx="43" cy="43" r="2.5" fill="#1E293B" />
          <circle cx="57" cy="43" r="2.5" fill="#1E293B" />
          {/* Trunk (งวง) */}
          <path d="M 50 54 Q 50 68 58 66 Q 64 64 62 58" fill="none" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" />
          {/* Tusks (กิ่งงา) */}
          <path d="M 41 54 Q 38 60 41 62 Z" fill="#FFFFFF" />
          <path d="M 49 54 Q 52 60 49 62 Z" fill="#FFFFFF" />
        </svg>
      );

    case "ซ": // โซ่ - Chain
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F1F5F9" stroke="#475569" strokeWidth="3" />
          {/* Connected Loops */}
          <g transform="translate(10, 0)">
            <rect x="22" y="32" width="22" height="36" rx="11" stroke="#94A3B8" strokeWidth="6" fill="none" />
            <rect x="42" y="32" width="22" height="36" rx="11" stroke="#475569" strokeWidth="6" fill="none" />
            <rect x="32" y="44" width="16" height="12" rx="4" fill="#334155" />
          </g>
          {/* Sparkling sheen */}
          <path d="M 28 26 L 31 32 L 37 32 L 32 35 L 34 40 L 28 36 Z" fill="#FFFFFF" opacity="0.6" />
        </svg>
      );

    case "ฌ": // เฌอ - Tree
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
          {/* Tree Trunk */}
          <rect x="46" y="52" width="8" height="24" rx="4" fill="#78350F" />
          {/* Foliage (ใบไม้ฟูๆหลายชั้น) */}
          <circle cx="50" cy="35" r="16" fill="#4ADE80" />
          <circle cx="39" cy="46" r="14" fill="#22C55E" />
          <circle cx="61" cy="46" r="14" fill="#22C55E" />
          {/* Apple/Fruit decoration */}
          <circle cx="44" cy="36" r="3" fill="#EF4444" />
          <circle cx="56" cy="42" r="3" fill="#EF4444" />
          <circle cx="42" cy="52" r="3" fill="#EF4444" />
          {/* Cute Face on Tree */}
          <circle cx="46" cy="44" r="1.5" fill="#14532D" />
          <circle cx="54" cy="44" r="1.5" fill="#14532D" />
          <path d="M 48 48 Q 50 50 52 48" stroke="#14532D" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "ญ": // หญิง - Woman
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFF1F2" stroke="#F43F5E" strokeWidth="3" />
          {/* Hair back */}
          <circle cx="50" cy="42" r="23" fill="#1E293B" />
          {/* Face */}
          <circle cx="50" cy="45" r="17" fill="#FDE047" />
          <circle cx="50" cy="45" r="17" fill="#FFEDD5" />
          {/* Hair front cheeks */}
          <path d="M 33 42 C 34 30 66 30 67 42 C 67 25 33 25 33 42 Z" fill="#1E293B" />
          <rect x="33" y="38" width="5" height="12" rx="2" fill="#1E293B" />
          <rect x="62" y="38" width="5" height="12" rx="2" fill="#1E293B" />
          {/* Flower in hair */}
          <circle cx="67" cy="31" r="5" fill="#EF4444" />
          <circle cx="67" cy="31" r="2" fill="#FDE047" />
          {/* Eyes & Mouth */}
          <ellipse cx="44" cy="43" rx="1.5" ry="2" fill="#1E293B" />
          <ellipse cx="56" cy="43" rx="1.5" ry="2" fill="#1E293B" />
          <path d="M 47 49 Q 50 52 53 49" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          {/* Pink Cheeks */}
          <circle cx="39" cy="47" r="3" fill="#FCA5A5" />
          <circle cx="61" cy="47" r="3" fill="#FCA5A5" />
        </svg>
      );

    case "ฎ": // ชฎา - Crown
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#D97706" strokeWidth="3" />
          {/* Multi-tiered crown (Chada) */}
          <path d="M 50 14 L 53 30 L 47 30 Z" fill="#D97706" /> {/* Spire */}
          <circle cx="50" cy="12" r="3" fill="#EF4444" /> {/* Red gem top */}
          <ellipse cx="50" cy="28" rx="4" ry="4" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
          <path d="M 36 44 L 64 44 L 60 34 L 40 34 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2" /> {/* Tier 2 */}
          <path d="M 28 58 L 72 58 L 66 44 L 34 44 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" /> {/* Tier 1 Base */}
          {/* Crown Ear flaps / Kundala (กรรเจียกจร) */}
          <path d="M 28 54 Q 20 54 26 64 Z" fill="#D97706" />
          <path d="M 72 54 Q 80 54 74 64 Z" fill="#D97706" />
          {/* Jewels */}
          <circle cx="50" cy="51" r="3" fill="#10B981" />
          <circle cx="40" cy="51" r="2.5" fill="#3B82F6" />
          <circle cx="60" cy="51" r="2.5" fill="#EF4444" />
          {/* Head base band */}
          <rect x="32" y="58" width="36" height="6" rx="3" fill="#B45309" />
        </svg>
      );

    case "ฏ": // ปฏัก - Javelin/Harpoon
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" />
          {/* Staff */}
          <line x1="28" y1="72" x2="68" y2="32" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          {/* Javelin Spear Tip (with curved side blades) */}
          <g transform="translate(64, 34) rotate(-45)">
            <path d="M 0 -12 L 6 4 L -6 4 Z" fill="#94A3B8" stroke="#1E3A8A" strokeWidth="2" />
            <path d="M -8 8 Q -14 -1 -4 0 L -4 10" fill="none" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 8 8 Q 14 -1 4 0 L 4 10" fill="none" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="-3" y="4" width="6" height="8" fill="#FBBF24" />
          </g>
          {/* Waving Ribbon */}
          <path d="M 46 54 Q 38 64 42 68 Q 46 72 36 78" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "ฐ": // ฐาน - Pedestal Base
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="3" />
          {/* Altar / Pedestal Multi-layers */}
          {/* Top Plate */}
          <rect x="30" y="32" width="40" height="8" rx="3" fill="#C084FC" stroke="#6B21A8" strokeWidth="2" />
          {/* Middle pillar base */}
          <path d="M 38 40 L 34 58 L 66 58 L 62 40 Z" fill="#E9D5FF" stroke="#6B21A8" strokeWidth="2" />
          {/* Bottom massive tier */}
          <rect x="22" y="58" width="56" height="14" rx="4" fill="#A855F7" stroke="#6B21A8" strokeWidth="2.5" />
          {/* Traditional motif drawing simplified */}
          <line x1="30" y1="65" x2="70" y2="65" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      );

    case "ฑ": // มณโฑ - Queen Montho
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FDF2F8" stroke="#DB2777" strokeWidth="3" />
          {/* Traditional Thai Queen */}
          {/* Back Hair bun */}
          <circle cx="50" cy="38" r="22" fill="#1E293B" />
          {/* Face */}
          <circle cx="50" cy="45" r="16" fill="#FFEDD5" />
          {/* Crown (Chada) */}
          <path d="M 44 32 L 50 16 L 56 32 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          <circle cx="50" cy="15" r="2.5" fill="#EF4444" />
          <rect x="42" y="30" width="16" height="4" fill="#F1F5F9" />
          {/* Eyes & Smile */}
          <ellipse cx="44" cy="44" rx="1.5" ry="2" fill="#1E293B" />
          <ellipse cx="56" cy="44" rx="1.5" ry="2" fill="#1E293B" />
          <path d="M 46 51 Q 50 54 54 51" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          {/* Dress */}
          <path d="M 36 68 Q 50 78 64 68 L 66 78 L 34 78 Z" fill="#EC4899" stroke="#9D174D" strokeWidth="2" />
          {/* Golden Necklace */}
          <path d="M 42 62 Q 50 67 58 62" stroke="#FBBF24" strokeWidth="3" fill="none" />
        </svg>
      );

    case "ฒ": // ผู้เฒ่า - Elderly Man
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FAF5FF" stroke="#8B5CF6" strokeWidth="3" />
          {/* Grandpa face and white hair */}
          {/* Hair sides */}
          <circle cx="34" cy="44" r="11" fill="#E2E8F0" />
          <circle cx="66" cy="44" r="11" fill="#E2E8F0" />
          {/* Face */}
          <circle cx="50" cy="48" r="18" fill="#FFEDD5" />
          <circle cx="50" cy="34" r="10" fill="#E2E8F0" /> {/* Balding hair top rim */}
          <circle cx="50" cy="45" r="17" fill="#FFEDD5" />
          {/* Glasses */}
          <circle cx="42" cy="44" r="5" stroke="#475569" strokeWidth="2.5" fill="none" />
          <circle cx="58" cy="44" r="5" stroke="#475569" strokeWidth="2.5" fill="none" />
          <line x1="47" y1="44" x2="53" y2="44" stroke="#475569" strokeWidth="2.5" />
          {/* Friendly Smile */}
          <path d="M 44 54 Q 50 60 56 54" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* White Mustache */}
          <path d="M 40 52 Q 50 50 60 52 Q 50 56 40 52" fill="#F1F5F9" />
          {/* Cane tip showing */}
          <path d="M 22 76 L 30 52 Q 24 45 18 54" fill="none" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      );

    case "ณ": // เณร - Novice Monk
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFF7ED" stroke="#EA580C" strokeWidth="3" />
          {/* Halo shine */}
          <circle cx="50" cy="44" r="26" fill="#FEF3C7" opacity="0.4" />
          {/* Head (shaved) */}
          <circle cx="50" cy="44" r="18" fill="#FFEDD5" />
          {/* Saffron Robe */}
          <path d="M 32 68 Q 50 78 68 68 L 70 79 L 30 79 Z" fill="#F97316" />
          <path d="M 32 68 L 50 78 L 50 62 Z" fill="#EA580C" /> {/* Sash */}
          {/* Eyes closed (serene/meditating) */}
          <path d="M 40 44 Q 44 47 46 44" stroke="#431407" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 54 44 Q 56 47 60 44" stroke="#431407" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Smile */}
          <path d="M 47 52 Q 50 55 53 52" stroke="#431407" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "ด": // เด็ก - Child
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
          {/* Face */}
          <circle cx="50" cy="48" r="19" fill="#FFEDD5" />
          {/* Hair single lock */}
          <path d="M 50 29 Q 54 22 46 18 Q 44 24 50 29" fill="#1E293B" />
          {/* Eyes (Huge cute baby eyes) */}
          <circle cx="41" cy="45" r="4.5" fill="#1E293B" />
          <circle cx="59" cy="45" r="4.5" fill="#1E293B" />
          {/* Bubbles */}
          <circle cx="43" cy="43" r="1.5" fill="#FFFFFF" />
          <circle cx="61" cy="43" r="1.5" fill="#FFFFFF" />
          {/* Pacifier or Smile */}
          <circle cx="50" cy="54" r="4" fill="#F43F5E" />
          <circle cx="50" cy="54" r="2.5" fill="#FF85A2" />
          <circle cx="50" cy="54" r="1" fill="#FFFFFF" />
          {/* Cheeks */}
          <circle cx="33" cy="50" r="3.5" fill="#FDA4AF" />
          <circle cx="67" cy="50" r="3.5" fill="#FDA4AF" />
        </svg>
      );

    case "ต": // เต่า - Turtle
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#ECFDF5" stroke="#059669" strokeWidth="3" />
          {/* Fins / Feet */}
          <ellipse cx="26" cy="44" rx="8" ry="12" fill="#34D399" transform="rotate(-30 26 44)" />
          <ellipse cx="74" cy="44" rx="8" ry="12" fill="#34D399" transform="rotate(30 74 44)" />
          <ellipse cx="32" cy="68" rx="6" ry="10" fill="#34D399" transform="rotate(20 32 68)" />
          <ellipse cx="68" cy="68" rx="6" ry="10" fill="#34D399" transform="rotate(-20 68 68)" />
          {/* Shell (กระดองหลังตุง) */}
          <circle cx="50" cy="56" r="22" fill="#047857" />
          <circle cx="50" cy="56" r="18" fill="#10B981" />
          {/* Shell Pattern */}
          <polygon points="50,42 58,48 58,58 50,64 42,58 42,48" fill="#059669" opacity="0.6" />
          {/* Head */}
          <circle cx="50" cy="34" r="10" fill="#34D399" />
          {/* Eyes */}
          <circle cx="46" cy="31" r="1.5" fill="#064E3B" />
          <circle cx="54" cy="31" r="1.5" fill="#064E3B" />
          <path d="M 47 36 Q 50 39 53 36" stroke="#064E3B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "ถ": // ถุง - Bag
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
          {/* Handles */}
          <path d="M 42 34 Q 50 20 58 34" stroke="#B45309" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Paper Bag body */}
          <path d="M 32 34 L 68 34 L 64 74 L 36 74 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2.5" />
          {/* Shadow/Fold */}
          <path d="M 32 34 L 40 34 L 36 74 L 36 74 Z" fill="#F59E0B" />
          {/* Cute Face on bag */}
          <circle cx="44" cy="46" r="2" fill="#78350F" />
          <circle cx="56" cy="46" r="2" fill="#78350F" />
          <path d="M 47 50 Q 50 53 53 50" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
          {/* Heart label */}
          <path d="M 50 62 C 48 58 44 58 44 62 C 44 66 50 70 50 70 C 50 70 56 66 56 62 C 56 58 52 58 50 62 Z" fill="#EF4444" />
        </svg>
      );

    case "ท": // ทหาร - Soldier
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FEE2E2" stroke="#DC2626" strokeWidth="3" />
          {/* Head & Skin */}
          <circle cx="50" cy="48" r="16" fill="#FFEDD5" />
          {/* Military Hat (Royal Guard style - Tall) */}
          <rect x="36" y="16" width="28" height="20" rx="3" fill="#111827" />
          <rect x="36" y="32" width="28" height="4" fill="#FBBF24" /> {/* Gold band */}
          {/* Eyes & Smile */}
          <circle cx="44" cy="44" r="2" fill="#1E293B" />
          <circle cx="56" cy="44" r="2" fill="#1E293B" />
          <path d="M 46 51 Q 50 54 54 51" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          {/* Uniform red coat */}
          <path d="M 34 64 L 66 64 L 64 78 L 36 78 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
          {/* Gold buttons */}
          <circle cx="50" cy="69" r="1.5" fill="#FBBF24" />
          <circle cx="50" cy="74" r="1.5" fill="#FBBF24" />
        </svg>
      );

    case "ธ": // ธง - Flag
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#EFF6FF" stroke="#1D4ED8" strokeWidth="3" />
          {/* Metallic flagpole */}
          <rect x="25" y="16" width="4" height="68" rx="2" fill="#94A3B8" />
          <circle cx="27" cy="14" r="4" fill="#F59E0B" />
          {/* Waving Thai Flag (Red, White, Blue, White, Red stripes) */}
          <g transform="translate(29, 20)">
            {/* Base shape with wave path */}
            <path d="M 0 0 Q 15 -4 30 0 Q 45 4 52 -2 L 52 38 Q 45 44 30 40 Q 15 36 0 40 Z" fill="#EF4444" />
            <path d="M 0 6.6 Q 15 2.6 30 6.6 Q 45 10.6 52 4.6 L 52 33.3 Q 45 39.3 30 35.3 Q 15 31.3 0 35.3 Z" fill="#FFFFFF" />
            <path d="M 0 13.3 Q 15 9.3 30 13.3 Q 45 17.3 52 11.3 L 52 26.6 Q 45 32.6 30 28.6 Q 15 24.6 0 28.6 Z" fill="#0A3396" />
          </g>
        </svg>
      );

    case "น": // หนู - Mouse
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F8FAFC" stroke="#64748B" strokeWidth="3" />
          {/* Ears */}
          <circle cx="34" cy="34" r="11" fill="#94A3B8" />
          <circle cx="34" cy="34" r="7" fill="#FDA4AF" />
          <circle cx="66" cy="34" r="11" fill="#94A3B8" />
          <circle cx="66" cy="34" r="7" fill="#FDA4AF" />
          {/* Body */}
          <ellipse cx="50" cy="54" rx="20" ry="18" fill="#CBD5E1" />
          {/* Eyes */}
          <circle cx="43" cy="48" r="2.5" fill="#1E293B" />
          <circle cx="57" cy="48" r="2.5" fill="#1E293B" />
          {/* Nose */}
          <polygon points="50,53 47,51 53,51" fill="#ED64A6" />
          {/* Whiskers */}
          <line x1="34" y1="52" x2="26" y2="50" stroke="#475569" strokeWidth="1.5" />
          <line x1="34" y1="55" x2="25" y2="56" stroke="#475569" strokeWidth="1.5" />
          <line x1="66" y1="52" x2="74" y2="50" stroke="#475569" strokeWidth="1.5" />
          <line x1="66" y1="55" x2="75" y2="56" stroke="#475569" strokeWidth="1.5" />
          {/* Cheese slice */}
          <g transform="translate(42, 60)">
            <polygon points="0,15 16,8 10,0" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            <circle cx="6" cy="8" r="1.5" fill="#F59E0B" />
          </g>
        </svg>
      );

    case "บ": // ใบไม้ - Leaf
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#ECFDF5" stroke="#059669" strokeWidth="3" />
          {/* Leaf outline and structure */}
          <path d="M 24 50 Q 50 16 76 50 Q 50 84 24 50 Z" fill="#34D399" stroke="#059669" strokeWidth="2.5" />
          {/* Main vein */}
          <path d="M 24 50 L 76 50" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
          {/* Sub veins */}
          <path d="M 38 50 Q 42 40 45 35 M 48 50 Q 54 38 58 32 C" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 38 50 Q 42 60 45 65 M 48 50 Q 54 62 58 68 C" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          {/* Dew Drop with face */}
          <circle cx="54" cy="46" r="6" fill="#E0F2FE" opacity="0.9" />
          <circle cx="52" cy="44" r="1" fill="#0284C7" />
          <circle cx="56" cy="44" r="1" fill="#0284C7" />
          <path d="M 53 48 Q 54 49 55 48" stroke="#0284C7" strokeWidth="1" />
        </svg>
      );

    case "ป": // ปลา - Fish
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0F9FF" stroke="#0284C7" strokeWidth="3" />
          {/* Fish Tail */}
          <path d="M 26 50 L 14 38 L 18 50 L 14 62 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
          {/* Fish fins */}
          <path d="M 44 34 Q 38 20 50 24" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />
          <path d="M 44 66 Q 38 80 50 76" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />
          {/* Fish Body */}
          <ellipse cx="44" cy="50" rx="20" ry="16" fill="#F97316" stroke="#EA580C" strokeWidth="2" />
          <ellipse cx="40" cy="50" rx="14" ry="11" fill="#FB923C" />
          {/* Big fish eye (ปลาตากลม) */}
          <circle cx="52" cy="46" r="4.5" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="53" cy="46" r="2.5" fill="#1E293B" />
          <circle cx="54" cy="45" r="1" fill="#FFFFFF" />
          {/* Cute mouth kissing bubble */}
          <path d="M 64 50 Q 61 47 64 45" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          {/* Water Bubbles */}
          <circle cx="72" cy="40" r="3" fill="#38BDF8" opacity="0.6" />
          <circle cx="78" cy="32" r="2" fill="#38BDF8" opacity="0.6" />
        </svg>
      );

    case "ผ": // ผึ้ง - Bee
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFDF0" stroke="#D97706" strokeWidth="3" />
          {/* Wings */}
          <ellipse cx="42" cy="30" rx="7" ry="12" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(-30 42 30)" />
          <ellipse cx="58" cy="30" rx="7" ry="12" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(30 58 30)" />
          {/* Bee Body */}
          <rect x="30" y="40" width="40" height="26" rx="13" fill="#FBBF24" />
          {/* Stripes */}
          <rect x="42" y="40" width="6" height="26" fill="#111827" />
          <rect x="54" y="40" width="6" height="26" fill="#111827" />
          {/* Stinger */}
          <polygon points="24,53 30,50 30,56" fill="#111827" />
          {/* Face */}
          <circle cx="62" cy="49" r="1.5" fill="#111827" />
          <path d="M 64 54 Q 66 56 68 54" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="61" cy="52" r="1.5" fill="#FDA4AF" />
        </svg>
      );

    case "ฝ": // ฝา - Lid/Cover (NOT A FRYING PAN!)
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#FB923C" strokeWidth="3" />
          
          {/* Steam/Heat waves on top/sides */}
          <path d="M 32 18 Q 35 12 38 18" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
          <path d="M 50 14 Q 53 8 56 14" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
          <path d="M 68 18 Q 71 12 74 18" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />

          {/* Lid Handle (Black/Grey Bakelite Knob) */}
          <rect x="42" y="21" width="16" height="5" rx="2.5" fill="#334155" />
          <path d="M 46 26 L 54 26 L 56 30 L 44 30 Z" fill="#475569" />
          <circle cx="50" cy="23" r="2" fill="#64748B" />

          {/* Pot Lid Aluminum Dome Body */}
          <path d="M 18 58 C 18 31 82 31 82 58 Z" fill="url(#silverGrad_fa)" stroke="#475569" strokeWidth="2.5" />
          
          {/* Concentric ridge lines for classical aluminum pot lid look */}
          <path d="M 28 50 C 34 38 66 38 72 50" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
          <path d="M 38 44 C 42 38 58 38 62 44" stroke="#CBD5E1" strokeWidth="1" fill="none" />

          {/* Glossy reflection stroke */}
          <path d="M 22 52 C 28 35 72 35 78 52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />

          {/* Lid Flat Rim Base */}
          <rect x="14" y="58" width="72" height="6" rx="3" fill="#D1D5DB" stroke="#475569" strokeWidth="2" />
          
          {/* Cute Face to make it appeal to kids */}
          {/* Left Eye */}
          <circle cx="40" cy="46" r="3" fill="#1E293B" />
          <circle cx="39" cy="45" r="1" fill="#FFFFFF" />
          {/* Right Eye */}
          <circle cx="60" cy="46" r="3" fill="#1E293B" />
          <circle cx="59" cy="45" r="1" fill="#FFFFFF" />
          {/* Soft blushing cheeks */}
          <circle cx="34" cy="48" r="3" fill="#FCA5A5" opacity="0.8" />
          <circle cx="66" cy="48" r="3" fill="#FCA5A5" opacity="0.8" />
          {/* Happy smiling mouth */}
          <path d="M 47 51 Q 50 54 53 51" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="silverGrad_fa" x1="50" y1="31" x2="50" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FAFAFA" />
              <stop offset="40%" stopColor="#E5E7EB" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "พ": // พาน - Pedestal Tray (NOT A BASKET!)
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="50" cy="50" r="38" fill="#FFFDF0" stroke="#EAB308" strokeWidth="3" />
          
          {/* Sparkles on the sides for gold shine */}
          <path d="M 22 25 L 24 28 L 27 29 L 24 30 L 22 33 L 20 30 L 17 29 L 20 28 Z" fill="#FACC15" />
          <path d="M 78 25 L 80 28 L 83 29 L 80 30 L 78 33 L 76 30 L 73 29 L 76 28 Z" fill="#FACC15" />

          {/* Ceremony Offerings inside the pedestal tray */}
          {/* Banana leaf cone (พานพุ่ม) - layers of green triangles representing folded banana leaves */}
          <path d="M 50 12 L 34 38 L 66 38 Z" fill="#16A34A" stroke="#14532D" strokeWidth="1.5" />
          <path d="M 50 16 L 38 38 L 62 38 Z" fill="#22C55E" />
          <path d="M 50 22 L 42 38 L 58 38 Z" fill="#4ADE80" />
          
          {/* Traditional Yellow Marigold flowers or lotus buds on sides */}
          <circle cx="34" cy="38" r="4.5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
          <circle cx="42" cy="38" r="4.5" fill="#EF4444" stroke="#991B1B" strokeWidth="1" /> {/* Red Rose */}
          <circle cx="58" cy="38" r="4.5" fill="#EF4444" stroke="#991B1B" strokeWidth="1" /> {/* Red Rose */}
          <circle cx="66" cy="38" r="4.5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
          <circle cx="50" cy="38" r="5" fill="#FCD34D" stroke="#D97706" strokeWidth="1" />

          {/* Double-Layered Gold Pedestal Tray (พาน) */}
          
          {/* Top Bowl Flared Rim */}
          <path d="M 24 38 C 24 38 28 50 50 50 C 72 50 76 38 76 38" fill="url(#goldGrad_phan)" stroke="#854D0E" strokeWidth="2.5" />
          
          {/* Oval top plate inside edge */}
          <ellipse cx="50" cy="39" rx="25" ry="3.5" fill="#CA8A04" stroke="#854D0E" strokeWidth="1.5" />

          {/* Column/Neck Support (ส่วนคอของพาน) */}
          <path d="M 43 50 L 45 66 L 55 66 L 57 50 Z" fill="url(#goldGrad_phan)" stroke="#854D0E" strokeWidth="2" />
          {/* Gold neck ring */}
          <rect x="42" y="56" width="16" height="4" rx="1.5" fill="#F59E0B" stroke="#854D0E" strokeWidth="1.5" />

          {/* Flared Pedestal Base (ฐานพาน) */}
          {/* Foot Support */}
          <path d="M 32 78 C 32 66 68 66 68 78 Z" fill="url(#goldGrad_phan)" stroke="#854D0E" strokeWidth="2.5" />
          {/* Bottom Rim flat base */}
          <rect x="28" y="76" width="44" height="5" rx="2.5" fill="#EAB308" stroke="#854D0E" strokeWidth="2" />

          {/* Cute Face to make it appeal to kids */}
          {/* Left Eye */}
          <circle cx="45" cy="44" r="2" fill="#451A03" />
          {/* Right Eye */}
          <circle cx="55" cy="44" r="2" fill="#451A03" />
          {/* Smile */}
          <path d="M 48 46.5 Q 50 48.5 52 46.5" stroke="#451A03" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          {/* Gold Gradient Definition */}
          <defs>
            <linearGradient id="goldGrad_phan" x1="50" y1="38" x2="50" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="30%" stopColor="#FACC15" />
              <stop offset="70%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "ฟ": // ฟัน - Tooth
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0FDF4" stroke="#15803D" strokeWidth="3" />
          {/* Big Cartoon Tooth */}
          <path d="M 32 30 C 32 20 48 20 50 28 C 52 20 68 20 68 30 C 68 45 62 65 60 74 C 59 78 54 78 54 70 C 53 66 47 66 46 70 C 46 78 41 78 40 74 C 38 65 32 45 32 30 Z" fill="#FFFFFF" stroke="#22C55E" strokeWidth="3" strokeLinejoin="round" />
          {/* Sparkle shine */}
          <path d="M 64 26 L 66 30 L 70 31 L 66 32 L 64 36 L 62 32 L 58 31 L 62 30 Z" fill="#4ADE80" />
          {/* Cute Face */}
          <circle cx="44" cy="40" r="3" fill="#14532D" />
          <circle cx="56" cy="40" r="3" fill="#14532D" />
          {/* Happy closed eyes reflection */}
          <circle cx="45" cy="38" r="1" fill="#FFFFFF" />
          <circle cx="57" cy="38" r="1" fill="#FFFFFF" />
          <path d="M 45 47 Q 50 54 55 47" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="37" cy="45" r="3.5" fill="#FCA5A5" opacity="0.8" />
          <circle cx="63" cy="45" r="3.5" fill="#FCA5A5" opacity="0.8" />
        </svg>
      );

    case "ภ": // สำเภา - Sailboat
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0F9FF" stroke="#0E5E72" strokeWidth="3" />
          {/* Ocean waves */}
          <path d="M 12 70 Q 22 66 32 70 Q 42 74 52 70 Q 62 66 72 70 Q 82 74 88 70 L 88 84 L 12 84 Z" fill="#0EA5E9" />
          {/* Boat Wood Body */}
          <path d="M 22 56 L 78 56 L 68 76 L 32 76 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
          <line x1="30" y1="64" x2="70" y2="64" stroke="#78350F" strokeWidth="1.5" />
          {/* Masts */}
          <line x1="42" y1="20" x2="42" y2="56" stroke="#451A03" strokeWidth="3" />
          <line x1="60" y1="26" x2="60" y2="56" stroke="#451A03" strokeWidth="2" />
          {/* Large Red and Yellow Sails */}
          <path d="M 42 22 C 32 26 32 46 42 50 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
          <path d="M 60 28 C 52 32 52 46 60 50 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
        </svg>
      );

    case "ม": // ม้า - Horse
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#78350F" strokeWidth="3" />
          {/* Cute horse head */}
          {/* Ears */}
          <path d="M 38 28 L 34 14 L 43 22 Z" fill="#D97706" />
          <path d="M 62 28 L 66 14 L 57 22 Z" fill="#D97706" />
          {/* Mane (ขนคอ) */}
          <path d="M 50 16 Q 58 10 62 18 Q 66 22 62 28" fill="#1F2937" />
          {/* Head */}
          <path d="M 38 34 C 38 24 62 24 62 34 L 58 56 C 58 64 42 64 42 56 Z" fill="#F59E0B" />
          {/* Eyes (happy arches) */}
          <path d="M 42 34 Q 45 31 48 34" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 58 34 Q 55 31 52 34" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Muzzle (จมูกม้า) */}
          <ellipse cx="50" cy="54" rx="10" ry="6" fill="#FED7AA" />
          <circle cx="46" cy="54" r="1.5" fill="#451A03" />
          <circle cx="54" cy="54" r="1.5" fill="#451A03" />
        </svg>
      );

    case "ย": // ยักษ์ - Giant/Ogre
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#ECFDF5" stroke="#047857" strokeWidth="3" />
          {/* Green Giant Face */}
          <circle cx="50" cy="48" r="20" fill="#10B981" />
          {/* Crown/Ornament (กระบังหน้า) */}
          <path d="M 32 36 Q 50 20 68 36 Z" fill="#FBBF24" />
          <path d="M 46 25 L 50 10 L 54 25 Z" fill="#FBBF24" />
          {/* Eyes (Dramatic Ogre Style but Cute) */}
          <ellipse cx="40" cy="44" rx="4" ry="3" fill="#FFFFFF" stroke="#047857" strokeWidth="2" />
          <circle cx="40" cy="44" r="1.5" fill="#EF4444" />
          <ellipse cx="60" cy="44" rx="4" ry="3" fill="#FFFFFF" stroke="#047857" strokeWidth="2" />
          <circle cx="60" cy="44" r="1.5" fill="#EF4444" />
          {/* Red Angry/Cute Brows */}
          <path d="M 33 39 Q 40 37 45 42" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 67 39 Q 60 37 55 42" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Fangs (เขี้ยวขาวใหญ่แสนน่ารัก) */}
          <polygon points="38,52 35,58 41,56" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
          <polygon points="62,52 65,58 59,56" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
          {/* Smile */}
          <path d="M 44 51 Q 50 56 56 51" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "ร": // เรือ - Boat
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" />
          {/* Water ripples */}
          <path d="M 20 68 H 80 M 32 75 H 68 M 42 81 H 58" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          {/* Boat Cabin / Canopy */}
          <rect x="42" y="32" width="16" height="12" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
          <line x1="42" y1="44" x2="58" y2="44" stroke="#D97706" strokeWidth="2" />
          {/* Wooden Canoe Body */}
          <path d="M 16 48 Q 50 68 84 48 L 78 56 L 22 56 Z" fill="#EA580C" stroke="#78350F" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    case "ล": // ลิง - Monkey
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#B45309" strokeWidth="3" />
          {/* Ears */}
          <circle cx="30" cy="46" r="10" fill="#D97706" />
          <circle cx="30" cy="46" r="6" fill="#FFEDD5" />
          <circle cx="70" cy="46" r="10" fill="#D97706" />
          <circle cx="70" cy="46" r="6" fill="#FFEDD5" />
          {/* Head & face mask */}
          <circle cx="50" cy="48" r="18" fill="#D97706" />
          {/* Heart peach shaped face */}
          <path d="M 50 58 C 44 58 38 52 38 44 C 38 38 44 38 50 42 C 56 38 62 38 62 44 C 62 52 56 58 50 58 Z" fill="#FFEDD5" />
          {/* Eyes */}
          <circle cx="45" cy="44" r="2.5" fill="#1E293B" />
          <circle cx="55" cy="44" r="2.5" fill="#1E293B" />
          {/* Cheek pink */}
          <circle cx="41" cy="48" r="1.5" fill="#FDA4AF" />
          <circle cx="59" cy="48" r="1.5" fill="#FDA4AF" />
          {/* Smile */}
          <path d="M 47 50 Q 50 53 53 50" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          {/* Banana */}
          <path d="M 32 64 Q 40 68 46 60 Q 40 56 32 64" fill="#FBBF24" />
        </svg>
      );

    case "ว": // แหวน - Ring
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FDF4FF" stroke="#D087F3" strokeWidth="3" />
          {/* Gold Ring Band (พยัญชนะไทย: แหวน) */}
          <circle cx="50" cy="58" r="19" stroke="#FBBF24" strokeWidth="6" fill="none" />
          <circle cx="50" cy="58" r="19" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
          {/* Diamond Setting Base */}
          <path d="M 40 42 L 60 42 L 54 48 L 46 48 Z" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1.5" />
          {/* Beautiful Sparkling Diamond */}
          <path d="M 50 20 L 64 34 L 50 42 L 36 34 Z" fill="#06B6D4" stroke="#0891B2" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 50 20 L 50 42" stroke="#22D3EE" strokeWidth="1.5" />
          <path d="M 36 34 L 64 34" stroke="#22D3EE" strokeWidth="1.5" />
          {/* Sparkles */}
          <path d="M 68 18 L 70 22 L 74 23 L 70 24 L 68 28 L 66 24 L 62 23 L 66 22 Z" fill="#38BDF8" />
        </svg>
      );

    case "ศ": // ศาลา - Pavilion
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#ECFDF5" stroke="#059669" strokeWidth="3" />
          {/* Thai Pavilion Structure */}
          {/* Base Floor platform */}
          <rect x="24" y="68" width="52" height="8" rx="2" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
          {/* Wooden Pillars */}
          <rect x="34" y="44" width="4" height="24" fill="#B45309" />
          <rect x="62" y="44" width="4" height="24" fill="#B45309" />
          {/* Multi-tier ornate red Thai roof */}
          <path d="M 18 44 Q 50 32 82 44 L 74 36 L 26 36 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 30 36 Q 50 20 70 36 L 62 28 L 38 28 Z" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" />
          <path d="M 46 28 L 50 14 L 54 28 Z" fill="#FBBF24" /> {/* Spire */}
        </svg>
      );

    case "ษ": // ฤๅษี - Hermit
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFFBE6" stroke="#D97706" strokeWidth="3" />
          {/* Bearded Wise Hermit */}
          {/* Hair Bun with Ring */}
          <circle cx="50" cy="22" r="7" fill="#854D0E" />
          <circle cx="50" cy="22" r="10" stroke="#FBBF24" strokeWidth="3" fill="none" />
          {/* Head & Long gray-white beard */}
          <path d="M 38 48 C 38 65 62 65 62 48" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx="50" cy="44" r="16" fill="#FFEDD5" />
          {/* Closed Eyes and Red mark on forehead */}
          <ellipse cx="44" cy="42" rx="1.5" ry="1" fill="#451A03" />
          <ellipse cx="56" cy="42" rx="1.5" ry="1" fill="#451A03" />
          <circle cx="50" cy="35" r="2" fill="#EF4444" />
          {/* Smiling expression */}
          <path d="M 47 48 Q 50 51 53 48" stroke="#451A03" strokeWidth="2" fill="none" />
          {/* Tiger pattern brown cowl */}
          <path d="M 30 72 L 70 72 L 64 78 L 36 78 Z" fill="#D97706" />
          <polygon points="40,72 44,76 42,72" fill="#1E293B" />
          <polygon points="56,72 60,76 58,72" fill="#1E293B" />
        </svg>
      );

    case "ส": // เสือ - Tiger
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FFF7ED" stroke="#EA580C" strokeWidth="3" />
          {/* Tiger ears */}
          <circle cx="34" cy="34" r="8" fill="#F97316" />
          <circle cx="34" cy="34" r="4" fill="#FDA4AF" />
          <circle cx="66" cy="34" r="8" fill="#F97316" />
          <circle cx="66" cy="34" r="4" fill="#FDA4AF" />
          {/* Tiger Head */}
          <circle cx="50" cy="48" r="18" fill="#F97316" />
          <circle cx="50" cy="48" r="18" fill="#FB923C" />
          {/* Snout white */}
          <ellipse cx="50" cy="54" rx="8" ry="6" fill="#FFFFFF" />
          {/* Cute Tiger Stripes */}
          <polygon points="32,44 40,46 32,48" fill="#1E293B" />
          <polygon points="68,44 60,46 68,48" fill="#1E293B" />
          <polygon points="50,30 48,36 52,36" fill="#1E293B" />
          {/* Eyes & Nose */}
          <circle cx="43" cy="44" r="2.5" fill="#1E293B" />
          <circle cx="57" cy="44" r="2.5" fill="#1E293B" />
          <polygon points="50,51 47,49 53,49" fill="#E11D48" />
          {/* Smile lines */}
          <path d="M 46 54 Q 50 57 54 54" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "ห": // หีบ - Chest
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FEF3C7" stroke="#92400E" strokeWidth="3" />
          {/* Wooden Chest with metal bands */}
          <rect x="24" y="34" width="52" height="38" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2.5" />
          {/* Lid dividing line */}
          <line x1="24" y1="46" x2="76" y2="46" stroke="#78350F" strokeWidth="2" />
          {/* Metallic corners/bands */}
          <rect x="24" y="34" width="6" height="38" fill="#FBBF24" opacity="0.8" />
          <rect x="70" y="34" width="6" height="38" fill="#FBBF24" opacity="0.8" />
          {/* Golden Keyhole plate */}
          <rect x="46" y="42" width="8" height="10" rx="1.5" fill="#FCC419" stroke="#B45309" strokeWidth="1" />
          <circle cx="50" cy="45" r="1.5" fill="#111827" />
          <line x1="50" y1="46.5" x2="50" y2="50" stroke="#111827" strokeWidth="1" />
        </svg>
      );

    case "ฬ": // จุฬา - Star Kite
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FDF2F8" stroke="#DB2777" strokeWidth="3" />
          {/* Waving colorful tail ribbons */}
          <path d="M 50 68 Q 42 78 54 84" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 50 68 Q 58 78 46 84" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Star-shaped Thai Chula Kite */}
          <polygon points="50,14 62,38 78,42 64,54 62,70 50,56 38,70 36,54 22,42 38,38" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Bamboo frame outlines inside star cross */}
          <line x1="50" y1="14" x2="50" y2="56" stroke="#BE185D" strokeWidth="1.5" />
          <line x1="22" y1="42" x2="78" y2="42" stroke="#BE185D" strokeWidth="1.5" />
        </svg>
      );

    case "อ": // อ่าง - Basin/Tub
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="3" />
          {/* Water inside basin */}
          <ellipse cx="50" cy="42" rx="26" ry="10" fill="#E0F2FE" />
          {/* Happy soap bubble floaters */}
          <circle cx="44" cy="30" r="3" fill="#38BDF8" opacity="0.7" />
          <circle cx="56" cy="27" r="2.5" fill="#38BDF8" opacity="0.7" />
          <circle cx="64" cy="33" r="2.0" fill="#38BDF8" opacity="0.7" />
          {/* Basin Tub Structure (อ่าง) */}
          <path d="M 20 42 L 24 68 C 24 74 76 74 76 68 L 80 42 Z" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="2.5" />
          <ellipse cx="50" cy="42" rx="30" ry="6" fill="#0284C7" />
          {/* Cute Face */}
          <circle cx="42" cy="56" r="2" fill="#0284C7" />
          <circle cx="58" cy="56" r="2" fill="#0284C7" />
          <path d="M 46 61 Q 50 64 54 61" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "ฮ": // นกฮูก - Owl
      return (
        <svg className={wrapperClass} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#FAF5FF" stroke="#6B21A8" strokeWidth="3" />
          {/* Tree Branch */}
          <rect x="20" y="72" width="60" height="5" rx="2" fill="#78350F" />
          {/* Owl Body */}
          <ellipse cx="50" cy="50" rx="20" ry="22" fill="#A855F7" />
          <ellipse cx="50" cy="52" rx="15" ry="16" fill="#E9D5FF" />
          {/* Owl big eyes */}
          <circle cx="41" cy="40" r="7.5" fill="#FFFFFF" stroke="#6B21A8" strokeWidth="2" />
          <circle cx="41" cy="40" r="3" fill="#111827" />
          <circle cx="59" cy="40" r="7.5" fill="#FFFFFF" stroke="#6B21A8" strokeWidth="2" />
          <circle cx="59" cy="40" r="3" fill="#111827" />
          {/* Cute Yellow Beak */}
          <polygon points="50,45 47,52 53,52" fill="#FACC15" />
          {/* Little claw feet */}
          <circle cx="44" cy="72" r="2.5" fill="#F59E0B" />
          <circle cx="56" cy="72" r="2.5" fill="#F59E0B" />
        </svg>
      );

    default:
      return null;
  }
};

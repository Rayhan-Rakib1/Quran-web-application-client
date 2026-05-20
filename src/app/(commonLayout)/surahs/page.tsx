import { BookOpen, Search, Settings } from "lucide-react";
import Link from "next/link";

const surahs = [
  { "surah": 1, "name_en": "Al-Fatiha", "name_ar": "الفاتحة", "ayahs": 7 },
  { "surah": 2, "name_en": "Al-Baqarah", "name_ar": "البقرة", "ayahs": 286 },
  { "surah": 3, "name_en": "Aal-Imran", "name_ar": "آل عمران", "ayahs": 200 },
  { "surah": 4, "name_en": "An-Nisa", "name_ar": "النساء", "ayahs": 176 },
  { "surah": 5, "name_en": "Al-Ma'idah", "name_ar": "المائدة", "ayahs": 120 },
  { "surah": 6, "name_en": "Al-An'am", "name_ar": "الأنعام", "ayahs": 165 },
  { "surah": 7, "name_en": "Al-A'raf", "name_ar": "الأعراف", "ayahs": 206 },
  { "surah": 8, "name_en": "Al-Anfal", "name_ar": "الأنفال", "ayahs": 75 },
  { "surah": 9, "name_en": "At-Tawbah", "name_ar": "التوبة", "ayahs": 129 },
  { "surah": 10, "name_en": "Yunus", "name_ar": "يونس", "ayahs": 109 },
  { "surah": 11, "name_en": "Hud", "name_ar": "هود", "ayahs": 123 },
  { "surah": 12, "name_en": "Yusuf", "name_ar": "يوسف", "ayahs": 111 },
  { "surah": 13, "name_en": "Ar-Ra'd", "name_ar": "الرعد", "ayahs": 43 },
  { "surah": 14, "name_en": "Ibrahim", "name_ar": "إبراهيم", "ayahs": 52 },
  { "surah": 15, "name_en": "Al-Hijr", "name_ar": "الحجر", "ayahs": 99 },
  { "surah": 16, "name_en": "An-Nahl", "name_ar": "النحل", "ayahs": 128 },
  { "surah": 17, "name_en": "Al-Isra", "name_ar": "الإسراء", "ayahs": 111 },
  { "surah": 18, "name_en": "Al-Kahf", "name_ar": "الكهف", "ayahs": 110 },
  { "surah": 19, "name_en": "Maryam", "name_ar": "مريم", "ayahs": 98 },
  { "surah": 20, "name_en": "Ta-Ha", "name_ar": "طه", "ayahs": 135 },
  { "surah": 21, "name_en": "Al-Anbiya", "name_ar": "الأنبياء", "ayahs": 112 },
  { "surah": 22, "name_en": "Al-Hajj", "name_ar": "الحج", "ayahs": 78 },
  { "surah": 23, "name_en": "Al-Mu'minun", "name_ar": "المؤمنون", "ayahs": 118 },
  { "surah": 24, "name_en": "An-Nur", "name_ar": "النور", "ayahs": 64 },
  { "surah": 25, "name_en": "Al-Furqan", "name_ar": "الفرقان", "ayahs": 77 },
  { "surah": 26, "name_en": "Ash-Shu'ara", "name_ar": "الشعراء", "ayahs": 227 },
  { "surah": 27, "name_en": "An-Naml", "name_ar": "النمل", "ayahs": 93 },
  { "surah": 28, "name_en": "Al-Qasas", "name_ar": "القصص", "ayahs": 88 },
  { "surah": 29, "name_en": "Al-Ankabut", "name_ar": "العنكبوت", "ayahs": 69 },
  { "surah": 30, "name_en": "Ar-Rum", "name_ar": "الروم", "ayahs": 60 },
  { "surah": 31, "name_en": "Luqman", "name_ar": "لقمان", "ayahs": 34 },
  { "surah": 32, "name_en": "As-Sajdah", "name_ar": "السجدة", "ayahs": 30 },
  { "surah": 33, "name_en": "Al-Ahzab", "name_ar": "الأحزاب", "ayahs": 73 },
  { "surah": 34, "name_en": "Saba", "name_ar": "سبأ", "ayahs": 54 },
  { "surah": 35, "name_en": "Fatir", "name_ar": "فاطر", "ayahs": 45 },
  { "surah": 36, "name_en": "Ya-Sin", "name_ar": "يس", "ayahs": 83 },
  { "surah": 37, "name_en": "As-Saffat", "name_ar": "الصافات", "ayahs": 182 },
  { "surah": 38, "name_en": "Sad", "name_ar": "ص", "ayahs": 88 },
  { "surah": 39, "name_en": "Az-Zumar", "name_ar": "الزمر", "ayahs": 75 },
  { "surah": 40, "name_en": "Ghafir", "name_ar": "غافر", "ayahs": 85 },
  { "surah": 41, "name_en": "Fussilat", "name_ar": "فصلت", "ayahs": 54 },
  { "surah": 42, "name_en": "Ash-Shura", "name_ar": "الشورى", "ayahs": 53 },
  { "surah": 43, "name_en": "Az-Zukhruf", "name_ar": "الزخرف", "ayahs": 89 },
  { "surah": 44, "name_en": "Ad-Dukhan", "name_ar": "الدخان", "ayahs": 59 },
  { "surah": 45, "name_en": "Al-Jathiyah", "name_ar": "الجاثية", "ayahs": 37 },
  { "surah": 46, "name_en": "Al-Ahqaf", "name_ar": "الأحقاف", "ayahs": 35 },
  { "surah": 47, "name_en": "Muhammad", "name_ar": "محمد", "ayahs": 38 },
  { "surah": 48, "name_en": "Al-Fath", "name_ar": "الفتح", "ayahs": 29 },
  { "surah": 49, "name_en": "Al-Hujurat", "name_ar": "الحجرات", "ayahs": 18 },
  { "surah": 50, "name_en": "Qaf", "name_ar": "ق", "ayahs": 45 },
  { "surah": 51, "name_en": "Adh-Dhariyat", "name_ar": "الذاريات", "ayahs": 60 },
  { "surah": 52, "name_en": "At-Tur", "name_ar": "الطور", "ayahs": 49 },
  { "surah": 53, "name_en": "An-Najm", "name_ar": "النجم", "ayahs": 62 },
  { "surah": 54, "name_en": "Al-Qamar", "name_ar": "القمر", "ayahs": 55 },
  { "surah": 55, "name_en": "Ar-Rahman", "name_ar": "الرحمن", "ayahs": 78 },
  { "surah": 56, "name_en": "Al-Waqi'ah", "name_ar": "الواقعة", "ayahs": 96 },
  { "surah": 57, "name_en": "Al-Hadid", "name_ar": "الحديد", "ayahs": 29 },
  { "surah": 58, "name_en": "Al-Mujadila", "name_ar": "المجادلة", "ayahs": 22 },
  { "surah": 59, "name_en": "Al-Hashr", "name_ar": "الحشر", "ayahs": 24 },
  { "surah": 60, "name_en": "Al-Mumtahanah", "name_ar": "الممتحنة", "ayahs": 13 },
  { "surah": 61, "name_en": "As-Saff", "name_ar": "الصف", "ayahs": 14 },
  { "surah": 62, "name_en": "Al-Jumu'ah", "name_ar": "الجمعة", "ayahs": 11 },
  { "surah": 63, "name_en": "Al-Munafiqun", "name_ar": "المنافقون", "ayahs": 11 },
  { "surah": 64, "name_en": "At-Taghabun", "name_ar": "التغابن", "ayahs": 18 },
  { "surah": 65, "name_en": "At-Talaq", "name_ar": "الطلاق", "ayahs": 12 },
  { "surah": 66, "name_en": "At-Tahrim", "name_ar": "التحريم", "ayahs": 12 },
  { "surah": 67, "name_en": "Al-Mulk", "name_ar": "الملك", "ayahs": 30 },
  { "surah": 68, "name_en": "Al-Qalam", "name_ar": "القلم", "ayahs": 52 },
  { "surah": 69, "name_en": "Al-Haqqah", "name_ar": "الحاقة", "ayahs": 52 },
  { "surah": 70, "name_en": "Al-Ma'arij", "name_ar": "المعارج", "ayahs": 44 },
  { "surah": 71, "name_en": "Nuh", "name_ar": "نوح", "ayahs": 28 },
  { "surah": 72, "name_en": "Al-Jinn", "name_ar": "الجن", "ayahs": 28 },
  { "surah": 73, "name_en": "Al-Muzzammil", "name_ar": "المزمل", "ayahs": 20 },
  { "surah": 74, "name_en": "Al-Muddaththir", "name_ar": "المدثر", "ayahs": 56 },
  { "surah": 75, "name_en": "Al-Qiyamah", "name_ar": "القيامة", "ayahs": 40 },
  { "surah": 76, "name_en": "Al-Insan", "name_ar": "الإنسان", "ayahs": 31 },
  { "surah": 77, "name_en": "Al-Mursalat", "name_ar": "المرسلات", "ayahs": 50 },
  { "surah": 78, "name_en": "An-Naba", "name_ar": "النبأ", "ayahs": 40 },
  { "surah": 79, "name_en": "An-Nazi'at", "name_ar": "النازعات", "ayahs": 46 },
  { "surah": 80, "name_en": "Abasa", "name_ar": "عبس", "ayahs": 42 },
  { "surah": 81, "name_en": "At-Takwir", "name_ar": "التكوير", "ayahs": 29 },
  { "surah": 82, "name_en": "Al-Infitar", "name_ar": "الإنفطار", "ayahs": 19 },
  { "surah": 83, "name_en": "Al-Mutaffifin", "name_ar": "المطففين", "ayahs": 36 },
  { "surah": 84, "name_en": "Al-Inshiqaq", "name_ar": "الإنشقاق", "ayahs": 25 },
  { "surah": 85, "name_en": "Al-Buruj", "name_ar": "البروج", "ayahs": 22 },
  { "surah": 86, "name_en": "At-Tariq", "name_ar": "الطارق", "ayahs": 17 },
  { "surah": 87, "name_en": "Al-A'la", "name_ar": "الأعلى", "ayahs": 19 },
  { "surah": 88, "name_en": "Al-Ghashiyah", "name_ar": "الغاشية", "ayahs": 26 },
  { "surah": 89, "name_en": "Al-Fajr", "name_ar": "الفجر", "ayahs": 30 },
  { "surah": 90, "name_en": "Al-Balad", "name_ar": "البلد", "ayahs": 20 },
  { "surah": 91, "name_en": "Ash-Shams", "name_ar": "الشمس", "ayahs": 15 },
  { "surah": 92, "name_en": "Al-Lail", "name_ar": "الليل", "ayahs": 21 },
  { "surah": 93, "name_en": "Ad-Duha", "name_ar": "الضحى", "ayahs": 11 },
  { "surah": 94, "name_en": "Ash-Sharh", "name_ar": "الشرح", "ayahs": 8 },
  { "surah": 95, "name_en": "At-Tin", "name_ar": "التين", "ayahs": 8 },
  { "surah": 96, "name_en": "Al-Alaq", "name_ar": "العلق", "ayahs": 19 },
  { "surah": 97, "name_en": "Al-Qadr", "name_ar": "القدر", "ayahs": 5 },
  { "surah": 98, "name_en": "Al-Bayyinah", "name_ar": "البينة", "ayahs": 8 },
  { "surah": 99, "name_en": "Az-Zalzalah", "name_ar": "الزلزلة", "ayahs": 8 },
  { "surah": 100, "name_en": "Al-Adiyat", "name_ar": "العاديات", "ayahs": 11 },
  { "surah": 101, "name_en": "Al-Qari'ah", "name_ar": "القارعة", "ayahs": 11 },
  { "surah": 102, "name_en": "At-Takathur", "name_ar": "التكاثر", "ayahs": 8 },
  { "surah": 103, "name_en": "Al-Asr", "name_ar": "العصر", "ayahs": 3 },
  { "surah": 104, "name_en": "Al-Humazah", "name_ar": "الهمزة", "ayahs": 9 },
  { "surah": 105, "name_en": "Al-Fil", "name_ar": "الفيل", "ayahs": 5 },
  { "surah": 106, "name_en": "Quraysh", "name_ar": "قريش", "ayahs": 4 },
  { "surah": 107, "name_en": "Al-Ma'un", "name_ar": "الماعون", "ayahs": 7 },
  { "surah": 108, "name_en": "Al-Kawthar", "name_ar": "الكوثر", "ayahs": 3 },
  { "surah": 109, "name_en": "Al-Kafirun", "name_ar": "الكافرون", "ayahs": 6 },
  { "surah": 110, "name_en": "An-Nasr", "name_ar": "النصر", "ayahs": 3 },
  { "surah": 111, "name_en": "Al-Masad", "name_ar": "المسد", "ayahs": 5 },
  { "surah": 112, "name_en": "Al-Ikhlas", "name_ar": "الإخلاص", "ayahs": 4 },
  { "surah": 113, "name_en": "Al-Falaq", "name_ar": "الفلق", "ayahs": 5 },
  { "surah": 114, "name_en": "An-Nas", "name_ar": "الناس", "ayahs": 6 }
]
const SurahsPage = () => {
  return <div><div className="flex h-screen bg-black text-white">

      {/* 🔵 ICON SIDEBAR */}
      <aside className="w-16 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-4 gap-6">
        <BookOpen className="w-5 h-5 text-emerald-400" />
        <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
      </aside>

      {/* 📜 SURAH SIDEBAR */}
      <aside className="w-80 border-r border-zinc-800 overflow-y-auto hidden md:block">
        <div className="p-4 border-b border-zinc-800">
          <h2 className="text-lg font-semibold">Surahs</h2>
          <p className="text-xs text-gray-400">114 Chapters</p>
        </div>

        <div className="flex flex-col">
          {surahs.map((s) => (
            <Link
              key={s.surah}
              href={`/surah/${s.surah}`}
              className="flex justify-between items-center px-4 py-3 hover:bg-zinc-900 border-b border-zinc-900"
            >
              <div>
                <p className="text-sm font-medium">{s.name_en}</p>
                <p className="text-xs text-gray-400">{s.name_ar}</p>
              </div>

              <span className="text-xs text-gray-500">
                {s.ayahs} Ayahsss
              </span>
            </Link>
          ))}
        </div>
      </aside>

      {/* 📖 MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-zinc-900 to-black border border-zinc-800">

    {/* Background glow effect */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#10b981,_transparent_60%)]" />

    <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

      {/* Text Content */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Read, Listen & Understand the Holy Quran
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
          Explore all 114 Surahs with Arabic text, English translation, Bangla translation,
          and beautiful audio recitation. Built for a smooth spiritual experience.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium">
            Start Reading
          </button>

          <button className="px-4 py-2 border border-zinc-700 hover:border-zinc-500 rounded-md text-sm">
            Browse Surahs
          </button>
        </div>
      </div>

      {/* Right Badge */}
      <div className="hidden md:block text-right">
        <div className="text-6xl font-bold text-emerald-500">114</div>
        <p className="text-sm text-gray-400">Total Surahs</p>
      </div>

    </div>
  </div>
</div>

        {/* HEADER */}
        <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Quran App</h1>
            <p className="text-xs text-gray-400">
              Read, Listen, Understand
            </p>
          </div>

          <button className="px-3 py-1 text-sm bg-emerald-600 rounded">
            Continue Reading
          </button>
        </div>

        {/* HERO / INTRO */}
        <div className="p-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-2">
              Welcome to the Holy Quran
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Read, search, and listen to the Holy Quran with Arabic text,
              English translation, and Bangla translation. Enjoy a smooth
              spiritual reading experience.
            </p>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-zinc-900 p-4 rounded-lg">
            <h3 className="font-semibold">📖 Read Quran</h3>
            <p className="text-sm text-gray-400 mt-2">
              Browse all 114 surahs with Arabic and translations.
            </p>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg">
            <h3 className="font-semibold">🔊 Listen</h3>
            <p className="text-sm text-gray-400 mt-2">
              Play audio recitation for each ayah or full surah.
            </p>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg">
            <h3 className="font-semibold">🔍 Search</h3>
            <p className="text-sm text-gray-400 mt-2">
              Search ayahs by Arabic, English, or Bangla text.
            </p>
          </div>

        </div>

      </main>

    </div></div>;
};

export default SurahsPage;
"use client";

import Link from "next/link";
import { Home, Search, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      <div className="text-center max-w-md">

        {/* 404 Number */}
        <h1 className="text-7xl font-bold text-emerald-500">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
          Let’s help you continue your Quran journey.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">

          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 transition px-4 py-2 rounded-md"
          >
            <Home size={18} />
            Go Home
          </Link>

          <Link
            href="/search"
            className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-md"
          >
            <Search size={18} />
            Search Ayah
          </Link>

        </div>

        {/* Suggested Activity Section */}
        <div className="mt-10 text-left bg-zinc-900 p-4 rounded-lg border border-zinc-800">

          <h3 className="text-sm font-semibold mb-3 text-emerald-400">
            Continue Your Journey
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">

            <li className="flex items-center gap-2">
              <BookOpen size={16} className="text-emerald-500" />
              Read Surah Al-Fatiha
            </li>

            <li className="flex items-center gap-2">
              <BookOpen size={16} className="text-emerald-500" />
              Listen to Surah Yaseen
            </li>

            <li className="flex items-center gap-2">
              <BookOpen size={16} className="text-emerald-500" />
              Explore all 114 Surahs
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}
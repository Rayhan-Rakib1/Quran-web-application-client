"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Settings } from "lucide-react";
import logo from "../../../public/asserts/logo.svg";

const PublicNavbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/surahs", label: "Surahs" },
    { href: "/bookmarks", label: "Bookmarks" },
    { href: "/audio", label: "Audio" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/90 text-white backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Quran App" />
         
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-emerald-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[280px] bg-black text-white">
                <SheetTitle className="text-white mb-4">
                  Quran Menu
                </SheetTitle>

                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="border-t pt-4 mt-4 flex flex-col gap-3">
                    <Button className="w-full">Search Ayah</Button>
                    <Button className="w-full" variant="secondary">
                      Settings
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
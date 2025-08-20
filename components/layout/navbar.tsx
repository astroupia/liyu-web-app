"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Icon from "@/public/assets/images/Icon.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // get current route

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Image src={Icon} width={50} height={50} alt="Logo" />
            <Link href="/" className="m-3 flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#532516]">Liyu</span>
              <span className="text-[#E8982E] text-2xl font-bold">
                Catering
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.name === "Book Now") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="bg-[#532516] text-white px-4 py-2 rounded-md hover:bg-[#E8982E] transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-[#532516]" // active text color
                      : "text-gray-700 hover:text-[#532516]" // default
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.name === "Book Now") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block bg-[#532516] text-white px-3 py-2 rounded-md hover:bg-[#E8982E] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors ${
                    pathname === item.href
                      ? "text-[#532516]" // active text color
                      : "text-gray-700 hover:text-[#E8982E]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

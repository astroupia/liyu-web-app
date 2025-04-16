import Link from "next/link";
import { Facebook, FolderCode, Instagram, Twitter } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#532516] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Liyu</span>
              <span className="text-[#E8982E] text-2xl font-bold">
                Catering
              </span>
            </div>
            <p className="text-gray-300">
              Crafting memorable experiences through exceptional catering
              services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#E8982E] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>contact@liyucatering.com</li>
              <li>(619) 623-2122</li>
              <li>San Diego, California</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#E8982E] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#E8982E] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#E8982E] transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                  <p className="mb-4">
                    © {new Date().getFullYear()} Liyu Catering. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://sydek.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      <FolderCode className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                      <span>Developed By Sydek</span>
                    </Link>
                    <Link
                      href="https://sydek.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Image
                        src="/assets/images/sydek-logo.png"
                        alt="sydek logo"
                        width={30}
                        height={30}
                        className="rounded-lg opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      />
                    </Link>
                  </div>
                </div>
      </div>
    </footer>
  );
}

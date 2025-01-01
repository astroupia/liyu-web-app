"use client";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PACKAGES } from "@/lib/constants";
import Link from "next/link";

export default function PackagesPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#532516] mb-4">
              Our Catering Packages
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated packages designed to meet your
              specific needs and make your event extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative p-8 ${
                  pkg.featured
                    ? "border-[#E8982E] border-2 shadow-lg"
                    : "border-gray-200"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 bg-[#E8982E] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#532516] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  {/* <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-[#532516]">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">/person</span>
                  </div> */}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-[#E8982E] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    pkg.featured
                      ? "bg-[#E8982E] hover:bg-[#532516]"
                      : "bg-[#532516] hover:bg-[#E8982E]"
                  }`}
                >
                  <Link href="/book">Book Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

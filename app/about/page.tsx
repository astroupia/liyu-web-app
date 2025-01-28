import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Utensils, Heart, Globe, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#532516] mb-4">
              Our Story
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A journey from Ethiopian kitchen
            </p>
          </div>

          {/* Founder Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* <div
              className="relative h-[500px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: 'url("../../public/assets/images/about.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            /> */}
            <Image
              src="/assets/images/about.jpg"
              alt="About Us page Picture of the Chef"
              width={550}
              height={500}
              className="rounded-lg object-cover"
              priority
              unoptimized
            />
            <div>
              <h2 className="text-3xl font-bold text-[#532516] mb-6">
                Meet Hiwot Zikie
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Born in the vibrant city of Addis Ababa, Ethiopia, my culinary
                  journey began in my grandmother&apos;s kitchen. Those early
                  days of helping her and my aunties prepare traditional
                  Ethiopian dishes planted the seeds of what would become my
                  life&apos;s passion.
                </p>
                <p>
                  As a child, my love for cooking manifested in playful ways -
                  creating imaginative dishes from plants and leaves, hosting
                  little gatherings for family and friends. These childhood
                  games were the first signs of my future calling.
                </p>
                <p>
                  Since moving to the USA in 2010, I&apos;ve balanced motherhood
                  and a full-time career while pursuing my passion for catering.
                  Drawing from my Ethiopian heritage and international culinary
                  experiences, I&apos;ve spent over 15 years in the hospitality,
                  catering, and restaurant industries.
                </p>
                <p className="font-medium text-[#532516]">
                  Today, Liyu Catering is the realization of my dream to create
                  a legacy that combines high-quality, affordable cuisine with
                  exceptional service.
                </p>
                <Button asChild className="bg-[#E8982E] hover:bg-[#E8982E]/90">
                  <Link href="/book">Plan Your Event</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Passion",
                description:
                  "Every dish is crafted with love and dedication, just like in my grandmother's kitchen.",
              },
              {
                icon: Globe,
                title: "Heritage",
                description:
                  "Blending Ethiopian traditions with international flavors.",
              },
              {
                icon: Utensils,
                title: "Quality",
                description:
                  "Premium ingredients and exceptional preparation in every meal.",
              },
              {
                icon: Award,
                title: "Service",
                description:
                  "15+ years of hospitality excellence at affordable prices.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#E8982E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#E8982E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#532516] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#532516] text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s Create Something Special
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              From intimate family gatherings to grand celebrations, we bring
              the authentic flavors and warm hospitality of Ethiopian cuisine to
              your special events.
            </p>
            <Button asChild className="bg-[#E8982E] hover:bg-[#E8982E]/90">
              <Link href="/book">Plan Your Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

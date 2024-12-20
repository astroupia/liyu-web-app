import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Award } from "lucide-react";
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
              Bringing culinary excellence and exceptional service to every
              event since 2010.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="relative h-[400px] rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div>
              <h2 className="text-3xl font-bold text-[#532516] mb-4">
                Crafting Memorable Experiences
              </h2>
              <p className="text-gray-600 mb-6">
                At Liyu Catering, we believe that every event deserves
                exceptional food and service. Our journey began with a simple
                passion for creating unforgettable dining experiences, and
                today, we&apos;re proud to be one of the most trusted catering
                services in the region.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced chefs and event professionals work
                tirelessly to ensure that every detail is perfect, from the menu
                planning to the final presentation. We source only the finest
                ingredients and craft each dish with care and attention to
                detail.
              </p>
              <Button asChild className="bg-[#532516] hover:bg-[#E8982E]">
                <Link href="/book">Start Planning Your Event</Link>
              </Button>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We pour our heart into every dish we create.",
              },
              {
                icon: Users,
                title: "Teamwork",
                description: "Our dedicated team works in perfect harmony.",
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "Consistently delivering excellence on time.",
              },
              {
                icon: Award,
                title: "Quality",
                description:
                  "Only the finest ingredients make it to your plate.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-lg shadow-md"
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
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Elevate Your Events with
            <span className="text-[#E8982E]"> Exceptional Catering</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring culinary
            excellence and impeccable service to every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#E8982E] hover:bg-[#532516] text-white px-8 py-6 text-lg"
            >
              <Link href="/book">Book Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-[#E8982E] hover:bg-white hover:text-[#532516] px-8 py-6 text-lg"
            >
              <Link href="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

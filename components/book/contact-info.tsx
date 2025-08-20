import { Card } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-[#532516] mb-4">
        Contact Information
      </h2>
      <div className="space-y-2 text-gray-600">
          <p>Contact us at <a href="mailto:contact@liyucatering.com"  className="underline">contact@liyucatering.com</a></p>
          <p>Call: <a href="tel:+16196232122" className="underline">(619) 623-2122</a></p>
          <p>Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
    </div>

    </Card>
  );
}

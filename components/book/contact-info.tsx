import { Card } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-[#532516] mb-4">
        Contact Information
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>Email: contact@liyucatering.com</p>
        <p>Phone: (619) 623-2122</p>
        <p>Hours: Monday - Friday: 9:00 AM - 6:00 PM</p>
      </div>
    </Card>
  );
}

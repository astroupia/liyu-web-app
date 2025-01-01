"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingForm } from "@/components/book/booking-form";
import { ContactInfo } from "@/components/book/contact-info";
import { Expectations } from "@/components/book/expectations";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#532516] mb-4">
              Book Your Event
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let us help you create an unforgettable experience. Fill out the
              form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-[#532516] mb-4">
                    Thank You for Your Inquiry!
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We&apos;ve received your request and will contact you within
                    24 hours to discuss your event details.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#532516] hover:bg-[#E8982E]"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <BookingForm onSubmithandler={handleSubmit} />
              )}
            </Card>

            <div className="space-y-6">
              <ContactInfo />
              <Expectations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

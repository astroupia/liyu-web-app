"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { createBooking } from "@/lib/actions/booking.actions"; // Import the createBooking function
import { IBooking } from "@/lib/models/booking";

export function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const bookingData: IBooking = {
        ...formData,
        eventDate: new Date(formData.eventDate),
        guestCount: parseInt(formData.guestCount, 10),
        status: "pending",
        createdAt: new Date(),
      };

      const savedBooking = await createBooking(bookingData);
      if (savedBooking) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          guestCount: "",
          details: "",
        });
        alert("Booking submitted successfully!");
      } else {
        alert("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      eventType: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="eventType">Event Type</Label>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select event type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="corporate">Corporate Event</SelectItem>
            <SelectItem value="private">Private Party</SelectItem>
            <SelectItem value="social">Social Gathering</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date</Label>
          <Input
            id="eventDate"
            type="date"
            required
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guestCount">Number of Guests</Label>
          <Input
            id="guestCount"
            type="number"
            placeholder="Enter number of guests"
            required
            value={formData.guestCount}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Additional Details</Label>
        <Textarea
          id="details"
          placeholder="Tell us more about your event..."
          className="min-h-[100px]"
          value={formData.details}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full bg-[#E8982E] hover:bg-[#532516]">
        Submit Request
      </Button>
    </form>
  );
}

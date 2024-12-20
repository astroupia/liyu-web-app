import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card } from "../ui/card";
import { Table } from "../ui/table";
import { Button } from "../ui/button";
import { Navbar } from "../layout/navbar";
import { format } from "date-fns";

const BookTable = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading bookings...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#532516]">Booking Management</h1>
      <Button
        onClick={() => window.location.reload()}
        className="bg-[#E8982E] hover:bg-[#532516]"
      >
        Refresh
      </Button>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Event Date</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking._id}>
                  <TableCell>
                    {format(new Date(booking.createdAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    {booking.firstName} {booking.lastName}
                  </TableCell>
                  <TableCell>{booking.eventType}</TableCell>
                  <TableCell>
                    {format(new Date(booking.eventDate), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>{booking.guestCount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{booking.email}</div>
                      <div>{booking.phone}</div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default BookTable;

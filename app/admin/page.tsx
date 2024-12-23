"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { getBooking } from "@/lib/actions/booking.actions";
import { IBooking } from "@/lib/models/booking";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        fetchBookings();
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  const fetchBookings = async () => {
    try {
      const fetchedbooking = await getBooking();
      setBookings(fetchedbooking ?? []);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <Navbar />
  //       <div className="pt-24 pb-16">
  //         <div className="max-w-md mx-auto px-4">
  //           <Card className="p-6">
  //             <h1 className="text-2xl font-bold text-[#532516] mb-6">
  //               Admin Login
  //             </h1>
  //             <form onSubmit={handleLogin} className="space-y-4">
  //               <div>
  //                 <Label htmlFor="username">Username</Label>
  //                 <Input
  //                   id="username"
  //                   value={username}
  //                   onChange={(e) => setUsername(e.target.value)}
  //                   required
  //                 />
  //               </div>
  //               <div>
  //                 <Label htmlFor="password">Password</Label>
  //                 <Input
  //                   id="password"
  //                   type="password"
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                   required
  //                 />
  //               </div>
  //               <Button
  //                 type="submit"
  //                 className="w-full bg-[#532516] hover:bg-[#E8982E]"
  //               >
  //                 Login
  //               </Button>
  //             </form>
  //           </Card>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[#532516]">
              Booking Management
            </h1>
            <Button
              onClick={() => window.location.reload()}
              className="bg-[#E8982E] hover:bg-[#532516]"
            >
              Refresh
            </Button>
          </div>

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
                  {bookings.map((booking, index) => (
                    <TableRow key={index}>
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
      </div>
    </div>
  );
}

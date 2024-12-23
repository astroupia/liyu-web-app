"use server";
import { connectDB } from "../db";
import { IBooking, Booking } from "../models/booking";

const createBooking = async ({
  firstName,
  lastName,
  email,
  phone,
  eventType,
  eventDate,
  guestCount,
  details,
  status,
  createdAt,
}: IBooking) => {
  await connectDB();

  const newBooking = new Booking({
    firstName,
    lastName,
    email,
    phone,
    eventType,
    eventDate,
    guestCount,
    details,
    status,
    createdAt,
  });

  try {
    const savedBooking = await newBooking.save();
    return savedBooking;
  } catch (error) {
    throw new Error(`Error in saving booking: ${error}`);
  }
};

export { createBooking };

export const getBooking = async () => {
  try {
    await connectDB();
    const bookings: IBooking[] = await Booking.find();
    const formatedbooking = bookings?.map((booking: any) => ({
      firstName: booking.firstName,
      lastName: booking.lastName,
      email: booking.email,
      phone: booking.phone,
      eventType: booking.eventType,
      eventDate: booking.eventDate,
      guestCount: booking.guestCount,
      details: booking.details,
      status: booking.status,
      createdAt: booking.createdAt,
    }));
    return formatedbooking;
  } catch (error) {
    console.log(`something went wrong`, error);
    return [];
  }
};

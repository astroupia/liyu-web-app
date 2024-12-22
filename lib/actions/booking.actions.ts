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

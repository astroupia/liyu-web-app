"use server";

import { createBooking } from "@/lib/actions/booking.actions";
import { IBooking } from "@/lib/models/booking";

export async function handleSubmit(formData: IBooking) {
  try {
    const savedBooking = await createBooking(formData);
    return savedBooking.toObject();
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    throw error;
  }
}

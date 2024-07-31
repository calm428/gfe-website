import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "BOOKING_CREATED",
        "BOOKING_RESCHEDULED",
        "BOOKING_CANCELLED",
        "MEETING_ENDED",
        "BOOKING_REJECTED",
        "BOOKING_REQUESTED",
        "BOOKING_PAYMENT_INITIATED",
        "BOOKING_PAID",
        "MEETING_STARTED",
        "RECORDING_READY",
        "FORM_SUBMITTED",
      ],
    },
    link: {
      type: String,
      required: true,
    },
    note: String,
  },
  { timestamps: true },
);

export default mongoose.models?.Booking ||
  mongoose.model("Booking", bookingSchema);

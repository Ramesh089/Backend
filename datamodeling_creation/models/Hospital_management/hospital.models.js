import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specilation: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true },
);

export const Hospital = mongoose.model("Haspital", hospitalSchema);

import { Timestamp } from "bson";
import mongoose from "mongoose";

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedwith: {
      type: string,
      required: true,
    },
    age: {
      typeof: Number,
      required: true,
    },
    blood: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    addmitIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { Timestamps: true },
);

export const Patient = mongoose.model("Patient", patientSchema);

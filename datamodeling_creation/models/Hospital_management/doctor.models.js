import mongoose from "mongoose";

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    quelificatin: {
      type: String,
      required: true,
    },
    experienceYears: {
      type: Number,
      default: 0,
    },
    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { Timestamps: true },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    Email: {
      type: String,
      required: true,
      lowercase: true,
    },
    Password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);

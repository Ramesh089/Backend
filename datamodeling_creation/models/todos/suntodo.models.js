import mongoose from 'mongoose'

const subTodoShema = new mongoose.Schema(
  {
    content: {
      type: String,
      requirede: true,
    },
    complete: {
      type: boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const subtodo = mongoose.model("subtodo",subTodoShema)
import mongoose ,{Schema,} from "mongoose"

const userSchema = Schema(
  {
    username: {
      Type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    fullname: {
      Type: String,
      required: true,
      lowercase: true,
    },
    email: {
      Type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    video: {
      Type: Schema.Types.ObjectId,
      ref:"Video",
      required: true,
      
    },
  },
  {}
);

export const User = mongoose.model("User",userSchema)

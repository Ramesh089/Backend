import mongoose, { mongo } from "mongoose";

const orderItmesSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = mongoose.Schema(
  {
    OrderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItmes: {
      type: [orderItmesSchema],
      // type:[
      //   {
      //     productId:{
      //       type:mongoose.Schema.Types.ObjectId,
      //       ref:"Product"
      //     },
      //     quantity:{
      //       type:Number,
      //       required:true
      //     }
      //   }
      // ]
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING,CANCELLED,DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);

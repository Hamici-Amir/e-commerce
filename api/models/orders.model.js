import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Posts" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deliveryDetails: {
      email: { type: String, required: true },
      name: { type: String, required: true },
      addressLine1: { type: String, required: true },
      city: { type: String, required: true },
    },
   
    totalAmount: Number,
    status: {
      type: String,
      enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"],
    },
    createdAt: { type: Date, default: Date.now },
    







})


export const Order = mongoose.model("Order",orderSchema)
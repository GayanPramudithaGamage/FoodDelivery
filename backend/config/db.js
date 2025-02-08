import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://gayangamage:88225512@cluster0.qcrcr.mongodb.net/food-delivery").then(() =>console.log("DB connected"))
}
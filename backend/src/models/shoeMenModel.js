import mongoose from "mongoose";

const shoeMenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
});

export const MenShoe = mongoose.model("Shoe Men", shoeMenSchema);
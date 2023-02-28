import mongoose from "mongoose";

const shoeChildrenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    fastener: { type: String, required: true },
    gender: { type: String, required: true },
});

export const ChildrenShoe = mongoose.model("Shoe Children", shoeChildrenSchema);
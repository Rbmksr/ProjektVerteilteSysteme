import mongoose from "mongoose";

const shoeWomenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    heelType: { type: String, required: true },
    heelHeight: { type: String, required: true },
});

export const WomenShoe = mongoose.model("Shoe Women", shoeWomenSchema);
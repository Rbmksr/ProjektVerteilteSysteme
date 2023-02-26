import express from "express";
import {
    getShoesWomen,
    findShoesWomen,
    findShoesWomenById,
    addShoeWomen,
    newShoeWomenValidators,
} from "../controllers/shoe2Women.js";

const shoeWomenRouter = express.Router();

router.get("/", getShoesWomen);
router.get("/search", findShoesWomen);
router.get("/:id", findShoesWomenById);
router.post("/", newShoeWomenValidators, addShoeWomen);

export default shoeWomenRouter;
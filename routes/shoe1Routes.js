import express from "express";
import {
    getShoesMen,
    findShoesMen,
    findShoesMenById,
    addShoeMen,
    newShoeMenValidators,
} from "../controllers/shoe1Men.js";

const shoeMenRouter = express.Router();

router.get("/", getShoesMen);
router.get("/search", findShoesMen);
router.get("/:id", findShoesMenById);
router.post("/", newShoeMenValidators, addShoeMen);

export default shoeMenRouter;
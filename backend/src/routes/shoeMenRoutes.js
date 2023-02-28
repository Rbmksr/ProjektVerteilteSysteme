import express from "express";
import {
    getShoesMen,
    findShoesMen,
    findShoesMenById,
    addShoeMen,
    newShoeMenValidators,
} from "../controllers/shoeMenController.js";

const router = express.Router();

router.get("/", getShoesMen);
router.get("/search", findShoesMen);
router.get("/:id", findShoesMenById);
router.post("/", newShoeMenValidators, addShoeMen);

export default router;
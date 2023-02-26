import express from "express";
import {
    getShoesChildren,
    findShoesChildren,
    findShoesChildrenById,
    addShoeChildren,
    newShoeChildrenValidators,
} from "../controllers/shoe3Children";

const shoeChildrenRouter = express.Router();

router.get("/", getShoesChildren);
router.get("/search", findShoesChildren);
router.get("/:id", findShoesChildrenById);
router.post("/", newShoeChildrenValidators, addShoeChildren);

export default shoeChildrenRouter;
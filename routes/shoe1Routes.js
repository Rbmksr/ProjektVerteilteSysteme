import express from "express";
import {
    findBooks,
    findBooksById,
    getBooks,
    addBook,
    newBookValidators,
} from "./booksControllers.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/search", findBooks);
router.get("/:id", findBooksById);
router.post("/", newBookValidators, addBook);

export default router;
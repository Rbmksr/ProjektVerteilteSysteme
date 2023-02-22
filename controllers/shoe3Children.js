import { check, validationResult } from "express-validator";

const shoesChildren = [
    {
        id: 0,
        title: "Project Hail Mary",
        author: "Andy Weir",
        pages: 496,
    },
    {
        id: 1,
        title: "Harrow the Ninth",
        author: "Tamsyn Muir",
        pages: 512,
    },
];

export const getShoesChildren = (req, res) => {
    res.status(200).send(shoesChildren);
};

export const findShoesChildren = (req, res) => {
    let result = shoesChildren.filter((shoeChildren) => shoeChildren.title == req.query.title);
    res.status(200).send(result);
};

export const findShoesChildrenById = (req, res) => {
    let shoeChildren = shoesChildren.find((b) => b.id == req.params.id);
    res.status(200).send(shoeChildren);
};

export const addShoeChildren = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let shoeChildren = req.body;
    shoesChildren.push(shoeChildren);
    res.status(201).send(`Added ${shoeChildren.title} to book collection`);
};

// attached as second param in a route
export const newShoeChildrenValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("author").notEmpty().withMessage("Author field required"),
];
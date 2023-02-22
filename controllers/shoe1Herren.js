import { check, validationResult } from "express-validator";

const shoesHerren = [
    {
        id: 0,
        title: "Project Hail Mary",
        author: "Andy Weir",
        pages: 496,
        //Name
        //Kategorie
        //Marke
        //Preis
        //Größen
        //Frabe
    },
    {
        id: 1,
        title: "Harrow the Ninth",
        author: "Tamsyn Muir",
        pages: 512,
    },
];

export const getShoeHerren = (req, res) => {
    res.status(200).send(shoesHerren);
};

export const findShoesHerren = (req, res) => {
    let result = shoesHerren.filter((shoeHerren) => shoeHerren.title == req.query.title);
    res.status(200).send(result);
};

export const findShoesHerrenById = (req, res) => {
    let shoeHerren = shoesHerren.find((b) => b.id == req.params.id);
    res.status(200).send(shoeHerren);
};

export const addShoeHerren = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let shoeHerren = req.body;
    shoesHerren.push(shoeHerren);
    res.status(201).send(`Added ${shoeHerren.title} to book collection`);
};

// attached as second param in a route
export const newShoeHerrenValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("author").notEmpty().withMessage("Author field required"),
];
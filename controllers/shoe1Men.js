import { check, validationResult } from "express-validator";

const shoesMen = [
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

export const getShoesMen = (req, res) => {
    res.status(200).send(shoesMen);
};

export const findShoesMen = (req, res) => {
    let result = shoesMen.filter((shoeMen) => shoeMen.title == req.query.title);
    res.status(200).send(result);
};

export const findShoesMenById = (req, res) => {
    let shoeMen = shoesMen.find((b) => b.id == req.params.id);
    res.status(200).send(shoeMen);
};

export const addShoeMen = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let shoeMen = req.body;
    shoesMen.push(shoeMen);
    res.status(201).send(`Added ${shoeMen.title} to book collection`);
};

// attached as second param in a route
export const newShoeMenValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("author").notEmpty().withMessage("Author field required"),
];
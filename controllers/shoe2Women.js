import { check, validationResult } from "express-validator";

const shoesWomen = [
    {
        id: 0,
        name: "ExampleShoe",
        category: "Sneaker",
        brand: "Nike",
        price: "150",
        size: "43",
        color: "black",
    },
];

export const getShoesWomen = (req, res) => {
    res.status(200).send(shoesWomen);
};

export const findShoesWomen = (req, res) => {
    let result = shoesWomen.filter(
        (shoeWomen) => shoeWomen.name == req.query.name
    );
    res.status(200).send(result);
};

export const findShoesWomenById = (req, res) => {
    let shoeWomen = shoesWomen.find((b) => b.id == req.params.id);
    res.status(200).send(shoeWomen);
};

export const addShoeWomen = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let shoeWomen = req.body;
    shoesWomen.push(shoeWomen);
    res.status(201).send(`Added ${shoeWomen.name} to shoeWomen collection`);
};

// attached as second param in a route
export const newShoeWomenValidators = [
    check("name").notEmpty().withMessage("Name field required"),
    check("category").notEmpty().withMessage("Category field required"),
    check("brand").notEmpty().withMessage("Brand field required"),
    check("price").notEmpty().withMessage("Price field required"),
    check("size").notEmpty().withMessage("Size field required"),
    check("color").notEmpty().withMessage("Color field required"),
];

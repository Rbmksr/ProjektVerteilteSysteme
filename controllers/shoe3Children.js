import { check, validationResult } from "express-validator";

const shoesChildren = [
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

export const getShoesChildren = (req, res) => {
    res.status(200).send(shoesChildren);
};

export const findShoesChildren = (req, res) => {
    let result = shoesChildren.filter(
        (shoeChildren) => shoeChildren.name == req.query.name
    );
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
    res.status(201).send(`Added ${shoeChildren.name} to shoeChildren collection`);
};

// attached as second param in a route
export const newShoeChildrenValidators = [
    check("name").notEmpty().withMessage("Name field required"),
    check("category").notEmpty().withMessage("Category field required"),
    check("brand").notEmpty().withMessage("Brand field required"),
    check("price").notEmpty().withMessage("Price field required"),
    check("size").notEmpty().withMessage("Size field required"),
    check("color").notEmpty().withMessage("Color field required"),
];

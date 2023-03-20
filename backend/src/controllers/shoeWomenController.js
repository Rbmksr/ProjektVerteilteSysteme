import { check, validationResult } from "express-validator";
import { WomenShoe } from "../models/shoeWomenModel.js";
const shoesWomen = [
    {
        id: 0,
        name: "ExampleShoe",
        category: "Sneaker",
        brand: "Nike",
        price: "150",
        size: "43",
        color: "black",
        heelType: "platform",
        heelHeight: "5cm",
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

export const addShoeWomen = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const shoesWomen = new WomenShoe({
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        heelType: req.body.heelType,
        heelHeight: req.body.heelHeight,
    });
    shoesWomen
        .save(shoesWomen)
        .then((shoeWomen) => res.status(201).send(shoeWomen));
};

export const deleteShoeWomen = async (req, res) => {
    let result = await WomenShoe.findByIdAndDelete(req.params.id);
    res.status(200).send(result);
};

export const patchShoeWomen = async (req, res) => {
    let result = await WomenShoe.findByIdAndUpdate(req.params.id, req.body, {
        new: false,
    });
    res.status(200).send(result);
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

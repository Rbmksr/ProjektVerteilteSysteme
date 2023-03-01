import { check, validationResult } from "express-validator";
import { MenShoe } from "../models/shoeMenModel.js";

const shoesMen = [
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

export const getShoesMen = (req, res) => {
  res.status(200).send(shoesMen);
};

export const findShoesMen = (req, res) => {
  let result = shoesMen.filter((shoeMen) => shoeMen.name == req.query.name);
  res.status(200).send(result);
};

export const findShoesMenById = (req, res) => {
  let shoeMen = shoesMen.find((b) => b.id == req.params.id);
  res.status(200).send(shoeMen);
};

/*
export const addShoeMen = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let shoeMen = req.body;
  shoesMen.push(shoeMen);
  res.status(201).send(`Added ${shoeMen.name} to shoeMen collection`);
};
*/

export const addShoeMen = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const shoeMen = new MenShoe({
    name: req.body.name,
    category: req.body.category,
    brand: req.body.brand,
    price: req.body.price,
    size: req.body.size,
    color: req.body.color,
  });
  shoeMen
    .save(shoeMen)
    .then((shoeMen) => res.status(201).send(shoeMen));
};

// attached as second param in a route
export const newShoeMenValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("category").notEmpty().withMessage("Category field required"),
  check("brand").notEmpty().withMessage("Brand field required"),
  check("price").notEmpty().withMessage("Price field required"),
  check("size").notEmpty().withMessage("Size field required"),
  check("color").notEmpty().withMessage("Color field required"),
];

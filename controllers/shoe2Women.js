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
    (shoeWomen) => shoeWomen.title == req.query.title
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
  res.status(201).send(`Added ${shoeWomen.title} to book collection`);
};

// attached as second param in a route
export const newShoeWomenValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("author").notEmpty().withMessage("Author field required"),
];

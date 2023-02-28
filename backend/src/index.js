import express from "express";
import bodyParser from "body-parser";

import shoeMenRouter from "./routes/shoeMenRoutes.js";
import shoeWomenRouter from "./routes/shoeWomenRoutes.js";
import shoeChildrenRouter from "./routes/shoeChildrenRoutes.js";

// app initialisieren
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/shoeMen", shoeMenRouter);
app.use("/shoeWomen", shoeWomenRouter);
app.use("/shoeChildren", shoeChildrenRouter);

// wo läuft die app
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
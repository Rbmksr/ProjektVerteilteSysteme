import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import shoeMenRouter from "./routes/shoeMenRoutes.js";
import shoeWomenRouter from "./routes/shoeWomenRoutes.js";
import shoeChildrenRouter from "./routes/shoeChildrenRoutes.js";

// app initialisieren
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/shoeMen", shoeMenRouter);
app.use("/shoeWomen", shoeWomenRouter);
app.use("/shoeChildren", shoeChildrenRouter);

// mit db verbinden
mongoose.connect("mongodb://mongo:27017/test").then(() => {
    console.log("Database connected");
});

// wo läuft die app
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
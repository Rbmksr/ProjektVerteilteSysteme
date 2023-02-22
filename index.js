import express from "express";

// app initialisieren
const app = express();
const port = 4000;

//app.use(bodyParser.json());
//app.use("/books", router);

// wo läuft die app
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
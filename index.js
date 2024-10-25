const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config(); //Enables access to environment Varibales

//Getting DataBase Connection String
const dbStr = process.env.DATABASE_CONNECTION_STRING;

//importing model
const Details = require("./Schemas/details.models.js");

//Express middleWares
app.use(cors()); //Enables api access from any origin and allows all methods
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    '<h1 style="text-align:center; color:rebeccapurple">Authenticator Server</h1>'
  );
});

//Posting Data to the Database
app.post("/details", async (req, res) => {
  try {
    const details = await Details.create(req.body);

    res.status(200).json(details);

    console.log(details);
  } catch (error) {
    res.status(500).json({ message: error.messag });
  }
});

//Getting Data from db
app.get("/details", async (req, res) => {
  try {
    const details = await Details.find({});
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Serving our api
app.listen(port, () => {
  console.log("Server is running on port, " + port);
});

//Coonecting to the database
mongoose
  .connect(dbStr)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(() => {
    console.log("Failed to connect to the database");
  });

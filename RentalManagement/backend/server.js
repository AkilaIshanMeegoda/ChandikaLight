const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const rentalRouter = require("./routes/rentals.js");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
    .then(()=>{
        console.log("MongoDB Connection Success!");
        app.listen(PORT,()=>{
            console.log(`Server is up and running on Port Number: ${PORT}`)
        });
    }).catch((err)=>{
        console.log(err);
    });

    app.use("/rental",rentalRouter);
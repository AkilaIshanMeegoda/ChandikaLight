const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const reservationRouter = require("./src/routes/reservation");
const serviceRouter = require("./src/routes/services");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.text({ limit: '200mb' }));
app.use('/icons', express.static('./Icon-svgs'));

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

app.use("/reservation",reservationRouter);
app.use("/service", serviceRouter);


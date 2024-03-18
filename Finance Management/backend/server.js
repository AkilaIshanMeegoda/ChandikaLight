const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const app = express();
const session = require("express-session");
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

// Multer configuration for handling multipart/form-data
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'); // Save uploaded files to the uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
    }
});

const upload = multer({
     storage: storage 
});

//app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

const URL = process.env.MONGODB_URL;

const financeRouter = require("./routes/finances.js");
app.use("/finance", financeRouter)

mongoose.connect(URL)
    .then(()=>{
        console.log("MongoDB Connection Success!");
        app.listen(PORT,()=>{
            console.log(`Server is up and running on Port Number: ${PORT}`)
        });
    }).catch((err)=>{
        console.log(err);
    });
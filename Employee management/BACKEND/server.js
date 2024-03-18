const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection success!");
});

// Import routes
const employeeRouter = require("./routes/employees.js");
const salaryRouter = require("./routes/SalaryRoute.js");

// Routes for Employee
app.use("/employee", employeeRouter);

// Routes for Salary
app.use("/salary", salaryRouter);

const paysheetRouter = require('./routes/paysheet');
app.use('/paysheet', paysheetRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});

const router = require("express").Router();
const Salary = require("../models/Salary");

// Create a new salary record
router.post("/createSalary", async (req, res) => {
    try {
        const newSalary = await Salary.create(req.body);
        res.status(201).json(newSalary);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Get all salary records
router.get("/salaries", async (req, res) => {
    try {
        const salaries = await Salary.find();
        res.status(200).json(salaries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Update a salary record
router.put("/updateSalary/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSalary = await Salary.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedSalary);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Delete a salary record
router.delete("/deleteSalary/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Salary.findByIdAndDelete(id);
        res.status(200).json({ message: "Salary deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Get a single salary record by ID
router.get("/getSalary/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const salary = await Salary.findById(id);
        if (!salary) {
            return res.status(404).json({ message: "Salary not found" });
        }
        res.status(200).json(salary);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

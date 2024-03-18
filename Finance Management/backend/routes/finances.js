const router = require("express").Router();
const multer = require("multer");
const path = require("path");
let Finance = require("../models/Finance");

// Multer configuration
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

router.route("/add").post(upload.single('invoiceImage'), async(req, res) =>{
    if(!Number(req.body.invoiceID) ||
        !req.body.transactionType ||
        !req.body.category ||
        !Number(req.body.amount) ||
        !Date(req.body.date) ||
        !req.body.paymentMethod ||
        !req.body.paymentStatus ||
        !req.body.description ) {
            return res.status(400).send({
                message: "Send all required fields: invoiceID, transactionType, category, amount, date, payementMethod, rpaymentStatus, location, description"
            })
        }

        if (req.file == undefined) {
            return res.status(400).send({
                message: "Image upload is required"
            });
        }

        const { invoiceID, transactionType, category, amount, date, paymentMethod, paymentStatus, description} = req.body;
        const invoiceImage = req.file.path;

        const newFinance = new Finance({
            invoiceID,
            transactionType,
            category,
            amount,
            date,
            paymentMethod,
            paymentStatus,
            description,
            invoiceImage
        });

        newFinance.save()
        .then(() => {
            res.status(200).json("Added")
        }).catch((err) => {
            console.log(err);
        });
});

router.route("/").get(async (req, res) => {
    try {
        const finances = await Finance.find();
        const financesCount = await Finance.countDocuments();

        res.status(200).json({
            financesCount: financesCount,
            data: finances
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.route("/update/:invoiceID").put(async(req, res) => {
    const { invoiceID } = req.params;
    const { transactionType, category, amount, date, paymentMethod, paymentStatus, description, invoiceImage} = req.body;

    const updateFinance = {
        invoiceID,
        transactionType,
        category,
        amount,
        date,
        paymentMethod,
        paymentStatus,
        description,
        invoiceImage
    }

    const update = await Finance.findOneAndUpdate({invoiceID}, updateFinance)
    .then(() => {
        res.status(200).send({status: "Transactions Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
});

router.route("/delete/:invoiceID").delete(async (req, res) => {
    const { invoiceID } = req.params;
    await Finance.findOneAndDelete({invoiceID})
    .then(() => {
        res.status(200).send({status: "Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete data", error: err.message});
    })
});

router.route("/get/:invoiceID").get(async(req, res) =>{
    const { invoiceID } = req.params;
    try{
        const finance = await Finance.findOne({invoiceID});
        res.status(200).json({ status: 'Data fetched', finance });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: 'Error fetching data', error: err.message });
    }
});


//find by type
router.route("/all").get(async (req, res) => {
    let query = {};
    if(req.query?.transactionType){
        query = { transactionType: req.query.transactionType };
    }
    try {
        const finances = await Finance.find(query);
        const financesCount = finances.length; // Count the filtered results

        res.status(200).json({
            financesCount: financesCount,
            data: finances
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
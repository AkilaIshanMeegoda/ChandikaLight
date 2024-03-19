const router = require("express").Router();
let Feedback = require("../models/feedback");


//route related to data insert
router.route("/addFeedback").post((req,res)=>{

   const name = req.body.name;            //(req.body.name) = through a body, backend get the parameters from the front end
   const email = req.body.email;
   const rating = req.body.rating;
   const service = req.body.service;
   const feedback = req.body.feedback;

   const newFeedback = new Feedback({
        
         name,
         email,
         rating,
         service,
         feedback,
})

//error handling
newFeedback.save().then(()=>{             //we use 'then'. its like if else in java.
        res.json("Feedback added")        //massage pass to the front end in json format.
}).catch((err)=>{
        console.log(err)
})

})



//data Read
http://Localhost:8070/feedback/
router.route("/").get((req,res)=> {
          
        Feedback.find().then((feedbacks)=>{
                res.json(feedbacks)     
        }).catch((err)=>{
                console.log(err)
        })

})


//update
router.route("/updateFeedback/:id").put(async (req,res) =>{
        let userId = req.params.id;
        const {name, email, rating, service, feedback} = req.body;

        const updateFeedback = {
                name,
                email,
                rating,
                service,
                feedback,
        }

     const update = await Feedback.findByIdAndUpdate(userId, updateFeedback).then(()=>{
     
        res.status(200).send({status: "feedback updated"})
}).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "error with updating feedback", error:err.massage});
})

})


//delete
router.route("/deleteFeedback/:id").delete(async (req,res)=>{
        let userId = req.params.id;

        await Feedback.findByIdAndDelete(userId).then(() => {
              res.status(200).send({status: "feedback deleted"});
}).catch((err)=> {
        console.log(err.massage);
        res.status(500).send({status: "error with delete feedback", error:err.massage});
})

})



router.route("/getFeedback/:id").get(async(req,res)=>{
         let userId = req.params.id;
         await Feedback.findById(userId).then((feedback)=>{
               res.status(200).send({status: "feedback fetched",feedback})
         }).catch(()=>{
             console.log(err.massage);
             res.status(500).send({status : "error with get feedback", error: err.massgage});
        });

});
module.exports = router;
const router = require("express").Router();
let Employee =require("../models/Employee");

router.route("/createEmployee").post(async(req,res)=>{
 try{
    if(
   !req.body.FirstName||
   !req.body.LastName||
   !req.body.Nic||
   !req.body.gender||
   !req.body.dob|| 
   !req.body.contactNo||
   !req.body.email||
   !req.body.qualifications||
   !req.body.position||
   !req.body.dateOfJoining||
   !req.body.terminationDate
    ) {
        return res.status(400).send({
            message:
              "Send all required fields:FirstName, LastName, Nic,gender, dob, contactNo, email, qualifications, position, dateOfJoining,terminationDate",
            });
}
        const newEmployee ={
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Nic:req.body.Nic,
        gender:req.body.gender,
        dob:req.body.dob,
        contactNo:req.body.contactNo,
        email:req.body.email,
        qualifications:req.body.qualifications,
        position:req.body.position,
        dateOfJoining:req.body.dateOfJoining,
        terminationDate:req.body.terminationDate,
    };

    
    const employee = await Employee.create(newEmployee);

    return res.status(201).send(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
 


router.route("/employees").get(async(req,res)=>{

    try {
        const employees = await Employee.find();
        return res.status(200).json({
          count: employees.length,
          data: employees,
        });
      } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
      }
    });
router.route("/updateEmployee/:id/").put(async(req,res)=>{
    try{
        if(
       !req.body.FirstName||
       !req.body.LastName||
       !req.body.Nic||
       !req.body.gender||
       !req.body.dob|| 
       !req.body.contactNo||
       !req.body.email||
       !req.body.qualifications||
       !req.body.position||
       !req.body.dateOfJoining||
       !req.body.terminationDate
         ) {
            return res.status(400).send({
                message:
                  "Send all required fields:FirstName, LastName, Nic,gender, dob, contactNo, email, qualifications, position, dateOfJoining,terminationDate",
                });
            }
                const { id } = req.params;

                await Employee.findByIdAndUpdate(id, req.body)
                  .then(() => {
                    return res
                      .setMaxListeners(200)
                      .send({ message: "Employee updated successfully" });
                  })
                  .catch(() => {
                    return res.status(404).json({ message: "Employee not found" });
                  });
              } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
              }
            });

    


 



router.route("/deleteEmployee/:id").delete(async(req,res) =>{
    try{
    const { id } = req.params;

                await Employee.findByIdAndDelete(id)
                  .then(() => {
                    return res
                      .setMaxListeners(200)
                      .send({ message: "Employee updated successfully" });
                  })
                  .catch(() => {
                    return res.status(404).json({ message: "Employee not found" });
                  });
              } catch (error) {
                console.log(error.message);
                res.status(500).send({ message: error.message });
              }
            });


router.route("/getEmployee/:id").get(async (req, res)=>{
    try {
        const { id } = req.params;
    
        await Employee.findById(id)
          .then((employee) => {
            return res.status(200).json(employee);
          })
          .catch(() => {
            return res.status(404).json({ message: "Client not found" });
          });
      } catch (err) {
        console.timeLog(err.message);
        res.status(500).send({ message: err.message });
      }
    });
module.exports = router;





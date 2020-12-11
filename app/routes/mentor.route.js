const express=require("express");
const router=express.Router();
const {createMentor, accessMentor, updateMentor, deleteMentor, findAllMentor}=require("../controller/mentor.controller");

//route to create mentor
router.post("/create", createMentor);

//route to access mentor
router.post("/access", accessMentor);

//route to update mentor
router.put("/update/:id", updateMentor);

//route to delete mentor
router.delete("/delete/:id", deleteMentor);

//route to access list of mentors

router.get("/lists", findAllMentor);

module.exports=router;
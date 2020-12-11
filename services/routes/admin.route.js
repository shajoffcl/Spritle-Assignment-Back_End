const express=require("express");
const router=express.Router();
const {createAdmin, accessAdmin}=require("../controller/admin.controller");

//route for create admin
router.post("/create", createAdmin);

//route for access admin
router.post("/access", accessAdmin);

module.exports=router;
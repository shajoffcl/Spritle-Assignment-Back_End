const express=require("express");
const router=express.Router();
const {createAgent, accessAgent, updateAgent, deleteAgent, findAllAgents, accessAgentDetails}=require("../controller/agent.controller");

//route to create agent
router.post("/create", createAgent);

//route to access agent
router.post("/access", accessAgent);

//route to access specific agent
router.get("/access/:id", accessAgentDetails)

//route to update agent
router.patch("/update/:id", updateAgent);

//route to delete agent
router.delete("/delete/:id", deleteAgent);

//route to access list of agents
router.get("/list", findAllAgents);

module.exports=router;
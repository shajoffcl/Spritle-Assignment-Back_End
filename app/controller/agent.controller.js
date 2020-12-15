const AGENT_MODEL=require("../models/agent.model");
const getUserName=require("../utils/usernameGenerator");
const getUniquePassword=require("../utils/passwordGenerator");
const emailSender=require("../utils/emailSender");

exports.createAgent=(req, res)=>{
    const email=req.body.email;
    const username=getUserName(email);
    const password=getUniquePassword();
    emailSender(email, username, password);
    const agent=new AGENT_MODEL({...req.body, username, password});
    agent.save().then(agent=>res.send(agent)).catch(err=>{res.status(500).send(err)});
}

exports.accessAgent=(req, res)=>{
    const username=req.body.username;
    const password=req.body.password;
    AGENT_MODEL.findOne({$and:[{username:username}, {password:password}]}).
    then((agent)=>{
        if(!agent){
            res.status(404).send({message:"Authentication failed"});
            return;
        }
        res.send(agent);
    }).catch(err=>{res.status(500).send(err)});
}

exports.accessAgentDetails=(req, res)=>{
    AGENT_MODEL.findOne({_id:req.params.id})
    .then((agent)=>{
        if(!agent){
            res.status(400).send({message:"Wrong Id"});
            return;
        }
        res.send(agent);
    }).catch(err=>res.status(500).send(err));
}

exports.updateAgent=(req, res)=>{
    const id=req.params.id;
    AGENT_MODEL.findByIdAndUpdate(id, req.body, {new:true})
    .then((agent)=>{
        if(!agent){
            res.status(400).send({message:"Wrong ID"});
            return;
        }
        res.send(agent);
    }).catch(err=>res.status(500).send(err));
}


exports.deleteAgent=(req, res)=>{
    const id=req.params.id;
    AGENT_MODEL.findByIdAndDelete(id)
    .then((result)=>{
        if(!result){
            res.status(400).send({message:"Wrong ID"});
            return;
        }
        res.send(result);
    }).catch(err=>res.status(500).send(err));
}

exports.findAllAgents=(req, res)=>{
    AGENT_MODEL.find().then((agents)=>{
        if(!agents){
            res.status(404).send({message:"No record available"});
            return;
        }
        res.send(agents);
    }).catch(err=>res.status(500).send(err));
}
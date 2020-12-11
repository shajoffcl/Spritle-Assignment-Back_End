const MODEL=require("../models/model");
const getUserName=require("../utils/usernameGenerator");
const getUniquePassword=require("../utils/passwordGenerator");
const emailSender=require("../utils/emailSender");

exports.createMentor=(req, res)=>{
    const email=req.body.email;
    const username=getUserName(email);
    const password=getUniquePassword();
    emailSender(email, username, password);
    const mentor=new MODEL({...req.body, username, password});
    mentor.save().then(mentor=>res.send(mentor));
}

exports.accessMentor=(req, res)=>{
    const username=req.body.username;
    const password=req.body.password;
    MODEL.findOne({$and:[{username:username}, {password:password}]}).
    then((result)=>{
        if(!result){
            res.status(404).send({message:"Authentication failed"});
            return;
        }
        res.send(result);
    }).catch(err=>{res.status(500).send(err)});
}

exports.updateMentor=(req, res)=>{
    const id=req.params.id;
    MODEL.findByIdAndUpdate(id, req.body, {new:true})
    .then((mentor)=>{
        if(!mentor){
            res.status(400).send({message:"Wrong ID"});
            return;
        }
        res.send(mentor);
    }).catch(err=>res.status(500).send(err));
}


exports.deleteMentor=(req, res)=>{
    const id=req.params.id;
    MODEL.findByIdAndDelete(id)
    .then((result)=>{
        if(!result){
            res.status(400).send({message:"Wrong ID"});
            return;
        }
        res.send(result);
    }).catch(err=>res.status(500).send(err));
}

exports.findAllMentor=(req, res)=>{
    MODEL.find().then((admins)=>{
        if(!admins){
            res.status(404).send({message:"No record available"});
            return;
        }
        res.send(admins);
    }).catch(err=>res.status(500).send(err));
}
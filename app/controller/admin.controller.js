const MODEL=require("../models/model");

exports.createAdmin=(req, res)=>{
    const admin=new MODEL({...req.body});
    admin.save().then(admin=>res.send(admin));
}

exports.accessAdmin=(req, res)=>{
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
const ADMIN_MODEL=require("../models/admin.model");

exports.createAdmin=(req, res)=>{
    const admin=new ADMIN_MODEL({...req.body});
    admin.save().then(admin=>res.send(admin));
}

exports.accessAdmin=(req, res)=>{
    const username=req.body.username;
    const password=req.body.password;
    ADMIN_MODEL.findOne({$and:[{username:username}, {password:password}]}).
    then((result)=>{
        if(!result){
            res.status(404).send({message:"Authentication failed"});
            return;
        }
        res.send(result);
    }).catch(err=>{res.status(500).send(err)});
}
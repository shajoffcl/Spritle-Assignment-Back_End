const {Schema, model}=require("mongoose");

const adminSchema=new Schema({
    username:Schema.Types.String,
    password:Schema.Types.String
});

const ADMIN_MODEL=model("admins", adminSchema);

module.exports=ADMIN_MODEL;
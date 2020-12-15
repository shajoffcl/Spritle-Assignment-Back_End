const {Schema, model}=require("mongoose");

const adminSchema=new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    username:Schema.Types.String,
    password:Schema.Types.String,
    contact:Schema.Types.Number,
    address:Schema.Types.String
});

const ADMIN_MODEL=new model("admin", adminSchema);

module.exports=ADMIN_MODEL;
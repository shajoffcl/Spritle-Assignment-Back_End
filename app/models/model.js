const {Schema, model}=require("mongoose");

const schema=new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    username:Schema.Types.String,
    password:Schema.Types.String,
    contact:Schema.Types.Number,
    address:Schema.Types.String
});

const MODEL=new model("models", schema);

module.exports=MODEL;
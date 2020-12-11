const {Schema, model}=require("mongoose");

const mentorSchema=new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    username:Schema.Types.String,
    password:Schema.Types.String,
    contact:Schema.Types.Number,
    address:Schema.Types.String
});

const MENTOR_MODEL=new model("mentors", mentorSchema);

module.exports=MENTOR_MODEL;
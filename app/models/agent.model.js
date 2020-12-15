const {Schema, model}=require("mongoose");

const agentSchema=new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    username:Schema.Types.String,
    password:Schema.Types.String,
    contact:Schema.Types.Number,
    address:Schema.Types.String,
    ticket:Schema.Types.Number
});

const AGENT_MODEL=new model("agents", agentSchema);

module.exports=AGENT_MODEL;
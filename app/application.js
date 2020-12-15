const express=require("express");
const cors=require("cors");

const admin=require("./routes/admin.route");
const agent=require("./routes/agent.route");

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/admin", admin);
app.use("/agent", agent);

module.exports=app;
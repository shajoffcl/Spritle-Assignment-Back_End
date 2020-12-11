const express=require("express");
const cors=require("cors");
const admin=require("./routes/admin.route");
const mentor=require("./routes/mentor.route");

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/admin", admin);
app.use("/mentor", mentor);

module.exports=app;
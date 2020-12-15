const mongoose=require("mongoose");

const app=require('./app/application.js');
const {refreshAll}=require("./adminData/createAdmin");

const PORT=process.env.PORT || 8080;
const MONGO_URL=process.env.MONGODB_URI || "mongodb://localhost:27017/sprittle_DB";


mongoose.connect(MONGO_URL, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
mongoose.connection.once('open', ()=>console.log("Sucessfully connected with mongoDB."))
.on('connectionError', (err)=>console.log(err));


app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));

refreshAll();
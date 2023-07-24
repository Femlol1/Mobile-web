const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/iGCEdb",)
.then(()=>{
    console.log("mongodb has connected");
})
.catch((error)=>{
    console.log("failed to connect to mongodb");
    console.error(error);
})
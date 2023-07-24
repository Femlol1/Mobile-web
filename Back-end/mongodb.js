const mongoose=require("mongoose")

//mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/iGCEdb",)
.then(()=>{
    console.log("mongodb has connected");
})
.catch((error)=>{
    console.log("failed to connect to mongodb");
    console.error(error);
})
const LogInShema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

const collection= new mongoose.model("collection1",LogInShema)

module.exports=collection

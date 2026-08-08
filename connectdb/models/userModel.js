const {Schema,model}=require("mongoose");
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,
    },
    age:{
        type:Number,
        required:true,
    },
    weight:{
        type:Number
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
})

const userModel=model("User",userSchema); //what is this
module.exports=userModel;
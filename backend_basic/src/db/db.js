const mongoose =require("mongoose")

async function connectdb(){
    await mongoose.connect("mongodb+srv://katiyaranurag007_db_user:VGKc91Mu2hMv7js9@yt-backend.2euyate.mongodb.net/halley")
    console.log("connected to db")
}
module.exports=connectdb;
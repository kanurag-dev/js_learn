const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(`mongodb+srv://katiyaranurag007_db_user:UFQyfgUf6b81Iuft@cluster0.vxm59so.mongodb.net/`)
        console.log("connected db")

    }
    catch(error){
        console.error(error.message)
        process.exit(1)

    }
}
module.exports = connectDB;
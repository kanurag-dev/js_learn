const Imagekit=require("@imagekit/nodejs")

const imagekit=new Imagekit({
    privateKey:"private_oUL2eJKcgPkHo6DPE9TfaGIShes="
})

async function uploadFile(buffer){
    const result =await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    
    console.log(result);
    return result;
}
module.exports=uploadFile;

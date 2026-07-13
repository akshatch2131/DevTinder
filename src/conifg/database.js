const mongoose=require('mongoose')
const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://DevTinder:DevTinder123@devtinder.syhjxop.mongodb.net/DevTinder"
    )
}

module.exports=connectDB;

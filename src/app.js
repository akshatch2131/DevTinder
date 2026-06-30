const express=require("express")
const app=express()

app.use("/test",(req,res)=>{
    res.send("Hello from the new server")
})

app.listen(3000,()=>{ 
    console.log("Server is successfully running");
})
const express=require("express")
const app=express()


app.use("/user",(req,res)=>{
    res.send("HAHAHAHA")
})


//this will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstname: "Akshat",lastName: "Chaudhary"})
})


app.post("/user",(req,res)=>{
    console.log("Saves the data into the database");
    res.send("Data sucessfully saved to the database");
})


app.delete("/user",(req,res)=>{
    res.send("Deleted Succesfully ");
})


//this use will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{  //roiute handler
    res.send("Hello from the new server")
})  //Any other routes after this written does not work

app.listen(3000,()=>{ 
    console.log("Server is successfully running");
})
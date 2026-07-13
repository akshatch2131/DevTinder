// const express=require("express")
// const app=express()


// // app.use("/user",(req,res)=>{
// //     res.send("HAHAHAHA")
// // })


// //this will only handle GET call to /user
// // app.get("/user",(req,res)=>{
// //     res.send({firstname: "Akshat",lastName: "Chaudhary"})
// // })


// //If we replace abc by ab?c then ac is also work
// //If we replace abc by ab+c then abbbbbbbbbbc is also work
// //If we replace abc by ab*cd then abAKSHATcd is also work
// //If we replace abc by a(bc)?d then bc is optional
// //If we replace abc by /a/ if path is contains any a in between then it works
// app.get("/user",(req,res)=>{
//     res.send({firstname: "Akshat",lastName: "Chaudhary"})
// })


// // app.post("/user",(req,res)=>{
// //     console.log("Saves the data into the database");
// //     res.send("Data sucessfully saved to the database");
// // })


// // app.delete("/user",(req,res)=>{
// //     res.send("Deleted Succesfully ");
// // })


// // //this use will match all the HTTP method API calls to /test
// // app.use("/test",(req,res)=>{  //roiute handler
// //     res.send("Hello from the new server")
// // })  //Any other routes after this written does not work

// app.listen(3000,()=>{ 
//     console.log("Server is successfully running");
// })



//MIDDLEWARES & ROUTES HANDLERS

// const express=require("express")

// const app=express()

//GET/users ==> It checks all the app.xx("macthing route") function 
//GET /users => middleware chain => request handler



// app.use("/",(req,res,next)=>{
//     // res.send("Handling /routr");
//     next()
// })

// app.get("/user",
//     (req,res,next)=>{  //Route Handler
//     // res.send("Route Handler 1")
//     console.log("Handling the route user");
//         next()
//         // res.send("Route Handler 1")
// }
// (req,res,next)=>{ 
//     // res.send("Route Handler 2")
//     console.log("Handling the route user");
//     next()
// },
// (req,res,next)=>{ 
//     // res.send("Route Handler 3")
//     console.log("Handling the route user");
//     next()
// },
// (req,res,next)=>{ 
//     res.send("Route Handler 4")
//     console.log("Handling the route user");
    
// }
// )

// app.get("/user",
//     (req,res,next)=>{  //Route Handler
//     console.log("Handling the route user");
//         res.send("Route Handler 2")
// })

// app.listen(3000,()=>{
//     console.log("Server is successfully on port 3000....");
    
// })


// const express=require("express")

// const app=express()

// const {adminAuth}=require("./middlewares/auth")

// //Handle authorization middleware
// app.use("/admin",adminAuth)

// app.get("/admin/getAllData",(req,res)=>{
//     //check if the request is authorized
//     // const token="xyz";
//     // const isAdminAuthori zed=token=="xyz"
//     res.send("All data send")
    
// })

// app.listen(3000,()=>{
//     console.log("Server is successfully on port 3000....");
    
// })


//MAIN CODE--

const express=require("express");
const connectDB=require("./conifg/database")
const app=express();
const User=require("./models/user")


app.use(express.json())

app.post("/signup",async (req,res)=>{

    // console.log(req.body)

    // const userObj={
    //     firstName:"Akshat",
    //     lastName:"Choudhary",
    //     emailID:"akshatch2131@gmail.com",
    //     password:"akshat@123"
    // }
    // Creating a new instance of the User model
    // const user=new User(userObj)
    const user=new User(req.body)
    
    try{
        await user.save();
        res.send("User added successfully")
    }
    catch(err){
        res.status(400).send("Error saving the user:"+err.message)
    }
    
})


connectDB()
.then(()=>{
    console.log("Database cnnection is successfull");
    app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000...");
})
})
.catch(err=>{
    console.log("Database cannot be connected!!");
})


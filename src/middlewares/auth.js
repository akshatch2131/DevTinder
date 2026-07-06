const adminAuth = (req,res,next)=>{
    console.log("Adin Auth is getting checked!!");
    
    const token="xyznedcndj"
    const isAdminAuthorized=token=="xyz"
    if(!isAdminAuthorized){
        res.send(401).send("Unauthorized request")
    }
    else{
        next()
    }
}
module.exports={
    adminAuth,
}
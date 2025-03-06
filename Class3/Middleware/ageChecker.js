const checkAge = (req,res,next)=>{
    const {age}=req.body;
    if(!age){
        return res.status(400).json({error:"age is required"});
    }
    if(age<18){
        return res.status(403).json({error:"Age must be greater then 18"});
    }
    next();
}
module.exports ={checkAge};
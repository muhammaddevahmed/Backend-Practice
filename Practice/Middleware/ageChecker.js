const checkAge =(req,res,next)=>{
    const{age}=req.body;

    if(!age){
        return res.status(402).json({error:"Age is required"});
    }

    if(age < 18){
        return res.status(403).json({error:"Age must be greater then 18"});
    }
    next();
}
module.exports = {checkAge};
const users = [
    {email:"ahmed@gmail.com",password:"ahmed123"},
    {email:"khan@gmail.com",password:"khan123"}
]

const loginUsers =(req,res)=>{
     const{email,password}=req.body;

     if(!email || !password){
        return res.status(400).json({error:"email and password is required"});

     }

     const user = users.find(u=>u.email === email && u.password === password);
     if(!user){
        return res.status(401).json({error:"User not found"});
     }

     res.json({message:"Login successfully !",user});
}
module.exports = {loginUsers};
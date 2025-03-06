const users=[
    {email:"ahmed@gmail.com",password:"ahmed123"},
    {email:"ali@gmail.com",password:"ali123"}
];

const loginUsers = (req,res)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({error:"Email and password is required"});
    }
    
    const user = users.find(u =>u.email === email && u.password === password);

    if(!user){
        return res.status(401).json({error:"User cannot found"});
    }

    res.json({message : "Login Successfully !",user});
};

module.exports={loginUsers};




const handle404 = (req,res)=>{
    return res.status(404).json({error:"User not allowed"});
}

module.exports = {handle404};
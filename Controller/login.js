const login = (req,res,next) =>{
    

    const {age} = req.body;

    if(!age){
        return res.status(400).send("Age is required");
    }
    if(age < 18){
        return res.status(403).send("You must be greater than 18");
    }
    next();

};
app.get('/',(req,res)=>{
    res.send("This is first API congrats!");
});



app.post('/user', checkAge, (req, res) => {
    const { email, password, age } = req.body;
    console.log(`Email: ${email}, Age: ${age}`);
    res.send(`Welcome, ${email}! Age verified.`);
});
app.listen(5000,()=>{
    console.log('server is running....')
});


module.export= login;
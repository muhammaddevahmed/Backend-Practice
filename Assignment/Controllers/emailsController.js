const fs = require('fs');
const filePath = 'emails.json'

  

// Emails ko file se read karne ka function
const getStoredEmails = () => {
    try{

        if(!fs.existsSync(filePath)) {

            return ['ahmed@gmail.com','ali@gmail.com','sana@gmail.com','hasan@gmail.com','haris@gmail.com']
            

        }

        const data = fs.readFileSync(filePath,'utf8')
        return JSON.parse(data); 


    }catch (err) {

        console.log(err);
        return ['ahmed@gmail.com','ali@gmail.com','sana@gmail.com','hasan@gmail.com','haris@gmail.com']

    }
}


// Emails ko file me save karne ka function
const saveEmails = (emails) => {
    try {
        
        fs.writeFileSync(filePath,JSON.stringify(emails,null,2),'utf8')

    } catch (err) {
        console.log(err);
    }
}



let usersEmail = getStoredEmails();



// **POST Request Handler**
const emailSender = (req,res) => {

    const {email} = req.body;

    if (usersEmail.includes(email)){

        return res.status(403).json('this email is already exits');

    }


    usersEmail.push(email);
    saveEmails(usersEmail)
    console.log(usersEmail);
    res.json({yourEmail : email, message : 'your email is valid'});

}



// Function for get requset 
const allEmails = (req,res) => {
    res.json({data : 'all users email',usersEmail:usersEmail})
}

module.exports = {emailSender,allEmails}
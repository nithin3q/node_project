const nm=require('nodemailer')
const transporter=nm.createTransport(
    {
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:'kiransai3569@gmail.com',
            pass:'zwrzksaceurcyoey'
        }
    }
);
var options={
    from:'kiransai3569@gmail.com',
    to:'nithinappari@gmail.com',
    subject:"this is for testing bro",
    html:`<h1>hello nithin</h1>
    <img src='cid:food' width='200px'>`
    ,attachments:[
        {
            filename:'food.jpeg',
            path:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            cid:'food'
        }
    ]
};
transporter.sendMail(
    options,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log("sent",info.response)
        }
    }
)
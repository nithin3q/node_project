const express =require('express')
const app=express();

app.listen(4500,()=>{
    console.log("server started nithin")
})
app.get('/hello',(req,res)=>{
   res.sendFile(__dirname+'/index.html')
})
app.get('/',(req,res)=>{
    res.send(`
    <ol>
    <li>list 1</li>
    <li>list 2</li>
    <li>list 3</li>
    </ol>
    `)
})
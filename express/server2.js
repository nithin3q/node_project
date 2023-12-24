const express=require('express');
const app=express();
app.listen(4700,()=>{
    console.log("server started")
})


app.get('/',(req,res)=>{
    if(req.query.city){
     const city=req.query.city
     res.send(`hello welcome to ${city}`)
    }else{
     res.send("hello nithin")
    }
 })

app.get('/:city',(req,res)=>{
    if(req.params.city){
        res.send(`hello welcome to ${req.params.city}`)
    }
})
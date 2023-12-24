const express=require('express')
const app=express()

app.listen(7000,()=>{
    console.log("server started at 7000")
})
app.use(express.static(__dirname + '/nithin'))
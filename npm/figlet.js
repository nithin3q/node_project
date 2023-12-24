let figlet=require('figlet')

figlet('nithin',(err,data)=>{
    if(err){
        console.log('error',err)
    }else{
    console.log(data)
    }

})
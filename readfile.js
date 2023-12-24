let fs=require('fs')
fs.readFile('./file.txt',(data,err)=>{
   if(data){
    console.log("file not found")
   }else{
    console.log(err.toString())
   }
})
// fs.writeFile('./file.txt',"hello bro",(err)=>{
fs.appendFile('./file.txt',"hello bro",(err)=>{
    if(err){
        console.log("failed to append")
    }else{
        console.log("success")
    }
})
//unlink for delete,mkdir,rmdir,writeFilesync,
let fs=require('fs')
let filecontent=fs.readFileSync('./file.txt')
console.log('op'+ filecontent)

//unlink for delete,mkdir,rmdir,writeFilesync,
// fs.existsSync
//  fs.rmdirSync

// fs.readdirSync
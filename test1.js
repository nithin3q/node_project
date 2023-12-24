function add(a,b){
    console.log(a+b);
};
function sub(a,b){
    console.log(a-b);
}
let obj={
    name:"nithin",
    age:22

}
module.exports={
    sub,add
}
module.exports.name=obj
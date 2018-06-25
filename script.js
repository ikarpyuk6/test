// console.log('test');
var Obj=require("./user.js");
console.log(Obj);
var User=Obj.func;
var user1=new User("Petro",22);
user1.show();
function User(name,age) {
	this.name=name;
	this.age=age;
	this.show=function(){
		console.log(this.name+":"+this.age)
	}
}
module.exports={
	salary:200,
	func:User
};
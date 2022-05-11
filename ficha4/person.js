function person(fristName, lastName){
    this.fristName = fristName,
    this.lastName = lastName
}
person.prototype.greet = function(){
      console.log("hello"+ this.fristName + "" +this.lastName + ",Age:" + this.age);
}

person.prototype.age = null;

var John = new person("john", "Doe");

John.age =25;
John.greet();

var Jane = new person("jane", "Doe");
Jane.age = 27;

Jane.greet();

console.log(John._proto_);
console.log(Jane._proto_);
console.log(John._proto_=== Jane_proto_);
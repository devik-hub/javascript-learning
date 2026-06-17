//welcome to first topic in learning js ...
// lets understand variables in js..
// variables are containers for storing data  values,in js we have 3 types of variables var,let,const
// var is used to declare a variable and can be re assigned and re declared
// let is used to declare a variable and can be re assigned but cannot be re declared
// const is used to declare a variable and cannot be re assigned and cannot be re declared

var name = "Devika";
var age = 23;
var id = 123456;
var collegename = "XYZ college";


console.log(name);
console.log(age);
console.log(id);
console.log(collegename);

// here we have declared  5 in global scope but then we have re assigned it to 10 ,
// so the value for the global scope will also change to 10 and 10 will be printed twice;

let x = 5;
 {
  x = 10;
  console.log(x);

 }
console.log(x);

// similarly here we have again re assigned the value  of x so it will print 9 followed by twice 5

let x = 10;
{
let x = 9;
console.log(x);}
{
  x = 5;
  console.log(x);
}
console.log(x);

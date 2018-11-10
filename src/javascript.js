// var num = 10;
// var anotherNum = 1;
// var popularNumber = num + anotherNum;
// console.log(popularNumber);


// var num = 1;
// var new_num = num++;
// console.log(new_num);


// var total_cost=((2+1)+4*6)*4+1;
// console.log(total_cost);

// var name;
// alert("Hello "+window.prompt("Enter Your Name:"+name))
// console.log(name);

//Simple Alert Form
// var name="Usman Haider Khan";
// var text="My Name is ";
// var job="Software Enginner"

// alert( text+" "+name+" "+job);

//if Else statements

// var x=prompt("Tell Me the Name of Your Favourite Ice Cream falviour: ");
// if(x==="usman"){
//   alert(x+""+ " Your choice is tooo good");
// }
// else if(x!=="usman"){
//   alert(x+""+"Your Choice is too much bad");
// }

// var weight = 70;
// var name = "usman";
// var height = 6;
// var lastname = "khan"
// var gender = "Male"

// if (weight < 70 || gender === "Male" && name === "usman" && lastname === "khan" && height === 6) {
//     alert("Usman haider khan properties");
// } else {
//     alert('Khan Khan khan');
// }


// var cities = ["usman", "khan", 2, "true"]
// cities.push("skp");
// cities.pop("skp")
// console.log(cities[2]);

// var arrays = ["usman", "haider", "khan"];
// arrays.unshift("salman", "ahmad");
// console.log(arrays[1])

//insert the element any where in array

// var names = ["usman", "khan", "haider", "salman"];
// names.splice("SAIM");
// console.log(names[0]);

//finding the lenght of array

// var city = ["usman", "khan", "haider"];
// var lenght = city.length;
// console.log(lenght);

//Copy Array Element

// var firstname = ["usman", "khan", "salman", "ahmad"];
// var lname = ["khan", "haider", "zzz", "babu"];

// var fullname = [];

// for (var i = 0; i < firstname.length; i++) {
//     for (var j = 0; j < lname.length; j++) {
//         fullname.push(firstname[i] + " " + lname[j]);
//     }
// }
// console.log(fullname[4]);

//

// var name = [1, 3, 4, 5, 5, "usman"];
// console.log(typeof name);


//OBJECTS

// var obj = {
//     name: "usman"
// };

//FUNCTION it is block of code we can run any time for multiple times

// function Usman() {
//     console.log("hello usman");
// }

// var usman = function () {
//     console.log("Calling by obj");
// };
// console.log(typeof usman);
// Usman();
// usman()

//we can reassign your function
// var khan = usman;
// khan();

//RETURING A FUNCTION

// function calculator(number, number1) {
//     return number + number1;
// };

// var another = calculator;
// console.log(another(12, 12));


// var condition = -1;
// var anotherCondition = false;
// if (condition) {
//     console.log("Executed...!");
// } else if (anotherCondition) {
//     console.log("Still Also Excuted");
// } else {
//     console.log("Not Wrong this thing");
// }


// console.log(anotherCondition == true);



//Switch Control Stucter

// var luckyNumber = 8;
// switch (luckyNumber) {
//     case 1:
//         console.log("your lucky number is 3");
//         break;
//     case 7:
//         console.log("Your Lucky Number is 7");
//         break;
//     default:
//         console.log("Sorry ... WE Can't find your match");
// }

//For Looop for Arrays

// var name = ["usman", "salman", "haider", "khan"];
// for (var i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

//While Loop

// var number = 5;
// while (number < 8) {
//     console.log(number);
//     number++;
// }


//floating problem with  mulitplication

// var a = 1.3;
// var b = 2.2;
// console.log(a * b);

// if ((a * b).toFixed(2) == 2.86) {
//     console.log("Love With Some One ");

// } else {
//     console.log("Some on Love You Sceretly ");
// }


//Ternary Operator

// a = 5;
// b = 5;
//if we do same thing as

//console.log(a == b ? "EQUALs" : "NOT EQUALS");
// if (a == b) {
//     console.log("YES  EQUAL");

// } else {
//     console.log("NOT EQUAL");
// }
//for each method in js

// var array = ["usman", "haider", "khan"];
// array.forEach(function (element) {
//     console.log(element);
// });

//Method index of
// var index = ["usman", 1, 2, "khan"];
// console.log(index.indexOf("usman"));

//Array Splicing 
// var array=[1,2,3,4,5,6,7,8];
// var newArray=array.splice(2,2);
// console.log(array);
// console.log(newArray);

//Array Sliciing

// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// var newArray = array.slice(2);
// console.log(array);
// console.log(newArray);

//Filtering and Mapping 

// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array.filter(function(value){

//   return value >2;

// }))
// console.log(array.map(function (value) {
//     return value * 2;
// }))

//Reverse the Array Elements

// var array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.reverse());


//Here is Methods to cancat and join

// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// var newarray = ['usman', "khan"];
// console.log(array.concat(', ' + newarray));
// console.log(array.join(', ' + newarray));


//There is Reduce function


//var array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.reduce(function (total, value) {
//     console.log('Total :' + total + ', Value:' + value);
//     return total + value;

// }))
// console.log(array);

// array.forEach(function (item, index, array) {
//     console.log(item, index);
// });



//Here we Disscuss the basic of the obkective

// var person = {
//     name: "usman khan",
//     age: 21,
//     details: {
//         hobbies: ["Cricket", "Internrt Surffing"],
//         Location: "Pakistan ,Lahore"

//     },
//     myLocal: function () {
//         console.log("My Name is " + this.name + " and my age is " + this.age);
//     }
// }
// person.myLocal();

//Another Way to creating the OBJECT

// var anotherObj = new Object();
// anotherObj.name = "khan";
// anotherObj.age = 24;
// console.log(anotherObj);

//For Example we Have the two same object and we want to compare them the result will be False 
//in Actual it compare the location not actual values

// var person = {
//     name: "usman",
//     age: 23,
// }
// var person1 = {
//     name: "usman",
//     age: 23,
// }
// console.log(person == person1);


//Creating the prototype of the object of the prevoiuse object

// var person = {
//     name: "usman",
//     age: 23,
// };
// var anotherPerson = Object.create(person);
// anotherPerson.name = "usman haider khan";

// console.log(anotherPerson.age);

//Intro of Prototype

// var person = {
//     name: "usman",
//     age: 21
// };
// var obj = Object.create(person);
// var another = Object.create(person);
// another.usman = 'usman khan';
// console.log(person.name + " " + another.usman);
// console.log(another.__proto__ == person);
// console.log(another.__proto__.__proto__ == Object.prototype);
// console.log(Object.getPrototypeOf(another) == person);

// console.log(person.__proto__);

// Object.prototype.gret = function () {
//     console.log("any One is Here");
// }
// person.gret();
// console.log(person.toString());

//Constructer Function

// function Person() {}

// var person = new Person();
// person.name = "usman khan";
// console.log(person.__proto__ == Person.prototype);
// console.log(person instanceof Person);

//Constructor with Perametter

// function permy(name, age) {
//     this.name = name;
//     this.age = age;

// }
// var person = new permy('usman haider khan', 21);
// var khanni = new permy('Salman khan', 14);
// console.log(person);
// console.log(khanni);
// console.log(permy instanceof Object);

//here we bind or call the function

// function fn(message) {
//     console.log(message + this);
// };
// var obj = {
//     obfn: fn
// };
// var person = {
//     name: 'usman',
// };
//here we nedd to Extra Parentheses 
//obj.obfn.bind(person, 'Hello')();
//here did not need to do any Extra Prenthises
//obj.obfn.call(person, 'Hello');
// Here we need to put Square Brackets 
//obj.obfn.call(person, ['Hello']);

//Use Full Example

// var Account = {
//     cash: 12000,
//     _name: 'Default',

//     withdraw: function (amount) {
//         this.cash -= amount;
//         console.log("WidthDrew Amount: " + amount + " new Cash Reserve :" + this.cash);
//     }
// };
// Object.defineProperty(Account, 'deposit', {
//     value: function (amount) {
//         this.cash += amount;
//     },
//     writable: true
// });
// Object.defineProperty(Account, 'name', {
//     value: 'ID-00032',
//     writable: true //Define propertise bydefault "READONLY"
// });
// Object.defineProperty(Account, 'name', {
//     get: function () {
//         return this._name;
//     },
//     set: function (name) {
//         this._name = name;
//     }
// });
// console.log(Account.name);
// Account.name = 'ID-3002';
// console.log(Account.name);
// Account.deposit(3000);
// Account.withdraw(1000);

//Built Function

// var person = {
//     name: "usman haider khan",
//     age: 21,
//     saim: function () {
//         console.log("Hello Mt Dear :" + this.name);

//     }
// }
// for (var fields in person) {
//     console.log(fields);
// }

// console.log('name' in person);



// var fun = ["usman", "khan", "salman"];

// for (var i = 0; i < fun.length; i++) {
//     console.log(fun[i].toString);
// }

//Try Catch Block avoid the Application from crashing
// try {
//     test();
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("Finally i got this ");
// }


/********  Now Start Functions in JavaScript ********/


// function Generate(input) {
//     var number = input;
//     return function () {
//         return number * 2;
//     }
// }
// var calc = Generate(1000);
// console.log(calc);

/* Getting input through prompt from user  */

// var prop = prompt("Enter Value");

// (function (prop) {
//     var number = prop;
//     console.log(number.toString());

// })(prop);

// function Arguments

// function mesaage(message) {
//     console.log(message);
//     console.log(arguments);
// }
// mesaage("hello !", 10, 120);



// java script built in functions


// var interval=setInterval(function(){
//   console.log("Goes Inside Me");
// },300);

// setTimeout(function()
//           {
//   clearInterval(interval);
// },1000);

//Transforming Formate


// var a = 'EB5';
// var b = 10;

// var float = 12.4;

// console.log(float.toFixed(2));//toFixed(2) 

//console.log(b.toString());
//console.log(parseInt(a,16));


//String Trandformation

// var string = "My Name is Khan";
// console.log(string.length);
// it Work likes an array
// console.log(string[5]);


// var v = 2.3;
// var rand = Math.floor(Math.random() * 3 + 1) + 1;
//console.log(rand);
//    console.log(Math.ceil(v));
//    console.log(Math.floor(v))
//    console.log(Math.exp(v));
//    console.log(Math.abs(v));
// console.log(Math.max(10,1000,100));
//console.log(Math.min(10,1000,100));
//console.log(Math.random(1,10));

//REGX in Java Script

// var string = "abs";
// var patt = /abs/;
// console.log(string.match(patt));


// Date and Time in java script 

// var time = Date.now();
// console.log(time);

// Window Built in Methods
// console.log(window.innerWidth);
// console.log(innerWidth);
//Persistance
// localStorage.setItem('key2',100);
// console.log(localStorage.getItem('key2'));
//Non Persistance

// sessionStorage.setItem('key2',100);
// console.log(sessionStorage.getItem('key2'));

// console.log(window.location);
//window.open("https://www.google.com/");


//Find the Location of the given path

// console.log(location.pathname);
// console.log(location.location(true));

//Now we deal with the DOM

// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0].textContent);
// console.log(document.body.children[0].textContent = "usman haider khan");
document.body.children[0].style.backgroundColor = 'red';
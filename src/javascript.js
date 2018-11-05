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

var person = {
    name: "usman",
    age: 23,
};
var anotherPerson = Object.create(person);
anotherPerson.name = "usman haider khan";

console.log(anotherPerson.age);
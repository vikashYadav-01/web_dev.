// string -->  In JS ther two type of string
// 1. primitive
// 2.object

// primitive string -->  let name = "name" --> this is call primitive string

let str = "name";
// console.log(typeof(str))

// Object string -->  let name = new string ('name') --> this is called object string.

let obj = new String("name");
// console.group(typeof(obj))

//  we can treat a primitive string as a pbject string by dot
// notation, this is javascript behaviour internally.

// console.log(str.length)
// console.log(str[0])
// console.log(str.startsWith('n'))

// when you want a desirable style text or para we write in backticks.

// this is know as tamplet litteral

let appliation = `hellow
 
 thanks for the oppertunity
 
 regards
 Babbar`;

//  console.log(appliation)

// Date

// to print the current date and time
let date = new Date();
// console.log(date)

//  to print the disirable date and time

let date2 = new Date(2005, 2, 8, 12, 0); // new Date ( year , month , day , time)

// console.log(date2)

// we can change and know the given value by setter and getter

//                       ARRAY

//  this is the reference type object or it can store different type of item.

let num = [1, 2, 3, 4, 5];
// console.log(num)

// to insert in end -> num.pop(9)  --> [1,2,3,4,5 , 9]

// to insert in start -> num.unshift(9)  --> [9,1,2,3,4,5]

// to insert on desirable index -> num.splice(index , delect , insert)

// num.splice(0 ,0 , 'a','b') --> ['a','b',1,2,3,4,5]

//  indexOf() --> it give us index of the item in , if item not present in array it give -1.

//  we want to check if item exist or not  --> num.includes(7)

// console.log(num.includes(7))

//  searching

let courses = [
  { no: 1, name: "kumar" },
  { no: 2, name: "yadav" },
];

// if we want to find the objech which contain the kumar name

let res = courses.find(function (course) {
  return course.name === "kumar";
});

// console.log(res)

// Rmoving Element from Array

// 1. end -> using pop() we can remove last element of the array
// 2. start -> shift() we can remove first element of the array
// 3.middle -> splice(index , no. of elem delet ) -> index element will be removed.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// myArr.pop()
// myArr.shift()
// myArr.splice(4,1)
// console.log(myArr)

number = myArr;

// For empty an array

myArr.length = 0; // this is empty the array

myArr = []; // this is not delet the all element of the myArr.

// console.log(myArr);
// console.log(number);

//  Another way to empty an array by splice methode -> myArr.splice(0,myArr.length )

//-----------------------Combining and Slicing Arrays-------------------------

let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

// let combined = firstArr + secondArr   -> this will also combine bur not in array formate
let combined = firstArr.concat(secondArr); // -> this will give a new array with combined

// console.log(combined)

let scliced = combined.slice(0, 4); // -> it will give us that element b/w 0 index - 3rd index. in a new array.
// console.log(scliced)

// ----------------------spread operator-------------------------------

// '...' -> this is called spread operator

//  to add the firstArr and secondArr here is a another methode to add them
// which is by spread methode

let combinedBySpread = [...firstArr, ...secondArr];
// console.log(combinedBySpread)

//  we can alse add new element in array by this

let newElem = [...firstArr, "another elem", ...secondArr, 12, 32];
// console.log(newElem)

// to make copy of the these by using spread operator.

let copy = [...combinedBySpread];
// console.log(copy)

// ------------------Iterating an Array--------------------------
// for of loop are run on iterable

let arr = [90, 98, 99, 87, 77, 88];

// for (let i of arr) {
//      console.log(i)
// }

arr.forEach(function (number) {
  // console.log(number)
});

//  also written like this

// arr.forEach(number=> console.log(number))

// ------------------Joining Array--------------------

let a = [12, 13, 14, 15];

let join = a.join(",");
// console.log(join)

//--------------------spit method  (for string)-------------------

// it  create an array hwen we split a string by split methode

let msg = "this is split methode";

let split = msg.split(" ");
// console.log(split)

// ----------------------Sorting methode--------------------

// this will arrange the element of an array in accending order

let b = [20, 34, 30, 30, 80, 10];

b.sort();
// console.log(b);

let reverse = b.reverse()
// console.log(reverse)





// ------------------------filtering------------------------

//  it filter the valur from an array

let c = [1,3,-1,33,-98]

let filtered = c.filter(value => value >=10)

// console.log(filtered)




// ---------------------Maping------------------------------
// it map the value of array with somthing 

let d =  [1,3,-1,33,-98]

// let result = d.map(value=>'student_no '+value)

// console.log(result)


// ----------------Maping with objects-----------------------

let filter = d.filter(value=> value>=0);

let item = filter.map(function(num) {
     let obj = {value:num};
     return obj;
});

// console.log(item)


// same code can be wrriten like this also 
let items = d.filter(value=> value>=0).map(num=>{value:num})
console.log(item)
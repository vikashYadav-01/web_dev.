//  function --> A block of code which perform any given task

function run() {
//   console.log("this is a function");
}

run();

// hosting -> It is the process moving function declearation to the top of file , done by default by js engine.

// -----------------Function assignment----------------------

//  Named Function assignment -> Function name present

let stand = function walk() {
//   console.log("Named Function Assignment");
};

stand();

//  Anonymous Function assignment -> Function name not present

let stand1 = function () {
//   console.log("Anonymous Function Assignment");
};

stand1();

// Now walk function is assign to stand .
// we cant call walk function by walk().
// Function assignment cant work like hoisting -> function call before the declearation.



// -----------------Arguments-----------------------------
//  Arguments -> when we pass multipale value in function call , then argument show that all value.




function sum(a, b) {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}

let ans = sum(2, 3, 4, 4, 6, 7, 8);
// console.log(ans);







//--------------------Rest Operator ->(...)------------------------

// let we have many parameter in any function , then we can handle by all parameter by rest operators.

//  It return as a array. 
//  we cant give any parameter after rest(which is ...args) , rest parameter is the last parameter.

function sum(a,b, ...args){
     // console.log(args)
     // console.log(a)
     // console.log(b)
}

// sum(1,2,3,4,5,6,7,8,9)



// --------------------------Default------------------------

//  In this function if we have not pass any value in function call parameter
// then it take from default vaule(r= 5 , y=1), if you have set r as a default value
//  then you have to declear a default value for all variable which come after that variable.
 

function interest (p ,r=5 ,y=1){
     return p*r*y/100;
}

// console.log(interest(100,4))






// ----------------------Gatters & Setters

// gatter -> By this we can access the properties.
// setter -> By this we can change the properties.

let person = {
     fName: 'Love',
     lName: 'Babbar',
     get fullName(){
          return `${person.fName} ${person.lName}`
     },

     set fullName(value){
          let parts = value.split(' ')
          this.fName = parts[0]
          this.lName = parts[1]


     }
}
person.fullName = 'Rahul kumar'
// console.log(person.fullName)




// -------------------Error Handing---------------------------

// there are two thing. 1. try 2.catch

// try -> if try block get some error the exicution goes to catch and show that custum msg that given by you.

// run the code if try have some error then it stor e in catch and show that custum error.

let a = "hellow"
let b = 9
try{
     console.log(a+c)
}
catch(e){
     console.log("c is not defined")
}




// --------------------------------Reduce Methode----------------------------------

//  Normal methode

let arr = [1,2,3,4,5,6]

let total = 0
for (const value of arr) {
     total = total+ value
     
}

console.log(total)


// Reduced methode

let sumtotal = arr.reduce((accumulator , currentValue)=> accumulator + currentValue ,0)
console.log(sumtotal)

//  0 is optional if we dont want to put 0 then code will not give any error.
//0 -> accumuletor's default value in first , if not given then it will take first index element in accumuletor.
 
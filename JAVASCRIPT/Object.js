 





// Object create (this is a object )

let ractange =  {
     length:89,
     breadth: 12,
     draw(){
          // console.log("This is the draw")
     }
}

// console.log("This is the bradth of the  given ranctange",ractange.breadth)
// console.log(ractange) // this is give the all detail in ra tange object    

// function

function sum(firstNum , lastNum){
     result = firstNum  + lastNum
     return result
}

// console.log(sum(12,12))





// Factory Function

function createRactangle(length,breadth){   
     return ractange =  {
          length:length,
          breadth: breadth,
          draw(){
               console.log("This is the draw")
          }
     }
     
     
}

//  Object Creation using factory function

let obj = createRactangle(1,2)
// console.log(obj)






// constructor function -> pascal Notation -> means name should be started with capital letter

function Ractangle(length , breadth ){
     this.length = length ;
     this.breadth = breadth ;
     this.draw = function (){
          console.log('drawing')
     }

}


// Object creation using constructor function

let ractangleObject = new Ractangle (3 ,5);

console.log('length = ', ractangleObject.length, 'breadth = ', ractangleObject.breadth)

ractangleObject.area = 15
// console.log(ractangleObject)

//  delete krne ke liye ye use hota hai .......

delete ractangleObject.area
console.log(ractangleObject)

// console.log(ractangleObject.constructor)






let Ractangle1 = new Function(
     'length' , 'breadth' , ` this.length = length ;
     this.breadth = breadth ;
     this.draw = function (){
     console.log('drawing')
}`)
console.log('New dimensions ' , new Ractangle1(5,6)) 






// Constructor flow chart

// ractangleObject -> Ractangle -> Function ( constructor ka constructor function hai by default.)


// 1. all Function are objects on JS because function have property and methodes like call , bind , apply.



// note :- 

// primative are copied by theit value 

// References are copied by their address and References
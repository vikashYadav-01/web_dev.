// ------------------------Windows----------------------------

// window --> it is a global object , created by browser and it repersents the browser window.
// DOM , BOM and core functionality lie under windows.

// -------------------------DOM-------------------------------

// DOM --> stands for document object model
// when we convert all code in JS object , called document and whole model is call document model

// -----------------------BOM--------------------------------
// stand for browser object model
//  it allows the js to communicate with browser other than conntent
// it can be location , history, etc.

// --------------------------DOM Exicution---------------------------------

// to access Element these are some way

// getElementById('idname') --> target by id
// getElementByClassName('className') --> target by class
// getElementByTagName('tag name , h1 h2, etc') ---> by tag name
// document.querySelector('.class/#Id / tagName')--> select single element

// --------These are some properties use to update html----------------
// 1. innerHTML --> get/set of an Element
// 2.outerHTML -->
// 3.textcontent
// 4.innerText

// ---------------------Adding New Element in html using Js-------------------

//  document.createElement('tagName') -> By this we can create new Element
//  if you want to add it iin any tag as a child --> parentClass.appendchild('name')

// let content = document.querySelector('content');
// let newContent = document.createElement('p')

// content.appendChild('newContent');

// -----------------------Create text-node-----------------------

// let myPara = document.createElement('p')
// myPara.text = "i am a new text"

// content.appendChild(myPara)

//  this will set always at the last position of parent.

// ---------------------------insertAdjecentHTML--------------------------

// this is use for desirable position for new text node.

// it exist 2 value
// 1.where -> location / position for new text-node -> beforebegin/afterbegin/beforeend/afterend.
// 2.what -> text/ content

// let content = document.getElementsByTagName('div')
// let newText = document.createElement('h2')
// newText.textContent = "abcd"
// content.insertAdjacentElement('beforeBegin' , newText)

// --------------------------delete----------------------------------

// let parent = document.querySelector("parentClass/parentId");
// let child = document.querySelector("childClass / childId");
// parent.removeChild(child);

// we cal also try this --> child.parent.removeChild(child)



// ---------------------------CSS-Styling using JS---------------------------------

// 1.by .styling
// 2.by .CSSText
// 3.by .setAttribute
// 4.by .className
// 5.by .classList
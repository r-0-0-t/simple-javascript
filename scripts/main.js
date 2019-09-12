// let myVar = document.querySelector('h1');
// myVar.onclick = function() {
//     myVar.textContent = "Hellow User!"
// }

// /* This is a javascript comment 
//  	with multiline text!*/
// alert(6+9);
// alert("Hello" + "World!");
// alert("hi" === "hi");

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

// function multiply(num1,num2) {
//   let result = num1 * num2;
//   return result;
// }

// alert(multiply(4,7));
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// JavaScript variables

var fullName = "RajKumer Gurung";
let address = "Kathmandu,Nepal";
const bloodGroup = "AB+";

console.log("fullName:", fullName);
console.log("Address:", address);
console.log("Blood Group:", bloodGroup);

// Data Types

let name = "Rajkumar";  //String
let age = 21;   //Number
let isStudent = true;  // Boolean
let hobbies = ["Coding", "Traveling", "Cooking"];  //Array

console.log(hobbies[0]);

let user = {
  name: "Rajkumar",
  age: "21",
  isStudent: true,
  hobbies: ["Coding", "Traveling", "Cooking"],  
};  //object


console.log(user['name']);
console.log(user.name);

//functions
function greet(name){
    console.log('Welcome',name);
}

greet('Rajkumar');

// DOM Manipulation

const headingElementByID=document.getElementById('heading-2');
console.log('headingElement by id',headingElementByID);

const headingElementByQuery=document.querySelector('#heading-2');
console.log('heading element by query selector',headingElementByQuery);

headingElementByQuery.textContent='Get element by query selector';
headingElementByQuery.style.color='blue';

const buttonElement=document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
  alert('Button clicked!');
  console.log('Button clicked');
});
// Arrow function

const greet =(name) => {
console.log(`hello,${name}`);
};

greet('Rajkumar');

// Array method

const number =[10,20,40,60];

// push and pop
number.push(80);
number.push(100);
console.log(number);

number.pop();
console.log(number);

// Map,filter and reduce

const numberlist=[10,20,30,40,50];
const doublenumbers=numberlist.map((number)=>{
    return number *2;
});
console.log(doublenumbers);

const evennumberlist=numberlist.filter((number)=>{
    return number% 2===0;
});
console.log(evennumberlist);

const totalsum=numberlist.reduce((accumulator,currentvalue)=>{
    console.log(accumulator+currentvalue);
    return accumulator+currentvalue;
},0);

//console.log(totalsum);

// slice and spice

const fruits=['apple','banana','orange','mango'];
const slicedfruits=fruits.slice(1,3);
//console.log(slicedfruits);
fruits.splice(1,2,'grape','kiwi');
console.log(fruits);

// spread operator

const names=['Alice','Bob','Charlie'];
const newnames=[...names,'David','Eve'];
console.log(newnames);

const user={
    name:'Rajkumar',
    age:21,
    address:'kathmandu,Nepal',
};

const updateUser ={
    ...user,
    isStudent:false,
};

//console.log(updateUser);

// destructing
const[firstName,secondName]=newNames;
//console.log(firstName);
//console.log(secondName);

const{name,address}=updateUser;
console.log(name,address);
console.log("JavaScript Loaded");




Day_12 = {
  subject:" Terminal",
  topic:"Commands",
  id:123010,
  status:200
};






// let todo = [];
// let req = prompt("Please Enter Your Request:");

// while (true) {
//     if (req === "quit") {
//         console.log("Quitting App");
//         break;
//     }

//     if (req === "list") {
//         console.log("---------------------------");

//         for (let i = 0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }

//         console.log("---------------------------");
//     }

//     else if (req === "add") {
//         let task = prompt("Please Add Your Task");
//         todo.push(task);
//         console.log("Task Added");
//     }
//     else if(req === "delete"){
//         let idx = prompt("Please Enter the task index")
//         todo.splice(idx,1)
//     }
//     else{
//         console.log("Wrong Request");

//     }

//     req = prompt("Please Enter Your Request:").toLowerCase();
// }

// let Day_03 = {
//     name :"Javascript",
//     topic:"Number Guessing Game",
//     status:"200"
// };
// console.log(Day02)

//  let random = Math.floor(Math.random()*100) + 1;

//Guessing Game
// let number = prompt("Please Enter a Number from 1 to 10");
// const comp = Math.floor(Math.random()*10) + 1

// while(true){
//     if(number == "quit"){
//         break;
//     }

// if(number == comp){
//     console.log("You Guessed The Number that is ",comp);
//     break;
// }
// else if(comp<number){
//     console.log("You Entered Big Number Make it Small");
//     number = prompt("Opss! Please Try Again and Make it Small  ");

// }
// else if(comp>number){
//     console.log("You Entered small Number Make it big");
//     number = prompt("Opss! Please Try Again and Make it Big ");

// }

// }

// ! Function

// function hello() {
//   console.log("Hello");
// }
// hello();

// function dice(){
//     console.log(Math.floor(Math.random()*6)+1)
// }

// dice();
// dice();
// dice();
// dice();
// dice();
// dice();
// dice();

//?* Function With Argu

// function myName(name){
//     console.log(name);

// }

// myName(prompt("Please Enter Your Name :"))

//* Average of Three Number

// function avg( a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(`The Average of a ,b and c is ${avg}`);

// }

// avg(10,20,30);

//* Function For Multiplication table

// function multiTable(x) {
//   let res;
//   for (let i = 1; i <= 10; i++) {
//     res = i * x;
//     console.log(`${x} x ${i} = ${res}`);
//   }
// }

// multiTable(2);

//? Function With Return

// function sum(a, b) {
//   return a + b;
// }

// sum (sum(1,2),3);

//?  Function to cal sum of 1 to n

// function sumSpc(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// sumSpc(5);

//? Function That Concatinate The Entire Array

// let arr = ["hello", "Everyone","This","is","Pradip"];

// function conca(arr){
//     let result = "";
// for(let i = 0; i < arr.length; i++){
//     result += arr[i];
// }
// return result;

// }

//? This Keyword

// const std = {
//     name :"Pradip",
//     age: 19,
//     eng :95,
//     math :89,
//     phy:99,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);

//     }

// }

//? try and Catch

// try{
//     console.log(a);
// } catch(err){
//     console.log("Yarr a is Not Defined Broooo");
// }

// const sum = (a,b)=>{
// a+b;
// }

//? Set Time Out Function

// setTimeout(()=>{
// console.log("Hello js!");

// },5000);

//? SetInterval Function

// let id = setInterval(()=>{
// console.log("Hello js!");

// },3000);

// let id2 = setInterval(()=>{
// console.log("i am There");

// },4000);

//? this Keyword in Arrow Function

// const std = {
//   name: "Pradip",
//   age: 19,
//   mark: 95,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getmarks: () => {
//     console.log(this);
//     return this.name;
//   },
// };


// let hw = setInterval(()=>{
//     console.log("Hello World!");
    
// },2000);

// setTimeout(()=>{
// clearInterval(hw);
// },10000);



//? for_each 

//  let arr = [1,2,3,4,5];

//  function print(el){
//   console.log(el);
  
//  }



// arr.forEach(print);


// let std = [
//   {
//     name:"Pradip",
//     marks:98
//   },
//   {
//     name:"Pratap",
//     marks:92.04
//   },
//   {
//     name:"Punam",
//     marks:89.05
//   }
// ]

// arr.forEach((std)=>{
//   console.log(std.marks);
  
// })

// let num = [1,2,3,4,5];

// let double = num.map((el)=>{
//   return el*2;
  
// })

// let gpa = std.map((el)=>{
//   return el.marks /10;
// })


//? Filter 

// let arr = [1,2,3,4,5,6,7,8,9,];

// let even = arr.filter((el)=>{
//   return el % 2 == 0;
// })

// [1,2,3,4].reduce((res,el)=>{return res + el})

// let num = [1,2,3,4];

// let finalVal = num.reduce((res,el)=>{
//   console.log(res);
  
//   return res + el;
// })
// console.log(finalVal);


//? Maximum Element in an Array using reduce Method


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let max = arr.reduce((max,el)=>{
//   if(max<el){
//     return el;
//   }
//   else{
//     return max;
//   }
// })
// console.log(max);


// //? Multiple of 10 or Not


// let num = [10,20,10,20,120,30];

// let div = num.every((el)=>{
//   return el%10==0
// })



//? Default Parameter

// let fun = function(a,b=3){
//   return a+b;
// }



//? Sprade


// let nums = [1,2,3,4,5,6,7,8,9,0,4,5];

// Math.min(...arr);


//? Sprade with Array Literals

// let arr = [1,2,3,4,56,7];

// let newArr = [...arr];
// console.log(arr);
// console.log(newArr);



//? Sprade with Object Literals




// let data = {
//   name:"Pradip",
//   rollNo:40,
//   marks:98
// };

// let newData = {...data,id:234}

// console.log(data);
// console.log(newData);




//? Rest 



// let sum = function(...args){
//   for(let i = 0;i<args.length;i++){
//   console.log("You give us ",args[i]);
//   }
  
// }


// function sum(...args){
//   console.log(args);
//   return args.reduce((res,el)=>res+el);
  
// }



// function min(msg,...args){
// console.log(msg);
// return args.reduce((res,el)=>{
//   if(res>el){
//     return el
//   }
//   else{
//     return res;
//   }
// })

// }




//? Destructing in Array


// let arr = ["Pradip","Kumar","Shakti","Nandan"];

// let [winner,runnerup] = arr;

//? Destructing in Objects


// let std = {
//   name:"Pradip",
//   Branch:"CSE(AI)",
//   regd_no:2501432439,
//   subject:["DataTransfer","Development","Physics","Maths"],
//   username:"@pradip"
// };

// let{username,subject} = std;




//!_________________________----DOM----_________________________________



// console.dir(document.querySelector("div a"));




// let links = document.querySelectorAll(".box a");

// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "green";
// }

// for(link of links){
//     link.style.color = "green";
// }



//? Practice Question




let  para = document.createElement('p');
para.innerText = "Hey I'm Red";
document.querySelector('body').append(para)

para.classList.add('new');

let h3 = document.createElement('h3');
h3.innerText = "I'm a Blue h3!";
document.querySelector('body').append(h3)

h3.classList.add('h3_c');



let newDiv = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a Div";
para2.innerText  = "ME TOO!"

newDiv.append(h1);
newDiv.append(para2);
document.querySelector('body').append(newDiv);
newDiv.classList.add("newDiv");


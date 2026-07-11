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
let number = prompt("Please Enter a Number from 1 to 10");
const comp = Math.floor(Math.random()*10) + 1

while(true){
    if(number == "quit"){
        break;
    }

if(number == comp){
    console.log("You Guessed The Number that is ",comp);
    break;
}
else if(comp<number){
    console.log("You Entered Big Number Make it Small");
    number = prompt("Opss! Please Try Again and Make it Small  ");

}
else if(comp>number){
    console.log("You Entered small Number Make it big");
    number = prompt("Opss! Please Try Again and Make it Big ");

}




}

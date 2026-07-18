// let btn  = document.querySelectorAll('button');

// for(  btns of btn){

//    btns.addEventListener("click",sayName)
//    btns.addEventListener("click",sayHello)

        
//     }



//  function sayHello(){
//     alert("Hello Js!");
// }

// function sayName(){
//     alert("I am Pradip ");
// }


//! Random color generate


let btn = document.querySelector(".text-center");
let h3  = document.querySelector('h3');
let div = document.querySelector('.div');

btn.addEventListener("click",function(){
    console.log("Generate a Rendom colour");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    div.style.backgroundColor = randomColor;
    
})


function getRandomColor (){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    

    let color  =  `rgb(${red} , ${green} , ${blue})`
    return color;
}
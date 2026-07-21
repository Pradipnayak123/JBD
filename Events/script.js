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


// let btn = document.querySelector(".text-center");
// let h3  = document.querySelector('h3');
// let div = document.querySelector('.div');

// btn.addEventListener("click",function(){
//     console.log("Generate a Rendom colour");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     div.style.backgroundColor = randomColor;
    
// })


// function getRandomColor (){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
    

//     let color  =  `rgb(${red} , ${green} , ${blue})`
//     return color;
// }


//? Keybord Events


// let inp = document.querySelector("input");

// inp.addEventListener('keydown',function(){
//     console.log("You Entered Somthing");
    
// })

//  let form = document.querySelector("form")

//  form.addEventListener('submit',function(ev){
// ev.preventDefault();
// console.log("Form Submited");

//  })

//? tODO App

let inp  = document.querySelector('input');
let btn = document.querySelector("button");
let ul = document.querySelector('ul');


btn.addEventListener('click',function(ev){
    ev.preventDefault();
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
    ul.appendChild(item)
    inp.value = "";
    
});



ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        let ListItem = event.target.parentElement
        ListItem.remove();
        console.log("Deleted");
        
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener('click',function(){
//         delBtn.remove();
        
//     })
// }


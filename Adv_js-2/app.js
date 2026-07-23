 //! Async --------------------------------


//  async function greet(){
//     // abc.abc();
//     throw "404Page not Found"
//     return "Hello JS!";
//  }

//  greet()
//  .then((result)=>{
//     console.log("Promised was resolved");
//     console.log("Result was:",result);
    
    
//  })
//  .catch((err)=>{
//     console.log("Promise was Rejected",err);
    
//  })



//  let demo = async ()=>{
//     return "Hello js!"
//  };

 
//! Await ----------------------------------


// function getNum(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     let num = Math.floor(Math.random()*10)+1;
//     console.log(num);
//     resolve();
    
// },1000);
// })
// }

// async function demo(){
//     await getNum();
//    await getNum();
//     getNum();
// }





// h1 = document.querySelector("h1");



//   function changeColor(color, delay) {
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*5)+1;
//         if(num>3){
//             reject("Promise was rejected");
//         }
//         h1.style.color = color;
//         console.log(`Color Changed to ${color}` );
//         resolve("Color Changed");
//     },delay)
//   })
// }

// async function demo(){
//     try{

    
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     await changeColor("orange",1000);
//     await changeColor("blue",1000);
// }
// catch(err){
// console.log("Error Caught :",err);


// }
//     let newNum = 10;
//     console.log(newNum);
//     console.log("New Number is :",newNum+2);
    
// }


//! APIs -------------------------------



// let response = `{
//     "name": "Adeel Solangi",
//     "language": "Sindhi",
//     "id": "V59OF92YF627HFY0",
//     "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
//     "version": 6.1
// }`;

// let validRes = JSON.parse(response);

// console.log(validRes);
// console.log(validRes.name);
  



// let url = "https://catfact.ninja/fact";

// // fetch(url)
// // .then((response)=>{
// //     console.log(response);
// //   return response.json()
    
    
// // })
// // .then((data)=>{
// //     console.log(data.fact);
// //     return fetch(url);
// // })
// // .then((response)=>{
// //    return response.json();
// // })
// // .then((data2)=>{
// //     console.log(data2.fact);
    
// // })
// // .catch((err)=>{
// //     console.log("Error:  ",err);
    
// // })
// async function getFact(){
//     try{
//     let res = await fetch(url);
//     let data =  await res.json();
//     console.log(data.fact);
//     }catch(err){
//         console.log(err);
        
//     }
//     console.log("Bye....................");
    
// }



//! Axios ----------------------------------------------------------------------



// let btn = document.querySelector('button');

// btn.addEventListener('click', async()=>{
//     let fact  = await getFact();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// let url = "https://catfact.ninja/fact";

// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(err){
//         console.log("Error --> ",err);
//         return "No Fact Found"
        
//     }
// }





//  let btn = document.querySelector('button');
//  let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener('click', async()=>{
//     let link  = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link)
// });




// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
        
//     } catch(err){
//         console.log("Error --> ",err);
//         return "Image Not Found"
        
//     }
// }



let btn = document.querySelector("button");
btn.addEventListener('click', async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    // let colleges = await getCollege(country);
    // console.log(colleges);
    
    let colArr = await getCollege(country);
    Show(colArr);
   
})

function Show(colArr){
    let list = document.querySelector("#list");
    list.innerText= "";
    for(col of colArr){
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
        
    }
}




let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(country){
    try{
        let res = await axios.get(url+country);
       return res.data;
        
    } catch(err){
        console.log("Error --> ",err);
        return [];
        
    }
}
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);

// }

// three();

//! Callback Hell

// h1 = document.querySelector("h1");

// setTimeout(()=>{
// h1.style.color = "red"
// },1000);

// setTimeout(()=>{
// h1.style.color = "orange"
// },2000);

// setTimeout(()=>{
// h1.style.color = "Green"
// },3000);

// setTimeout(()=>{
// h1.style.color = "blue"
// },4000);

// function changeColor(color, delay, changeNextColor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if(changeNextColor) changeNextColor();
//   }, delay);
// }

// //! Callback Nesting --> Callback Hell

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000,()=>{
//     changeColor("green" ,1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("pink",1000)
//         })
//     })
//   });
// });

// function savetoDb(data, resolve, reject) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     resolve();
//   } else {
//     reject();
//   }
// }

// savetoDb(
//   "pradip",
//   () => {
//     console.log(" Success - 1 : Data Saved Successfully data:");
//     savetoDb(
//       "BTech 3rd Sem",
//       () => {
//         console.log(" Success - 2 : Data was Saved");
//         savetoDb(
//           "CSE-AI",
//           () => {
//             console.log("Success - 3 Data was Saved");
//           },
//           () => {
//             console.log("Failure - 3 : Weak Connection Data Not Saved");
//           },
//         );
//       },
//       () => {
//         console.log("Failure - 1 : Weak Connection Data Not Saved");
//       },
//     );
//   },
//   () => {
//     console.log(" Failure -2 : Weak Collection. Data Not Saved");
//   },
// );

//! Promises -----------------------------------

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success : Data was Saved");
//     } else {
//       reject("Failure : Weak Connection!");
//     }
//   });
// }

// let request = savetoDb("Pradip");
// request
//   .then(() => {
//     console.log("Promise was resolved");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

// //? shorrhand

// savetoDb("Pradip")
//   .then(() => {
//     console.log("Promise was resolved");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

// //! Promise Chaining _____-------------------------------

// savetoDb("Pradip")
//   .then((result) => {
//     console.log("Data - 01 was Saved ",result);
//     return savetoDb("Btech");
   
//   })
//   .then((result)=>{
//     console.log("Data - 02 was Saved ",result);
//     return savetoDb("Cse - AI");

//   })
//   .then((result)=>{
//     console.log("Data - 03 was Saved ",result);

//   })
//   .catch((err) => {
//     console.log("Promise was rejected",err);
//   });




h1 = document.querySelector("h1");



  function changeColor(color, delay) {
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color = color
        resolve("Color Changed")
    },delay)
  })
}



// async function demo(){
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//    await  changeColor("orange",1000);
//     await changeColor("blue",1000);
// }

//! Callback Nesting --> Callback Hell

//  changeColor("red",1000)
//  .then(()=>{
//     console.log("Red Color Completely Changed");
//     return changeColor("green",1000)
    
//  })
//  .then(()=>{
//     console.log("Green Color Completely Changed");
//     return changeColor("orange",1000)
    
//  })
//  .then(()=>{
//     console.log("Orange Color Completely changed");
//     return changeColor("blue",1000)
    
//  })
//  .then(()=>{
//     console.log("Blue Color Completely Changed");
    
//  })
//  .catch(()=>{
//     console.log("Request Rejected!");
    
//  })

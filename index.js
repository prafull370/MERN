// function sum(a,b){
//     console.log(a+b) ;
// }

// function sub(a,b){
//     console.log(a-b);
// }

//     const name="Sahil"
// module.exports={ 
//     sum,
//     sub,
//     name,
//     };

// object destructure

// using figlet

// const figlet = require("figlet");
// figlet("hello Prafull",(err, data)=>{
//     console.log(data);
// })

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


/// sync await function

console.log("start")
async function getApi() {
    console.log("api calling");
    const pr = await fetch('https://api.github.com/users/deepak3440');
    console.log("making json")
    const data = await pr.json();
    console.log('::fetch data::');
}
getApi();
console.log("end")
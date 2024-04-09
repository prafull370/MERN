let arr=[2,5,7,];

// function printP(ele){
//     console.log(':',ele);
// }
// function printArray(arr){    
//     arr.forEach((a,b,c)=>{
//         console.log(a,b,c)
//     });
// }
// printArray(arr)


// function printPt(elem){
//     console.log("hello");
// }
 
// setTimeout(printPt,10000);

//syncromous

// console.log('GEC Start');

// function printPt(elem){
//         console.log("hello Start");
//         let ans=2+3;
//         console.log(ans);
//         console.log("hello End");
//  }

//  setTimeout(printPt,10000);

//  console.log('GEC End');

// Asynchronus

// function printPt(elem){
//         console.log("hello Start");
//         let ans=2+3;
//         console.log(ans);
//         console.log("hello End");
//  }
//  const btn =document.grtElementById('btn')
//  btn.addEventListener("click",printPt);

//API
// console.log('GEC Start');
 
//     const req =fetch("https://api.github.com/user/deepak3440");
//     console.log(req);
//     req.then(()=>console.log('Fetched'));
// console.log('GEC End');

console.log('GEC Start');

 fetch('https://dummyjson.com/products/1').then(res => res.json())
 .then((data)=>console.log(data))

// .then(json => console.log(json))
            
console.log('GEC End');

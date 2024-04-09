// // console.log("Hello")

// // setTimeout(()=>{
// //     console.log('time out..1')
// // },-10.5)
// // setTimeout(()=>{
// //     console.log('time out..2')
// // },2000)

// // console.log("End")

// // promises making by self

// // function createOrder(x,fn){
// //     console.log(x);
// //     setTimeout(()=>{fn(lik123)},1000);
// //     setTimeout(()=>{fn(lik123)},1000);
// // }

// // function makePayment(orderId){
// //     confirm.log(orderId)
// // }
// // createOrder('soap','makePAment')  // inversion of control

// // setTimeout(()=>{
// // console.log('first out')
// // },0)
// // const a = new Promise((resolve,reject)=>{
// //     if(true){    //logic
// //        setTimeout(()=>{
// //         resolve("some item out of stoke");
// //        },0)
// //     }
// //     else{
// //         reject();
// //     }
// // });
// // console.log(a);
// // a.then((res)=>{
// //     console.log(res);
// //     // window.alert("YOu are Good")
// // }).catch((err)=>{
// //     console.log(error);
// // })


// // setTimeout(()=>{
// //     console.log('I am  one')
// //     },0)

// //     setTimeout(()=>{
// //         console.log('done')
// //         },0)

// // setTimeout(()=>{
// //     console.log('promise completed',res)
// //     },0)

// //     setTimeout(()=>{
// //         console.log(' I am two')
// //         },0)


// //       maps function

// // const arr =[1,2,3,5]
// // const ans = arr.map(a=>a*2);
// // // console.log(ans)

// // const arr2=[1.24,2.2,10.25,5.25]
// // console.log=arr.map(a=>parseInt(a))
// // // filter function



// // const arr3=[1.24,2.2,10.25,5.25]
// //   a=arr.push(a=>10)
// // console.log(a)

// //  const country=[
// //     'delhi', 'mumbai','kolkata','delhi','bihar' ,'JM'
// // ]
// //     const a= country.filter((s)=>{
// //         if(s.includes('i')||s.includes('I')){
// //             return true;
// //         }
// //         else false;
// //     });
// //     console.log(a);


// const country=[
//     'delhi, India', 'mumbai-india','kolkata-India','delhi','bihar' ,'JM'
// ]
//     const a= country.filter((ns)=>{
//         const s=ns.toLowerCase();
//         if(s.includes('india')){
//             return true;
//         }
//     else false;
//     });
//  console.log(a);

// function

const arr = [1, 2, 3, 5, 6]
const a = arr.reduce((a, s, c, d) => {
   return a + s;

})
console.log(a, s, c, d);
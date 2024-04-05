// let a=newString("hello");
// let b="hello";
// if(a==b){
//     console.log("yes");
// }
// else{
//     console.log("n");
// }
// document write json formet

// {
//     "name"="Ajay";
//     "lastname"="singh"
// }

// let a="   ms  dhoni   singh";
// let newS=a.trim();
// console.log(newS);
// let arr=[1,2,3,4];
// arr=[1,2,2];
// arr.push[10];
// console.log(arr);
// // in java all thing is object
// // key define
// // type of array,null, is object
// const obj={
//     "name":"ajay",
//     "lastname":"Singh"
// }
// const array=[1,2,2];
// console.log(Array.isArray(obj))
// console.log(Array.isArray(array))

// function checkIfObject(x){
//     if(Array.isArray(x)){
//         console.log("No object")
//     }
//     else if(typeof(x)=="onject"){
//         console.log("Object")
//     }
// }
// //for loop,for in,for in -- HW
// for(let i=0;i<4;i++){
//     console.log(i)
// }
// const arr=['name']
// for(let i=0;i<4;i++){
//     console.log(i)
// }

/// DOM is api;

// Window

// window.console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)
// console.log(window.document)
// console.dir(window.document)
// console.dir(console)
// console.log(console)
// // Document
// define array and iterable

// const res=document.getElementByTagName('h3')
// console.log(res)
// const res=document.getElementById('t1')
// console.dir(res)
// const res = document.getElementById('ht1')
// console.log(res)

//selector

// const res = document.querySelectorAll('div>h3')
// console.log(res)
// const res=document.getElementById('ht1')
// res['innerHTML']="helloworld"
// console.log(res)


// can i change tagname ini java script
// make website in monday
// const res=document.getElementTag('ht1')
// res['innerHTML']="helloworld"
// console.log(res)
// const ne=document.createElement("h3")
// console.log(ne)
// ne.innerHTML="DYANAMIC test";
// console.log(ne)
// document.body.appendChild(ne)

// const ne=document.createElement("h3")
// ne.innerText="DYANAMIC test";
// // console.log(ne)
// const firstDiv=document.getElementsByTagName('div');
// firstDiv[0].appendChild(ne);
// // document.body.appendChild(ne)

// // for remove

// firstDiv[0].style.color()

// method of node

//remove child
// query selector is important-
// const res = document.querySelector('div');
// const c=document.querySelector('p:nth-of-type(2)');
// console.log(res);
// res.removeChild(c)

//Events-if we do any think is known as eventslike move mouse like touch keyboard

// function getInfo (e){
//     // const d= document.querySelector("div")
//     // d.append("my name is don");
//     console.log(e);
//     // e.target.class='abc'
//     e.target.style.backgroundColor='green'
//     e.target.style.color='red'
// }

//validation
// event deligation js HW

// const fname=(e)=>{
//     console.log(e.target.value)
// }

//submit form 


const submitForm = (e) => {
    e.preventDefault();
    const t = e.target
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;
            if (ty == 'checkbox' && t[i].checked) {
                resizeBy.hobbies.push(vl);
            }
            if (ty != 'checked') {
                res[nm] = vl;
            }
        }
    }
    console.log(ty, vl);
}
// higher order fuction, call back(start java script)
// validation show during  submit;

// make a form using js; in HW
function sum(a,b,fun){
    const ans =a+b;
    fun(ans);
}
function print(x){
    console.log()
}
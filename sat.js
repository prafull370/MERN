const parent = document.getElementsById(`root`);
const root=ReactDOM.createRoot(parent);
// const heading=document.getElement(`h1`)
// heading.innerText='hello JS'

// parent.appendChild(heading);
// const list=document.createElement('ul');
// const listItem1=document.createElement('li')
// listItem1.innerText='Item 1';
// const listItem2=document.createElement('li')
// listItem1.innerText='Item 2';

// list.appendChild(listItem1);
// list.appendChild(listItem2);
// parent.appendChild(list);

// console.log(React);



//    React uses

// const heading=React.createElement('h1',{},"Hello React");
// root.render(heading);

const list=React.createElement('ul',{},"Hello React");
const listItem1=React.createElement('li',{},"Item 1");
const listItem2=React.createElement('li',{},"Hello React");
console.log(heading)
root.render(listItem1);

// const fs=require('fs')
//  const data =fs.readFileSync('./read7.txt',{encoding:'utf8'});// utf 8 use
//  console.log(data);

 
// // console.log()/

// //buffer.js
// const b=new Buffer.from('abcdfsadf');
// console.log(b.toString());
// b.write('other');
// conso le.log(b.toString());

//file sync api

// const fs=require('fs');
// fs.writeFileSync('./logs.txt','10april');



// const fs = require('fs')l
// const data = fs.readFileSync('./read7.txt', { encoding: 'utf8' });// utf 8 use
// console.log("Start");
// console.log(data)
// console.log("End")


// promises sync api

// promise file sync
// console.log('Start');
// const fsPromises = require('fs/promises');
// const pr=fsPromises.readFile('./read7.txt', { encoding: 'utf8' })
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("End");


//call back sync api

// const fs = require('fs');
// fs.readFile('./read7.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data)
// })

//http module(mini project)

const http = require('http');
const fs = require('fs')

const data = fs.readFileSync('./data.json', 'utf8');
// console.log(data);
const dataObj = JSON.parse(data);
const products = dataObj.products;

const htmlTemplate = fs.readFileSync('./page.html', 'utf8');

const cardTemplate = fs.readFileSync('./card7.html', 'utf8');

const card1 = cardTemplate
.replace('Title', products[0].title)
.replace('Info', products[0].description);

const card2 = cardTemplate.replace('Title', 'Apple 15pro')
const allCard = products.map((elem) => {
    let newCard = cardTemplate;

    newCard = newCard.replace('Title', elem.title);
    newCard = newCard.replace('Title', elem.title);
    return newCard;
})

const allCardS = allCard.join(' ');
const page = htmlTemplate.replace('product-card', allCardS.join(''))
// const page="hello"
const app = http.createServer((req, res) => {
    console.log("Received")
    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html',
    })
    res.end(page)
})

app.listen(1400, () => {
    console.log('server started')
})
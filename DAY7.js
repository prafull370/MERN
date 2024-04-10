// const fs=require('fs')
//  const data =fs.readFileSync('./read7.txt',{encoding:'utf8'});// utf 8 use
//  console.log(data);
// // console.log()/

// //buffer.js
// const b=new Buffer.from('abcdfsadf');
// console.log(b.toString());
// b.write('other');
// console.log(b.toString());

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

//http module

const http = require('http');
const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<p>hello ji shoo</p>
</body>
</html>
`

const cardTemplate = `
<div class="product-card">
<h4>Title</h4>
<p> ifo</p>
</div>
`

const card1 = cardTemplate.replace('Title', 'Xiomi Note 10')
const page = htmlTemplate.replace('product-card',card1)
// const page="hello"
const app = http.createServer((req, res) => {
    console.log("Received")
    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html',
    })
    res.end(page)
})
// app.listen(1400);

app.listen(1400, () => {
    console.log('server started')
})


//http://localhost:1400
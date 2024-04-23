const http = require('http');
const fs = require('fs');

const data2 = fs.readFileSync('./data.json', 'utf-8');
const dataobj = JSON.parse(data2);
const products = dataobj.products;

// To show more information of Api link
console.log(data2);

const htmltemplate = `
<!DOCTYPE HTML>
<html lang='en'>
      <head>
      <style>
   .product_card{
      max-width:500px;
      margin:20px auto;
      border:5px dotted  black;
      border-style:dotted dashed;
      padding:16px;
      background-color:powderblue;
      font-style:italic;      
      background-image: url('-lepkrq127u-250.webp');
      
   }
   </style>
      </head>
      <body>
            _PRODUCT_CARD_
      </body>
</html>
`;

const cardtemplate = `
<div class="product_card">
    <h2>_title_</h2>
    <p>_info_</p>
    <img src="img1">
    <p width='10px'>Prize:price</p>
    <p width='10px'>Rating:rating</p>
    <button href="button">Click Me!</button>
</div>
`;

const allcard = products.map((elem) => {
    let newcard = cardtemplate
    newcard = newcard.replace('_title_', elem.title)
    newcard = newcard.replace('_info_', elem.description)
    newcard = newcard.replace('img1', elem.images[0])
    newcard = newcard.replace('price', elem.price)
    newcard = newcard.replace('rating', elem.rating)
    newcard = newcard.replace('anker', elem.clickme)

    return newcard;
});

const page = htmltemplate.replace('_PRODUCT_CARD_', allcard.join(''));

const app = http.createServer((req, res) => {
    console.log('Request received');
    console.log(req.url);
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end(page);
});

app.listen(1800, () => {
    console.log('Server started on port 1800');
});
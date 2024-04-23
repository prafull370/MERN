const fs = require("fs");
const http = require("http");
const url = require('url'); // Corrected the module import
const { parse } = require("path");
const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data).products;

const inputElement = `
<form action='/product'>
<input type="text" name="productName" placeholder="Enter product name">
<button type="submit">Search</button>
</form>
`;

const cartTemplate = `
<div class='product-cart'>
<h3 style="color:red; text-align:center;">$title$</h3>
<img src="$image$" alt='product-image'>
<a href="$link$">More info</a>
</div>
`;

let result = dataObj.map(item => {
    let temp = cartTemplate;
    temp = temp.replace('$title$', item.title);
    temp = temp.replace("$image$", item.images[0]);
    temp = temp.replace("$link$", `/product?id=${item.id}`);
    return temp;
}).join(' ');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(inputElement + result);
    } else if (pathname === '/product') {
        const id = query.id;
        const pName = query.productName;
        if (id !== undefined) {
            const item = dataObj.find(product => product.id === parseInt(id));
            if (item) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<div>
                    <h4>${item.title}</h4>
                    <img src="${item.images[0]}" >
                    <p>${item.description}</p>
                    <h5>Price: $${item.price}</h5>
                    </div>`);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h3>Product not found</h3>');
            }
        } else if (pName) {
            const matchingProducts = dataObj.filter(product =>
                product.title.toLowerCase().includes(pName.toLowerCase())
            );
            if (matchingProducts.length > 0) {
                const productsList = matchingProducts.map(product =>
                    `<li>${product.title}: $${product.price}</li>`
                ).join('');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h3>Search Results:</h3><ul>${productsList}</ul>`);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h3>No products found</h3>');
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('<h3>Error: Missing ID or product name</h3>');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(1900, () => {
    console.log("Server started on port 1900");
});

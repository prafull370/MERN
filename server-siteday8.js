const fs = require("fs");
const http = require("http");
const url = require('node:url');
const { parse } = require("path");
const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data).products;

const inputElement=`
<form action='/product'>
<input type="text" name="productName">
<button type="submit">Search</button>
</form>
`

const cartTemplate = `
<div class='product-cart'>
<h3 style="color:red" "text-align:center" >title</h3>
<img src="images" alt='product-image'>
<a href="$product_links$">More info</a>
</div>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cartTemplate;
    temp = temp.replace('title', dataObj[i].title);
    temp = temp.replace("images", dataObj[i].images[0]);
    temp = temp.replace("$product_links$", `/product?id=${i}`);
    result.push(temp);
}

result = result.join(' ');
const server = http.createServer((req, res) => {

    // const {pathname,query}=url.parse(req.url,true)
    const path = url.parse(req.url, true);

    const pathname = path.pathname
    
    // console.log(query)
    // const path=url.parse(parse)
    const q = path.query
    // console.log(pathname)
    if (pathname == '/home') {
        res.end(inputElement+result);

    }
    else if (pathname === '/product') {
        // res.end('Product Page')

        // const id = q.id;
        const pName=q.productName;
        // if(id){

        // }
         if(pName){
            res.end(pName);
        }
        else{
            res.end('<h3>Error..</h3>')
        }
        const item = dataObj[id]
        res.end(`<div>
                <h4>${item.title}</h4>
                <img style="background-color:green" src="${item.images[0]}" >
                <p>${item.description}</p>
                <h5 style="background-color:green">Prize:${item.price}</h5>
                </div>
                `)
    }
    else {

        res.end('404 Not Found');
    }
});
server.listen(1900,()=>{
    console.log("server started")
}) 
;

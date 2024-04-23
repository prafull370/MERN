// console.log("Hello");

const fs = require("fs")
const http = require("http");
const data = fs.readFileSync("./data.json", "utf-8")
const dataObj = JSON.parse(data).products;
// console.log(dataObj)

const cartTemplate = `
<div class='product-cart>
<h3>title</h3>
// <img src="$img_src$" alt='product-image'
</div>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp=cartTemplate;
    temp=temp.replace('title',dataObj[i].title)
    temp=temp.replace("$img_src$",dataObj[i].images[0])
    result.push(temp);
}

result = result.join(' ');
const server = http.createServer((req, res) => {
    res.end(result);
})


server.listen(1400,()=>{
    console.log("......................server started.......................")
}) 
;
const fsPromises = require('fs/promises')


const getAllProducts=(req, res) => {
    const data = fs.readFileSync('./data.json', "utf8")
    const arr = JSON.parse(data)

    res.json({
        status: 'success',
        results: arr.length,
        data: {
            products: arr
        }
    });
}

const addproduct= async (req, res) => {
    const data = req.body;

    if (!data.name || !data.price) {
        res.status(400);
        res.json({
            status: "fail",
            message: "Name or price is missing",
        });
        return;
    }

    const db = await fs.readFile("./data.json", "utf8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        newProduct.id = 1;
    }
    else {
        newProduct.id = (arr[len - 1].id) + 1;
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));

    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct: newProduct,
        }
    });
}


module.exports={
    getAllProducts,
    addproduct
}
const express = require("express");
const fsPromises = require("fs/promises");
const productControllersDay10 = require(".productsControllersDay10");
const usersControllersDay10 = require(".usersControllersDay10");
const { get } = require("http");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    fsPromises.appendFile("log.txt", req.url + "\t" + time + '\n');
    next();
});

const productRouter = express.Router();
const userRouter = express.Router();

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);


//router ===============
productRouter.route("/")
    .get(productControllersDay10.getAllProducts)
    .post(productControllersDay10.addProduct);

productRouter.route("/:id")
    .put(productControllersDay10.replaceProduct)
    .delete(productControllersDay10.deleteProduct);

userRouter.route("/")
    .get(usersControllersDay10.getUser)
    .put(usersControllersDay10.replaceUser)
    .post(usersControllersDay10.addUser)
    .delete(usersControllersDay10.deleteUser);

// //----------------------------------------------------------------------------------
// app.route("/api/products")
// .get(productController.getAllProducts)
// .post(productController.addProduct);
// //----------------------------------------------------------------------------------

// app.route("/api/products/:id")
// .put(productController.replaceProduct)
// .delete(productController.deleteProduct);
// //----------------------------------------------------------------------------------

// app.route("/api/users")
//   .get(usersController.getUser) 
//   .put(usersController.replaceUser)
//   .post(usersController.addUser)
//   .delete(usersController.deleteUser);
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------

// app.get("/api/products", productController.getAllProducts);

// app.post("/api/products", productController.addProduct);

// app.put("/api/products/:id", productController.replaceProduct);

// app.delete("/api/products/:id", productController.deleteProduct );



// //----------------------------------------------------------------------------------
// app.get("/api/users", usersController.getUser);

// app.put("/api/users", usersController.replaceUser);

// app.post("/api/users", usersController.addUser);

// app.delete("/api/users", usersController.deleteUser);

//----------------------------------------------------------------------------------

app.listen(1400, () => {
    console.log("Server is running ");
});
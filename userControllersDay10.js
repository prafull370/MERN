const fsPromises = require('fs/promises')


const dlt=async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"));
    const newArr = arr.filter((elem) => elem.id !== parseInt(req.params.id));
    await fsPromises.writeFile("./data.json", JSON.stringify(newArr));
    res.sendStatus(204);
};

const put= async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"));
    const reqId = parseInt(req.params.id);
    const data = req.body;
    data.id = reqId;

    const newArr = arr.map((elem) => {
        if (elem.id === reqId) {
            return data;
        } else {
            return elem;
        }
    });

    await fsPromises.writeFile("./data.json", JSON.stringify(newArr));
    res.sendStatus(204);
};


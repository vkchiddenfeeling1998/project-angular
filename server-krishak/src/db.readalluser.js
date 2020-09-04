const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "Vaishnavi@123",
    database: "angularapp",
};

let readUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "select * from customer;"
    const results = await connection.queryAsync(sql);
    return results;
    await connection.endAsync();
};


module.exports = { readUser };
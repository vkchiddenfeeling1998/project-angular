const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
    host: "192.168.64.5",
    user: "mysql",
    password: "mysql",
    database: "mydb",
};

const addUser = async (input) => {
    const connection = mysql.createConnection(dbconfig);

    await connection.connectAsync();

    const sql =
        "INSERT INTO CUSTOMER (Name,Complaint,Contact) VALUES (?, ?, ?)";
    await connection.queryAsync(sql, [

        input.Name,
        input.Complaint,
        input.Contact,
    ]);

    await connection.endAsync();
};

module.exports = { addUser };
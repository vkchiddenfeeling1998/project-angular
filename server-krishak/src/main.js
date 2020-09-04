const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //parsing the request body of POST
app.use(cors()); // ajax request

const dbadd = require("./insert");
const dbread = require("./db.readalluser");



app.get("/", (req, res) => {
    res.send("Hello World");
});


app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;

        await dbadd.addUser(input);

        res.json({ message: "success" });
    } catch (err) {
        res.sendStatus(500);
    }
});
app.get("/alluser", async (req, res) => {
    try {
        const results = await dbread.readUser();

        res.json(results);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);
    }
});

app.listen(3000);
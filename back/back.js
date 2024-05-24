const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const {join} = require("path");
const {readFileSync} = require("fs");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/list-dessert', (req, res) => {
    const readBooks = readFileSync(join(__dirname, 'dessert.json'), 'utf8');
    res.json(JSON.parse(readBooks));
});

app.listen(port, () => {
    console.log(`Started: port[${port}]`);
});

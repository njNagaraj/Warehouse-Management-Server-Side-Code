const express = require("express");
const cors = require("cors");
const db = require("./db_config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/orders', (req, res) => {
    const query = 'SELECT * FROM order_table';
    db.query(query, (err, result) => {
        if(err) {
            console.log('There is a while retrieving data' + err);
            return;
        }
        res.json(result);
        console.log(res);
        console.log(result);
    })
});

app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
});
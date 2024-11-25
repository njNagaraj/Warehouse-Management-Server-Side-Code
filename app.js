const express = require("express");
const cors = require("cors");
const db = require("./db_config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/orders', (req, res) => {
    const query = 'SELECT * FROM order_table';
    db.query(query, (err, result) => {
        if (err) {
            console.log('Error retrieving data: ' + err);
            res.status(500).json({ error: 'There was an error retrieving data from the database' });
            return;
        }
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

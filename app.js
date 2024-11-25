const express = require("express");
const cors = require("cors");
const db = require("./db_config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/orders', (req, res) => {
    const query = 'SELECT * FROM order_table';
    db.query(query, (err, result) => {
        if (err) {
            console.error('Database Query Error: ', err.message);
            res.status(500).json({ error: err.message }); 
            return;
        }
        res.json(result);
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

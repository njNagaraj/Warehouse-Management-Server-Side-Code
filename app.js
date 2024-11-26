const express = require("express");
const cors = require("cors");
const db = require("./db_config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/orders/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM order_table WHERE warehouse_id = ?';
    db.query(query, [id], (err, result) => {
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

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded());
app.use(cors());

const orders = [];
app.get('/orders', (req, res) => res.status(200).send(orders));
app.post('/orders', (req, res) => {
    orders.push(req.body);
    res.status(200).send({success: true});
});

app.listen(3000, () => console.log('Running on port 3000.'));
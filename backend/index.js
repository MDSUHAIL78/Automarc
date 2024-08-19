const express = require('express');
const connectToMongo = require('./db');
const cors = require("cors");

connectToMongo();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/order'));

app.listen(8000, () => {
    console.log('listening on port 8000');
})


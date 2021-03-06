const express = require('express');
const app = express();
const cors = require('cors');


const connection = require('./configs/db');
const port = process.env.PORT || 3100;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/api/games', require('./routes/Game.routes'));
connection();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server app listening on port ${port}!`))
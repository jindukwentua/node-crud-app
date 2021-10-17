const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet')


const connection = require('./configs/db');
const port = process.env.PORT || 3100;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())

app.use(cors());

app.use('/api/games', require('./routes/Game.routes'));
connection();

app.get('/', (req, res) => res.send('Hello, welcome'))
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
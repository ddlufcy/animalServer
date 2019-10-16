require('dotenv').config();

const express = require('express');
const app = express();

const user = require('./controllers/user-controller');
const animal = require('./controllers/animal-controller')

const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
// app.use(bodyParser.json());
app.use(require('./middleware/headers'));


app.use('/user', user);
app.use('/animal', animal);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

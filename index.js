require('module-alias/register');

const express = require('express');

const app = express();
process.env.TZ = 'Asia/Calcutta'; //sometime in sequelized i faced time issues thats why i use this

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

app.use(cors());
dotenv.config();

require('./commons/dbconnection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
require('dotenv').config();

//root routes
//not used alliens for timing
const routes = require('./routes');
routes.loadRoutes(app);

//server connection
app.listen(port, () => {
  console.log('info', `server up and running on port ${port}`);
});

module.exports = app;

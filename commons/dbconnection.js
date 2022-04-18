const Sequelize = require('sequelize');
const config = require('../config/config');
console.log(config.development);
console.log('database is :', process.env.ENVIROMENT);
const sequelize = new Sequelize(
  config[process.env.ENVIROMENT].database,
  config[process.env.ENVIROMENT].username,
  config[process.env.ENVIROMENT].password,

  {
    logging: true,
    host: config[process.env.ENVIROMENT].host,
    dialect: config[process.env.ENVIROMENT].dialect,
    pool: {
      max: 50,
      min: 0,
      idle: 15000,
      acquire: 120000,
    },
  }
);

sequelize.authenticate().then((err) => {
  if (err) {
    console.log('Unable to connect to the database : ', err);
  } else {
    console.log(
      'Connection to the mysql Database is Established Successfully '
    );
  }
});

module.exports = sequelize;

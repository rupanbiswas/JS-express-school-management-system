const { errorHandler, notFound } = require('../middleware/errorHandler');
const glob = require('glob');
const path = require('path');

module.exports.loadRoutes = (app) => {
  glob
    .sync(`${__dirname}/${process.env.VERSION}/*.js`)
    .forEach(function (file) {
      app.use('/api/' + process.env.VERSION + '/', require(path.resolve(file)));
    });
  app.use(errorHandler);
  app.use(notFound);
};

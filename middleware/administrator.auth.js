const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const user = require('../database/models/user_details');

const studentAuth = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const id = decoded.id.split('&')[0];
      const password = decoded.id.split('&')[1];
      const userInfo = await user
        .findOne({ where: [{ password }, { id }] })
        .catch((err) => {
          res.status(500).json({ err });
        });
      if (userInfo.role_id === 1) {
        req.user = userInfo.dataValues;
        next();
      } else {
        res.status(401);
        throw new Error('Not Authorised,not student');
      }
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorised,token failed');
    }
  }

  if (!token) {
    res.status(403);
    throw new Error('not authorized,no token');
  }
});

module.exports = studentAuth;

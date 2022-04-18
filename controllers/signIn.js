const expressAsyncHandler = require('express-async-handler');
const { userDao } = require('@DAO/user.dao.js');
const generateToken = require('../utils/tokenGenerator');
module.exports.user = expressAsyncHandler(async (req, res) => {
  const { phone_number, password } = req.body;
  if (
    isNaN(phone_number) !== false ||
    isNaN(password) !== true ||
    password.length < 4
  ) {
    console.log('here');
    res.status(400);
    throw new Error('phone number is not number or invalid password');
  }
  try {
    const [result, error] = await userDao.logIn(phone_number, password);
    console.log(result.dataValues);
    if (result) {
      const token = await generateToken(result.id + '&' + result.password);
      console.log(token);
      if (token) {
        result.dataValues.auth_token = token;
        res.status(200).json(result);
      }
    } else {
      console.log('here');
      res.status(404);
      throw new Error(error);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

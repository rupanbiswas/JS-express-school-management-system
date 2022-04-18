const user = require('../models/user_details');

module.exports.userDao = {
  logIn: async (phone_number, password) => {
    try {
      const result = await user.findOne({
        where: [{ phone_number }, { password }],
      });
      return [result, ''];
    } catch (error) {
      return ['', error];
    }
  },
};

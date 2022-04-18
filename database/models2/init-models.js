var DataTypes = require("sequelize").DataTypes;
var _courses = require("./courses");
var _roles = require("./roles");
var _sequelizemeta = require("./sequelizemeta");
var _student_has_courses = require("./student_has_courses");
var _user_details = require("./user_details");

function initModels(sequelize) {
  var courses = _courses(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var student_has_courses = _student_has_courses(sequelize, DataTypes);
  var user_details = _user_details(sequelize, DataTypes);


  return {
    courses,
    roles,
    sequelizemeta,
    student_has_courses,
    user_details,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

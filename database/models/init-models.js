var DataTypes = require("sequelize").DataTypes;
var _courses = require("./courses");
var _roles = require("./roles");
var _sequelizemeta = require("./sequelizemeta");
var _student_details = require("./student_details");
var _student_has_courses = require("./student_has_courses");

function initModels(sequelize) {
  var courses = _courses(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var student_details = _student_details(sequelize, DataTypes);
  var student_has_courses = _student_has_courses(sequelize, DataTypes);


  return {
    courses,
    roles,
    sequelizemeta,
    student_details,
    student_has_courses,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

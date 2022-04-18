const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'student_has_courses',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    student_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    course_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    enrolled_on: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'student_has_courses',
    timestamps: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
    ],
  }
);

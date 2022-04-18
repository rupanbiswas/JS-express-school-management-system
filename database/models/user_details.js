const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'user_details',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    class: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    roll_no: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'user_details',
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

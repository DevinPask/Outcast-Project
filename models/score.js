const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Score extends Model {}

Score.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1200
      },
      uname: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "-"
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'score',
      createdAt: false,
      updatedAt: false
    }
  );
  
  module.exports = Score;
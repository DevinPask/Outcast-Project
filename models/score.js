const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1200
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
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
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Question extends Model {}

Question.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cat_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      correct_answer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      answer1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      answer2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      answer3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      answer4: {
        type: DataTypes.STRING,
        allowNull: false
      }
  
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'question',
      createdAt: false,
      updatedAt: false
    }
  );
  
  module.exports = Question;
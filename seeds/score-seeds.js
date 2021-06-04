const sequelize = require('../config/connection');
const { Score, User } = require('../models');

const scoredata = [
    {
      user_id: 1,
      score: 10
    },
    {
        user_id: 2,
        score: 15
    },
    {
        user_id: 3,
        score: 20
    },
    {
        user_id: 4,
        score: 30
    },
    {
        user_id: 5,
        score: 65
    },
    {
        user_id: 6,
        score: 45
    },
    {
        user_id: 7,
        score: 30
    },
    {
        user_id: 8,
        score: 20
    },
    {
        user_id: 9,
        score: 55
    },
    {
        user_id: 10,
        score: 5
    }
  ];
  
  const seedScores = () => Score.bulkCreate(scoredata, {individualHooks: true});
  
  module.exports = seedScores;
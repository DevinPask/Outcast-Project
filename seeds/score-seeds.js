const sequelize = require('../config/connection');
const { Score, User } = require('../models');

const scoredata = [
    {
      user_id: 1,
      score: 1200
    },
    {
        user_id: 2,
        score: 1100
    },
    {
        user_id: 3,
        score: 1400
    },
    {
        user_id: 4,
        score: 1000
    },
    {
        user_id: 5,
        score: 2200
    },
    {
        user_id: 6,
        score: 5000
    },
    {
        user_id: 7,
        score: 1700
    },
    {
        user_id: 8,
        score: 1800
    },
    {
        user_id: 9,
        score: 3500
    },
    {
        user_id: 10,
        score: 2600
    }
  ];
  
  const seedScores = () => Score.bulkCreate(scoredata, {individualHooks: true});
  
  module.exports = seedScores;
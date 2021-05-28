const Question = require("./question");
const Score = require('./score');
const User = require('./User');


// create associations
User.hasMany(Score, {
    foreignKey: 'user_id'
  });

Score.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { Question, Score, User };

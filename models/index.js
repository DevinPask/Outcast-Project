/*
lines (6 sloc)  156 Bytes
  
const Question = require('./question');

// // create associations
// User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

module.exports = { Question };
*/

const User = require('./User');
const Question = require("./question");
const Score = require('./score')

// create associations
User.hasMany(Score, {
    foreignKey: 'user_id'
  });

Score.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Question, Score };

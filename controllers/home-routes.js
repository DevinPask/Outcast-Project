const router = require('express').Router();
const sequelize = require('../config/connection');
const { Question, User, Score, } = require('../models');
const { findAll } = require('../models/question');
const withAuth = require('../utils/auth');

// Login
router.get('/login', (req, res) => {
  res.render('login')
})

// BOX OFFICE "/" - HOMEPAGE
router.get('/', (req, res) => {
  console.log(req.session.loggedIn);
  res.render('box-office', {loggedIn: req.session.loggedIn})
})

// QUIZ
router.get('/quizpage', withAuth, (req, res) => {
  let category = req.query.category;
  let username = req.session.username;
  let user_id = req.session.user_id;
  console.log(category);
  console.log(req.session);
  res.render('quiz', {category, username, user_id, loggedIn: true})
})

// HIGH SCORES
router.get('/highscores', withAuth, (req, res) => {
  Score.findAll({
    attributes: ['score'],
    include: [{
      model: User,
      attributes: ['username']
    }]
  })
    .then(scoreData => {
      const scores = scoreData.map(score => score.get({ plain: true }));
      // score ranking
      scores.sort(function(a,b){return parseInt(b.score)-parseInt(a.score)});
      for (i=0; i<scores.length; i++) {
        scores[i].rank = i+1;
      }
      res.render('highscores', {scores});
    })
  
})

module.exports = router;






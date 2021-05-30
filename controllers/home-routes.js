const router = require('express').Router();
const sequelize = require('../config/connection');
const { Question, User, Score, } = require('../models');
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
  let username = 'ccamp';   // req.session.username
  console.log(category);
  res.render('quiz', {category, username, loggedIn: true})
})

// HIGH SCORES
router.get('/highscores', withAuth, (req, res) => {
  res.render('highscores')
})

module.exports = router;






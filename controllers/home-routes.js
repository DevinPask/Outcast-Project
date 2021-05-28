const router = require('express').Router();
const sequelize = require('../config/connection');
const { Question, User, Score, } = require('../models');
// const withAuth = require('../utils/auth');

// Login
router.get('/login', (req, res) => {
  res.render('login')
})

// BOX OFFICE "/" - HOMEPAGE
router.get('/', (req, res) => {
  res.render('box-office')
})

// QUIZ
router.get('/quizpage', (req, res) => {
  res.render('quiz')
})

// HIGH SCORES
router.get('/highscores', (req, res) => {
  res.render('highscores')
})

module.exports = router;






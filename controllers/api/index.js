const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const scoreRoutes = require('./score-routes');
const questionRoutes = require('./question-routes');
const quizRoutes = require('./quiz-routes');

router.use('/users', userRoutes);
router.use('/score', scoreRoutes);
router.use('/questions', questionRoutes);
router.use('/quiz', questionRoutes)
module.exports = router;

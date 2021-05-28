const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const scoreRoutes = require('./score-routes');
const questionRoutes = require('./question-routes');

router.use('/users', userRoutes);
router.use('/score', scoreRoutes);
router.use('/questions', questionRoutes);
module.exports = router;

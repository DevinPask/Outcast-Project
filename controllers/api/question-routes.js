const router = require('express').Router();
const { Question } = require('../../models');

router.get('/', (req, res) => {
  Question.findAll({
    // attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4']
  })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Romance', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4'],
    where: { category: 'Romance' },
  },
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Horror', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4'],
    where: { category: 'Horror' },
  },
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Action', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4'],
    where: { category: 'Action' },
  },
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Comedy', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4'],
    where: { category: 'Comedy' },
  },

  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Fantasy/Sci-Fi', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4'],
    where: { category: 'Fantasy/Sci-Fi' },
  },

  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    cat_number: req.body.cat_number,
    category: req.body.category,
    question: req.body.question,
    correct_answer: req.body.correct_answer,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
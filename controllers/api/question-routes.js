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

router.get('/romance', (req, res) => {
  Question.findAll({
  },
  {
    Where: {
      category: 'Romance'
    }
  }
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/horror', (req, res) => {
  Question.findAll({
  },
  {
    Where: {
      category: 'Horror'
    }
  }
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/action', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4']
  },
  {
    Where: {
      category: 'Action'
    }
  }
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/comedy', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4']
  },
  {
    Where: {
      category: 'Comedy'
    }
  }
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/Fantasy/Sci-Fi', (req, res) => {
  Question.findAll({
    attributes: ['id', 'cat_number', 'category', 'question', 'correct_answer', 'answer1', 'answer2', 'answer3', 'answer4']
  },
  {
    Where: {
      category: 'Fantasy/Sci-Fi'
    }
  }
  )
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
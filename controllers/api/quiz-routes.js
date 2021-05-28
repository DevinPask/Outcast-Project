const router = require('express').Router();
const { Question } = require('../../models');

router.get('/Romance', (req, res) => {
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
  
  router.get('/Horror', (req, res) => {
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
  
  router.get('/Action', (req, res) => {
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
  
  router.get('/Comedy', (req, res) => {
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
const router = require('express').Router();
const { Score, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Score.findAll({
      attributes: ['id', 'score' ],
      order: [['score', 'DESC']], 
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbScoreData => res.json(dbScoreData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Score.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'score'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbScoreData => {
        if (!dbScoreData) {
          res.status(404).json({ message: 'No score found with this id' });
          return;
        }
        res.json(dbScoreData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/final-score', (req, res) => {
    // expects {score: 1200 user_id: 1}
    Score.create({
      Score: req.body.Score,
      uname: req.body.username,
      id: req.body.id
    })
      .then(dbScoreData => res.json(dbScoreData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    Score.update(
      {
        score: req.body.score
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbScoreData => {
        if (!dbScoreData) {
          res.status(404).json({ message: 'No score found with this id' });
          return;
        }
        res.json(dbScoreData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    Score.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbScoreData => {
        if (!dbScoreData) {
          res.status(404).json({ message: 'No score found with this id' });
          return;
        }
        res.json(dbScoreData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
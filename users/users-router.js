const router = require('express').Router();
const Database = require('./users-model');

router.get('/', (req, res) => {
  Database.get()
  .then(users => {
    res.json(users);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;
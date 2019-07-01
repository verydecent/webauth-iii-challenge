const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Database = require('../users/users-model');

router.post('/register', (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "You are missing either or both of the following fields: username, password" });
  }
  else {
    let hashedPassword = bcrypt.hashSync(password, 14);
    password = hashedPassword;

    Database.add(req.body)
      .then(id => {
        res.status(200).json({ success: `User ${id} was added` });
      })
      .catch(err => {
        res.status(500).json({ error: "Server error" });
      });
  }
});

// router.post('/login', (req, res) => {

// });

module.exports = router;
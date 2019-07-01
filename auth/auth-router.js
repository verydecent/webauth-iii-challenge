const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Database = require('../users/users-model');

router.post('/register', (req, res) => {
  let user = req.body;
  let { username, password } = user;

  if (!username || !password) {
    res.status(400).json({ error: "You are missing either or both of the following fields: username, password" });
  }
  else {
    let hashedPassword = bcrypt.hashSync(password, 14);
    user.password = hashedPassword;

    Database.add(req.body)
      .then(id => {
        res.status(200).json({ success: `User ${id} was added` });
      })
      .catch(err => {
        res.status(500).json({ error: "Server error" });
      });
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Database.findBy(username)
    .then(user => {
      console.log("req pw - " , password);
      console.log("db pw - ", user.password);
      console.log(bcrypt.compareSync(password, user.password));
      if (bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ user, password })
      }
      else {
        res.status(400).json({ error: "Wrong password" });
      }
    })
    .catch(err =>{
      res.status(500).json({ error: "Error logging in" });
    });
});

module.exports = router;
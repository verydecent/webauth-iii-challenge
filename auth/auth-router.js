const router = require('express').Router();
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "You are missing either or both of the following fields: username, password" });
  }
  else {
    const hashedPassword = bcrypt.hashSync(password, 14);
    password = hashedPassword;
    console.log(password);

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

});

module.exports = router;
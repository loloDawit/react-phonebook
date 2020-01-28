const express = require('express');
const router = express.Router();

/**
 * @route             POST api/v1/users
 * @description       Register a user
 * @access            private
 */
router.post('/', (req, res) => {
  res.json({
    msg: 'Users Route'
  });
});

module.exports = router;

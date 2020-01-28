const express = require('express');
const router = express.Router();

/**
 * @route             GET api/v1/auth
 * @description       Authenticatea user
 * @access            private
 */
router.get('/', (req, res) => {
  res.json({
    msg: 'Users Route'
  });
});

module.exports = router;
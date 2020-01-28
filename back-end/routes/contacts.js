const express = require('express');
const router = express.Router();

/**
 * @route             POST api/v1/contacts
 * @description       Register a user
 */
router.post('/', (req, res) => {
  res.json({
    msg: 'Contacts Route'
  });
});

module.exports = router;

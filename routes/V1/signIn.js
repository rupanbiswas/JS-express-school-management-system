const express = require('express');
const router = express.Router();

const fileController = require('@controllers/signIn');

router.post('/login', fileController.user);
module.exports = router;

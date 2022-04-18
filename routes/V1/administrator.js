const express = require('express');
const router = express.Router();

const fileController = require('@controllers/administratorControl');
const administratorAuth = require('../../middleware/administrator.auth');

router.get(
  '/view-enrollment',
  administratorAuth,
  fileController.getEnrollments
);
router.put(
  '/edit-enrollment',
  administratorAuth,
  fileController.editEnrollments
);
module.exports = router;

const express = require('express');
const router = express.Router();

const fileController = require('@controllers/courses');
const studentAuth = require('../../middleware/student.auth');

router.get('/get-courses', fileController.getCourses);
router.post('/enroll-course', studentAuth, fileController.enrollCourse);
module.exports = router;

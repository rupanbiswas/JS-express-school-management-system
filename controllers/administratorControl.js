const expressAsyncHandler = require('express-async-handler');
const { enrollmentDao } = require('@DAO/administratorControl.dao');

module.exports.getEnrollments = expressAsyncHandler(async (req, res) => {
  try {
    const enrolments = await enrollmentDao.getEnrollments();
    res.status(200).json(enrolments);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports.editEnrollments = expressAsyncHandler(async (req, res) => {
  const { user_id, course_id } = req.body;
  try {
    const updateEnrollment = await enrollmentDao.updateEnrollment(
      user_id,
      course_id
    );
    const enrolments = await enrollmentDao.getEnrollments();

    res.status(201).json(enrolments);
  } catch (error) {
    res.status(400).json(error, 'failed');
  }
});

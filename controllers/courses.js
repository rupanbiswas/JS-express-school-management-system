const expressAsyncHandler = require('express-async-handler');
const { coursesDao } = require('@DAO/courses.dao.js');
module.exports.getCourses = expressAsyncHandler(async (req, res) => {
  try {
    const courses = await coursesDao.getCourse();
    if (courses) {
      res.status(200).json(courses);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports.enrollCourse = expressAsyncHandler(async (req, res) => {
  const { course_id } = req.body;
  try {
    const getCourseById = await coursesDao.getCourseById(course_id);
    const courseAlreadyBookedCheck = await coursesDao.bookCheck(
      req.user.id,
      course_id
    );
    console.log(courseAlreadyBookedCheck);
    if (courseAlreadyBookedCheck) {
      res.status(400).json({ alreadyBooked: true });
    }
    if (getCourseById.dataValues.number_of_sests_available > 0) {
      const bookSeat = await coursesDao.bookSeat(req.user.id, course_id);

      const decreaseSeatAvailablity = await coursesDao.decreaseSeatAvailablity(
        course_id,
        getCourseById.number_of_sests_available - 1
      );

      Promise.all([bookSeat, decreaseSeatAvailablity]).then(() => {
        res.status(201).json({ success: true });
      });
    } else {
      res.status(403).send('seats full');
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

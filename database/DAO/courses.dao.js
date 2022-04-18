const courses = require('../models/courses');
const studentHasCourses = require('../models/student_has_courses');

module.exports.coursesDao = {
  getCourse: async () => {
    try {
      const result = await courses.findAll({});
      return result;
    } catch (error) {
      return error;
    }
  },
  getCourseById: async (id) => {
    try {
      const result = await courses.findOne({ where: { id } });
      return result;
    } catch (error) {
      return error;
    }
  },
  bookSeat: async (user_id, course_id) => {
    try {
      const result = await studentHasCourses.create({
        student_id: user_id,
        course_id,
        enrolled_on: Date.now(),
        status: true,
      });
      return result;
    } catch (error) {
      return error;
    }
  },
  bookCheck: async (user_id, course_id) => {
    try {
      const result = await studentHasCourses.findOne({
        where: [{ student_id: user_id }, { course_id }],
      });
      return result;
    } catch (error) {}
  },
  decreaseSeatAvailablity: async (course_id, newValue) => {
    console.log('here');
    try {
      const result = await courses.update(
        {
          number_of_sests_available: newValue,
        },
        { where: { id: course_id } }
      );
      return result;
    } catch (error) {
      return error;
    }
  },
};

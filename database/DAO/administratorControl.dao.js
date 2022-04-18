const studentHasCourses = require('../models/student_has_courses');

module.exports.enrollmentDao = {
  getEnrollments: async () => {
    try {
      const result = await studentHasCourses.findAll({});
      return result;
    } catch (error) {
      return error;
    }
  },
  updateEnrollment: async (user_id, course_id) => {
    try {
      const result = await studentHasCourses.update(
        {
          status: false,
        },
        {
          where: [{ student_id: user_id, course_id }],
        }
      );
    } catch (error) {
      return error;
    }
  },
};

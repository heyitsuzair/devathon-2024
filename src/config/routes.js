const AUTH_PATH = "/auth/";
const COURSE_BASE_PATH = "/course";
const INSTRUCTOR_PATH = "/dashboard/instructor";

export default {
  // auth
  signUp: AUTH_PATH + "register",
  signIn: AUTH_PATH + "login",
  // app
  home: "/",
  // courses: {
  //   index: COURSES_BASE_PATH,
  //   indexWithCategory: (id) => `${COURSES_BASE_PATH}?category_id=${id}`,
  //   read: (id) => COURSES_BASE_PATH + `/${id}`,
  // },
  dashboard: {
    instructor: {
      index: INSTRUCTOR_PATH,
      addtext: INSTRUCTOR_PATH + "/test/add",
    },
  },
};

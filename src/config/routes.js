const AUTH_PATH = "/auth/";
const COURSE_BASE_PATH = "/course";
const ADMIN_PATH = "/dashboard/admin";
const INSTRUCTOR_PATH = 'dashboard/instructor'

export default {
  // auth
  signUp: AUTH_PATH + "register",
  signIn: AUTH_PATH + "login",
  // app
  home: "/",
  dashboard:{
    admin:{
      index:ADMIN_PATH,
      signin:ADMIN_PATH + '/signin',
      reviews:ADMIN_PATH + '/reviews',
      testApproval:ADMIN_PATH + '/test-approval',
    },
    instructor: {
      index: INSTRUCTOR_PATH,
      addtest: INSTRUCTOR_PATH + "/addtest",
    },
  }
};

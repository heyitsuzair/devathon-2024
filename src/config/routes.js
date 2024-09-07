const AUTH_PATH = "/auth/";
const TEST_BASE_PATH = "/test";
const INSTRUCTOR_PATH = "/dashboard/instructor";

export default {
  // auth
  signUp: AUTH_PATH + "register",
  signIn: AUTH_PATH + "login",
  // app
  home: "/",
  test: {
    index: TEST_BASE_PATH,
    indexWithCategory: (id) => `${TEST_BASE_PATH}?category_id=${id}`,
    read: (id) => TEST_BASE_PATH + `/${id}`,
  },
  dashboard: {
    instructor: {
      index: INSTRUCTOR_PATH,
      addtext: INSTRUCTOR_PATH + "/test/add",
    },
  },
};

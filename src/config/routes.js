const AUTH_PATH = "/auth/";
const TEST_BASE_PATH = "/test";
const INSTRUCTOR_PATH = "/dashboard/instructor";
const INSTRUCTOR_TEST_PATH = "/dashboard/instructor/test";
const ADMIN_PATH = "/dashboard/admin";

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
    admin: {
      index:ADMIN_PATH,
      signin:ADMIN_PATH + '/signin',
      reviews:ADMIN_PATH + '/reviews',
      testApproval:ADMIN_PATH + '/test-approval',
    },
    instructor: {
      index: INSTRUCTOR_PATH,
      test: {
        create: INSTRUCTOR_TEST_PATH + "/create",
      },
    },
  },
};

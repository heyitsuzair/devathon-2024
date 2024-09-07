"use server";

import { constants, publicFieldsForDB } from "@/config";
import { supabase } from "@/lib";
import { isInstructorLoggedIn } from "@/middlewares";
import { saveFile } from "@/utils";

async function createTest(data, instructor) {
  try {
    const { payload } = await saveFile(
      process.env.TESTS_IMAGE_PATH,
      data.tests.image
    );

    data.image = payload;
    data.instructor_id = instructor.id;
    const { data: dataTest, error: errorTest } = await supabase
      .from(constants.TABLES.TESTS)
      .insert(data.tests)
      .select("*")
      .single();

    if (errorTest) {
      console.log("Error Adding test:", errorTest);

      return {
        success: false,
        data: constants.ERROR[400],
      };
    }

    for (let i = 0; i < data.questions.length; i++) {
      const question = data.questions[i];
      question.test_id = dataTest.id;
      const { error: errorQuestion } = await supabase
        .from(constants.TABLES.QUESTIONS)
        .insert(question);

      if (errorQuestion) {
        console.log("Error Adding question:", errorQuestion);

        return {
          success: false,
          data: constants.ERROR[400],
        };
      }
    }
    // Return the token
    return {
      success: true,
      data: constants.SUCCESS.TEST_SAVED,
    };
  } catch ({ message }) {
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}
export default isInstructorLoggedIn(createTest);

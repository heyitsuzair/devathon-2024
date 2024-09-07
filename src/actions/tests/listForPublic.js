"use server";

import { constants, publicFieldsForDB } from "@/config";
import { supabase } from "@/lib";
import { isInstructorLoggedIn } from "@/middlewares";
import { saveFile } from "@/utils";

async function listForPublic(category) {
  try {
    const { data: dataTest, error: errorTest } = await supabase
      .from(constants.TABLES.TESTS)
      .select("*")
      .eq("category", category);

    if (errorTest) {
      console.log("Error fetching test:", errorTest);

      return {
        success: false,
        data: constants.ERROR[400],
      };
    }

    for (let i = 0; i < dataTest.length; i++) {
      const test = dataTest[i];

      const { data: dataQuestion, error: errorQuestion } = await supabase
        .from(constants.TABLES.QUESTIONS)
        .select("*")
        .eq("test_id", test.id);

      if (errorQuestion) {
        console.log("Error fetching test:", errorQuestion);

        return {
          success: false,
          data: constants.ERROR[400],
        };
      }
      dataTest[i].questions = dataQuestion;
    }

    // Return the token
    return {
      success: true,
      data: dataTest,
    };
  } catch ({ message }) {
    console.log({ message });
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}
export default listForPublic;

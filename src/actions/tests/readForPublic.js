"use server";

import { constants, publicFieldsForDB } from "@/config";
import { supabase } from "@/lib";

async function readForPublic(testID) {
  try {
    const { data: dataTest, error: errorTest } = await supabase
      .from(constants.TABLES.TESTS)
      .select("*")
      .eq("id", testID)
      .single();

    if (errorTest) {
      console.log("Error fetching test:", errorTest);

      return {
        success: false,
        data: constants.ERROR[400],
      };
    }

    const { data: dataQuestion, error: errorQuestion } = await supabase
      .from(constants.TABLES.QUESTIONS)
      .select("*")
      .eq("test_id", testID);

    if (errorQuestion) {
      console.log("Error Adding test:", errorQuestion);

      return {
        success: false,
        data: constants.ERROR[400],
      };
    }
    dataTest.questions = dataQuestion;

    console.log({ dataTest });

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
export default readForPublic;

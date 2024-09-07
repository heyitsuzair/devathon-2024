"use server";

import { constants } from "@/config";
import { supabase } from "@/lib";

async function getPendingTest() {
  try {
    const { data, error } = await supabase
    .from('tests')
    .select('*');

    
  } catch ({ message }) {
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}
export default isInstructorLoggedIn(createTest);

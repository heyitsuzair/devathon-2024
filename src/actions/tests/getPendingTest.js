"use server";

import { constants } from "@/config";
import { supabase } from "@/lib";

async function getPendingTest() {
  try {
    const { data, error } = await supabase
    .from('tests')
    .select('*');
    return data;
  } catch ({ message }) {
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}
export default getPendingTest;

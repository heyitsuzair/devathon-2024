"use server";

import { constants, publicFieldsForDB } from "@/config";
import { supabase } from "@/lib";

export default async function (data) {
  try {
    console.log("Adding.....");
    const { error } = await supabase
      .from(constants.TABLES.CONTACT_FORM)
      .insert({ name: "uzair" });

    if (error) {
      console.log("Error Adding Submission:", error);

      return {
        success: false,
        data: constants.ERROR[400],
      };
    }
    console.log({ error });
    // Return the token
    return {
      success: true,
      data: constants.SUCCESS.MESSAGE_SENT,
    };
  } catch ({ message }) {
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}

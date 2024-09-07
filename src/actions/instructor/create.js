"use server";

import { constants, publicFieldsForDB } from "@/config";
import { supabase } from "@/lib";
import { isInstructorEmailUnique } from "@/middlewares";
import { handleError, handleSuccess } from "@/utils";
import bcrypt from "bcryptjs";

async function createInstructor(data) {
  try {
    // Generate salt
    const genSalt = await bcrypt.genSalt(10);

    // Hash password (await it)
    data.password = await bcrypt.hash(data.password, genSalt);

    // Insert into the instructors table
    const { error } = await supabase
      .from(constants.TABLES.INSTRUCTORS)
      .insert(data);

    if (error) {
      console.log("Error Adding Instructor:", error);
      return handleError(400);
    }

    // Return success message
    return handleSuccess("ACCOUNT_CREATED");
  } catch (error) {
    // Handle any errors that occurred
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}

export default isInstructorEmailUnique(createInstructor);

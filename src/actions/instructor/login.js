"use server";

import { constants } from "@/config";

import { doesInstructorExists } from "@/middlewares";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function loginInstructor(data) {
  try {
    // Check if the password matches
    const passwordMatch = await bcryptjs.compare(
      data.password,
      data.instructor.password
    );
    if (!passwordMatch) {
      return {
        success: false,
        data: constants.ERROR.BAD_CREDENTIALS,
      };
    }

    if (data.instructor.status === "pending") {
      return {
        success: false,
        data: constants.ERROR.ACCOUNT_UNDER_APPROVAL,
      };
    }

    delete data.instructor.password;

    const payload = { ...data.instructor, role: constants.ROLES.INSTRUCTOR };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    cookies().set(constants.COOKIES.AUTH, token);

    return {
      success: true,
      data: constants.SUCCESS.LOGIN,
      payload,
    };
  } catch ({ message }) {
    console.log(message);
    return {
      success: false,
      data: constants.ERROR[500],
    };
  }
}
export default doesInstructorExists(loginInstructor);

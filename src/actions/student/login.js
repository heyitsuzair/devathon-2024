"use server";

import { constants } from "@/config";

import { doesInstructorExists, doesStudentExists } from "@/middlewares";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function loginStudent(data) {
  try {
    // Check if the password matches
    const passwordMatch = await bcryptjs.compare(
      data.password,
      data.student.password
    );
    if (!passwordMatch) {
      return {
        success: false,
        data: constants.ERROR.BAD_CREDENTIALS,
      };
    }

    delete data.student.password;

    const payload = { ...data.student, role: constants.ROLES.STUDENT };
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
export default doesStudentExists(loginStudent);

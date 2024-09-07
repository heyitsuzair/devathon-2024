"use server";

import { constants } from "@/config";

import {
  doesAdminExists,
  doesInstructorExists,
  doesStudentExists,
} from "@/middlewares";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function loginAdmin(data) {
  try {
    console.log("Password:", data.password);
    console.log(data.admin.password);

    // Check if the password matches
    const passwordMatch = await bcryptjs.compare(
      data.password,
      data.admin.password
    );
    if (!passwordMatch) {
      return {
        success: false,
        data: constants.ERROR.BAD_CREDENTIALS,
      };
    }

    delete data.admin.password;

    const payload = { ...data.admin, role: constants.ROLES.ADMIN };
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
export default doesAdminExists(loginAdmin);

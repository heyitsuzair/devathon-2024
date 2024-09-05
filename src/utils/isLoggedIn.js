"use server";

import { constants } from "@/config";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (returnDetails = false) => {
  const token = cookies().get(constants.COOKIES.AUTH);

  if (!token) return;
  if (!returnDetails) return token;
  else {
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const decodedToken = await jwtVerify(token?.value, secretKey);
    return decodedToken?.payload;
  }
};

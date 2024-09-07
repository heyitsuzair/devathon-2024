import { constants, routes } from "@/config";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

export default function (handler) {
  return async (data) => {
    const token = cookies().get(constants.COOKIES.AUTH);

    if (!token) return redirect(routes.home);
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const decodedToken = await jwtVerify(token?.value, secretKey);

    if (decodedToken.payload.role !== constants.ROLES.INSTRUCTOR)
      return redirect(routes.home);

    // Proceed with the handler if the user is logged in
    return handler(data, decodedToken?.payload);
  };
}

"use server";

import { constants } from "@/config";

import { cookies } from "next/headers";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
  cookies().delete(constants.COOKIES.AUTH);
}

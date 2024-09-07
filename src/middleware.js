import { NextResponse } from "next/server";
import { isLoggedIn } from "./utils";
import { constants, routes } from "./config";

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  // Exclude paths for static assets (e.g., CSS files)
  if (path.startsWith("/_next/") || path.startsWith("/static/")) {
    return NextResponse.next();
  }

  // If user is not logged in or logged in role is not dashboard and trying to dashboard dashboard, throw it to home
  if (
    path.includes("dashboard/instructor") &&
    (!(await isLoggedIn()) ||
      (await isLoggedIn(true)).role !== constants.ROLES.INSTRUCTOR)
  ) {
    return NextResponse.redirect(new URL(routes.home, req.url));
  }

  return NextResponse.next();
}

// Matcher Config
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - all items inside the public folder
     *    - images (public images)
     *    - next.svg (Next.js logo)
     *    - vercel.svg (Vercel logo)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg|uploads).*)",
  ],
  unstable_allowDynamic: [
    "/node_modules/@mui/utils/ponyfillGlobal/ponyfillGlobal.js",
    "/node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterUtils.js",
    "/node_modules/lodash/_root.js",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REGISTER_SUCCESS_PAGE_COOKIE } from "@/lib/constants";

export function middleware(request: NextRequest) {
  if (request.cookies.has(REGISTER_SUCCESS_PAGE_COOKIE)) {
    // check if the url id is same as cookie id, if not redirect to home
    const queryParams = request.nextUrl.searchParams;
    const queryParamId = queryParams.get("id");
    const pageIdCookie = request.cookies.get(REGISTER_SUCCESS_PAGE_COOKIE);

    // console.log("[LOG] queryParamId : ", queryParamId);
    // console.log("[LOG] pageIdCookie.value : ", pageIdCookie?.value);

    if (queryParamId) {
      if (queryParamId === pageIdCookie?.value) {
        console.log("[LOG]: Legit '/register/success':  \n", queryParamId);

        return NextResponse.next();
      }
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/register/success",
};

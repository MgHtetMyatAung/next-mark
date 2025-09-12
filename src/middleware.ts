import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  // Define the protected routes
  const protectedRoutes = ["/dashboard", "/profile"];

  // Check if the current path is in the protected routes array
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If the route is protected and no token exists, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/sign-in", request.url);
    loginUrl.searchParams.set("from", request.nextUrl.pathname); // Optional: add a redirect back parameter
    return NextResponse.redirect(loginUrl);
  }

  // If the user is on the login/register page but already has a token, redirect to dashboard
  if (
    (request.nextUrl.pathname === "/sign-in" ||
      request.nextUrl.pathname === "/sign-up") &&
    token
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|register).*)"],
};

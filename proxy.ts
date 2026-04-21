import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PREVIEW_COOKIE_KEY } from "@/app/preview-auth-shared";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const previewPassword = process.env.SITE_PASSWORD;
  const hasPreviewCookie = request.cookies.get(PREVIEW_COOKIE_KEY)?.value === "1";

  if (!previewPassword) {
    return NextResponse.next();
  }

  if (pathname === "/preview" && hasPreviewCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const gatedPaths = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/our-work",
  ];

  const shouldGate =
    pathname === "/" ||
    gatedPaths.some((path) => path !== "/" && pathname.startsWith(path));

  if (shouldGate && !hasPreviewCookie) {
    return NextResponse.redirect(new URL("/preview", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/preview", "/home/:path*", "/about/:path*", "/services/:path*", "/contact/:path*", "/our-work/:path*"],
};

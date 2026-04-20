import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PREVIEW_COOKIE_KEY } from "@/app/preview-auth-shared";

export function proxy(request: NextRequest) {
  const previewPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD;

  if (!previewPassword) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
  }

  const hasPreviewCookie = request.cookies.get(PREVIEW_COOKIE_KEY)?.value === "1";

  if (request.nextUrl.pathname === "/" && hasPreviewCookie) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/home") && !hasPreviewCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home/:path*"],
};

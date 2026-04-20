"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PREVIEW_COOKIE_KEY } from "@/app/preview-auth-shared";

type UnlockState = {
  error: string | null;
};

export async function unlockPreview(
  _prevState: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const password = formData.get("password");
  const previewPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD;

  if (!previewPassword) {
    redirect("/home");
  }

  if (password !== previewPassword) {
    return { error: "Wrong password" };
  }

  const cookieStore = await cookies();
  cookieStore.set(PREVIEW_COOKIE_KEY, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/home");
}


"use server";

import { cookies } from "next/headers";

export default async function saveCedula(cedula: string) {
  const cookieStore = await cookies();
  cookieStore.set("cedula", cedula);
}
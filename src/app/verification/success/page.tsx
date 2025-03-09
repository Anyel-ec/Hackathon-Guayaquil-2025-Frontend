import { HACKATON_API_ENDPOINTS } from "@/lib/consts/endpoints/hackaton_api";
import ScoreBuro from "@/lib/models/score-buro";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function BuroScore() {
  const cookieStore: ReadonlyRequestCookies = await cookies();
  const cedula: RequestCookie | undefined = cookieStore.get("cedula");

  const res: Response = await fetch(
    `${HACKATON_API_ENDPOINTS.GET_SCORE_BURO}?cedula=${cedula?.value}`,
    {
      headers: { "HCK-API-Key": process.env.HACKATON_API_KEY || "" },
    }
  );

  const responseBody: ScoreBuro[] = await res.json();

  if (responseBody.length === 0) {
    return redirect("/");
  }

  const score: number = responseBody[0].score;

  if (score >= parseInt(process.env.BURO_SCORE_THRESHOLD || "1000")) {
    return redirect("https://apps.bancoguayaquil.com/personas/creditos/login");
  }

  return redirect("/evaluator");
}

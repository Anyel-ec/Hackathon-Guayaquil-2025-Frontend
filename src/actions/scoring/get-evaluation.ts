export default async function getEvaluation(endpoint: string, id: number) {
  const res: Response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody = await res.json();

  return responseBody;
}

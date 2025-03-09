export default async function getEvaluation(endpoint: string) {
  const res: Response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1020,
    }),
  });

  const responseBody = await res.json();

  return responseBody;
}

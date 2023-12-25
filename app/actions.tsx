// app/actions.ts

import { ResumeDocument } from "./models";

export async function getResumes(): Promise<ResumeDocument[]> {
  const res = await fetch(`${process.env.API_URL}/resumes/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export async function deleteCard(id: string) {
  try {
    await fetch(`${process.env.API_URL}/resumes/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    console.log("Card deleted");
  } catch (err) {
    console.error(err);
  }
}

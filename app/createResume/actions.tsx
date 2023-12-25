// app/actions.ts
"use server";

import { Resume, Education } from "../models";

export async function postResume(resumeData: Resume) {
  const response = await fetch(`${process.env.API_URL}/resumes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resumeData),
  });
  return response.json();
}

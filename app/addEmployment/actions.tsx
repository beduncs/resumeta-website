"use server";

import { Employment, ResumeDocument } from "../models";

export async function addEmployment(resumeId: string, employmentId: string) {
  const response = await fetch(
    `${process.env.API_URL}/resumes/${resumeId}/employment/${employmentId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

export async function getResumeIDs(): Promise<string[]> {
  const res = await fetch(`${process.env.API_URL}/resumes/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();

  const ids = data.map((resume: ResumeDocument) => resume._id);

  return ids;
}

export async function getEmploymentIDs(): Promise<string[]> {
  const res = await fetch(`${process.env.API_URL}/employment/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();

  const ids = data.map((employment: Employment) => employment._id);
  console.log(ids);

  return ids;
}

"use server";

import { Education, ResumeDocument } from "../models";

export async function addEducation(resumeId: string, educationId: string) {
  const response = await fetch(
    `${process.env.API_URL}/resumes/${resumeId}/education/${educationId}`,
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

export async function getEducationIDs(): Promise<string[]> {
  const res = await fetch(`${process.env.API_URL}/education/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();

  const ids = data.map((education: Education) => education._id);
  console.log(ids);

  return ids;
}

"use server";

import { Education } from "../models";

export async function postEducation(educationData: Education) {
  const response = await fetch(`${process.env.API_URL}/education`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(educationData),
  });
  return response.json();
}

"use server";

import { Employment } from "../models";

export async function postEmployment(employmentData: Employment) {
  const response = await fetch(`${process.env.API_URL}/employment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employmentData),
  });
  return response.json();
}

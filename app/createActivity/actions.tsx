"use server";

import { Activity } from "../models";

export async function postActivity(activityData: Activity) {
  const response = await fetch(`${process.env.API_URL}/activity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activityData),
  });
  return response.json();
}

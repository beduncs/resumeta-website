"use server";

import { Activity, Education, Employment } from "../models";

export async function addEducationActivity(
  educationId: string,
  activityId: string
) {
  const response = await fetch(
    `${process.env.API_URL}/education/${educationId}/activities/${activityId}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

export async function addEmploymentActivity(
  employmendId: string,
  activityId: string
) {
  const response = await fetch(
    `${process.env.API_URL}/employment/${employmendId}/activity/${activityId}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
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

export async function getActivityIDs(): Promise<string[]> {
  const res = await fetch(`${process.env.API_URL}/activity/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();

  const ids = data.map((activity: Activity) => activity._id);
  console.log(ids);

  return ids;
}

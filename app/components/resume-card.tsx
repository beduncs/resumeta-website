"use client";

import {
  Education,
  ResumeDocument,
  User,
  Location,
  Employment,
  Activity,
} from "../models";
import React, { useState } from "react";
import { SubmitButton } from "./submit-button";
import { postEducation } from "../createEducation/actions";

// const CreateEducationForm = () => {
//   async function addEducation(formData: FormData) {
//     "use server";

//     const location = {
//       name: formData.get("institution"),
//     } as Location;

//     const education = {
//       degree: formData.get("degree"),
//       major: formData.get("major"),
//       institution: location,
//       start_date: formData.get("start_date"),
//       end_date: formData.get("end_date"),
//       minor: formData.get("minor"),
//       gpa: Number(formData.get("gpa")), // Convert 'gpa' to number
//     } as Education;

//     const res = await postEducation(education);
//     if (!res.ok) {
//       console.error(res);
//       return;
//     }
//   }
//   return (
//     <form action={addEducation} className="bg-gray-800 p-6 rounded-md">
//       <input
//         type="text"
//         name="degree"
//         placeholder="Degree"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <input
//         type="text"
//         name="major"
//         placeholder="Major"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <input
//         type="text"
//         name="institution"
//         placeholder="Institution"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <input
//         type="date"
//         name="start_date"
//         placeholder="Start Date"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <input
//         type="date"
//         name="end_date"
//         placeholder="End Date"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <input
//         type="text"
//         name="minor"
//         placeholder="Minor"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <input
//         type="number"
//         name="gpa"
//         placeholder="GPA"
//         className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
//       />
//       <SubmitButton />
//     </form>
//   );
// };

const UserCard = ({ user }: { user: User }) => {
  return (
    <p className="text-sm font-light text-gray-400 dark:text-gray-600">
      {user.first_name} {user.last_name}
    </p>
  );
};

const ActivitiesCard = ({ activities }: { activities: Activity[] }) => {
  return (
    <ul className="m-1 list-disc list-inside">
      {activities.map((activity) => (
        <li key={activity._id}>{activity.description}</li>
      ))}
    </ul>
  );
};

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {education.degree} in {education.major}
        </h5>
        {education.start_date && education.end_date ? (
          <DatesFormat
            start_date={education.start_date}
            end_date={education.end_date}
          />
        ) : (
          "No dates available"
        )}
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
      <p className="italic text-sm font-light text-gray-400 dark:text-gray-600">
        Minor in {education.minor}
      </p>
      <p className="text-sm font-light text-gray-400 dark:text-gray-600">
        {education.institution.name}
      </p>
      <p className="text-sm font-light text-gray-400 dark:text-gray-600">
        {education.gpa}
      </p>
      {education.activities ? (
        education.activities.map((activity) => (
          <div key={activity._id}>
            <p>{activity.description}</p>
          </div>
        ))
      ) : (
        <p>No activities information available.</p>
      )}
    </div>
  );
};

function FormatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

const DatesFormat = ({
  start_date,
  end_date,
}: {
  start_date: Date;
  end_date: Date;
}) => {
  start_date = new Date(start_date);
  end_date = new Date(end_date);
  return (
    <p className="text-sm font-light text-gray-400 dark:text-gray-600">
      {FormatDate(start_date)} - {FormatDate(end_date)}
    </p>
  );
};

const EmploymentCard = ({ employment }: { employment: Employment }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {employment.title}
        </h5>
        {employment.start_date && employment.end_date ? (
          <DatesFormat
            start_date={employment.start_date}
            end_date={employment.end_date}
          />
        ) : (
          "No dates available"
        )}
      </div>
      <p className="text-sm font-light text-gray-400 dark:text-gray-600">
        {employment.location.name}
      </p>
      {employment.activities ? (
        <ActivitiesCard activities={employment.activities} />
      ) : (
        <p>No activities information available.</p>
      )}
    </div>
  );
};

const ResumeCard = ({ resume }: { resume: ResumeDocument }) => {
  return (
    <div className="flex justify-center">
      <div className="m-3 max-w-screen-md w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {resume.name}
        </h5>
        <p className="text-sm font-light text-gray-400 dark:text-gray-600">
          {resume._id}
        </p>
        <UserCard user={resume.user} />
        <h1 className="text-2xl m-1 font-bold tracking-tight text-gray-900 dark:text-white">
          Employment
        </h1>
        {resume.employment ? (
          resume.employment.map((employment) => (
            <EmploymentCard key={employment._id} employment={employment} />
          ))
        ) : (
          <p>No employment information available.</p>
        )}
        <h1 className="text-2xl m-1 font-bold tracking-tight text-gray-900 dark:text-white">
          Education
        </h1>
        {resume.education ? (
          resume.education.map((education) => (
            <EducationCard key={education._id} education={education} />
          ))
        ) : (
          <p>No education information available.</p>
        )}
      </div>
    </div>
  );
};

export default ResumeCard;

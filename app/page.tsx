import { getResumes } from "./actions";
import { ResumeDocument } from "./models";
import React from "react";
import { revalidateTag } from "next/cache";
import ResumeCard from "./components/resume-card";

export default async function Page() {
  const resumes = await getResumes();

  return (
    <main>
      {resumes.map((resume: ResumeDocument) => (
        <ResumeCard key={resume._id} resume={resume} />
      ))}
    </main>
  );
}

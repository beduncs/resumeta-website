import { addEducation, getResumeIDs, getEducationIDs } from "./actions";
import { SubmitButton } from "../components/submit-button";
import { revalidateTag } from "next/cache";

export default async function Page() {
  async function addEducationForm(formData: FormData) {
    "use server";

    const rawFormData = {
      resumeID: String(formData.get("resumeId")),
      educationID: String(formData.get("educationId")),
    };

    const res = await addEducation(
      rawFormData.resumeID,
      rawFormData.educationID
    );

    // mutate data
    // revalidate cache
  }

  const resumeIDs = await getResumeIDs();
  const educationIDs = await getEducationIDs();

  return (
    <form action={addEducationForm} className="bg-gray-800 p-6 rounded-md">
      <select
        name="resumeId"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      >
        <option value="">Select Resume ID</option>
        {resumeIDs.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <select
        name="educationId"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      >
        <option value="">Select Education ID</option>
        {educationIDs.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <SubmitButton />
    </form>
  );
}

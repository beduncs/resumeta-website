import { addEmployment, getResumeIDs, getEmploymentIDs } from "./actions";
import { SubmitButton } from "../components/submit-button";

export default async function Page() {
  async function addEmploymentForm(formData: FormData) {
    "use server";

    const rawFormData = {
      resumeID: String(formData.get("resumeId")),
      employmentID: String(formData.get("employmentId")),
    };

    const res = await addEmployment(
      rawFormData.resumeID,
      rawFormData.employmentID
    );

    // mutate data
    // revalidate cache
  }

  const resumeIDs = await getResumeIDs();
  const employmnetIDs = await getEmploymentIDs();

  return (
    <form action={addEmploymentForm} className="bg-gray-800 p-6 rounded-md">
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
        name="employmentId"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      >
        <option value="">Select Employment ID</option>
        {employmnetIDs.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <SubmitButton />
    </form>
  );
}

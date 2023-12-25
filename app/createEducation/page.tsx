import { postEducation } from "./actions";
import { SubmitButton } from "../components/submit-button";
import { Education, Location } from "../models";

export default async function Page() {
  async function addEducation(formData: FormData) {
    "use server";

    const location = {
      name: formData.get("institution"),
    } as Location;

    const education = {
      degree: formData.get("degree"),
      major: formData.get("major"),
      institution: location,
      start_date: formData.get("start_date"),
      end_date: formData.get("end_date"),
      minor: formData.get("minor"),
      gpa: Number(formData.get("gpa")), // Convert 'gpa' to number
    } as Education;

    const res = await postEducation(education);
    if (!res.ok) {
      console.error(res);
      return;
    }
  }

  return (
    <form action={addEducation} className="bg-gray-800 p-6 rounded-md">
      <input
        type="text"
        name="degree"
        placeholder="Bachelor of Science (BS)"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="text"
        name="major"
        placeholder="Major"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="text"
        name="institution"
        placeholder="Institution"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="date"
        name="start_date"
        placeholder="Start Date"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="date"
        name="end_date"
        placeholder="End Date"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="text"
        name="minor"
        placeholder="Minor"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="number"
        name="gpa"
        placeholder="GPA"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <SubmitButton />
    </form>
  );
}

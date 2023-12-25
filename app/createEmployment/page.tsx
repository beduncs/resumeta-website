import { postEmployment } from "./actions";
import { SubmitButton } from "../components/submit-button";
import { Employment, Location } from "../models";

export default async function Page() {
  async function addEmployment(formData: FormData) {
    "use server";

    const location = {
      name: formData.get("company"),
    } as Location;

    const employment = {
      title: formData.get("title"),
      location: location,
      start_date: formData.get("start_date"),
      end_date: formData.get("end_date"),
    } as Employment;

    const res = await postEmployment(employment);
    if (!res.ok) {
      console.error(res);
      return;
    }
  }
  return (
    <form action={addEmployment} className="bg-gray-800 p-6 rounded-md">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
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
      <SubmitButton />
    </form>
  );
}

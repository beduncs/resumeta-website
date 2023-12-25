import { postResume } from "./actions";
import { Resume, User } from "../models";
import { SubmitButton } from "../components/submit-button";

export default async function Page() {
  async function addResume(formData: FormData) {
    "use server";

    const user = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
    } as User;

    const resume = {
      name: formData.get("name"),
      user: user,
    } as Resume;

    const res = await postResume(resume);
    if (!res.ok) {
      console.error(res);
      return;
    }
  }

  return (
    <form action={addResume} className="bg-gray-800 p-6 rounded-md">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <SubmitButton />
    </form>
  );
}

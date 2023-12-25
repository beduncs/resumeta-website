import { postActivity } from "./actions";
import { Activity } from "../models";
import { SubmitButton } from "../components/submit-button";

export default async function Page() {
  async function addActivity(formData: FormData) {
    "use server";

    const activity = {
      description: formData.get("description"),
    } as Activity;

    const res = await postActivity(activity);
    if (!res.ok) {
      console.error(res);
      return;
    }
  }

  return (
    <form action={addActivity} className="bg-gray-800 p-6 rounded-md">
      <input
        type="text"
        name="description"
        placeholder="description"
        className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
      />
      <SubmitButton />
    </form>
  );
}
